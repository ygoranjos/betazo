import { IsNumber, Min } from 'class-validator';

export class HouseConfigDto {
  @IsNumber()
  @Min(0.01)
  minBetAmount: number;

  @IsNumber()
  @Min(1)
  maxPayoutPerTicket: number;
}
