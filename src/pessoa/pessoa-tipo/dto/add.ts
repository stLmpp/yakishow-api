import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PessoaTipoAddDto {
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  pessoaId: number;

  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  @ApiProperty()
  tipoPessoaId: number;
}
