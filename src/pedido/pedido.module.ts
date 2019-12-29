import { Module } from '@nestjs/common';
import { PedidoService } from './pedido.service';
import { PedidoController } from './pedido.controller';
import { AuthModule } from '../auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PedidoRepository } from './pedido.repository';
import { PedidoItemRepository } from './pedido-item/pedido-item.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([PedidoRepository, PedidoItemRepository]),
    AuthModule,
  ],
  providers: [PedidoService],
  controllers: [PedidoController],
})
export class PedidoModule {}
