import {
  IsBoolean,
  IsDefined,
  IsNotEmpty,
  IsNumber,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProdutoAddDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @MaxLength(30)
  codigo: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  @MaxLength(255)
  descricao: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  valor: number;

  @IsBoolean()
  @ApiProperty()
  ativo?: boolean;
}
