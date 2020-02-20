import { CommonHistory } from '../../shared/super-entities/common-history';
import { Pessoa } from '../pessoa.entity';
import { TipoPessoa } from '../tipo-pessoa/tipo-pessoa.entity';
export declare class PessoaTipo extends CommonHistory {
    id: number;
    pessoaId: number;
    pessoa: Pessoa;
    tipoPessoaId: number;
    tipoPessoa: TipoPessoa;
}
