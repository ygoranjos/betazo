import { Module } from '@nestjs/common';
import { DatabaseModule } from '@betazo/database';
import { RedisModule } from '@betazo/redis-cache';
import { BettingModule } from './betting/betting.module';
import { ConfigModule } from './config/config.module';

@Module({
  imports: [DatabaseModule, RedisModule, BettingModule, ConfigModule],
})
export class BettingServiceModule {}
