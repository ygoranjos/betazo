import { Injectable, Logger, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import WebSocket from 'ws';
import type { RawData } from 'ws';
import type { Match } from './interfaces/match.interface';
import type { OddsApiV3Message } from './dto/oddsapi-v3-message.dto';
import type { OddsApiV3SimpleEvent, OddsApiV3EventOdds } from './dto/oddsapi-v3-rest.dto';
import { ProviderMapper } from './mappers/provider.mapper';
import { RedisService } from '@betazo/redis-cache';

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
const FALLBACK_TRIGGER_ATTEMPTS = 3;
const POLLING_LIVE_INTERVAL_MS = 10_000;
const POLLING_PREMATCH_INTERVAL_MS = 60_000;
const REDIS_SYNC_INTERVAL_MS = 30_000;
const MATCH_TTL_SECONDS = 300;

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
  private pollingTimer: NodeJS.Timeout | null = null;
  private redisSyncTimer: NodeJS.Timeout | null = null;

  private mode: ConnectionMode = 'websocket';
  private status: ConnectionStatus = 'disconnected';
  private lastMessageAt: Date | null = null;
  private lastPollAt: number = Math.floor(Date.now() / 1000) - 55;

  private readonly wsUrl: string;
  private readonly restUrl: string;
  private readonly apiKey: string;
  private readonly sportSlugs: string[];
  private readonly bookmakers: string[];

  constructor(private readonly redis: RedisService) {
    this.wsUrl = process.env.ODDSPAPI_WS_URL ?? 'wss://api.odds-api.io/v3/ws';
    this.restUrl = process.env.ODDSPAPI_REST_URL ?? 'https://api.odds-api.io/v3';
    this.apiKey = process.env.ODDSPAPI_API_KEY ?? '';
    this.sportSlugs = (process.env.ODDSPAPI_SPORT_SLUGS ?? 'football')
      .split(',')
      .map((s) => s.trim());
    this.bookmakers = (process.env.ODDSPAPI_BOOKMAKERS ?? 'Bet365,Sbobet,Pixbet,Betano')
      .split(',')
      .map((s) => s.trim());
  }

  onModuleInit(): void {
    if (!this.apiKey) {
      this.logger.warn('ODDSPAPI_API_KEY not set — provider adapter will not connect');
      return;
    }
    void this.connect();
    void this.fetchSnapshot();
    this.startRedisSyncTimer();
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
      void this.redis.del(`odds:match:${msg['id']}`);
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
    this.mode = 'websocket';
    this.status = 'connected';
    this.reconnectAttempts = 0;
    this.stopPolling();
    this.startHeartbeat();
  }

  private handleV3Update(msg: OddsApiV3Message): void {
    if (!msg.markets || msg.markets.length === 0) return;
    const existing = this.matches.get(msg.id) ?? ProviderMapper.createV3Match(msg.id, msg.date);
    const updated = ProviderMapper.applyV3OddsUpdate(existing, msg);
    this.matches.set(msg.id, updated);
    void this.persistMatch(updated);

    const changedKeys = new Set(
      msg.markets
        .map((m) => ProviderMapper.mapV3MarketKey(m.name))
        .filter((k): k is string => k !== null),
    );
    const changedMarkets = updated.markets.filter((m) => changedKeys.has(m.id));
    if (changedMarkets.length > 0) {
      void this.redis.publish(
        'odds:updates',
        JSON.stringify({ eventId: msg.id, markets: changedMarkets }),
      );
    }
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
      this.logger.warn('WebSocket unavailable — switching to polling fallback');
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

  private async persistMatch(match: Match): Promise<void> {
    try {
      await this.redis.set(
        `odds:match:${match.externalId}`,
        JSON.stringify(match),
        MATCH_TTL_SECONDS,
      );
    } catch (err) {
      this.logger.error(`Redis write failed for match ${match.externalId}`, err);
    }
  }

  private startRedisSyncTimer(): void {
    this.redisSyncTimer = setInterval(() => {
      void this.syncAllToRedis();
    }, REDIS_SYNC_INTERVAL_MS);
  }

  private async syncAllToRedis(): Promise<void> {
    const matches = Array.from(this.matches.values());
    if (matches.length === 0) return;
    await Promise.all(matches.map((m) => this.persistMatch(m)));
    this.logger.debug(`Redis sync — ${matches.length.toString()} matches persisted`);
  }

  private async fetchSnapshot(): Promise<void> {
    this.logger.log('Fetching initial snapshot via REST');
    try {
      for (const sport of this.sportSlugs) {
        await this.fetchSnapshotForSport(sport);
      }
      this.logger.log(`Snapshot complete — ${this.matches.size.toString()} events loaded`);
    } catch (err) {
      this.logger.error('Snapshot fetch failed', err);
    }
  }

  private async fetchSnapshotForSport(sport: string): Promise<void> {
    const events = await this.fetchEvents(sport);
    if (events.length === 0) return;

    // Pass 1 — store fixture data (teams, competition, sport) for every known event.
    // Ensures that WS updates arriving before odds are ready never create "Unknown" placeholders.
    for (const event of events) {
      if (!this.matches.has(event.id.toString())) {
        const match = ProviderMapper.mapSimpleEvent(event);
        this.matches.set(match.externalId, match);
        void this.persistMatch(match);
      }
    }

    // Pass 2 — fetch odds and overlay them on the already-stored fixtures.
    const BATCH_SIZE = 10;
    for (let i = 0; i < events.length; i += BATCH_SIZE) {
      const batch = events.slice(i, i + BATCH_SIZE);
      const ids = batch.map((e) => e.id);
      const oddsResults = await this.fetchOddsMulti(ids);

      for (const eventOdds of oddsResults) {
        const existing =
          this.matches.get(eventOdds.id.toString()) ??
          ProviderMapper.mapSimpleEvent({
            id: eventOdds.id,
            home: eventOdds.home,
            away: eventOdds.away,
            date: eventOdds.date,
            status: eventOdds.status,
            sport: eventOdds.sport,
            league: eventOdds.league,
          });

        const updated = ProviderMapper.applyRestOddsUpdate(existing, eventOdds);
        this.matches.set(updated.externalId, updated);
        void this.persistMatch(updated);
      }
    }
  }

  private async fetchEvents(sport: string): Promise<OddsApiV3SimpleEvent[]> {
    const [liveRes, prematchRes] = await Promise.all([
      fetch(`${this.restUrl}/events/live?apiKey=${this.apiKey}&sport=${sport}`),
      fetch(
        `${this.restUrl}/events?apiKey=${this.apiKey}&sport=${sport}&status=pending&bookmaker=${this.bookmakers[0]}`,
      ),
    ]);

    const results: OddsApiV3SimpleEvent[] = [];

    if (liveRes.ok) {
      const live = (await liveRes.json()) as OddsApiV3SimpleEvent[];
      results.push(...live);
    } else {
      this.logger.warn(`/events/live returned ${liveRes.status.toString()}`);
    }

    if (prematchRes.ok) {
      const prematch = (await prematchRes.json()) as OddsApiV3SimpleEvent[];
      results.push(...prematch);
    } else {
      this.logger.warn(`/events returned ${prematchRes.status.toString()}`);
    }

    return results;
  }

  private async fetchOddsMulti(eventIds: number[]): Promise<OddsApiV3EventOdds[]> {
    const url =
      `${this.restUrl}/odds/multi` +
      `?apiKey=${this.apiKey}` +
      `&eventIds=${eventIds.join(',')}` +
      `&bookmakers=${this.bookmakers.join(',')}`;

    const res = await fetch(url);
    if (!res.ok) {
      this.logger.warn(
        `/odds/multi returned ${res.status.toString()} for ids ${eventIds.join(',')}`,
      );
      return [];
    }

    return (await res.json()) as OddsApiV3EventOdds[];
  }

  private startPolling(): void {
    this.stopPolling();
    this.logger.log('Polling fallback started');
    this.schedulePoll();
  }

  private schedulePoll(): void {
    void this.pollUpdatedOdds().then(() => {
      if (this.mode !== 'polling_fallback') return;
      const hasLive = Array.from(this.matches.values()).some((m) => m.status === 'live');
      this.pollingTimer = setTimeout(
        () => this.schedulePoll(),
        hasLive ? POLLING_LIVE_INTERVAL_MS : POLLING_PREMATCH_INTERVAL_MS,
      );
    });
  }

  private async pollUpdatedOdds(): Promise<void> {
    const since = this.lastPollAt;
    this.lastPollAt = Math.floor(Date.now() / 1000);

    for (const sport of this.sportSlugs) {
      for (const bookmaker of this.bookmakers) {
        try {
          await this.fetchUpdatedOdds(sport, bookmaker, since);
        } catch (err) {
          this.logger.error(`Polling fetch failed [${sport}/${bookmaker}]`, err);
        }
      }
    }
  }

  private async fetchUpdatedOdds(sport: string, bookmaker: string, since: number): Promise<void> {
    const url =
      `${this.restUrl}/odds/updated` +
      `?apiKey=${this.apiKey}` +
      `&sport=${sport}` +
      `&bookmaker=${bookmaker}` +
      `&since=${since.toString()}`;

    const res = await fetch(url);
    if (!res.ok) {
      this.logger.warn(`/odds/updated returned ${res.status.toString()}`);
      return;
    }

    const events = (await res.json()) as OddsApiV3EventOdds[];
    for (const eventOdds of events) {
      const existing =
        this.matches.get(eventOdds.id.toString()) ??
        ProviderMapper.mapSimpleEvent({
          id: eventOdds.id,
          home: eventOdds.home,
          away: eventOdds.away,
          date: eventOdds.date,
          status: eventOdds.status,
          sport: eventOdds.sport,
          league: eventOdds.league,
        });

      const updated = ProviderMapper.applyRestOddsUpdate(existing, eventOdds);
      this.matches.set(updated.externalId, updated);
      void this.persistMatch(updated);
    }

    this.logger.debug(
      `Polling [${sport}/${bookmaker}] — ${events.length.toString()} events updated`,
    );
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
    if (this.redisSyncTimer) {
      clearInterval(this.redisSyncTimer);
      this.redisSyncTimer = null;
    }
    this.ws?.terminate();
    this.ws = null;
  }
}
