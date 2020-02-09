import {
  Body,
  Controller,
  Get,
  Param,
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
import { PaginatedPessoa, Pessoa } from './pessoa.entity';
import { PessoaUpdateDto } from './dto/update';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
import { ParseIntPipe } from '../shared/pipe/parse-int-pipe';
import { Pagination } from 'nestjs-typeorm-paginate';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';

@Controller('pessoa')
@WithAuthGuard()
export class PessoaController {
  constructor(private pessoaService: PessoaService) {}

  @Post()
  @ApiResponse({ status: 201, type: Pessoa })
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

  @Get('/page')
  @ApiResponse({ status: 200, type: PaginatedPessoa })
  async findByPage(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number
  ): Promise<Pagination<Pessoa>> {
    if (!limit) limit = 25;
    return this.pessoaService.findByPage({ page, limit, route: '/page' });
  }

  @Get('/all')
  @ApiResponse({ status: 200, type: Pessoa, isArray: true })
  async findAll(): Promise<Pessoa[]> {
    return this.pessoaService.findAll();
  }

  @Get('/random')
  @ApiResponse({ status: 200, type: Pessoa, isArray: true })
  async findRandom15(
    @Query('length', ParseIntPipe) length: number
  ): Promise<Pessoa[]> {
    return this.pessoaService.findRandom(length);
  }
}
