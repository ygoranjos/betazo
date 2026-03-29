import { Module } from '@nestjs/common';
import { DatabaseModule } from '@betazo/database';
import { WalletModule } from './wallet/wallet.module';

@Module({
  imports: [DatabaseModule, WalletModule],
})
export class AppModule {}
