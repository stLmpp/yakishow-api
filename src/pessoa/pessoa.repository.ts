import { EntityRepository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
import { RepositoryCustom } from '../shared/types/repository-custom';

@EntityRepository(Pessoa)
export class PessoaRepository extends RepositoryCustom<Pessoa> {
  async findByParams(term: string, tipo?: TipoPessoaEnum): Promise<Pessoa[]> {
    const queryBuilder = this.createQueryBuilder(
      'cliente'
    ).andWhere(
      '(cliente.telefone like :term or upper(cliente.nome) like upper(:term))',
      { term: term ? `%${term}%` : term }
    );
    if (tipo !== TipoPessoaEnum.todos) {
      queryBuilder.andWhere('cliente.tipo = cliente.tipo', { tipo });
    }
    return queryBuilder.getMany();
  }
}
