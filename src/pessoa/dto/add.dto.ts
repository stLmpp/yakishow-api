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
import { PessoaTipoUpdateDto } from '../pessoa-tipo/dto/update.dto';

export class PessoaAddDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  nome: string;

  @IsString()
  @MaxLength(12)
  @IsOptional()
  @IsNumberString()
  celular?: string;

  @IsString()
  @MaxLength(500)
  @IsOptional()
  endereco?: string;

  @IsString()
  @IsOptional()
  complemento?: string;

  @IsString()
  @IsOptional()
  cep?: string;

  @IsString()
  @IsEmail()
  @IsOptional()
  email?: string;

  @IsDefined()
  @IsArray()
  @ArrayNotEmpty()
  @ValidateNested({ each: true })
  tipos: PessoaTipoUpdateDto[];
}
