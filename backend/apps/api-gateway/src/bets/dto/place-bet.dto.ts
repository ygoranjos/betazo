import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNumber,
  IsString,
  Min,
  ValidateNested,
} from 'class-validator';

export class SelectionDto {
  @IsString()
  eventId: string;

  @IsString()
  marketKey: string;

  @IsString()
  selectionId: string;

  @IsNumber()
  @Min(1.01)
  price: number;
}

export class PlaceBetDto {
  @IsNumber()
  @Min(0.01)
  stake: number;

  @IsArray()
  @ArrayMinSize(1)
  @ValidateNested({ each: true })
  @Type(() => SelectionDto)
  selections: SelectionDto[];
}
