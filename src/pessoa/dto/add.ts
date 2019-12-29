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
  @ApiProperty({ required: false })
  @MaxLength(500)
  @IsOptional()
  shortEndereco?: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @IsOptional()
  @ApiProperty({ required: false })
  bairro?: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty({ required: false })
  @IsOptional()
  rua?: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty({ required: false })
  @IsOptional()
  numero?: number;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty({ required: false })
  @IsOptional()
  complemento?: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty({ required: false })
  @IsOptional()
  cep?: string;

  @IsString()
  @ApiProperty()
  @IsEmail()
  @ApiProperty({ required: false })
  @IsOptional()
  email?: string;

  @ApiProperty({
    enum: TipoPessoaEnum,
  })
  @IsDefined()
  @IsNotEmpty()
  tipo: TipoPessoaEnum;
}
