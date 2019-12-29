import {
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoPessoaEnum } from '../tipo-pessoa.enum';

export class PessoaAddDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nome: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  @MaxLength(12)
  telefone: string;

  @IsString()
  @ApiProperty({ required: false })
  @MaxLength(500)
  @IsOptional()
  shortEndereco?: string;

  @IsString()
  @IsOptional()
  @ApiProperty({ required: false })
  bairro?: string;

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  rua?: string;

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  numero?: number;

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  complemento?: string;

  @IsString()
  @ApiProperty({ required: false })
  @IsOptional()
  cep?: string;

  @IsString()
  @IsEmail()
  @ApiProperty({ required: false })
  @IsOptional()
  email?: string;

  @ApiProperty({ enum: TipoPessoaEnum })
  @IsDefined()
  @IsNotEmpty()
  tipo: TipoPessoaEnum;
}
