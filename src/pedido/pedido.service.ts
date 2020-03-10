import { Injectable } from '@nestjs/common';
import { PedidoRepository } from './pedido.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoAddDto } from './dto/add';
import { PedidoStatusEnum } from './pedido-status.enum';
import { PedidoItemRepository } from './pedido-item/pedido-item.repository';
import { mySQLError } from '../shared/error/my-sql-error';
import { PedidoUpdateDto } from './dto/update';
import { Raw, UpdateResult } from 'typeorm';
import { format } from 'date-fns';

@Injectable()
export class PedidoService {
  constructor(
    @InjectRepository(PedidoRepository)
    private pedidoRepository: PedidoRepository,
    @InjectRepository(PedidoItemRepository)
    private pedidoItemRepository: PedidoItemRepository
  ) {}

  async add(dto: PedidoAddDto): Promise<Pedido> {
    if (!dto.status) dto.status = PedidoStatusEnum.pendente;
    try {
      if (!dto.status) dto.status = PedidoStatusEnum.pendente;
      const pedido = await this.pedidoRepository.save(dto);
      if (dto.pedidoItems?.length) {
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
    try {
      return await this.pedidoRepository.update(id, dto);
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar atualizar o pedido');
    }
  }

  async findByStatus(status: PedidoStatusEnum): Promise<Pedido[]> {
    return await this.pedidoRepository.find({
      relations: ['pedidoItems'],
      where: { status },
    });
  }

  async findByDay(day?: Date): Promise<Pedido[]> {
    return await this.pedidoRepository.find({
      relations: ['pedidoItems', 'cliente'],
      where: {
        creationDate: Raw(
          alias =>
            `date_format(${alias}, '%d/%m/%Y') = '${format(
              day ?? new Date(),
              'dd/MM/yyyy'
            )}'`
        ),
      },
    });
  }
}
