import {
  Body,
  Controller,
  Get,
  Param,
  ParseArrayPipe,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { ApiQuery } from '@nestjs/swagger';
import { PessoaService } from './pessoa.service';
import { PessoaAddDto } from './dto/add.dto';
import { Pessoa } from './pessoa.entity';
import { PessoaUpdateDto } from './dto/update.dto';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';

@Controller('pessoa')
@WithAuthGuard()
export class PessoaController {
  constructor(private pessoaService: PessoaService) {}

  @Post()
  async add(@Body() dto: PessoaAddDto): Promise<Pessoa> {
    return this.pessoaService.add(dto);
  }

  @Patch(':id')
  async update(
    @Body() dto: PessoaUpdateDto,
    @Param('id') id: number
  ): Promise<Pessoa> {
    return this.pessoaService.update(id, dto);
  }

  @Get('id/:id')
  async findById(@Param('id') id: number): Promise<Pessoa> {
    return this.pessoaService.findById(id);
  }

  @Get('search')
  @ApiQuery({ name: 'tipos', type: Number, isArray: true, required: false })
  @ApiQuery({ name: 'term', type: String, required: false })
  async findByParams(
    @Query('term') term?: string,
    @Query('tipos', ParseArrayPipe) tipos?: number[]
  ): Promise<Pessoa[]> {
    return this.pessoaService.findByParams(term, tipos);
  }

  @Get('tipo')
  @ApiQuery({ name: 'tipos', type: Number, isArray: true })
  async findByTipo(
    @Query('tipos', ParseArrayPipe) tipos: number[]
  ): Promise<Pessoa[]> {
    return this.pessoaService.findByTipos(tipos);
  }

  @Get('exists/celular')
  async existsByCelular(
    @Query('celular') celular: string,
    @Query('id') id?: number
  ): Promise<boolean> {
    return this.pessoaService.existsByCelular(celular, id);
  }

  @Get('all')
  async findAll(): Promise<Pessoa[]> {
    return this.pessoaService.findAll();
  }

  @Get('random')
  async findRandom15(@Query('length') length: number): Promise<Pessoa[]> {
    return this.pessoaService.findRandom(length);
  }

  @Get('exists/email')
  async existsByEmail(
    @Query('email') email: string,
    @Query('id') id?: number
  ): Promise<boolean> {
    return this.pessoaService.existsByEmail(email, id);
  }

  @Get('celular')
  async findByCelular(@Query('celular') celular: string): Promise<Pessoa> {
    return this.pessoaService.findByCelular(celular);
  }

  @Get('search/autocomplete')
  @ApiQuery({
    name: 'term',
    required: true,
    description: 'Termo da pesquisa do cliente',
  })
  @ApiQuery({
    name: 'withPedido',
    required: false,
    description: 'Somente trazer clientes que já tem pedidos',
  })
  async findByTermAutocomplete(
    @Query('term') term: string,
    @Query('withPedido') withPedido?: boolean
  ): Promise<Pessoa[]> {
    return this.pessoaService.findByTermAutoComplete(term, withPedido);
  }
}
