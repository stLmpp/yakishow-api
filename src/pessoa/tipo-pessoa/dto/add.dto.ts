import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class TipoPessoaAddDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  nome: string;
}
