import { EntityRepository } from 'typeorm';
import { Produto } from './produto.entity';
import { RepositoryCustom } from '../shared/types/repository-custom';
import { Pedido } from '../pedido/pedido.entity';

@EntityRepository(Produto)
export class ProdutoRepository extends RepositoryCustom<Produto> {
  async findByDescricao(descricao: string): Promise<Produto[]> {
    const params = { descricao: `%${descricao}%` };
    return this.createQueryBuilder('produto')
      .andWhere('upper(produto.descricao) like upper(:descricao)', params)
      .getMany();
  }

  async findByParams(
    descricao: string,
    codigo: string,
    withPedido: boolean
  ): Promise<Produto[]> {
    const qb = this.createQueryBuilder('produto');
    if (descricao) {
      qb.andWhere(`upper(produto.descricao) like upper(:descricao)`, {
        descricao: `%${descricao}%`,
      });
    }
    if (codigo) {
      qb.andWhere(`upper(produto.codigo) like upper(:codigo)`, {
        codigo: `%${codigo}%`,
      });
    }
    if (withPedido) {
      qb.andWhere(sbq => {
        const subQuery = sbq
          .subQuery()
          .select('1')
          .from(Pedido, 'pedido')
          .innerJoin('pedido.pedidoItems', 'pedidoItem')
          .andWhere('pedidoItem.produtoId = produto.id')
          .getQuery();
        return `EXISTS ${subQuery}`;
      });
    }
    return qb.getMany();
  }

  async findBySearch(
    term: string,
    withPedido: boolean,
    limit?: number
  ): Promise<Produto[]> {
    term = `%${term}%`;
    const qb = this.createQueryBuilder(
      'produto'
    ).andWhere(
      `(upper(produto.descricao) like upper(:term) OR upper(produto.codigo) like upper(:term))`,
      { term }
    );
    if (withPedido) {
      qb.andWhere(sbq => {
        const query = sbq
          .subQuery()
          .select('1')
          .from(Pedido, 'pedido')
          .innerJoin('pedido.pedidoItems', 'pedidoItem')
          .andWhere('pedidoItem.produtoId = produto.id')
          .limit(1)
          .getQuery();
        return `EXISTS ${query}`;
      });
    }
    if (limit) {
      qb.limit(limit);
    }
    return qb.getMany();
  }
}
