import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';
import { AuthGuard } from '@nestjs/passport';
import { PedidoAddDto } from './dto/add';
import { UpdateHistoryPipe } from '../auth/update-history.pipe';
import { UpdateResult } from 'typeorm';
import { PedidoUpdateDto } from './dto/update';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PedidoStatusEnum } from './pedido-status.enum';

@Controller('pedido')
@UseGuards(AuthGuard())
export class PedidoController {
  constructor(private pedidoService: PedidoService) {}

  @Post()
  @ApiResponse({ status: 200, type: Pedido })
  async add(
    @Body(ValidationPipe, UpdateHistoryPipe) dto: PedidoAddDto
  ): Promise<Pedido> {
    return this.pedidoService.add(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: UpdateResult })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe, UpdateHistoryPipe) dto: PedidoUpdateDto
  ): Promise<UpdateResult> {
    return this.pedidoService.update(id, dto);
  }

  @Get('status')
  @ApiResponse({ status: 200, type: Pedido, isArray: true })
  @ApiQuery({ name: 'status', enum: PedidoStatusEnum })
  async findByStatus(
    @Query('status') status: PedidoStatusEnum
  ): Promise<Pedido[]> {
    return this.pedidoService.findByStatus(status);
  }
}
