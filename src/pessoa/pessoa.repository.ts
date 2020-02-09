import { EntityRepository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { RepositoryCustom } from '../shared/types/repository-custom';

@EntityRepository(Pessoa)
export class PessoaRepository extends RepositoryCustom<Pessoa> {}
