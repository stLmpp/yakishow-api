import { Injectable } from '@nestjs/common';
import { PedidoItemRepository } from './pedido-item.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { PedidoItem } from './pedido-item.entity';
import { PedidoItemAddDto } from './dto/add.dto';
import { handleError } from '../../shared/error/handle-error';
import { PedidoItemUpdateDto } from './dto/update.dto';
import { UpdateResult } from '../../util/types';

@Injectable()
export class PedidoItemService {
  constructor(
    @InjectRepository(PedidoItemRepository)
    private pedidoItemRepository: PedidoItemRepository
  ) {}

  async addBatch(
    idPedido: number,
    dto: PedidoItemAddDto[]
  ): Promise<PedidoItem[]> {
    try {
      return await this.pedidoItemRepository.save(
        dto.map(item => {
          item.idPedido = idPedido;
          return item;
        })
      );
    } catch (err) {
      handleError(err, 'Erro ao tentar adicionar os items no pedido');
    }
  }

  async add(idPedido: number, dto: PedidoItemAddDto): Promise<PedidoItem> {
    dto.idPedido = idPedido;
    try {
      return await this.pedidoItemRepository.save(dto);
    } catch (err) {
      handleError(err, 'Erro ao tentar adicionar o item no pedido');
    }
  }

  async updateBatch(dto: PedidoItemUpdateDto[]): Promise<UpdateResult[]> {
    try {
      const updateResults: UpdateResult[] = [];
      let index = dto.length;
      while (index--) {
        const dtoAtual = dto[index];
        updateResults.push(
          await this.pedidoItemRepository.update(dtoAtual.id, dtoAtual)
        );
      }
      return updateResults;
    } catch (err) {
      handleError(err, 'Erro ao tentar atualizar os items do pedido');
    }
  }

  async update(
    idPedidoItem: number,
    dto: PedidoItemUpdateDto
  ): Promise<UpdateResult> {
    try {
      return await this.pedidoItemRepository.update(idPedidoItem, dto);
    } catch (err) {
      handleError(err, 'Erro ao tentar atualizar o item do pedido');
    }
  }

  async existsProduto(idProduto: number): Promise<boolean> {
    return await this.pedidoItemRepository.exists({ idProduto });
  }
}
