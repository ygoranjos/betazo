import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { SelectionDto } from './validate-ticket.dto';

export class PlaceBetDto {
  @IsString()
  @IsUUID()
  userId: string;

  @IsNumber()
  @Min(0.01)
  stake: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => SelectionDto)
  selections: SelectionDto[];
}
