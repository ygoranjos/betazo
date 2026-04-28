import { Body, Controller, Get, HttpCode, HttpStatus, Post, UseGuards } from '@nestjs/common';
import { CurrentUser, type JwtPayload } from '../common/decorators/current-user.decorator';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';
import { AddBalanceDto } from './dto/add-balance.dto';
import { WalletService } from './wallet.service';

@Controller('wallet')
@UseGuards(JwtAuthGuard)
export class WalletController {
  constructor(private readonly walletService: WalletService) {}

  @Get('balance')
  getBalance(@CurrentUser() user: JwtPayload) {
    return this.walletService.getBalance(user.sub);
  }

  @Get('transactions')
  getTransactions(@CurrentUser() user: JwtPayload) {
    return this.walletService.getTransactions(user.sub);
  }

  @Post('balance')
  @HttpCode(HttpStatus.OK)
  addBalance(@Body() dto: AddBalanceDto, @CurrentUser() user: JwtPayload) {
    return this.walletService.addBalance(user.sub, dto.amount);
  }
}
