import {
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';

export class ProdutoAddDto {
  @IsOptional()
  @IsNotEmpty()
  @IsString()
  codigo?: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  descricao: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  valor: number;
}
