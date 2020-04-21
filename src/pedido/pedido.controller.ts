import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseInterceptors,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';
import { PedidoAddDto } from './dto/add.dto';
import { PedidoUpdateDto } from './dto/update.dto';
import { ApiBody, ApiParam, ApiQuery, ApiTags } from '@nestjs/swagger';
import { PedidoStatusEnum } from './pedido-status.enum';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';
import { ParseDatePipe } from '../shared/pipe/parse-date.pipe';
import { PedidoItemService } from './pedido-item/pedido-item.service';
import { PedidoItem } from './pedido-item/pedido-item.entity';
import { PedidoItemAddDto } from './pedido-item/dto/add.dto';
import { NormalizePipe } from '../shared/pipe/normalize.pipe';
import { ParseEnumPipe } from '../shared/pipe/parse-enum.pipe';
import { ApiImplicitQuery } from '@nestjs/swagger/dist/decorators/api-implicit-query.decorator';
import {
  HandleError,
  HandleErrorInterceptor,
} from '../shared/inteceptors/handle-error.interceptor';

@Controller('pedido')
@WithAuthGuard()
@ApiTags('Pedido')
export class PedidoController {
  constructor(
    private pedidoService: PedidoService,
    private pedidoItemService: PedidoItemService
  ) {}

  @Post()
  async add(@Body() dto: PedidoAddDto): Promise<Pedido> {
    return this.pedidoService.add(dto);
  }

  @Patch(':idPedido')
  async update(
    @Param('idPedido') id: number,
    @Body() dto: PedidoUpdateDto
  ): Promise<Pedido> {
    return this.pedidoService.update(id, dto);
  }

  @Put(':idPedido/status/:pedidoStatusEnum')
  @ApiParam({ name: 'status', enum: PedidoStatusEnum })
  updateStatus(
    @Param('idPedido') id: number,
    @Param('pedidoStatusEnum') status: PedidoStatusEnum
  ): Promise<Pedido> {
    return this.pedidoService.updateStatus(id, status);
  }

  @Get('id/:idPedido')
  async findById(@Param('idPedido') id: number): Promise<Pedido> {
    return this.pedidoService.findById(id);
  }

  @Get('status')
  @ApiQuery({
    name: 'status',
    enum: PedidoStatusEnum,
    enumName: 'PedidoStatusEnum',
  })
  async findByStatus(
    @Query('status', ParseEnumPipe) status: PedidoStatusEnum
  ): Promise<Pedido[]> {
    return this.pedidoService.findByStatus(status);
  }

  @Get('day')
  @ApiQuery({ name: 'day', required: false })
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
  @ApiQuery({ name: 'status', required: false, enum: PedidoStatusEnum })
  @ApiQuery({ name: 'cliente', required: false })
  @ApiQuery({ name: 'idCliente', required: false })
  @ApiQuery({ name: 'produto', required: false })
  @ApiQuery({ name: 'idProduto', required: false })
  async findByParams(
    @Query('dataCriacao', ParseDatePipe) dataCriacao?: Date,
    @Query('dataFinalizado', ParseDatePipe) dataFinalizado?: Date,
    @Query('status', ParseEnumPipe) status?: PedidoStatusEnum,
    @Query('cliente', NormalizePipe) cliente?: string,
    @Query('idCliente') idCliente?: number,
    @Query('produto', NormalizePipe) produto?: string,
    @Query('idProduto') idProduto?: number
  ): Promise<Pedido[]> {
    return this.pedidoService.findByParams({
      dataFinalizado,
      dataCriacao,
      cliente,
      idCliente,
      status,
      produto,
      idProduto,
    });
  }
}
