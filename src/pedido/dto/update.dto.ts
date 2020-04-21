import { PedidoStatusEnum } from '../pedido-status.enum';
import { IsEnum, IsNumber, IsOptional } from 'class-validator';

export class PedidoUpdateDto {
  @IsOptional()
  @IsEnum(PedidoStatusEnum)
  status?: PedidoStatusEnum;

  @IsOptional()
  @IsNumber()
  idCliente?: number;

  @IsOptional()
  @IsNumber()
  idEntregador?: number;
}
