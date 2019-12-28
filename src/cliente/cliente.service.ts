import { Injectable, NotFoundException } from '@nestjs/common';
import { Cliente } from './cliente.entity';
import { ClienteRepository } from './cliente.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { UpdateDto } from './dto/update';
import { AddDto } from './dto/add';
import { UpdateResult } from 'typeorm';

@Injectable()
export class ClienteService {
  constructor(
    @InjectRepository(ClienteRepository)
    private clienteRepository: ClienteRepository,
  ) {}

  async add(dto: AddDto): Promise<Cliente> {
    return this.clienteRepository.save(dto);
  }

  async update(id: number, dto: UpdateDto): Promise<UpdateResult> {
    return await this.clienteRepository.update(id, dto);
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
