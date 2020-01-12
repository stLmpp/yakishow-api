import { PedidoStatusEnum } from '../pedido-status.enum';
import { PedidoItemAddDto } from '../pedido-item/dto/add';
export declare class PedidoAddDto {
    dataInicio?: Date;
    status?: PedidoStatusEnum;
    clienteId: number;
    entregadorId: number;
    pedidoItems?: PedidoItemAddDto[];
}
