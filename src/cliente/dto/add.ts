import { IsDefined, IsNotEmpty, IsString, MaxLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AddDto {
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
  @ApiProperty()
  email: string;
}
