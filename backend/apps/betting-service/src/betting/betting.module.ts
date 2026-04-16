import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '../config/config.module';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { BettingController } from './betting.controller';
import { BettingService } from './betting.service';
import { WalletTransactionService } from './wallet-transaction.service';

@Module({
  imports: [
    ConfigModule,
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [BettingController],
  providers: [BettingService, WalletTransactionService, JwtAuthGuard],
})
export class BettingModule {}
