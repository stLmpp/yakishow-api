import { BadRequestException, Injectable } from '@nestjs/common';
import { PedidoRepository } from './pedido.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoAddDto } from './dto/add';
import { PedidoStatusEnum } from './pedido-status.enum';
import { PedidoItemRepository } from './pedido-item/pedido-item.repository';
import { mySQLError } from '../shared/error/my-sql-error';
import { PedidoUpdateDto } from './dto/update';
import { UpdateResult } from 'typeorm';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(PedidoRepository)
    private pedidoRepository: PedidoRepository,
    @InjectRepository(PedidoItemRepository)
    private pedidoItemRepository: PedidoItemRepository
  ) {}

  async add(dto: PedidoAddDto): Promise<Pedido> {
    if (!dto.dataInicio) dto.dataInicio = new Date();
    if (!dto.status) dto.status = PedidoStatusEnum.pendente;
    try {
      const pedido = await this.pedidoRepository.save(dto);
      if (dto.pedidoItems && dto.pedidoItems.length) {
        pedido.pedidoItems = await this.pedidoItemRepository.save(
          dto.pedidoItems.map(pedidoItem => {
            pedidoItem.pedidoId = pedido.id;
            return pedidoItem;
          })
        );
      }
      return pedido;
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar salvar o pedido');
    }
  }

  async update(id: number, dto: PedidoUpdateDto): Promise<UpdateResult> {
    if (dto.dataFinalizado) {
      const pedido = await this.pedidoRepository.findOne(id);
      if (pedido.dataInicio && pedido.dataInicio < dto.dataFinalizado) {
        throw new BadRequestException(
          'Data finalizado deve ser maior que data de inicio'
        );
      }
    }

    try {
      return await this.pedidoRepository.update(id, dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar atualizar o pedido');
    }
  }
}
