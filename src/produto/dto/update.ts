import { IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProdutoUpdateDto {
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
}
