import {
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';
import { PedidoAddDto } from './dto/add.dto';
import { PedidoUpdateDto } from './dto/update.dto';
import { ApiBody, ApiParam, ApiQuery } from '@nestjs/swagger';
import { PedidoStatusEnum } from './pedido-status.enum';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';
import { ParseDatePipe } from '../shared/pipe/parse-date.pipe';
import { PedidoItemService } from './pedido-item/pedido-item.service';
import { PedidoItem } from './pedido-item/pedido-item.entity';
import { PedidoItemAddDto } from './pedido-item/dto/add.dto';
import { NormalizePipe } from '../shared/pipe/normalize.pipe';

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
  ): Promise<Pedido> {
    return this.pedidoService.update(id, dto);
  }

  @Put(':id/status/:status')
  @ApiParam({ name: 'status', enum: PedidoStatusEnum })
  updateStatus(
    @Param('id') id: number,
    @Param('status') status: PedidoStatusEnum
  ): Promise<Pedido> {
    return this.pedidoService.updateStatus(id, status);
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

  @Get('params')
  @ApiQuery({ name: 'dataCriacao', required: false })
  @ApiQuery({ name: 'dataFinalizado', required: false })
  @ApiQuery({ name: 'status', required: false })
  @ApiQuery({ name: 'cliente', required: false })
  @ApiQuery({ name: 'clienteId', required: false })
  @ApiQuery({ name: 'produto', required: false })
  @ApiQuery({ name: 'produtoId', required: false })
  async findByParams(
    @Query('dataCriacao', ParseDatePipe) dataCriacao?: Date,
    @Query('dataFinalizado', ParseDatePipe) dataFinalizado?: Date,
    @Query('status') status?: PedidoStatusEnum,
    @Query('cliente', NormalizePipe) cliente?: string,
    @Query('clienteId') clienteId?: number,
    @Query('produto', NormalizePipe) produto?: string,
    @Query('produtoId') produtoId?: number
  ): Promise<Pedido[]> {
    return this.pedidoService.findByParams({
      dataFinalizado,
      dataCriacao,
      cliente,
      clienteId,
      status,
      produto,
      produtoId,
    });
  }
}
