import { EntityRepository } from 'typeorm';
import { PessoaTipo } from './pessoa-tipo.entity';
import { RepositoryCustom } from '../../shared/types/repository-custom';

@EntityRepository(PessoaTipo)
export class PessoaTipoRepository extends RepositoryCustom<PessoaTipo> {}
