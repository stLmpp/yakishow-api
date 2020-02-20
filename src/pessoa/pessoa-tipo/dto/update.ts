import { IsDefined, IsNumber, IsOptional } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class PessoaTipoUpdateDto {
  @IsOptional()
  @IsNumber()
  @ApiProperty()
  id?: number;

  @IsNumber()
  @IsOptional()
  @ApiProperty()
  pessoaId?: number;

  @IsNumber()
  @IsDefined()
  @ApiProperty()
  tipoPessoaId: number;
}
