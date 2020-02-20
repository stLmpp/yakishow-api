import { Pessoa } from './pessoa.entity';
import { RepositoryCustom } from '../shared/types/repository-custom';
export declare class PessoaRepository extends RepositoryCustom<Pessoa> {
    findRandom(length?: number): Promise<Pessoa[]>;
    findByParams(term?: string, tipos?: number[]): Promise<Pessoa[]>;
}
