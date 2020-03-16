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
  produtoId: number;

  @IsOptional()
  @IsNumber()
  pedidoId?: number;

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
