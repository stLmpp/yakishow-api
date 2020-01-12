import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ApiParam, ApiQuery, ApiResponse } from '@nestjs/swagger';
import { UpdateHistoryPipe } from '../auth/update-history.pipe';
import { UpdateResult } from 'typeorm';
import { PessoaService } from './pessoa.service';
import { PessoaAddDto } from './dto/add';
import { Pessoa } from './pessoa.entity';
import { PessoaUpdateDto } from './dto/update';
import { TipoPessoaEnum } from './tipo-pessoa.enum';

@Controller('pessoa')
export class PessoaController {
  constructor(private pessoaService: PessoaService) {}

  @Post()
  @ApiResponse({ status: 200, type: Pessoa })
  async add(
    @Body(ValidationPipe, UpdateHistoryPipe) dto: PessoaAddDto
  ): Promise<Pessoa> {
    return this.pessoaService.add(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: UpdateResult })
  async update(
    @Body(ValidationPipe, UpdateHistoryPipe)
    dto: PessoaUpdateDto,
    @Param('id', ParseIntPipe) id: number
  ): Promise<UpdateResult> {
    return this.pessoaService.update(id, dto);
  }

  @Get('id/:id')
  @ApiResponse({ status: 200, type: Pessoa })
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Pessoa> {
    return this.pessoaService.findById(id);
  }

  @Get('/search')
  @ApiResponse({ status: 200, type: Pessoa, isArray: true })
  @ApiQuery({ name: 'tipo', enum: TipoPessoaEnum })
  async findByParams(
    @Query('term') term: string,
    @Query('tipo', ParseIntPipe) tipo?: TipoPessoaEnum
  ): Promise<Pessoa[]> {
    return this.pessoaService.findByParams(term, tipo);
  }

  @Get('/tipo/:tipo')
  @ApiResponse({ status: 200, type: Pessoa, isArray: true })
  @ApiParam({ name: 'tipo', enum: TipoPessoaEnum })
  async findByTipo(
    @Param('tipo', ParseIntPipe) tipo: TipoPessoaEnum
  ): Promise<Pessoa[]> {
    return this.pessoaService.findByTipo(tipo);
  }

  @Get('/celular/:celular')
  @ApiResponse({ status: 200, type: Boolean })
  async existsByTelefone(
    @Param('celular') celular: string,
    @Query('id', ParseIntPipe) id: number
  ): Promise<boolean> {
    return this.pessoaService.existsByCelular(celular, id);
  }

  @Get('/similarity/bairro/:bairro')
  @ApiResponse({ status: 200, type: String, isArray: true })
  async findSimilarBairro(@Param('bairro') bairro: string): Promise<string[]> {
    return this.pessoaService.findSimilarBairro(bairro);
  }
}
