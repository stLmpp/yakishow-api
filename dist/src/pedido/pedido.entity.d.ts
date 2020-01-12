import { CommonHistory } from '../shared/super-entities/common-history';
import { Pessoa } from '../pessoa/pessoa.entity';
import { PedidoStatusEnum } from './pedido-status.enum';
import { PedidoItem } from './pedido-item/pedido-item.entity';
export declare class Pedido extends CommonHistory {
    id: number;
    status: PedidoStatusEnum;
    dataInicio: Date;
    dataFinalizado: Date;
    clienteId: number;
    cliente: Pessoa;
    entregadorId: number;
    entregador: Pessoa;
    pedidoItems: PedidoItem[];
}
