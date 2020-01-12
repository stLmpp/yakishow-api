import { ProdutoRepository } from './produto.repository';
import { Produto } from './produto.entity';
import { ProdutoAddDto } from './dto/add';
import { ProdutoUpdateDto } from './dto/update';
import { UpdateResult } from 'typeorm';
export declare class ProdutoService {
    private produtoRepository;
    constructor(produtoRepository: ProdutoRepository);
    add(dto: ProdutoAddDto): Promise<Produto>;
    update(id: number, dto: ProdutoUpdateDto): Promise<UpdateResult>;
    findById(id: number): Promise<Produto>;
    findByCodigo(codigo: string): Promise<Produto>;
    findByDescricao(descricao: string): Promise<Produto[]>;
}
