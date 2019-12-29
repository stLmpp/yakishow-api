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
  @IsNotEmpty()
  @IsDefined()
  @IsNotEmpty()
  @MaxLength(255)
  @IsString()
  @ApiProperty({
    required: true,
  })
  nome: string;

  @IsNotEmpty()
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
  })
  @MaxLength(12)
  telefone: string;

  @ApiProperty()
  @IsString()
  @ApiProperty()
  @MaxLength(500)
  @IsOptional()
  shortEndereco?: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @IsOptional()
  @ApiProperty()
  bairro?: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  @IsOptional()
  rua?: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  @IsOptional()
  numero?: number;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  @IsOptional()
  complemento?: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  @IsOptional()
  cep?: string;

  @IsString()
  @ApiProperty()
  @IsEmail()
  @ApiProperty()
  @IsOptional()
  email?: string;

  @ApiProperty({
    enum: TipoPessoaEnum,
  })
  @IsDefined()
  @IsNotEmpty()
  tipo: TipoPessoaEnum;
}
