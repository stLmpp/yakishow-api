import { Repository } from 'typeorm';
import { Produto } from './produto.entity';
export declare class ProdutoRepository extends Repository<Produto> {
    findByDescricao(descricao: string): Promise<Produto[]>;
}
