import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BettingService } from './betting.service';
import { ValidateTicketDto } from './dto/validate-ticket.dto';

@Controller('bets')
export class BettingController {
  constructor(private readonly bettingService: BettingService) {}

  @Post('validate-ticket')
  @HttpCode(HttpStatus.OK)
  validateTicket(@Body() dto: ValidateTicketDto) {
    return this.bettingService.validateTicket(dto);
  }
}
