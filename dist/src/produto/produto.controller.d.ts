import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { ProdutoAddDto } from './dto/add';
import { UpdateResult } from 'typeorm';
import { ProdutoUpdateDto } from './dto/update';
export declare class ProdutoController {
    private produtoService;
    constructor(produtoService: ProdutoService);
    add(dto: ProdutoAddDto): Promise<Produto>;
    update(id: number, dto: ProdutoUpdateDto): Promise<UpdateResult>;
    findById(id: number): Promise<Produto>;
    findByCodigo(codigo: string): Promise<Produto>;
    findByDescricao(descricao: string): Promise<Produto[]>;
}
