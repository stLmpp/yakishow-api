import { EntityRepository, Repository } from 'typeorm';
import { Pedido } from './pedido.entity';
import { PedidoStatusEnum } from './pedido-status.enum';
import { format } from 'date-fns';
import { isNil } from '../util/util';

export interface PedidodFindByParams {
  dataCriacao?: Date;
  dataFinalizado?: Date;
  cliente?: string;
  idCliente?: number;
  status?: PedidoStatusEnum;
  produto?: string;
  idProduto?: number;
}

@EntityRepository(Pedido)
export class PedidoRepository extends Repository<Pedido> {
  async findByParams(params: PedidodFindByParams): Promise<Pedido[]> {
    const qb = this.createQueryBuilder('pedido')
      .innerJoinAndSelect('pedido.pedidoItems', 'pedidoItem')
      .innerJoinAndSelect('pedidoItem.produto', 'produto')
      .innerJoinAndSelect('pedido.cliente', 'cliente');
    if (params.dataCriacao) {
      qb.andWhere('date(pedido.creationDate) = :dataCriacao', {
        dataCriacao: format(params.dataCriacao, 'yyyy-MM-dd'),
      });
    }
    if (params.dataFinalizado) {
      qb.andWhere(
        `(time_format(pedido.dataFinalizado, '%H:%i') <= :dataFinalizado or pedido.dataFinalizado is null)`,
        {
          dataFinalizado: format(params.dataFinalizado, 'HH:mm'),
        }
      );
    }
    if (params.produto && !params.idProduto) {
      qb.andWhere(`upper(produto.descricao) like upper(:descricao)`, {
        descricao: `%${params.produto}%`,
      });
    }
    if (params.idProduto) {
      qb.andWhere('produto.id = :idProduto', { idProduto: params.idProduto });
    }
    if (!isNil(params.status)) {
      qb.andWhere('pedido.status = :status', { status: params.status });
    }
    if (params.cliente && params.idCliente) {
      qb.andWhere(`upper(cliente.nome) like upper(:cliente)`, {
        cliente: `%${params.cliente}%`,
      });
    }
    if (params.idCliente) {
      qb.andWhere('pedido.idCliente = :idCliente', {
        idCliente: params.idCliente,
      });
    }
    return qb.getMany();
  }
}
