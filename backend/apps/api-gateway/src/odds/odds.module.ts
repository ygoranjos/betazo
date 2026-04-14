import { Module } from '@nestjs/common';
import { OddsGateway } from './odds.gateway';
import { MatchesController } from './matches.controller';
import { MatchesService } from './matches.service';

@Module({
  controllers: [MatchesController],
  providers: [OddsGateway, MatchesService],
})
export class OddsModule {}
