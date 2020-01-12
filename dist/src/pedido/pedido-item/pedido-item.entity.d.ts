import { CommonHistory } from '../../shared/super-entities/common-history';
import { Produto } from '../../produto/produto.entity';
import { Pedido } from '../pedido.entity';
export declare class PedidoItem extends CommonHistory {
    id: number;
    produtoId: number;
    produto: Produto;
    pedidoId: number;
    pedido: Pedido;
    total: number;
    quantidade: number;
}
