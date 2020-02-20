import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Put,
  Query,
  ValidationPipe,
} from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { ApiResponse } from '@nestjs/swagger';
import { PessoaTipoService } from './pessoa-tipo.service';
import { PessoaTipoAddDto } from './dto/add';
import { PessoaTipo } from './pessoa-tipo.entity';
import { ParseIntPipe } from '../../shared/pipe/parse-int-pipe';
import { ParseArrayPipe } from '../../shared/pipe/parse-array.pipe';

@Controller('pessoa-tipo')
export class PessoaTipoController {
  constructor(private pessoaTipoService: PessoaTipoService) {}

  @Put()
  @ApiResponse({ status: 200, type: PessoaTipoAddDto })
  async add(@Body(ValidationPipe) dto: PessoaTipoAddDto): Promise<PessoaTipo> {
    return this.pessoaTipoService.add(dto);
  }

  @Delete()
  @ApiResponse({ status: 200, type: DeleteResult })
  async remove(@Body() ids: number[]): Promise<DeleteResult> {
    return this.pessoaTipoService.remove(ids);
  }

  @Get('pessoaId/:pessoaId')
  @ApiResponse({ status: 200, type: PessoaTipo, isArray: true })
  async findByPessoaId(
    @Param('pessoaId', ParseIntPipe) pessoaId: number,
    @Query('notTipoPessoaIds', new ParseArrayPipe('number'))
    notTipoPessoaIds: number[]
  ): Promise<PessoaTipo[]> {
    return this.pessoaTipoService.findByPessoaId(pessoaId, notTipoPessoaIds);
  }
}
