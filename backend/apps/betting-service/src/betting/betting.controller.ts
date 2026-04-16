import { Body, Controller, HttpCode, HttpStatus, Post } from '@nestjs/common';
import { BettingService } from './betting.service';
import { WalletTransactionService } from './wallet-transaction.service';
import { ValidateTicketDto } from './dto/validate-ticket.dto';
import { PlaceBetDto } from './dto/place-bet.dto';

@Controller('bets')
export class BettingController {
  constructor(
    private readonly bettingService: BettingService,
    private readonly walletTransactionService: WalletTransactionService,
  ) {}

  @Post('validate-ticket')
  @HttpCode(HttpStatus.OK)
  validateTicket(@Body() dto: ValidateTicketDto) {
    return this.bettingService.validateTicket(dto);
  }

  @Post()
  @HttpCode(HttpStatus.CREATED)
  placeBet(@Body() dto: PlaceBetDto) {
    return this.walletTransactionService.placeBet(dto);
  }
}
