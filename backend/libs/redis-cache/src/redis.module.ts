import { Global, Module } from '@nestjs/common';
import Redis from 'ioredis';
import { RedisService } from './redis.service';
import { RedisSubscriberService } from './redis-subscriber.service';

@Global()
@Module({
  providers: [
    {
      provide: 'REDIS_CLIENT',
      useFactory: (): Redis =>
        new Redis({
          host: process.env.REDIS_HOST ?? 'localhost',
          port: parseInt(process.env.REDIS_PORT ?? '6379', 10),
          password: process.env.REDIS_PASSWORD,
        }),
    },
    RedisService,
    RedisSubscriberService,
  ],
  exports: [RedisService, RedisSubscriberService],
})
export class RedisModule {}
