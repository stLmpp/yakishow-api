import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';

export class ProdutoAddDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @MaxLength(30)
  codigo: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  descricao: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  valor: number;

  @IsBoolean()
  ativo?: boolean;
}
