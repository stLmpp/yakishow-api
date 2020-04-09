import { Injectable } from '@nestjs/common';
import { ProdutoRepository } from './produto.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Produto } from './produto.entity';
import { ProdutoAddDto } from './dto/add.dto';
import { mySQLError } from '../shared/error/my-sql-error';
import { ProdutoUpdateDto } from './dto/update.dto';
import { FindConditions, Not, Raw, UpdateResult } from 'typeorm';

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
      throw mySQLError(err, 'Produto não encontrado');
    }
  }

  async findByCodigo(codigo: string): Promise<Produto> {
    try {
      return await this.produtoRepository.findOneOrFail({ codigo });
    } catch (err) {
      throw mySQLError(err, 'Produto não encontrado');
    }
  }

  async findByDescricao(descricao: string): Promise<Produto[]> {
    return await this.produtoRepository.findByDescricao(descricao);
  }

  async findByParams(
    descricao: string,
    codigo: string,
    withPedido?: boolean
  ): Promise<Produto[]> {
    return await this.produtoRepository.findByParams(
      descricao,
      codigo,
      withPedido
    );
  }

  async existsByCodigo(codigo: string, id?: number): Promise<boolean> {
    const findConditions: FindConditions<Produto> = { codigo };
    if (id) findConditions.id = Not(id);
    return await this.produtoRepository.exists(findConditions);
  }

  async findAll(): Promise<Produto[]> {
    return await this.produtoRepository.find();
  }

  async findBySimilarityCodigo(codigo: string): Promise<Produto[]> {
    return await this.produtoRepository.find({
      where: {
        codigo: Raw(alias => `upper(${alias}) like upper('%${codigo}%')`),
      },
      take: 5,
    });
  }

  async findBySearch(
    term: string,
    withPedido: boolean,
    limit: number
  ): Promise<Produto[]> {
    return this.produtoRepository.findBySearch(term, withPedido, limit);
  }
}
