import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PedidoItemAddDto {
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  produtoId: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  pedidoId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  total?: number;

  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantidade: number;

  @IsOptional()
  @IsString()
  @ApiProperty()
  observacao?: string;
}
