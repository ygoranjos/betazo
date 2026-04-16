import { Module } from '@nestjs/common';
import { DatabaseModule } from '@betazo/database';
import { RedisModule } from '@betazo/redis-cache';
import { WalletModule } from './wallet/wallet.module';
import { OddsModule } from './odds/odds.module';
import { BetsModule } from './bets/bets.module';

@Module({
  imports: [DatabaseModule, RedisModule, WalletModule, OddsModule, BetsModule],
})
export class AppModule {}
