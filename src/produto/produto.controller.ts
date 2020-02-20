import {
  BadRequestException,
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
import { ProdutoService } from './produto.service';
import { Produto } from './produto.entity';
import { ProdutoAddDto } from './dto/add';
import { UpdateResult } from 'typeorm';
import { ApiResponse } from '@nestjs/swagger';
import { ProdutoUpdateDto } from './dto/update';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';

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
}
