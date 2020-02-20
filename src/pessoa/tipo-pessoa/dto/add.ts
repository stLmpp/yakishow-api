import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class TipoPessoaAddDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  nome: string;
}
