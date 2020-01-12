import { PedidoItemService } from './pedido-item.service';
import { PedidoItem } from './pedido-item.entity';
import { PedidoItemAddDto } from './dto/add';
import { UpdateResult } from 'typeorm';
import { PedidoItemUpdateDto } from './dto/update';
export declare class PedidoItemController {
    private pedidoItemService;
    constructor(pedidoItemService: PedidoItemService);
    addBatch(idPedido: number, dto: PedidoItemAddDto[]): Promise<PedidoItem[]>;
    add(idPedido: number, dto: PedidoItemAddDto): Promise<PedidoItem>;
    updateBatch(dto: PedidoItemUpdateDto[]): Promise<UpdateResult[]>;
    update(id: number, dto: PedidoItemUpdateDto): Promise<UpdateResult>;
}
