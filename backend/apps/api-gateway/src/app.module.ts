import { Module } from '@nestjs/common';
import { DatabaseModule } from '@betazo/database';
import { RedisModule } from '@betazo/redis-cache';
import { KafkaClientModule } from '@betazo/kafka-client';
import { WalletModule } from './wallet/wallet.module';
import { OddsModule } from './odds/odds.module';
import { BetsModule } from './bets/bets.module';

@Module({
  imports: [
    DatabaseModule,
    RedisModule,
    KafkaClientModule.register({
      clientId: 'api-gateway',
      brokers: [(process.env.KAFKA_BROKER ?? 'kafka:9092')],
    }),
    WalletModule,
    OddsModule,
    BetsModule,
  ],
})
export class AppModule {}
