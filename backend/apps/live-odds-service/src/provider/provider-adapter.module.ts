import { Module } from '@nestjs/common';
import { ProviderAdapterService } from './provider-adapter.service';

@Module({
  providers: [ProviderAdapterService],
  exports: [ProviderAdapterService],
})
export class ProviderAdapterModule {}
