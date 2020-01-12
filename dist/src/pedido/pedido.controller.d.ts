import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';
import { PedidoAddDto } from './dto/add';
import { UpdateResult } from 'typeorm';
import { PedidoUpdateDto } from './dto/update';
import { PedidoStatusEnum } from './pedido-status.enum';
export declare class PedidoController {
    private pedidoService;
    constructor(pedidoService: PedidoService);
    add(dto: PedidoAddDto): Promise<Pedido>;
    update(id: number, dto: PedidoUpdateDto): Promise<UpdateResult>;
    findByStatus(status: PedidoStatusEnum): Promise<Pedido[]>;
}
