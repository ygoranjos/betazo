import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { BetsController } from './bets.controller';
import { BetsService } from './bets.service';
import { JwtAuthGuard } from '../common/guards/jwt-auth.guard';

@Module({
  imports: [
    JwtModule.register({
      secret: process.env.JWT_SECRET,
    }),
  ],
  controllers: [BetsController],
  providers: [BetsService, JwtAuthGuard],
})
export class BetsModule {}
