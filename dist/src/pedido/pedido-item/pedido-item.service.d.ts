import { PedidoItemRepository } from './pedido-item.repository';
import { PedidoItem } from './pedido-item.entity';
import { PedidoItemAddDto } from './dto/add';
import { PedidoItemUpdateDto } from './dto/update';
import { UpdateResult } from 'typeorm';
export declare class PedidoItemService {
    private pedidoItemRepository;
    constructor(pedidoItemRepository: PedidoItemRepository);
    addBatch(idPedido: number, dto: PedidoItemAddDto[]): Promise<PedidoItem[]>;
    add(idPedido: number, dto: PedidoItemAddDto): Promise<PedidoItem>;
    updateBatch(dto: PedidoItemUpdateDto[]): Promise<UpdateResult[]>;
    update(idPedidoItem: number, dto: PedidoItemUpdateDto): Promise<UpdateResult>;
}
