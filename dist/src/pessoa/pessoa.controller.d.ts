import { UpdateResult } from 'typeorm';
import { PessoaService } from './pessoa.service';
import { PessoaAddDto } from './dto/add';
import { Pessoa } from './pessoa.entity';
import { PessoaUpdateDto } from './dto/update';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
export declare class PessoaController {
    private pessoaService;
    constructor(pessoaService: PessoaService);
    add(dto: PessoaAddDto): Promise<Pessoa>;
    update(dto: PessoaUpdateDto, id: number): Promise<UpdateResult>;
    findById(id: number): Promise<Pessoa>;
    findByParams(term: string, tipo?: TipoPessoaEnum): Promise<Pessoa[]>;
    findByTipo(tipo: TipoPessoaEnum): Promise<Pessoa[]>;
    existsByTelefone(celular: string, id: number): Promise<boolean>;
    findSimilarBairro(bairro: string): Promise<string[]>;
}
