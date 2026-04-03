import { Module } from '@nestjs/common';
import { RedisModule } from '@betazo/redis-cache';
import { BettingModule } from './betting/betting.module';

@Module({
  imports: [RedisModule, BettingModule],
})
export class BettingServiceModule {}
