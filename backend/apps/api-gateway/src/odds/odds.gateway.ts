import { Logger, OnModuleInit } from '@nestjs/common';
import {
  WebSocketGateway,
  WebSocketServer,
  SubscribeMessage,
  OnGatewayConnection,
  OnGatewayDisconnect,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { RedisSubscriberService } from '@betazo/redis-cache';

interface OddsDelta {
  event_id: string;
  markets: unknown[];
}

@WebSocketGateway({ cors: { origin: '*' } })
export class OddsGateway implements OnModuleInit, OnGatewayConnection, OnGatewayDisconnect {
  private readonly logger = new Logger(OddsGateway.name);

  @WebSocketServer()
  server: Server;

  constructor(private readonly subscriber: RedisSubscriberService) {}

  onModuleInit(): void {
    this.subscriber.subscribe('odds:updates', (message) => {
      const delta = JSON.parse(message) as OddsDelta;
      this.server.to(`match:${delta.event_id}`).emit('odds_updated', delta);
      this.server.to('all_matches').emit('odds_updated', delta);
    });
  }

  @SubscribeMessage('subscribe_match')
  handleSubscribeMatch(client: Socket, payload: { eventId: string }): void {
    void client.join(`match:${payload.eventId}`);
    this.logger.debug(`Client ${client.id} joined match:${payload.eventId}`);
  }

  @SubscribeMessage('unsubscribe_match')
  handleUnsubscribeMatch(client: Socket, payload: { eventId: string }): void {
    void client.leave(`match:${payload.eventId}`);
    this.logger.debug(`Client ${client.id} left match:${payload.eventId}`);
  }

  @SubscribeMessage('subscribe_all')
  handleSubscribeAll(client: Socket): void {
    void client.join('all_matches');
    this.logger.debug(`Client ${client.id} subscribed to all_matches`);
  }

  @SubscribeMessage('unsubscribe_all')
  handleUnsubscribeAll(client: Socket): void {
    void client.leave('all_matches');
    this.logger.debug(`Client ${client.id} unsubscribed from all_matches`);
  }

  handleConnection(client: Socket): void {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket): void {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
