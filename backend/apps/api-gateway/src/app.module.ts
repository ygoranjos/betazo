import { Module } from '@nestjs/common';
import { DatabaseModule } from '@betazo/database';
import { RedisModule } from '@betazo/redis-cache';
import { WalletModule } from './wallet/wallet.module';
import { OddsModule } from './odds/odds.module';

@Module({
  imports: [DatabaseModule, RedisModule, WalletModule, OddsModule],
})
export class AppModule {}
