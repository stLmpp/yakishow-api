import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProdutoRepository } from './produto.repository';
import { ProdutoService } from './produto.service';
import { ProdutoController } from './produto.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([ProdutoRepository]), AuthModule],
  providers: [ProdutoService],
  controllers: [ProdutoController],
})
export class ProdutoModule {}
