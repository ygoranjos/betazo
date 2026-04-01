import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import WebSocket from 'ws';
import type { RawData } from 'ws';
import type { Match } from './interfaces/match.interface';
import type { OddsApiV3Message } from './dto/oddsapi-v3-message.dto';
import { ProviderMapper } from './mappers/provider.mapper';

type ConnectionMode = 'websocket';
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

export const RAW_DATA_TTL_MS = 5 * 60 * 1000;

@Injectable()
export class ProviderAdapterService implements OnModuleInit, OnModuleDestroy {
  private readonly logger = new Logger(ProviderAdapterService.name);

  private ws: WebSocket | null = null;
  private readonly matches = new Map<string, Match>();

  private reconnectAttempts = 0;
  private reconnectTimer: NodeJS.Timeout | null = null;
  private heartbeatTimer: NodeJS.Timeout | null = null;
  private heartbeatTimeout: NodeJS.Timeout | null = null;

  private readonly mode: ConnectionMode = 'websocket';
  private status: ConnectionStatus = 'disconnected';
  private lastMessageAt: Date | null = null;

  private readonly wsUrl: string;
  private readonly apiKey: string;
  private readonly sportIds: number[];

  constructor() {
    this.wsUrl = process.env.ODDSPAPI_WS_URL ?? 'wss://api.odds-api.io/v3/ws';
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
    this.logger.log('WebSocket connected — waiting for welcome');
  }

  private handleMessage(raw: RawData): void {
    let text: string;
    if (Buffer.isBuffer(raw)) {
      text = raw.toString('utf8');
    } else if (Array.isArray(raw)) {
      text = Buffer.concat(raw).toString('utf8');
    } else {
      text = Buffer.from(raw).toString('utf8');
    }

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

    if (msg['type'] === 'welcome') {
      this.handleLoginOk();
      return;
    }

    if (msg['type'] === 'deleted' && typeof msg['id'] === 'string') {
      this.matches.delete(msg['id']);
      this.logger.debug(`Match deleted: ${msg['id']}`);
      return;
    }

    if (typeof msg['bookie'] === 'string' && typeof msg['id'] === 'string') {
      this.handleV3Update(data as OddsApiV3Message);
      return;
    }
  }

  private handleLoginOk(): void {
    this.logger.log('Authenticated — WebSocket feed active');
    this.status = 'connected';
    this.reconnectAttempts = 0;
    this.startHeartbeat();
  }

  private handleV3Update(msg: OddsApiV3Message): void {
    if (!msg.markets || msg.markets.length === 0) return;
    const existing = this.matches.get(msg.id) ?? ProviderMapper.createV3Match(msg.id, msg.date);
    this.matches.set(msg.id, ProviderMapper.applyV3OddsUpdate(existing, msg));
    this.logger.log(`Match ${msg.id} atualizado — total: ${this.matches.size}`); // temporário
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
        this.ws.ping();
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

  private cleanup(): void {
    this.stopHeartbeat();
    if (this.reconnectTimer) {
      clearTimeout(this.reconnectTimer);
      this.reconnectTimer = null;
    }
    this.ws?.terminate();
    this.ws = null;
  }
}
