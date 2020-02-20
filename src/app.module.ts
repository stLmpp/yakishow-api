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
import { ExternalModule } from './external/external.module';
import { APP_INTERCEPTOR, APP_PIPE } from '@nestjs/core';
import { CreateInstancePipe } from './shared/pipe/create-instance.pipe';
import { DestroyInstanceInterceptor } from './shared/interceptors/destroy-instance.interceptor';

@Module({
  imports: [
    ServeStaticModule.forRoot({
      rootPath: join(__dirname, '..', '..', '..', 'client', 'dist'),
    }),
    TypeOrmModule.forRoot(DB_TYPEORM_CONFIG),
    AuthModule,
    ProdutoModule,
    PessoaModule,
    PedidoModule,
    ExternalModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useClass: CreateInstancePipe,
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: DestroyInstanceInterceptor,
    },
  ],
})
export class AppModule {}
