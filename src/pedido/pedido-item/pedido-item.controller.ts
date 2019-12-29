import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';
import { PedidoItem } from './pedido-item.entity';
import { UpdateHistoryPipe } from '../../auth/update-history.pipe';
import { PedidoItemAddDto } from './dto/add';
import { UpdateResult } from 'typeorm';
import { PedidoItemUpdateDto } from './dto/update';
import { AuthGuard } from '@nestjs/passport';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@Controller()
@UseGuards(AuthGuard())
export class PedidoItemController {
  constructor(private pedidoItemService: PedidoItemService) {}

  @Post('pedido/:idPedido/pedido-item/batch')
  @ApiResponse({ status: 200, type: PedidoItem, isArray: true })
  @ApiBody({ isArray: true, type: PedidoItemAddDto })
  async addBatch(
    @Param('idPedido', ParseIntPipe) idPedido: number,
    @Body(ValidationPipe, UpdateHistoryPipe) dto: PedidoItemAddDto[]
  ): Promise<PedidoItem[]> {
    return this.pedidoItemService.addBatch(idPedido, dto);
  }

  @Post('pedido/:idPedido/pedido-item')
  @ApiResponse({ status: 200, type: PedidoItem })
  async add(
    @Param('idPedido', ParseIntPipe) idPedido: number,
    @Body(ValidationPipe, UpdateHistoryPipe) dto: PedidoItemAddDto
  ): Promise<PedidoItem> {
    return this.pedidoItemService.add(idPedido, dto);
  }

  @Patch('pedido-item/batch')
  @ApiResponse({ status: 200, type: UpdateResult, isArray: true })
  @ApiBody({ isArray: true, type: PedidoItemUpdateDto })
  async updateBatch(
    @Body(ValidationPipe, UpdateHistoryPipe) dto: PedidoItemUpdateDto[]
  ): Promise<UpdateResult[]> {
    return this.pedidoItemService.updateBatch(dto);
  }

  @Patch('pedido-item/:id')
  @ApiResponse({ status: 200, type: UpdateResult })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe, UpdateHistoryPipe) dto: PedidoItemUpdateDto
  ): Promise<UpdateResult> {
    return this.pedidoItemService.update(id, dto);
  }
}
