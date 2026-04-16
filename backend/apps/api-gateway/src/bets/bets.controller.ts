import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { BetsService } from './bets.service';
import { PlaceBetDto } from './dto/place-bet.dto';

@Controller('bets')
export class BetsController {
  constructor(private readonly betsService: BetsService) {}

  @Post()
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  placeBet(@Body() dto: PlaceBetDto, @Req() req: Request) {
    return this.betsService.placeBet(dto, req.rawToken ?? '');
  }
}
