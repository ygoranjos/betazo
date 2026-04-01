import { Module } from '@nestjs/common';
import { RedisModule } from '@betazo/redis-cache';
import { ProviderAdapterService } from './provider-adapter.service';

@Module({
  imports: [RedisModule],
  providers: [ProviderAdapterService],
  exports: [ProviderAdapterService],
})
export class ProviderAdapterModule {}
