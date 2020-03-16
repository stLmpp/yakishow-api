import { Body, Controller, Get, Post } from '@nestjs/common';
import { TipoPessoa } from './tipo-pessoa.entity';
import { TipoPessoaService } from './tipo-pessoa.service';
import { TipoPessoaAddDto } from './dto/add.dto';

@Controller('tipo-pessoa')
export class TipoPessoaController {
  constructor(private tipoPessoaService: TipoPessoaService) {}

  @Get('all')
  async findAll(): Promise<TipoPessoa[]> {
    return this.tipoPessoaService.findAll();
  }

  @Post()
  async add(@Body() dto: TipoPessoaAddDto): Promise<TipoPessoa> {
    return this.tipoPessoaService.add(dto);
  }
}
