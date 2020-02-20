import { CommonHistory } from '../shared/super-entities/common-history';
import { PaginatedEntity, PaginatedEntityItems } from '../shared/types/paginated-entity';
import { PessoaTipo } from './pessoa-tipo/pessoa-tipo.entity';
export declare class Pessoa extends CommonHistory {
    constructor(partial?: Partial<Pessoa>);
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
    tipos: PessoaTipo[];
}
export declare class PaginatedPessoa extends PaginatedEntity implements PaginatedEntityItems<Pessoa> {
    items: Pessoa[];
}
