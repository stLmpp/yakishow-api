import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class PessoaTipoAddDto {
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  pessoaId: number;

  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  tipoPessoaId: number;
}
