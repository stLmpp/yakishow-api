import { IsDefined, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PedidoItemUpdateDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  pedidoId: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  id?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  produtoId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  total?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  quantidade?: number;
}
