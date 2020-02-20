import { PessoaTipoRepository } from './pessoa-tipo.repository';
import { PessoaTipoAddDto } from './dto/add';
import { PessoaTipo } from './pessoa-tipo.entity';
import { DeleteResult } from 'typeorm';
export declare class PessoaTipoService {
    private pessoaTipoRepository;
    constructor(pessoaTipoRepository: PessoaTipoRepository);
    add(dto: PessoaTipoAddDto): Promise<PessoaTipo>;
    addBatch(dto: PessoaTipoAddDto[]): Promise<PessoaTipo[]>;
    remove(ids: number[]): Promise<DeleteResult>;
    findByPessoaId(pessoaId: number, notTipoPessoaIds?: number[]): Promise<PessoaTipo[]>;
}
