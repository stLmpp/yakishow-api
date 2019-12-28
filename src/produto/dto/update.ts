import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class ProdutoUpdateDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  descricao?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  valor?: number;
}
