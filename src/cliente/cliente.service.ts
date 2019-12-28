import { Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteRepository } from './cliente.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { ClienteUpdateDto } from './dto/update';
import { ClienteAddDto } from './dto/add';
import { UpdateResult } from 'typeorm';
import { mySQLError } from '../shared/error/my-sql-error';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteRepository)
    private clienteRepository: ClienteRepository
  ) {}

  async add(dto: ClienteAddDto): Promise<Cliente> {
    try {
      return await this.clienteRepository.save(dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar inserir o cliente');
    }
  }

  async update(id: number, dto: ClienteUpdateDto): Promise<UpdateResult> {
    try {
      return await this.clienteRepository.update(id, dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar atualziar o cliente');
    }
  }

  async findById(id: number): Promise<Cliente> {
    const cliente = await this.clienteRepository.findOne(id);
    if (!cliente) throw new NotFoundException('Cliente não encontrado!');
    return cliente;
  }

  async findByParams(term: string): Promise<Cliente[]> {
    return this.clienteRepository.findByParams(term);
  }
}
