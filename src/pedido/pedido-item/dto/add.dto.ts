import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class PedidoItemAddDto {
  @IsNumber()
  @IsDefined()
  @IsNotEmpty()
  idProduto: number;

  @IsOptional()
  @IsNumber()
  idPedido?: number;

  @IsOptional()
  @IsNumber()
  total?: number;

  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  quantidade: number;

  @IsOptional()
  @IsString()
  observacao?: string;
}
