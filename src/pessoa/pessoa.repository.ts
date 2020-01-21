import { EntityRepository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
import { RepositoryCustom } from '../shared/types/repository-custom';
import { levenshteinRatio } from '../shared/my-sql-functions';

@EntityRepository(Pessoa)
export class PessoaRepository extends RepositoryCustom<Pessoa> {
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
