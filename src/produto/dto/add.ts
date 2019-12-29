import { IsDefined, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class ProdutoAddDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  codigo: string;

  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  descricao: string;

  @IsDefined()
  @IsNotEmpty()
  @IsNumber()
  @ApiProperty()
  valor: number;
}
