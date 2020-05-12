import { EntityRepository } from 'typeorm';
import { PedidoItem } from './pedido-item.entity';
import { RepositoryCustom } from '../../shared/types/repository-custom';

@EntityRepository(PedidoItem)
export class PedidoItemRepository extends RepositoryCustom<PedidoItem> {}
