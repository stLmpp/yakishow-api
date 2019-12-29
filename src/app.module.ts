import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_TYPEORM_CONFIG } from './config/db.config';
import { AuthModule } from './auth/auth.module';
import { ProdutoModule } from './produto/produto.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { PedidoModule } from './pedido/pedido.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(DB_TYPEORM_CONFIG),
    AuthModule,
    ProdutoModule,
    PessoaModule,
    PedidoModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
