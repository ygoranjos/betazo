import { Module } from '@nestjs/common';
import { ConfigModule } from '../config/config.module';
import { BettingController } from './betting.controller';
import { BettingService } from './betting.service';
import { WalletTransactionService } from './wallet-transaction.service';

@Module({
  imports: [ConfigModule],
  controllers: [BettingController],
  providers: [BettingService, WalletTransactionService],
})
export class BettingModule {}
