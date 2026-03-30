import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import WebSocket from 'ws';
import type { RawData } from 'ws';
import type { Match } from './interfaces/match.interface';
import type {
  OddspapiControlMessage,
  OddspapiWebSocketMessage,
  OddspapiSubscribeMessage,
} from './dto/oddspapi-message.dto';
import type {
  OddspapiFixturePayload,
  OddspapiFixturesPage,
} from './dto/oddspapi-fixture-payload.dto';
import type { OddspapiOddsPayload } from './dto/oddspapi-odds-payload.dto';
import { ProviderMapper } from './mappers/provider.mapper';

type ConnectionMode = 'websocket' | 'polling_fallback';
type ConnectionStatus = 'connected' | 'reconnecting' | 'disconnected';

export interface FeedConnectionStatus {
  mode: ConnectionMode;
  status: ConnectionStatus;
  reconnectAttempts: number;
  lastMessageAt: string | null;
}

const MAX_RECONNECT_DELAY_MS = 30_000;
const HEARTBEAT_INTERVAL_MS = 30_000;
const HEARTBEAT_TIMEOUT_MS = 5_000;
const FALLBACK_TRIGGER_ATTEMPTS = 2;
const POLLING_LIVE_INTERVAL_MS = 10_000;
const POLLING_PRE_MATCH_INTERVAL_MS = 60_000;
const RAW_DATA_TTL_MS = 5 * 60 * 1000;

