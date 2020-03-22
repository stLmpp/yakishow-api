import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';
import { PedidoAddDto } from './dto/add.dto';
import { UpdateResult } from 'typeorm';
import { PedidoUpdateDto } from './dto/update.dto';
import { ApiBody, ApiQuery } from '@nestjs/swagger';
import { PedidoStatusEnum } from './pedido-status.enum';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';
import { ParseDatePipe } from '../shared/pipe/parse-date.pipe';
import { PedidoItemService } from './pedido-item/pedido-item.service';
import { PedidoItem } from './pedido-item/pedido-item.entity';
import { PedidoItemAddDto } from './pedido-item/dto/add.dto';

@Controller('pedido')
@WithAuthGuard()
export class PedidoController {
  constructor(
    private pedidoService: PedidoService,
    private pedidoItemService: PedidoItemService
  ) {}

  @Post()
  async add(@Body() dto: PedidoAddDto): Promise<Pedido> {
    return this.pedidoService.add(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: PedidoUpdateDto
  ): Promise<UpdateResult> {
    return this.pedidoService.update(id, dto);
  }

  @Get('id/:id')
  async findById(@Param('id') id: number): Promise<Pedido> {
    return this.pedidoService.findById(id);
  }

  @Get('status')
  @ApiQuery({ name: 'status', enum: PedidoStatusEnum })
  async findByStatus(
    @Query('status') status: PedidoStatusEnum
  ): Promise<Pedido[]> {
    return this.pedidoService.findByStatus(status);
  }

  @Get('day')
  async findByDay(@Query('day', ParseDatePipe) day?: Date): Promise<Pedido[]> {
    return this.pedidoService.findByDay(day);
  }

  @Post(':idPedido/pedido-item/batch')
  @ApiBody({ isArray: true, type: PedidoItemAddDto })
  async addItemBatch(
    @Param('idPedido') idPedido: number,
    @Body() dto: PedidoItemAddDto[]
  ): Promise<PedidoItem[]> {
    return this.pedidoItemService.addBatch(idPedido, dto);
  }

  @Post(':idPedido/pedido-item')
  async addItem(
    @Param('idPedido') idPedido: number,
    @Body() dto: PedidoItemAddDto
  ): Promise<PedidoItem> {
    return this.pedidoItemService.add(idPedido, dto);
  }
}
