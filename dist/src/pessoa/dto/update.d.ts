import { TipoPessoaEnum } from '../tipo-pessoa.enum';
export declare class PessoaUpdateDto {
    nome?: string;
    celular?: string;
    telefone?: string;
    shortEndereco?: string;
    bairro?: string;
    rua?: string;
    numero?: number;
    complemento?: string;
    cep?: string;
    email?: string;
    tipo?: TipoPessoaEnum;
}
