import { CommonHistory } from '../shared/super-entities/common-history';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
import { PaginatedEntity, PaginatedEntityItems } from '../shared/types/paginated-entity';
export declare class Pessoa extends CommonHistory {
    id: number;
    nome: string;
    celular: string;
    telefone: string;
    shortEndereco: string;
    bairro: string;
    rua: string;
    numero: number;
    complemento: string;
    cep: string;
    email: string;
    tipo: TipoPessoaEnum;
}
export declare class PaginatedPessoa extends PaginatedEntity implements PaginatedEntityItems<Pessoa> {
    items: Pessoa[];
}
