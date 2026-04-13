import { Controller, Get, HttpCode, HttpStatus } from '@nestjs/common';
import { MatchesService } from './matches.service';

@Controller('matches')
export class MatchesController {
  constructor(private readonly matchesService: MatchesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  getActive() {
    return this.matchesService.getActiveMatches();
  }
}
