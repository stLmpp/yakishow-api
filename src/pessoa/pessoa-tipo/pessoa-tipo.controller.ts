import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseArrayPipe,
  Put,
  Query,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { PessoaTipoService } from './pessoa-tipo.service';
import { PessoaTipoAddDto } from './dto/add.dto';
import { PessoaTipo } from './pessoa-tipo.entity';
import { ApiQuery } from '@nestjs/swagger';

@Controller('pessoa-tipo')
export class PessoaTipoController {
  constructor(private pessoaTipoService: PessoaTipoService) {}

  @Put()
  async add(@Body() dto: PessoaTipoAddDto): Promise<PessoaTipo> {
    return this.pessoaTipoService.add(dto);
  }

  @Delete()
  async remove(@Body() ids: number[]): Promise<DeleteResult> {
    return this.pessoaTipoService.remove(ids);
  }

  @Get('pessoaId/:pessoaId')
  @ApiQuery({ name: 'notTipoPessoaIds', isArray: true, type: Number })
  async findByPessoaId(
    @Param('pessoaId') pessoaId: number,
    @Query('notTipoPessoaIds', ParseArrayPipe) notTipoPessoaIds: number[]
  ): Promise<PessoaTipo[]> {
    return this.pessoaTipoService.findByPessoaId(pessoaId, notTipoPessoaIds);
  }
}
