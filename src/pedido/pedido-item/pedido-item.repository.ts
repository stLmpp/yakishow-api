import { EntityRepository, Repository } from 'typeorm';
import { PedidoItem } from './pedido-item.entity';

@EntityRepository(PedidoItem)
export class PedidoItemRepository extends Repository<PedidoItem> {}
