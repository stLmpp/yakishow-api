import { CommonHistory } from '../../shared/super-entities/common-history';
import {
  Column,
  Entity,
  Index,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Pessoa } from '../pessoa.entity';
import { TipoPessoa } from '../tipo-pessoa/tipo-pessoa.entity';

@Entity()
@Index(['tipoPessoaId', 'pessoaId'], { unique: true })
export class PessoaTipo extends CommonHistory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  pessoaId: number;

  @ManyToOne(
    () => Pessoa,
    pessoa => pessoa.tipos
  )
  pessoa: Pessoa;

  @Column()
  @ApiProperty()
  tipoPessoaId: number;

  @ManyToOne(() => TipoPessoa)
  tipoPessoa: TipoPessoa;
}
