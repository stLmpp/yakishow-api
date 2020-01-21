import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  FindConditions,
  FindManyOptions,
  Like,
  Not,
  UpdateResult,
} from 'typeorm';
import { mySQLError } from '../shared/error/my-sql-error';
import { PessoaRepository } from './pessoa.repository';
import { Pessoa } from './pessoa.entity';
import { PessoaAddDto } from './dto/add';
import { PessoaUpdateDto } from './dto/update';
import { TipoPessoaEnum } from './tipo-pessoa.enum';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(PessoaRepository)
    private pessoaRepository: PessoaRepository
  ) {}

  async add(dto: PessoaAddDto): Promise<Pessoa> {
    try {
      return await this.pessoaRepository.save(dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar inserir a pessoa');
    }
  }

  async update(id: number, dto: PessoaUpdateDto): Promise<UpdateResult> {
    try {
      return await this.pessoaRepository.update(id, dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar atualziar a pessoa');
    }
  }

  async findById(id: number): Promise<Pessoa> {
    try {
      return await this.pessoaRepository.findOneOrFail(id);
    } catch (err) {
      throw new NotFoundException('Pessoa não encontrado!');
    }
  }

  async findByParams(term: string, tipo?: TipoPessoaEnum): Promise<Pessoa[]> {
    let _tipo = {};
    if (tipo !== TipoPessoaEnum.todos) _tipo = { tipo };
    term = `%${term}%`;
    return await this.pessoaRepository.find({
      where: [{ celular: Like(term), ..._tipo }, { nome: Like(term) }],
    });
  }

  async findByTipo(tipo: TipoPessoaEnum): Promise<Pessoa[]> {
    let options: FindManyOptions<Pessoa> = {};
    if (tipo !== TipoPessoaEnum.todos) options = { where: { tipo }, take: 15 };
    return await this.pessoaRepository.find(options);
  }

  async existsByCelular(celular: string, id?: number): Promise<boolean> {
    const findConditions: FindConditions<Pessoa> = { celular };
    if (id) findConditions.id = Not(id);
    return await this.pessoaRepository.exists(findConditions);
  }

  async findSimilarBairro(bairro: string): Promise<string[]> {
    return await this.pessoaRepository.findSimilarBairro(bairro);
  }
}
