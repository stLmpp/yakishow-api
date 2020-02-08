import { UpdateResult } from 'typeorm';
import { PessoaRepository } from './pessoa.repository';
import { Pessoa } from './pessoa.entity';
import { PessoaAddDto } from './dto/add';
import { PessoaUpdateDto } from './dto/update';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
export declare class PessoaService {
    private pessoaRepository;
    constructor(pessoaRepository: PessoaRepository);
    add(dto: PessoaAddDto): Promise<Pessoa>;
    update(id: number, dto: PessoaUpdateDto): Promise<UpdateResult>;
    findById(id: number): Promise<Pessoa>;
    findByParams(term: string, tipo?: TipoPessoaEnum): Promise<Pessoa[]>;
    findByTipo(tipo: TipoPessoaEnum): Promise<Pessoa[]>;
    existsByCelular(celular: string, id?: number): Promise<boolean>;
    findSimilarBairro(bairro: string): Promise<string[]>;
    findByPage(options: IPaginationOptions): Promise<Pagination<Pessoa>>;
}
