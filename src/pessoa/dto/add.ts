import {
  ArrayNotEmpty,
  IsArray,
  IsDefined,
  IsEmail,
  IsNotEmpty,
  IsNumberString,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
import { PessoaTipoUpdateDto } from '../pessoa-tipo/dto/update';

export class PessoaAddDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  nome: string;

  @IsString()
  @MaxLength(12)
  @IsOptional()
  @IsNumberString()
  @ApiProperty({ required: false })
  celular?: string;

  @IsString()
  @ApiProperty({ required: false })
  @MaxLength(500)
  @IsOptional()
  endereco?: string;

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

  @IsDefined()
  @IsArray()
  @ApiProperty({ type: PessoaTipoUpdateDto, isArray: true })
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  tipos: PessoaTipoUpdateDto[];
}
