import { IsNumber, Min } from 'class-validator';

export class AddBalanceDto {
  @IsNumber()
  @Min(0.01)
  amount: number;
}
