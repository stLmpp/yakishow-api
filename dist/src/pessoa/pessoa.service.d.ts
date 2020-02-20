import { PessoaRepository } from './pessoa.repository';
import { Pessoa } from './pessoa.entity';
import { PessoaAddDto } from './dto/add';
import { PessoaUpdateDto } from './dto/update';
import { IPaginationOptions, Pagination } from 'nestjs-typeorm-paginate';
import { PessoaTipoService } from './pessoa-tipo/pessoa-tipo.service';
export declare class PessoaService {
    private pessoaRepository;
    private pessoaTipoService;
    constructor(pessoaRepository: PessoaRepository, pessoaTipoService: PessoaTipoService);
    add(dto: PessoaAddDto): Promise<Pessoa>;
    update(id: number, dto: PessoaUpdateDto): Promise<Pessoa>;
    findById(id: number): Promise<Pessoa>;
    findByParams(term?: string, tipos?: number[]): Promise<Pessoa[]>;
    findByTipos(tipos: number[]): Promise<Pessoa[]>;
    existsByCelular(celular: string, id?: number): Promise<boolean>;
    findByPage(options: IPaginationOptions): Promise<Pagination<Pessoa>>;
    findAll(): Promise<Pessoa[]>;
    findRandom(length: number): Promise<Pessoa[]>;
    existsByEmail(email: string, id?: number): Promise<boolean>;
}
