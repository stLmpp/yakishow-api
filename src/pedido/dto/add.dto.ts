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
import { PedidoItemAddDto } from '../pedido-item/dto/add.dto';

export class PedidoAddDto {
  @IsEnum(PedidoStatusEnum)
  @IsOptional()
  status?: PedidoStatusEnum;

  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  clienteId: number;

  @IsNumber()
  @IsOptional()
  entregadorId?: number;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  pedidoItems?: PedidoItemAddDto[];
}
