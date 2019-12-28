import { Module } from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClienteRepository } from './cliente.repository';
import { ClienteController } from './cliente.controller';
import { AuthModule } from '../auth/auth.module';

@Module({
  imports: [TypeOrmModule.forFeature([ClienteRepository]), AuthModule],
  providers: [ClienteService],
  controllers: [ClienteController],
})
export class ClienteModule {}
