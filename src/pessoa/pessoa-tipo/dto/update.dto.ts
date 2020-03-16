import { IsDefined, IsNumber, IsOptional } from 'class-validator';

export class PessoaTipoUpdateDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNumber()
  @IsOptional()
  pessoaId?: number;

  @IsNumber()
  @IsDefined()
  tipoPessoaId: number;
}
