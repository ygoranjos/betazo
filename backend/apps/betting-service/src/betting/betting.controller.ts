import { Body, Controller, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { BettingService } from './betting.service';
import { WalletTransactionService } from './wallet-transaction.service';
import { ValidateTicketDto } from './dto/validate-ticket.dto';
import { PlaceBetDto } from './dto/place-bet.dto';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { CurrentUser, type JwtPayload } from '../common/decorators/current-user.decorator';

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
  @UseGuards(JwtAuthGuard)
  @HttpCode(HttpStatus.CREATED)
  placeBet(@Body() dto: PlaceBetDto, @CurrentUser() user: JwtPayload) {
    return this.walletTransactionService.placeBet(dto, user.sub);
  }
}
