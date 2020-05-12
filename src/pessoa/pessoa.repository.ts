import { EntityRepository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { RepositoryCustom } from '../shared/types/repository-custom';
import { PessoaTipo } from './pessoa-tipo/pessoa-tipo.entity';
import { Pedido } from '../pedido/pedido.entity';

@EntityRepository(Pessoa)
export class PessoaRepository extends RepositoryCustom<Pessoa> {
  async findRandom(length = 20): Promise<Pessoa[]> {
    return this.createQueryBuilder('pessoa')
      .innerJoinAndSelect('pessoa.tipos', 'pessoaTipo')
      .orderBy('rand()')
      .limit(length)
      .getMany();
  }

  async findByParams(
    term?: string,
    tipos?: number[],
    withPedido?: boolean,
    limit = 20
  ): Promise<Pessoa[]> {
    const qb = this.createQueryBuilder('pessoa')
      // TODO pessoa tipos
      // .innerJoinAndSelect('pessoa.tipos', 'tipos')
      .limit(limit);
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
          .andWhere('pt.idPessoa = pessoa.id')
          .andWhere('pt.idTipoPessoa in (:...tipos)', { tipos })
          .getQuery();
        return `EXISTS ${subQuery}`;
      });
    }
    if (withPedido) {
      qb.andWhere(sbq => {
        const subQuery = sbq
          .subQuery()
          .addSelect('1')
          .from(Pedido, 'pedido')
          .andWhere('pedido.idCliente = pessoa.id')
          .limit(1)
          .getQuery();
        return `EXISTS ${subQuery}`;
      });
    }
    return qb.getMany();
  }
}
