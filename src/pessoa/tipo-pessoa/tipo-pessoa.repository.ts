import { EntityRepository } from 'typeorm';
import { TipoPessoa } from './tipo-pessoa.entity';
import { RepositoryCustom } from '../../shared/types/repository-custom';

@EntityRepository(TipoPessoa)
export class TipoPessoaRepository extends RepositoryCustom<TipoPessoa> {}
