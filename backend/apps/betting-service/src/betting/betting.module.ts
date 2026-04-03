import { Module } from '@nestjs/common';
import { BettingController } from './betting.controller';
import { BettingService } from './betting.service';

@Module({
  controllers: [BettingController],
  providers: [BettingService],
})
export class BettingModule {}
