import { Injectable, NotFoundException } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { ProdutoAddDto } from './dto/add';
import { mySQLError } from '../shared/error/my-sql-error';
import { ProdutoUpdateDto } from './dto/update';
import { UpdateResult } from 'typeorm';

@Injectable()
export class ProdutoService {
  constructor(
    @InjectRepository(ProdutoRepository)
    private produtoRepository: ProdutoRepository
  ) {}

  async add(dto: ProdutoAddDto): Promise<Produto> {
    try {
      return await this.produtoRepository.save(dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar inserir o produto');
    }
  }

  async update(id: number, dto: ProdutoUpdateDto): Promise<UpdateResult> {
    try {
      return await this.produtoRepository.update(id, dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar atualizar o produto');
    }
  }

  async findById(id: number): Promise<Produto> {
    try {
      return await this.produtoRepository.findOneOrFail(id);
    } catch (err) {
      throw new NotFoundException('Produto não encontrado');
    }
  }

  async findByCodigo(codigo: string): Promise<Produto> {
    try {
      return await this.produtoRepository.findOneOrFail({ codigo });
    } catch (err) {
      throw new NotFoundException('Produto não encontrado');
    }
  }

  async findByDescricao(descricao: string): Promise<Produto[]> {
    return await this.produtoRepository.findByDescricao(descricao);
  }
}
