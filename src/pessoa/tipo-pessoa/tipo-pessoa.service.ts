import { Injectable } from '@nestjs/common';
import { TipoPessoaRepository } from './tipo-pessoa.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { TipoPessoa } from './tipo-pessoa.entity';
import { TipoPessoaAddDto } from './dto/add';

@Injectable()
export class TipoPessoaService {
  constructor(
    @InjectRepository(TipoPessoaRepository)
    private tipoPessoaRepository: TipoPessoaRepository
  ) {}

  async findAll(): Promise<TipoPessoa[]> {
    return await this.tipoPessoaRepository.find();
  }

  async add(dto: TipoPessoaAddDto): Promise<TipoPessoa> {
    return await this.tipoPessoaRepository.save(dto);
  }
}
