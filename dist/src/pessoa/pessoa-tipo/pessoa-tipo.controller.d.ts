import { DeleteResult } from 'typeorm';
import { PessoaTipoService } from './pessoa-tipo.service';
import { PessoaTipoAddDto } from './dto/add';
import { PessoaTipo } from './pessoa-tipo.entity';
export declare class PessoaTipoController {
    private pessoaTipoService;
    constructor(pessoaTipoService: PessoaTipoService);
    add(dto: PessoaTipoAddDto): Promise<PessoaTipo>;
    remove(ids: number[]): Promise<DeleteResult>;
    findByPessoaId(pessoaId: number, notTipoPessoaIds: number[]): Promise<PessoaTipo[]>;
}
