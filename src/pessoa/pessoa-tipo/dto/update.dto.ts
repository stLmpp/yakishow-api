import { IsDefined, IsNumber, IsOptional } from 'class-validator';

export class PessoaTipoUpdateDto {
  @IsOptional()
  @IsNumber()
  id?: number;

  @IsNumber()
  @IsOptional()
  idPessoa?: number;

  @IsNumber()
  @IsDefined()
  idTipoPessoa: number;
}
