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
import { ProdutoUpdateDto } from './dto/update.dto';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateResult } from '../util/types';

@Controller('produto')
@WithAuthGuard()
@ApiTags('Produto')
export class ProdutoController {
  constructor(private produtoService: ProdutoService) {}

  @Post()
  async add(@Body() dto: ProdutoAddDto): Promise<Produto> {
    return this.produtoService.add(dto);
  }

  @Patch(':idProduto')
  async update(
    @Param('idProduto') id: number,
    @Body() dto: ProdutoUpdateDto
  ): Promise<UpdateResult> {
    return this.produtoService.update(id, dto);
  }

  @Get('id/:idProduto')
  async findById(@Param('idProduto') id: number): Promise<Produto> {
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
  @ApiQuery({
    name: 'descricao',
    required: false,
    description: 'Descrição do produto',
  })
  @ApiQuery({
    name: 'codigo',
    required: false,
    description: 'Código do produto',
  })
  @ApiQuery({
    name: 'withPedido',
    required: false,
    description: 'Buscar somente produtos com pedidos',
  })
  async findByParams(
    @Query('descricao') descricao: string,
    @Query('codigo') codigo: string,
    @Query('withPedido') withPedido?: boolean
  ): Promise<Produto[]> {
    return this.produtoService.findByParams(descricao, codigo, withPedido);
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

  @Get('search')
  @ApiQuery({
    name: 'term',
    required: true,
    description: 'Termo a ser pesquisado (código e descrição)',
  })
  @ApiQuery({
    name: 'withPedido',
    required: false,
    description: 'Buscar somente com pedidos',
  })
  @ApiQuery({
    name: 'limit',
    required: false,
    description: 'Limite de linhas para buscar',
  })
  async findBySearch(
    @Query('term') term: string,
    @Query('withPedido') withPedido?: boolean,
    @Query('limit') limit?: number
  ): Promise<Produto[]> {
    return this.produtoService.findBySearch(term, withPedido, limit);
  }
}
