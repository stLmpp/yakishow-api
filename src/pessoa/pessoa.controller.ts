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
import { ApiQuery, ApiResponse } from '@nestjs/swagger';
import { PessoaService } from './pessoa.service';
import { PessoaAddDto } from './dto/add';
import { PaginatedPessoa, Pessoa } from './pessoa.entity';
import { PessoaUpdateDto } from './dto/update';
import { ParseIntPipe } from '../shared/pipe/parse-int-pipe';
import { Pagination } from 'nestjs-typeorm-paginate';
import { WithAuthGuard } from '../auth/with-auth-guard.decorator';
import { ParseArrayPipe } from '../shared/pipe/parse-array.pipe';

@Controller('pessoa')
@WithAuthGuard()
export class PessoaController {
  constructor(private pessoaService: PessoaService) {}

  @Post()
  @ApiResponse({ status: 201, type: Pessoa })
  async add(@Body(ValidationPipe) dto: PessoaAddDto): Promise<Pessoa> {
    return this.pessoaService.add(dto);
  }

  @Patch(':id')
  @ApiResponse({ status: 200, type: Pessoa })
  async update(
    @Body(ValidationPipe)
    dto: PessoaUpdateDto,
    @Param('id', ParseIntPipe) id: number
  ): Promise<Pessoa> {
    return this.pessoaService.update(id, dto);
  }

  @Get('id/:id')
  @ApiResponse({ status: 200, type: Pessoa })
  async findById(@Param('id', ParseIntPipe) id: number): Promise<Pessoa> {
    return this.pessoaService.findById(id);
  }

  @Get('search')
  @ApiResponse({ status: 200, type: Pessoa, isArray: true })
  @ApiQuery({ name: 'tipos', type: Number, isArray: true, required: false })
  @ApiQuery({ name: 'term', type: String, required: false })
  async findByParams(
    @Query('term') term?: string,
    @Query('tipos', new ParseArrayPipe('number')) tipos?: number[]
  ): Promise<Pessoa[]> {
    return this.pessoaService.findByParams(term, tipos);
  }

  @Get('tipo')
  @ApiResponse({ status: 200, type: Pessoa, isArray: true })
  @ApiQuery({ name: 'tipos', type: Number, isArray: true })
  async findByTipo(
    @Query('tipos', new ParseArrayPipe('number')) tipos: number[]
  ): Promise<Pessoa[]> {
    return this.pessoaService.findByTipos(tipos);
  }

  @Get('exists/celular/:celular')
  @ApiResponse({ status: 200, type: Boolean })
  async existsByCelular(
    @Param('celular') celular: string,
    @Query('id', ParseIntPipe) id?: number
  ): Promise<boolean> {
    return this.pessoaService.existsByCelular(celular, id);
  }

  @Get('page')
  @ApiResponse({ status: 200, type: PaginatedPessoa })
  async findByPage(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number
  ): Promise<Pagination<Pessoa>> {
    if (!limit) limit = 25;
    return this.pessoaService.findByPage({ page, limit, route: '/page' });
  }

  @Get('all')
  @ApiResponse({ status: 200, type: Pessoa, isArray: true })
  async findAll(): Promise<Pessoa[]> {
    return this.pessoaService.findAll();
  }

  @Get('random')
  @ApiResponse({ status: 200, type: Pessoa, isArray: true })
  async findRandom15(
    @Query('length', ParseIntPipe) length: number
  ): Promise<Pessoa[]> {
    return this.pessoaService.findRandom(length);
  }

  @Get('exists/email/:email')
  @ApiResponse({ status: 200, type: Boolean })
  async existsByEmail(
    @Param('email') email: string,
    @Query('id', ParseIntPipe) id?: number
  ): Promise<boolean> {
    return this.pessoaService.existsByEmail(email, id);
  }
}
