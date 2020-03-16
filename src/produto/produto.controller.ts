import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { ProdutoAddDto } from './dto/add.dto';
import { UpdateResult } from 'typeorm';
import { ProdutoUpdateDto } from './dto/update.dto';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';
import { ApiQuery } from '@nestjs/swagger';

@Controller('produto')
@WithAuthGuard()
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  @Post()
  async add(@Body() dto: ProdutoAddDto): Promise<Produto> {
    return this.produtoService.add(dto);
  }

  @Patch(':id')
  async update(
    @Param('id') id: number,
    @Body() dto: ProdutoUpdateDto
  ): Promise<UpdateResult> {
    return this.produtoService.update(id, dto);
  }

  @Get('id/:id')
  async findById(@Param('id') id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Get('codigo')
  async findByCodigo(@Query('codigo') codigo: string): Promise<Produto> {
    if (!codigo) throw new BadRequestException('Código é obrigatório');
    return this.produtoService.findByCodigo(codigo);
  }

  @Get('descricao')
  async findByDescricao(
    @Query('descricao') descricao: string
  ): Promise<Produto[]> {
    if (!descricao) throw new BadRequestException('Descrição é obrigatória');
    return this.produtoService.findByDescricao(descricao);
  }

  @Get('params')
  async findByParams(
    @Query('descricao') descricao: string,
    @Query('codigo') codigo: string
  ): Promise<Produto[]> {
    return this.produtoService.findByParams(descricao, codigo);
  }

  @Get('exists/codigo')
  @ApiQuery({ name: 'id', required: false, type: Number })
  async existsByCodigo(
    @Query('codigo') codigo: string,
    @Query('id') id?: number
  ): Promise<boolean> {
    return this.produtoService.existsByCodigo(codigo, id);
  }

  @Get('all')
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('similarity/codigo')
  async findBySimilarityCodigo(
    @Query('codigo') codigo: string
  ): Promise<Produto[]> {
    return this.produtoService.findBySimilarityCodigo(codigo);
  }
}
