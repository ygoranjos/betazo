import { Module } from '@nestjs/common';
import { OddsGateway } from './odds.gateway';

@Module({
  providers: [OddsGateway],
})
export class OddsModule {}
