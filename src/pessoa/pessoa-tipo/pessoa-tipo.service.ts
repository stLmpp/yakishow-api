import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { PessoaTipoRepository } from './pessoa-tipo.repository';
import { PessoaTipoAddDto } from './dto/add.dto';
import { PessoaTipo } from './pessoa-tipo.entity';
import { DeleteResult, FindConditions, In, Not } from 'typeorm';
import { handleError } from '../../shared/error/handle-error';

@Injectable()
export class PessoaTipoService {
  constructor(
    @InjectRepository(PessoaTipoRepository)
    private pessoaTipoRepository: PessoaTipoRepository
  ) {}

  async add(dto: PessoaTipoAddDto): Promise<PessoaTipo> {
    try {
      return await this.pessoaTipoRepository.save(dto);
    } catch (err) {
      handleError(err, 'Erro ao tentar salvar o tipo');
    }
  }

  async addBatch(dto: PessoaTipoAddDto[]): Promise<PessoaTipo[]> {
    try {
      return await this.pessoaTipoRepository.save(dto);
    } catch (err) {
      handleError(err, 'Erro ao tentar salvar os tipos');
    }
  }

  async remove(ids: number[]): Promise<DeleteResult> {
    try {
      return await this.pessoaTipoRepository.delete(ids);
    } catch (err) {
      handleError(err, 'Erro ao tentar deletar o tipo');
    }
  }

  async findByPessoaId(
    idPessoa: number,
    notIdsTipoPessoa?: number[]
  ): Promise<PessoaTipo[]> {
    const where: FindConditions<PessoaTipo> = { idPessoa };
    if (notIdsTipoPessoa?.length) {
      where.idTipoPessoa = Not(In(notIdsTipoPessoa));
    }
    return await this.pessoaTipoRepository.find({ where });
  }
}
