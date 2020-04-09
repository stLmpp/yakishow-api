import { EntityRepository, Repository } from 'typeorm';
import { Pedido } from './pedido.entity';
import { PedidoStatusEnum } from './pedido-status.enum';
import { format } from 'date-fns';
import { isNil } from '../util/util';

export interface PedidodFindByParams {
  dataCriacao?: Date;
  dataFinalizado?: Date;
  clienteId?: number;
  status?: PedidoStatusEnum;
  produto?: string;
  produtoId?: number;
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
        `time_format(pedido.dataFinalizado, '%H:%i') <= :dataFinalizado`,
        {
          dataFinalizado: format(params.dataFinalizado, 'HH:mm'),
        }
      );
    }
    if (params.produto) {
      qb.andWhere(`upper(produto.descricao) like upper(:descricao)`, {
        descricao: `%${params.produto}%`,
      });
    }
    if (params.produtoId) {
      qb.andWhere('produto.id = :produtoId', { produtoId: params.produtoId });
    }
    if (!isNil(params.status)) {
      qb.andWhere('pedido.status = :status', { status: params.status });
    }
    if (params.clienteId) {
      qb.andWhere('pedido.clienteId = :clienteId', {
        clienteId: params.clienteId,
      });
    }
    return qb.getMany();
  }
}
