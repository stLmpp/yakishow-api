import { Contains, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class UpdateDto {
  @MaxLength(255)
  @IsString()
  @ApiProperty()
  nome: string;

  @IsString()
  @MaxLength(12)
  @ApiProperty()
  telefone: string;

  @IsString()
  @ApiProperty()
  @MaxLength(500)
  @ApiProperty()
  shortEndereco: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  bairro: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  rua: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  numero: number;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  complemento: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @ApiProperty()
  cep: string;

  @IsString()
  @ApiProperty()
  @MaxLength(255)
  @Contains('@', { message: 'E-mail inválido' })
  @ApiProperty()
  email: string;
}
