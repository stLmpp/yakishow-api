import {
  IsBoolean,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProdutoUpdateDto {
  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
  })
  codigo?: string;

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    required: false,
  })
  descricao?: string;

  @IsOptional()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty({
    required: false,
  })
  valor?: number;

  @IsOptional()
  @IsBoolean()
  ativo?: boolean;
}
