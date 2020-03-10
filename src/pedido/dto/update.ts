import { PedidoStatusEnum } from '../pedido-status.enum';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PedidoUpdateDto {
  @IsOptional()
  @IsEnum(PedidoStatusEnum)
  @ApiProperty({
    enum: PedidoStatusEnum,
    required: false,
  })
  status?: PedidoStatusEnum;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  clienteId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty({ required: false })
  entregadorId?: number;
}
