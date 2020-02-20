import { TipoPessoa } from './tipo-pessoa.entity';
import { TipoPessoaService } from './tipo-pessoa.service';
import { TipoPessoaAddDto } from './dto/add';
export declare class TipoPessoaController {
    private tipoPessoaService;
    constructor(tipoPessoaService: TipoPessoaService);
    findAll(): Promise<TipoPessoa[]>;
    add(dto: TipoPessoaAddDto): Promise<TipoPessoa>;
}
