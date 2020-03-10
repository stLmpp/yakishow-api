import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { Pedido } from './pedido.entity';
import { PedidoAddDto } from './dto/add';
import { UpdateResult } from 'typeorm';
import { PedidoUpdateDto } from './dto/update';
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PedidoStatusEnum } from './pedido-status.enum';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';
import { ParseDatePipe } from '../shared/pipe/parse-date.pipe';

@Controller('pedido')
@WithAuthGuard()
export class PedidoController {
  constructor(private pedidoService: PedidoService) {}

  @Post()
  @ApiResponse({ status: 200, type: Pedido })
  async add(@Body(ValidationPipe) dto: PedidoAddDto): Promise<Pedido> {
    return this.pedidoService.add(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: UpdateResult })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) dto: PedidoUpdateDto
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

  @Get('day')
  @ApiResponse({ status: 200, type: Pedido, isArray: true })
  async findByDay(@Query('day', ParseDatePipe) day?: Date): Promise<Pedido[]> {
    return this.pedidoService.findByDay(day);
  }
}
