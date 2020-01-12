import { Pessoa } from './pessoa.entity';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
import { RepositoryCustom } from '../shared/types/repository-custom';
export declare class PessoaRepository extends RepositoryCustom<Pessoa> {
    findByParams(term: string, tipo?: TipoPessoaEnum): Promise<Pessoa[]>;
    findSimilarBairro(bairro: string): Promise<string[]>;
}
