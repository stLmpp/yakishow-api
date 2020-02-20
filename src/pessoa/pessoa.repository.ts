import { EntityRepository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { RepositoryCustom } from '../shared/types/repository-custom';
import { PessoaTipo } from './pessoa-tipo/pessoa-tipo.entity';

@EntityRepository(Pessoa)
export class PessoaRepository extends RepositoryCustom<Pessoa> {
  async findRandom(length: number = 20): Promise<Pessoa[]> {
    return this.createQueryBuilder('pessoa')
      .innerJoinAndSelect('pessoa.tipos', 'pessoaTipo')
      .orderBy('rand()')
      .limit(length)
      .getMany();
  }

  async findByParams(term?: string, tipos?: number[]): Promise<Pessoa[]> {
    const qb = this.createQueryBuilder('pessoa')
      .innerJoinAndSelect('pessoa.tipos', 'tipos')
      .limit(20);
    if (term) {
      qb.andWhere(
        `(upper(pessoa.nome) like upper(:term) or upper(pessoa.celular) like upper(:term))`,
        { term: `%${term}%` }
      );
    }
    if (tipos?.length) {
      qb.andWhere(sbq => {
        const subQuery = sbq
          .subQuery()
          .addSelect('1')
          .from(PessoaTipo, 'pt')
          .andWhere('pt.pessoaId = pessoa.id')
          .andWhere('pt.tipoPessoaId in (:...tipos)', { tipos })
          .getQuery();
        return `EXISTS ${subQuery}`;
      });
    }
    return qb.getMany();
  }
}
