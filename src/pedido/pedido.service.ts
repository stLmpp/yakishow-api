import { BadRequestException, Injectable } from '@nestjs/common';
import { PedidodFindByParams, PedidoRepository } from './pedido.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { Pedido } from './pedido.entity';
import { PedidoAddDto } from './dto/add.dto';
import { PedidoStatusEnum } from './pedido-status.enum';
import { PedidoItemRepository } from './pedido-item/pedido-item.repository';
import { handleError } from '../shared/error/handle-error';
import { PedidoUpdateDto } from './dto/update.dto';
import { DeepPartial, Raw } from 'typeorm';
import { addDays, format, isBefore } from 'date-fns';
import { removeNullObject } from '../util/util';

const relationsPedido = ['pedidoItems', 'cliente', 'pedidoItems.produto'];

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
      return await this.pedidoRepository.findOne(pedido.id, {
        relations: relationsPedido,
      });
    } catch (err) {
      handleError(err, 'Erro ao tentar salvar o pedido');
    }
  }

  async update(id: number, dto: PedidoUpdateDto): Promise<Pedido> {
    try {
      await this.pedidoRepository.update(id, dto);
      return await this.pedidoRepository.findOne(id);
    } catch (err) {
      handleError(err, 'Erro ao tentar atualizar o pedido');
    }
  }

  async findByStatus(status: PedidoStatusEnum): Promise<Pedido[]> {
    try {
      return await this.pedidoRepository.find({
        relations: ['pedidoItems'],
        where: { status },
      });
    } catch (err) {
      handleError(err, 'Erro ao tentar buscar os pedidos');
    }
  }

  async findByDay(day?: Date): Promise<Pedido[]> {
    try {
      return await this.pedidoRepository.find({
        relations: relationsPedido,
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
    } catch (err) {
      handleError(err);
    }
  }

  async findById(id: number): Promise<Pedido> {
    try {
      return await this.pedidoRepository.findOneOrFail(id, {
        relations: relationsPedido,
      });
    } catch (err) {
      handleError(err, 'Erro ao tentar procurar o pedido');
    }
  }

  async findByParams(params: PedidodFindByParams): Promise<Pedido[]> {
    params = removeNullObject(params, 'loose');
    if (Object.values(params).every(o => !o)) {
      throw new BadRequestException('Precisa de pelo menos 1 parametro');
    }
    try {
      return await this.pedidoRepository.findByParams(params);
    } catch (err) {
      handleError(err, 'Erro ao tentar buscar os pedidos');
    }
  }

  async updateStatus(id: number, status: PedidoStatusEnum): Promise<Pedido> {
    const pedido = await this.pedidoRepository.findOne(id);
    if (pedido.dataFinalizado) {
      if (isBefore(pedido.dataFinalizado, addDays(new Date(), -5))) {
        throw new BadRequestException(
          'Pedido já foi finalizado/cancelado à 5 dias',
          'Não poderá mais alterar o status'
        );
      }
    }
    const partial: DeepPartial<Pedido> = { id, status };
    if (
      [PedidoStatusEnum.finalizado, PedidoStatusEnum.cancelado].includes(status)
    ) {
      partial.dataFinalizado = new Date().toISOString();
    } else {
      partial.dataFinalizado = null;
    }
    try {
      await this.pedidoRepository.update(id, partial);
      return await this.pedidoRepository.findOne(id);
    } catch (err) {
      handleError(err, 'Erro ao tentar atualizar o status do pedido');
    }
  }
}
