import {
  IsEmail,
  IsEnum,
  IsNumber,
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
  @ApiProperty({ required: false })
  nome?: string;

  @IsOptional()
  @IsString()
  @MaxLength(12)
  @ApiProperty({ required: false })
  celular?: string;

  @IsOptional()
  @IsString()
  @MaxLength(10)
  @ApiProperty({ required: false })
  telefone?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  @ApiProperty({ required: false })
  shortEndereco?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({ required: false })
  bairro?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({ required: false })
  rua?: string;

  @IsOptional()
  @IsNumber()
  @MaxLength(255)
  @ApiProperty({ required: false })
  numero?: number;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @ApiProperty({ required: false })
  complemento?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  @MaxLength(255)
  cep?: string;

  @IsOptional()
  @IsString()
  @ApiProperty({ required: false })
  @MaxLength(255)
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsEnum(TipoPessoaEnum)
  @ApiProperty({
    enum: TipoPessoaEnum,
    required: false,
  })
  tipo?: TipoPessoaEnum;
}
