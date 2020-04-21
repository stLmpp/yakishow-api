import { IsDefined, IsNotEmpty, IsNumber } from 'class-validator';

export class PessoaTipoAddDto {
  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  idPessoa: number;

  @IsDefined()
  @IsNumber()
  @IsNotEmpty()
  idTipoPessoa: number;
}
