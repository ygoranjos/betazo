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
  eventId: string;
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
      this.server.to(`match:${delta.eventId}`).emit('odds_updated', delta);
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

  handleConnection(client: Socket): void {
    this.logger.log(`Client connected: ${client.id}`);
  }

  handleDisconnect(client: Socket): void {
    this.logger.log(`Client disconnected: ${client.id}`);
  }
}
