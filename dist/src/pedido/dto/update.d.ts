import { PedidoStatusEnum } from '../pedido-status.enum';
export declare class PedidoUpdateDto {
    status?: PedidoStatusEnum;
    dataInicio?: Date;
    dataFinalizado?: Date;
    clienteId?: number;
    entregadorId?: number;
}
