import { TipoPessoaRepository } from './tipo-pessoa.repository';
import { TipoPessoa } from './tipo-pessoa.entity';
import { TipoPessoaAddDto } from './dto/add';
export declare class TipoPessoaService {
    private tipoPessoaRepository;
    constructor(tipoPessoaRepository: TipoPessoaRepository);
    findAll(): Promise<TipoPessoa[]>;
    add(dto: TipoPessoaAddDto): Promise<TipoPessoa>;
}
