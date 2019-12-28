import { EntityRepository, Repository } from 'typeorm';
import { Cliente } from './cliente.entity';

@EntityRepository(Cliente)
export class ClienteRepository extends Repository<Cliente> {
  async findByParams(term: string): Promise<Cliente[]> {
    const params = { term: `%${term}%` };
    return this.createQueryBuilder('cliente')
      .orWhere('cliente.telefone like :term', params)
      .orWhere('upper(cliente.nome) like upper(:term)', params)
      .getMany();
  }
}
