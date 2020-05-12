import { IsNumber, IsOptional, IsString } from 'class-validator';

export class PedidoItemUpdateDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  idProduto?: number;

  @IsOptional()
  @IsNumber()
  total?: number;

  @IsOptional()
  @IsNumber()
  quantidade?: number;

  @IsOptional()
  @IsString()
  observacao?: string;
}
