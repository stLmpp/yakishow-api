import { EntityRepository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
import { RepositoryCustom } from '../shared/types/repository-custom';
import { levenshteinRatio } from '../shared/my-sql-functions';

@EntityRepository(Pessoa)
export class PessoaRepository extends RepositoryCustom<Pessoa> {
  async findByParams(term: string, tipo?: TipoPessoaEnum): Promise<Pessoa[]> {
    const queryBuilder = this.createQueryBuilder(
      'pessoa'
    ).andWhere(
      '(pessoa.telefone like :term or upper(pessoa.nome) like upper(:term))',
      { term: term ? `%${term}%` : term }
    );
    if (tipo !== TipoPessoaEnum.todos) {
      queryBuilder.andWhere('pessoa.tipo = pessoa.tipo', { tipo });
    }
    return queryBuilder.getMany();
  }

  async findSimilarBairro(bairro: string): Promise<string[]> {
    const queryBuilder = this.createQueryBuilder('pessoa')
      .distinct(true)
      .select('bairro')
      .andWhere(`${levenshteinRatio(':bairro', 'pessoa.bairro')} >= 70`, {
        bairro,
      })
      .limit(8);
    const pessoas = await queryBuilder.getMany();
    return pessoas.map(pessoa => pessoa.bairro);
  }
}