@Injectable()
export class ProviderAdapterService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(ProviderAdapterService.name);

  private ws: WebSocket | null = null;
  private readonly matches = new Map<string, Match>();

  private reconnectAttempts = 0;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private heartbeatTimeout: NodeJS.Timeout | null = null;
  private pollingTimer: NodeJS.Timeout | null = null;

  private mode: ConnectionMode = 'websocket';
  private status: ConnectionStatus = 'disconnected';
  private lastMessageAt: Date | null = null;

  private readonly wsUrl: string;
  private readonly restUrl: string;
  private readonly apiKey: string;
  private readonly sportIds: number[];

  constructor() {
    this.wsUrl = process.env.ODDSPAPI_WS_URL ?? 'wss://v5.oddspapi.io/ws';
    this.restUrl = process.env.ODDSPAPI_REST_URL ?? 'https://v5.oddspapi.io';
    this.apiKey = process.env.ODDSPAPI_API_KEY ?? '';
    this.sportIds = (process.env.ODDSPAPI_SPORT_IDS ?? '1')
      .split(',')
      .map((s) => parseInt(s.trim(), 10));
  }

  onModuleInit(): void {
    if (!this.apiKey) {
      this.logger.warn('ODDSPAPI_API_KEY not set — provider adapter will not connect');
      return;
    }
    void this.connect();
  }

  onModuleDestroy(): void {
    this.cleanup();
  }

  getMatches(): Match[] {
    return Array.from(this.matches.values());
  }

  getMatch(externalId: string): Match | undefined {
    return this.matches.get(externalId);
  }

  getConnectionStatus(): FeedConnectionStatus {
    return {
      mode: this.mode,
      status: this.status,
      reconnectAttempts: this.reconnectAttempts,
      lastMessageAt: this.lastMessageAt?.toISOString() ?? null,
    };
  }

  private connect(): void {
    this.status = 'reconnecting';
    const url = `${this.wsUrl}?apiKey=${this.apiKey}`;

    try {
      this.ws = new WebSocket(url);
    } catch (err) {
      this.logger.error('Failed to instantiate WebSocket', err);
      this.scheduleReconnect();
      return;
    }

    this.ws.on('open', () => this.handleOpen());
    this.ws.on('message', (data) => this.handleMessage(data));
    this.ws.on('pong', () => this.handlePong());
    this.ws.on('error', (err) => this.handleError(err));
    this.ws.on('close', (code, reason) => this.handleClose(code, reason));
  }

  private handleOpen(): void {
    this.logger.log('WebSocket connected — sending subscribe');
    const msg: OddspapiSubscribeMessage = {
      type: 'login',
      apiKey: this.apiKey,
      subscribe: {
        channels: ['fixtures', 'odds'],
        sports: this.sportIds,
      },
    };
    const raw = JSON.stringify(msg);
    this.logger.debug(`Sending: ${raw}`);
    this.ws?.send(raw);
  }

  private handleMessage(raw: RawData): void {
    const text = Buffer.isBuffer(raw)
      ? raw.toString('utf8')
      : Buffer.from(raw as ArrayBuffer).toString('utf8');

    let data: unknown;
    try {
      data = JSON.parse(text) as unknown;
    } catch {
      this.logger.warn('Received unparseable WebSocket message');
      return;
    }

    this.lastMessageAt = new Date();
    this.logger.debug(`Received: ${text.slice(0, 300)}`);
    this.processMessage(data);
  }

  private processMessage(data: unknown): void {
    if (!data || typeof data !== 'object') return;
    const msg = data as Record<string, unknown>;

    if (typeof msg['type'] === 'string') {
      const control = data as OddspapiControlMessage;

      switch (control.type) {
        case 'login_ok':
          this.handleLoginOk();
          break;
        case 'snapshot_required':
          void this.fetchSnapshot();
          break;
        default:
          break;
      }
      return;
    }

    if (typeof msg['channel'] === 'string') {
      const wsMsg = data as OddspapiWebSocketMessage;
      switch (wsMsg.channel) {
        case 'fixtures':
          this.handleFixtureUpdate(wsMsg.payload as OddspapiFixturePayload);
          break;
        case 'odds':
          this.handleOddsUpdate(wsMsg.payload as OddspapiOddsPayload);
          break;
        default:
          break;
      }
    }
  }

  private handleLoginOk(): void {
    this.logger.log('Authenticated — WebSocket feed active');
    this.mode = 'websocket';
    this.status = 'connected';
    this.reconnectAttempts = 0;
    this.stopPolling();
    this.startHeartbeat();
  }

  private handleFixtureUpdate(payload: OddspapiFixturePayload): void {
    if (!payload?.fixtureId) return;
    const existing = this.matches.get(payload.fixtureId);
    if (existing) {
      this.matches.set(payload.fixtureId, ProviderMapper.applyFixtureDelta(existing, payload));
    } else {
      this.matches.set(payload.fixtureId, ProviderMapper.mapFixture(payload));
    }
  }

  private handleOddsUpdate(payload: OddspapiOddsPayload): void {
    if (!payload?.fixtureId) return;
    const match = this.matches.get(payload.fixtureId);
    if (!match) return;
    this.matches.set(payload.fixtureId, ProviderMapper.applyOddsUpdate(match, payload));
  }

  private handleError(err: Error): void {
    this.logger.error(`WebSocket error: ${err.message}`, err.stack);
  }

  private handleClose(code: number, reason: Buffer): void {
    this.status = 'disconnected';
    this.stopHeartbeat();
    const reasonStr = reason.length > 0 ? reason.toString() : '(no reason)';
    this.logger.warn(
      `WebSocket closed [${code.toString()}] ${reasonStr} — attempt #${(this.reconnectAttempts + 1).toString()}`,
    );

    if (this.reconnectAttempts >= FALLBACK_TRIGGER_ATTEMPTS && this.mode !== 'polling_fallback') {
      this.logger.warn('Switching to polling fallback mode');
      this.mode = 'polling_fallback';
      this.startPolling();
    }

    this.scheduleReconnect();
  }

  private scheduleReconnect(): void {
    const base = Math.min(1000 * Math.pow(2, this.reconnectAttempts), MAX_RECONNECT_DELAY_MS);
    const jitter = Math.random() * 1000;
    this.reconnectAttempts++;
    this.reconnectTimer = setTimeout(() => this.connect(), base + jitter);
  }

  private startHeartbeat(): void {
    this.stopHeartbeat();
    this.heartbeatTimer = setInterval(() => {
      if (this.ws?.readyState === WebSocket.OPEN) {
        this.ws.ping(); // protocol-level WebSocket ping
        this.heartbeatTimeout = setTimeout(() => {
          this.logger.warn('Heartbeat timeout — reconnecting');
          this.ws?.terminate();
        }, HEARTBEAT_TIMEOUT_MS);
      }
    }, HEARTBEAT_INTERVAL_MS);
  }

  private stopHeartbeat(): void {
    if (this.heartbeatTimer) {
      clearInterval(this.heartbeatTimer);
      this.heartbeatTimer = null;
    }
    if (this.heartbeatTimeout) {
      clearTimeout(this.heartbeatTimeout);
      this.heartbeatTimeout = null;
    }
  }

  private handlePong(): void {
    if (this.heartbeatTimeout) {
      clearTimeout(this.heartbeatTimeout);
      this.heartbeatTimeout = null;
    }
  }

  private async fetchSnapshot(): Promise<void> {
    this.logger.log('Fetching initial snapshot via REST');
    try {
      await this.fetchAllFixtures();
    } catch (err) {
      this.logger.error('Snapshot fetch failed', err);
    }
  }

  private async fetchAllFixtures(): Promise<void> {
    let page = 1;
    let totalPages = 1;

    do {
      const url =
        `${this.restUrl}/fixtures?apiKey=${this.apiKey}` +
        `&sportIds=${this.sportIds.join(',')}&status=prematch,inprogress` +
        `&page=${page}&limit=100`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error(`REST fetch failed: ${response.status.toString()} ${response.statusText}`);
      }

      const body = (await response.json()) as OddspapiFixturesPage;
      totalPages = body.totalPages;

      for (const fixture of body.data) {
        if (!this.matches.has(fixture.fixtureId)) {
          this.matches.set(fixture.fixtureId, ProviderMapper.mapRestFixture(fixture));
        }
      }

      this.logger.debug(
        `Snapshot page ${page.toString()}/${totalPages.toString()} — ${body.data.length.toString()} fixtures`,
      );
      page++;
    } while (page <= totalPages);

    this.logger.log(`Snapshot complete — ${this.matches.size.toString()} fixtures loaded`);
  }

  private startPolling(): void {
    this.stopPolling();
    this.logger.log('Polling fallback started');

    const poll = (): void => {
      const hasLive = Array.from(this.matches.values()).some((m) => m.status === 'live');
      const interval = hasLive ? POLLING_LIVE_INTERVAL_MS : POLLING_PRE_MATCH_INTERVAL_MS;

      void this.fetchAllFixtures().catch((err: unknown) => {
        this.logger.error('Polling fetch failed', err);
      });

      this.pollingTimer = setTimeout(poll, interval);
    };

    this.pollingTimer = setTimeout(poll, 0);
  }

  private stopPolling(): void {
    if (this.pollingTimer) {
      clearTimeout(this.pollingTimer);
      this.pollingTimer = null;
    }
  }

  private cleanup(): void {
    this.stopHeartbeat();
    this.stopPolling();
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.ws?.terminate();
    this.ws = null;
  }
}

export { RAW_DATA_TTL_MS };
