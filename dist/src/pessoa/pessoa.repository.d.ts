import { Pessoa } from './pessoa.entity';
import { RepositoryCustom } from '../shared/types/repository-custom';
export declare class PessoaRepository extends RepositoryCustom<Pessoa> {
    findSimilarBairro(bairro: string): Promise<string[]>;
}
