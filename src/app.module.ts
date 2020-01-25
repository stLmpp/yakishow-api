import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DB_TYPEORM_CONFIG } from './config/db.config';
import { AuthModule } from './auth/auth.module';
import { ProdutoModule } from './produto/produto.module';
import { PessoaModule } from './pessoa/pessoa.module';
import { PedidoModule } from './pedido/pedido.module';
import { AppController } from './app.controller';
import { ServeStaticModule } from '@nestjs/serve-static';
import { join } from 'path';

@Module({
  imports: [
    ServeStaticModule.forRoot({ rootPath: join(__dirname, '..', '..', '..', 'client', 'dist') }),
    TypeOrmModule.forRoot(DB_TYPEORM_CONFIG),
    AuthModule,
    ProdutoModule,
    PessoaModule,
    PedidoModule,
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
