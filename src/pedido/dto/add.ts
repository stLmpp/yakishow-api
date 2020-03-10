import {
  IsArray,
  IsDefined,
  IsEnum,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  ValidateNested,
} from 'class-validator';
import { PedidoStatusEnum } from '../pedido-status.enum';
import { ApiProperty } from '@nestjs/swagger';
import { PedidoItemAddDto } from '../pedido-item/dto/add';

export class PedidoAddDto {
  @IsEnum(PedidoStatusEnum)
  @IsOptional()
  @ApiProperty({
    enum: PedidoStatusEnum,
    required: false,
  })
  status?: PedidoStatusEnum;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  clienteId: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty({ required: false })
  entregadorId: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  @ApiProperty({
    type: PedidoItemAddDto,
    isArray: true,
    required: false,
  })
  pedidoItems?: PedidoItemAddDto[];
}
