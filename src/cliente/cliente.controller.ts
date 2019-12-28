import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ClienteService } from './cliente.service';
import { AuthGuard } from '@nestjs/passport';
import { UpdateHistoryPipe } from '../auth/update-history.pipe';
import { ClienteAddDto } from './dto/add';
import { Cliente } from './cliente.entity';
import { ClienteUpdateDto } from './dto/update';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateResult } from 'typeorm';
import { SearchTermDto } from '../shared/dto/search-term';

@Controller('cliente')
@UseGuards(AuthGuard())
export class ClienteController {
  constructor(private clienteService: ClienteService) {}

  @Post('add')
  @ApiResponse({ status: 200, type: Cliente })
  async add(
    @Body(ValidationPipe, UpdateHistoryPipe) dto: ClienteAddDto
  ): Promise<Cliente> {
    return this.clienteService.add(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: UpdateResult })
  async update(
    @Body(
      new ValidationPipe({ skipMissingProperties: true }),
      UpdateHistoryPipe
    )
    dto: ClienteUpdateDto,
    @Param('id', ParseIntPipe) id: number
  ): Promise<UpdateResult> {
    return this.clienteService.update(id, dto);
  }

  @Get('id/:id')
  @ApiResponse({ status: 200, type: Cliente })
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Cliente> {
    return this.clienteService.findById(id);
  }

  @Post('/search')
  @ApiResponse({ status: 200, type: Cliente, isArray: true })
  async findByParams(
    @Body(ValidationPipe) { term }: SearchTermDto
  ): Promise<Cliente[]> {
    return this.clienteService.findByParams(term);
  }
}
