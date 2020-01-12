import { PedidoRepository } from './pedido.repository';
import { Pedido } from './pedido.entity';
import { PedidoAddDto } from './dto/add';
import { PedidoStatusEnum } from './pedido-status.enum';
import { PedidoItemRepository } from './pedido-item/pedido-item.repository';
import { PedidoUpdateDto } from './dto/update';
import { UpdateResult } from 'typeorm';
export declare class PedidoService {
    private pedidoRepository;
    private pedidoItemRepository;
    constructor(pedidoRepository: PedidoRepository, pedidoItemRepository: PedidoItemRepository);
    add(dto: PedidoAddDto): Promise<Pedido>;
    update(id: number, dto: PedidoUpdateDto): Promise<UpdateResult>;
    findByStatus(status: PedidoStatusEnum): Promise<Pedido[]>;
}
