import { EntityRepository } from 'typeorm';
import { Produto } from './produto.entity';
import { RepositoryCustom } from '../shared/types/repository-custom';

@EntityRepository(Produto)
export class ProdutoRepository extends RepositoryCustom<Produto> {
  async findByDescricao(descricao: string): Promise<Produto[]> {
    const params = { descricao: `%${descricao}%` };
    return this.createQueryBuilder('produto')
      .andWhere('upper(produto.descricao) like upper(:descricao)', params)
      .getMany();
  }
}
