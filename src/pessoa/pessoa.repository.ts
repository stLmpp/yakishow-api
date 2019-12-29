import { EntityRepository, Repository } from 'typeorm';
import { Pessoa } from './pessoa.entity';
import { TipoPessoaEnum } from './tipo-pessoa.enum';

@EntityRepository(Pessoa)
export class PessoaRepository extends Repository<Pessoa> {
  async findByParams(term: string, tipo?: TipoPessoaEnum): Promise<Pessoa[]> {
    const params = { term: term ? `%${term}%` : term, tipo };
    return (
      this.createQueryBuilder('cliente')
        .andWhere(
          `cliente.tipo = ifnull(:tipo, cliente.tipo) 
                    and (cliente.telefone like :term 
                     or upper(cliente.nome) like upper(:term))`,
          params
        )
        /*.orWhere('cliente.telefone like :term', params)
      .orWhere('upper(cliente.nome) like upper(:term)', params)*/
        .getMany()
    );
  }
}
