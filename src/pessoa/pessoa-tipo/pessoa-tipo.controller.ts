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
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { WithAuthGuard } from '../../auth/with-auth-guard.decorator';

@Controller('pessoa-tipo')
@WithAuthGuard()
@ApiTags('Pessoa tipo')
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

  @Get('idPessoa/:idPessoa')
  @ApiQuery({ name: 'notIdsTipoPessoa', isArray: true, type: Number })
  async findByPessoaId(
    @Param('idPessoa') idPessoa: number,
    @Query('notIdsTipoPessoa', ParseArrayPipe) notIdsTipoPessoa: number[]
  ): Promise<PessoaTipo[]> {
    return this.pessoaTipoService.findByPessoaId(idPessoa, notIdsTipoPessoa);
  }
}
