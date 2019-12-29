import { PedidoStatusEnum } from '../pedido-status.enum';
import { IsDateString, IsEnum, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { IsGreaterThan } from '../../shared/validators/greater-than';

export class PedidoUpdateDto {
  @IsOptional()
  @IsEnum(PedidoStatusEnum)
  @ApiProperty({
    enum: PedidoStatusEnum,
    required: false,
  })
  status?: PedidoStatusEnum;

  @IsOptional()
  @IsDateString()
  @ApiProperty({
    type: String,
    description: 'Date',
  })
  dataInicio?: Date;

  @IsOptional()
  @IsDateString()
  @IsGreaterThan<PedidoUpdateDto>('dataInicio')
  @ApiProperty({
    type: String,
    description: 'Date',
  })
  dataFinalizado?: Date;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  clienteId?: number;

  @IsOptional()
  @IsNumber()
  @ApiProperty()
  entregadorId?: number;
}
