import { Module } from '@nestjs/common';
import { DatabaseModule } from '@betazo/database';
import { RedisModule } from '@betazo/redis-cache';
import { KafkaClientModule } from '@betazo/kafka-client';
import { BettingModule } from './betting/betting.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [
    DatabaseModule,
    RedisModule,
    KafkaClientModule.register({
      clientId: 'betting-service',
      brokers: [(process.env.KAFKA_BROKER ?? 'kafka:9092')],
    }),
    BettingModule,
    ConfigModule,
  ],
})
export class BettingServiceModule {}
