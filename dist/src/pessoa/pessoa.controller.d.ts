import { PessoaService } from './pessoa.service';
import { PessoaAddDto } from './dto/add';
import { Pessoa } from './pessoa.entity';
import { PessoaUpdateDto } from './dto/update';
import { Pagination } from 'nestjs-typeorm-paginate';
export declare class PessoaController {
    private pessoaService;
    constructor(pessoaService: PessoaService);
    add(dto: PessoaAddDto): Promise<Pessoa>;
    update(dto: PessoaUpdateDto, id: number): Promise<Pessoa>;
    findById(id: number): Promise<Pessoa>;
    findByParams(term?: string, tipos?: number[]): Promise<Pessoa[]>;
    findByTipo(tipos: number[]): Promise<Pessoa[]>;
    existsByCelular(celular: string, id?: number): Promise<boolean>;
    findByPage(page: number, limit: number): Promise<Pagination<Pessoa>>;
    findAll(): Promise<Pessoa[]>;
    findRandom15(length: number): Promise<Pessoa[]>;
    existsByEmail(email: string, id?: number): Promise<boolean>;
}
