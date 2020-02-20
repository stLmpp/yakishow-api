import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaRepository } from './pessoa.repository';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { AuthModule } from '../auth/auth.module';
import { TipoPessoaRepository } from './tipo-pessoa/tipo-pessoa.repository';
import { TipoPessoaService } from './tipo-pessoa/tipo-pessoa.service';
import { TipoPessoaController } from './tipo-pessoa/tipo-pessoa.controller';
import { PessoaTipoController } from './pessoa-tipo/pessoa-tipo.controller';
import { PessoaTipoService } from './pessoa-tipo/pessoa-tipo.service';
import { PessoaTipoRepository } from './pessoa-tipo/pessoa-tipo.repository';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      PessoaRepository,
      TipoPessoaRepository,
      PessoaTipoRepository,
    ]),
    AuthModule,
  ],
  providers: [PessoaService, TipoPessoaService, PessoaTipoService],
  controllers: [PessoaController, TipoPessoaController, PessoaTipoController],
})
export class PessoaModule {}
