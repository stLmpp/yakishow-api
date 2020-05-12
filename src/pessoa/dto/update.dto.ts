import {
  IsArray,
  IsEmail,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  ValidateNested,
} from 'class-validator';
import { PessoaTipoUpdateDto } from '../pessoa-tipo/dto/update.dto';

export class PessoaUpdateDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsOptional()
  @MaxLength(255)
  @IsString()
  nome?: string;

  @IsOptional()
  @IsString()
  @MaxLength(11)
  celular?: string;

  @IsOptional()
  @IsString()
  @MaxLength(500)
  endereco?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  complemento?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  cep?: string;

  @IsOptional()
  @IsString()
  @MaxLength(255)
  @IsEmail()
  email?: string;

  @IsOptional()
  @IsArray()
  @ValidateNested({ each: true })
  tipos?: PessoaTipoUpdateDto[];
}
