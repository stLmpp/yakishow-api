import { Body, Controller, Get, Post, ValidationPipe } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';
import { TipoPessoa } from './tipo-pessoa.entity';
import { TipoPessoaService } from './tipo-pessoa.service';
import { TipoPessoaAddDto } from './dto/add';

@Controller('tipo-pessoa')
export class TipoPessoaController {
  constructor(private tipoPessoaService: TipoPessoaService) {}

  @Get('all')
  @ApiResponse({ status: 200, type: TipoPessoa, isArray: true })
  async findAll(): Promise<TipoPessoa[]> {
    return this.tipoPessoaService.findAll();
  }

  @Post()
  @ApiResponse({ status: 201, type: TipoPessoa })
  async add(@Body(ValidationPipe) dto: TipoPessoaAddDto): Promise<TipoPessoa> {
    return this.tipoPessoaService.add(dto);
  }
}
