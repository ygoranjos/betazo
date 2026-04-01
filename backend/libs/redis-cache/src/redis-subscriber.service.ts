import { Injectable, OnModuleDestroy } from '@nestjs/common';
import Redis from 'ioredis';

@Injectable()
export class RedisSubscriberService implements OnModuleDestroy {
  private readonly client: Redis;

  constructor() {
    this.client = new Redis({
      host: process.env.REDIS_HOST ?? 'localhost',
      port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
      password: process.env.REDIS_PASSWORD,
    });
  }

  subscribe(channel: string, callback: (message: string) => void): void {
    void this.client.subscribe(channel);
    this.client.on('message', (ch: string, msg: string) => {
      if (ch === channel) callback(msg);
    });
  }

  onModuleDestroy(): void {
    void this.client.quit();
  }
}
