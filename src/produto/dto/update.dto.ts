import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ProdutoUpdateDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  codigo?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  descricao?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  valor?: number;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
