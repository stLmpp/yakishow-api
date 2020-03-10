import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { FindConditions, In, Not } from 'typeorm';
import { mySQLError } from '../shared/error/my-sql-error';
import { PessoaRepository } from './pessoa.repository';
import { Pessoa } from './pessoa.entity';
import { PessoaAddDto } from './dto/add';
import { PessoaUpdateDto } from './dto/update';
import { PessoaTipoService } from './pessoa-tipo/pessoa-tipo.service';

@Injectable()
export class PessoaService {
  constructor(
    @InjectRepository(PessoaRepository)
    private pessoaRepository: PessoaRepository,
    private pessoaTipoService: PessoaTipoService
  ) {}

  async add(dto: PessoaAddDto): Promise<Pessoa> {
    try {
      return await this.pessoaRepository.save(dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar inserir a pessoa');
    }
  }

  async update(id: number, dto: PessoaUpdateDto): Promise<Pessoa> {
    try {
      dto.id = id;
      if (dto.tipos?.length) {
        dto.tipos = dto.tipos.map(tipo => ({ ...tipo, pessoaId: id }));
        const removeTipos =
          (
            await this.pessoaTipoService.findByPessoaId(
              id,
              dto.tipos.map(o => o.tipoPessoaId)
            )
          )?.map(o => o.id) ?? [];
        if (removeTipos.length) {
          await this.pessoaTipoService.remove(removeTipos);
        }
      }
      return await this.pessoaRepository.save(dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar atualizar a pessoa');
    }
  }

  async findById(id: number): Promise<Pessoa> {
    try {
      return await this.pessoaRepository.findOneOrFail(id, {
        relations: ['tipos'],
      });
    } catch (err) {
      throw mySQLError(err, 'Pessoa não encontrado!');
    }
  }

  async findByParams(term?: string, tipos?: number[]): Promise<Pessoa[]> {
    return await this.pessoaRepository.findByParams(term, tipos);
  }

  async findByTipos(tipos: number[]): Promise<Pessoa[]> {
    return await this.pessoaRepository.find({
      take: 20,
      where: { tipos: In(tipos) },
      relations: ['tipos'],
    });
  }

  async existsByCelular(celular: string, id?: number): Promise<boolean> {
    const findConditions: FindConditions<Pessoa> = { celular };
    if (id) findConditions.id = Not(id);
    return await this.pessoaRepository.exists(findConditions);
  }

  async findAll(): Promise<Pessoa[]> {
    return await this.pessoaRepository.find({ relations: ['tipos'] });
  }

  async findRandom(length: number): Promise<Pessoa[]> {
    return await this.pessoaRepository.findRandom(length);
  }

  async existsByEmail(email: string, id?: number): Promise<boolean> {
    const findConditions: FindConditions<Pessoa> = { email };
    if (id) findConditions.id = Not(id);
    return await this.pessoaRepository.exists(findConditions);
  }

  async findByCelular(celular: string): Promise<Pessoa> {
    try {
      return await this.pessoaRepository.findOneOrFail({
        where: { celular },
        relations: ['tipos'],
      });
    } catch (error) {
      throw mySQLError(error, 'Erro ao tentar encontrar a pessoa');
    }
  }
}
