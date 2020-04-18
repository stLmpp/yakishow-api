import { Body, Controller, Get, Param, Patch, Query } from '@nestjs/common';
import { PedidoItemService } from './pedido-item.service';
import { UpdateResult } from 'typeorm';
import { PedidoItemUpdateDto } from './dto/update.dto';
import { WithAuthGuard } from '../../auth/with-auth-guard.decorator';

@Controller('pedido-item')
@WithAuthGuard()
export class PedidoItemController {
  constructor(private pedidoItemService: PedidoItemService) {}

  @Patch('batch')
  async updateBatch(
    @Body() dto: PedidoItemUpdateDto[]
  ): Promise<UpdateResult[]> {
    return this.pedidoItemService.updateBatch(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: PedidoItemUpdateDto
  ): Promise<UpdateResult> {
    return this.pedidoItemService.update(id, dto);
  }

  @Get('exists/produto')
  async existsProduto(@Query('idProduto') idProduto: number): Promise<boolean> {
    return this.pedidoItemService.existsProduto(idProduto);
  }
}
