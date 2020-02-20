import { PessoaTipoUpdateDto } from '../pessoa-tipo/dto/update';
export declare class PessoaAddDto {
    nome: string;
    celular?: string;
    telefone?: string;
    shortEndereco?: string;
    bairro?: string;
    rua?: string;
    numero?: number;
    complemento?: string;
    cep?: string;
    email?: string;
    tipos: PessoaTipoUpdateDto[];
}
