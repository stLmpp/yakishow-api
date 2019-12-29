import {
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
  MaxLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { TipoPessoaEnum } from '../tipo-pessoa.enum';

export class PessoaUpdateDto {
  @IsOptional()
  @MaxLength(255)
  @IsString()
  @ApiProperty()
  nome?: string;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  @ApiProperty()
  telefone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  @ApiProperty()
  shortEndereco?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty()
  bairro?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty()
  rua?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty()
  numero?: number;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty()
  complemento?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  cep?: string;

  @IsOptional()
  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @IsEmail()
  @ApiProperty()
  email?: string;

  @IsOptional()
  @IsEnum(TipoPessoaEnum)
  @ApiProperty({
    enum: TipoPessoaEnum,
  })
  tipo?: TipoPessoaEnum;
}
