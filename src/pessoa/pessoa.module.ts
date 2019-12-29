import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PessoaRepository } from './pessoa.repository';
import { PessoaService } from './pessoa.service';
import { PessoaController } from './pessoa.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([PessoaRepository]), AuthModule],
  providers: [PessoaService],
  controllers: [PessoaController],
})
export class PessoaModule {}
