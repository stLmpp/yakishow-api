import {
  Body,
  Controller,
  Param,
  ParseIntPipe,
  Patch,
  ValidationPipe,
} from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';
import { UpdateResult } from 'typeorm';
import { PedidoItemUpdateDto } from './dto/update';
import { ApiBody, ApiResponse } from '@nestjs/swagger';
import { WithAuthGuard } from '../../auth/with-auth-guard.decorator';

@Controller('pedido-item')
@WithAuthGuard()
export class PedidoItemController {
  constructor(private pedidoItemService: PedidoItemService) {}

  @Patch('batch')
  @ApiResponse({ status: 200, type: UpdateResult, isArray: true })
  @ApiBody({ isArray: true, type: PedidoItemUpdateDto })
  async updateBatch(
    @Body(ValidationPipe) dto: PedidoItemUpdateDto[]
  ): Promise<UpdateResult[]> {
    return this.pedidoItemService.updateBatch(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: UpdateResult })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) dto: PedidoItemUpdateDto
  ): Promise<UpdateResult> {
    return this.pedidoItemService.update(id, dto);
  }
}
