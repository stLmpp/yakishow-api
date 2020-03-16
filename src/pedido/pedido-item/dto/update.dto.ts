import { IsDefined, IsNotEmpty, IsNumber, IsOptional } from 'class-validator';

export class PedidoItemUpdateDto {
  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  pedidoId: number;

  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @IsNumber()
  produtoId?: number;

  @IsOptional()
  @IsNumber()
  total?: number;

  @IsOptional()
  @IsNumber()
  quantidade?: number;
}
