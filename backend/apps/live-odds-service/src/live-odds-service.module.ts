import { Module } from '@nestjs/common';
import { ProviderAdapterModule } from './provider/provider-adapter.module';

@Module({
  imports: [ProviderAdapterModule],
})
export class LiveOddsServiceModule {}
