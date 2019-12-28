import { EntityRepository, Repository } from 'typeorm';
import { Produto } from './produto.entity';

@EntityRepository(Produto)
export class ProdutoRepository extends Repository<Produto> {
  async findByDescricao(descricao: string): Promise<Produto[]> {
    const params = { descricao: `%${descricao}%` };
    return this.createQueryBuilder('produto')
      .andWhere('upper(produto.descricao) like upper(:descricao)', params)
      .getMany();
  }
}
