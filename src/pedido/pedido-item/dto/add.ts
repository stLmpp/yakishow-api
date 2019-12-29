import { IsDefined, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PedidoItemAddDto {
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  produtoId: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  pedidoId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  total?: number;

  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  quantidade: number;
}
