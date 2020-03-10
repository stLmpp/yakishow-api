import {
  BadRequestException,
  Body,
  Controller,
  Get,
  Param,
  Patch,
  Post,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { ProdutoAddDto } from './dto/add';
import { UpdateResult } from 'typeorm';
import { ApiResponse } from '@nestjs/swagger';
import { ProdutoUpdateDto } from './dto/update';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';
import { ParseIntPipe } from '../shared/pipe/parse-int-pipe';

@Controller('produto')
@WithAuthGuard()
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  @Post()
  @ApiResponse({ status: 200, type: Produto })
  async add(@Body(ValidationPipe) dto: ProdutoAddDto): Promise<Produto> {
    return this.produtoService.add(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: UpdateResult })
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body(ValidationPipe) dto: ProdutoUpdateDto
  ): Promise<UpdateResult> {
    return this.produtoService.update(id, dto);
  }

  @Get('id/:id')
  @ApiResponse({ status: 200, type: Produto })
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Produto> {
    return this.produtoService.findById(id);
  }

  @Get('codigo')
  @ApiResponse({ status: 200, type: Produto })
  async findByCodigo(@Query('codigo') codigo: string): Promise<Produto> {
    if (!codigo) throw new BadRequestException('Código é obrigatório');
    return this.produtoService.findByCodigo(codigo);
  }

  @Get('descricao')
  @ApiResponse({ status: 200, type: Produto, isArray: true })
  async findByDescricao(
    @Query('descricao') descricao: string
  ): Promise<Produto[]> {
    if (!descricao) throw new BadRequestException('Descrição é obrigatória');
    return this.produtoService.findByDescricao(descricao);
  }

  @Get('params')
  @ApiResponse({ status: 200, type: Produto, isArray: true })
  async findByParams(
    @Query('descricao') descricao: string,
    @Query('codigo') codigo: string
  ): Promise<Produto[]> {
    return this.produtoService.findByParams(descricao, codigo);
  }

  @Get('exists/codigo')
  @ApiResponse({ status: 200, type: Boolean })
  async existsByCodigo(
    @Query('codigo') codigo: string,
    @Query('id', ParseIntPipe) id?: number
  ): Promise<boolean> {
    return this.produtoService.existsByCodigo(codigo, id);
  }

  @Get('all')
  @ApiResponse({ status: 200, type: Produto, isArray: true })
  async findAll(): Promise<Produto[]> {
    return this.produtoService.findAll();
  }

  @Get('similarity/codigo')
  @ApiResponse({ status: 200, type: Produto, isArray: true })
  async findBySimilarityCodigo(
    @Query('codigo') codigo: string
  ): Promise<Produto[]> {
    return this.produtoService.findBySimilarityCodigo(codigo);
  }
}
