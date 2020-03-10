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
import { Pessoa } from './pessoa.entity';
import { PessoaUpdateDto } from './dto/update';
import { ParseIntPipe } from '../shared/pipe/parse-int-pipe';
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

  @Get('exists/celular')
  @ApiResponse({ status: 200, type: Boolean })
  async existsByCelular(
    @Query('celular') celular: string,
    @Query('id', ParseIntPipe) id?: number
  ): Promise<boolean> {
    return this.pessoaService.existsByCelular(celular, id);
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

  @Get('exists/email')
  @ApiResponse({ status: 200, type: Boolean })
  async existsByEmail(
    @Query('email') email: string,
    @Query('id', ParseIntPipe) id?: number
  ): Promise<boolean> {
    return this.pessoaService.existsByEmail(email, id);
  }

  @Get('celular')
  @ApiResponse({ status: 200, type: Pessoa })
  async findByCelular(@Query('celular') celular: string): Promise<Pessoa> {
    return this.pessoaService.findByCelular(celular);
  }
}
