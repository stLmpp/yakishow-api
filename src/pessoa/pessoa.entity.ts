import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonHistory } from '../shared/super-entities/common-history';
import { PessoaTipo } from './pessoa-tipo/pessoa-tipo.entity';

@Entity()
export class Pessoa extends CommonHistory {
  constructor(partial?: Partial<Pessoa>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column({
    length: 11,
    unique: true,
  })
  celular: string;

  @Column({
    length: 500,
  })
  endereco: string;

  @Column({
    nullable: true,
  })
  complemento: string;

  @Column({
    nullable: true,
  })
  cep: string;

  @Column({
    nullable: true,
    unique: true,
  })
  email: string;

  @OneToMany(
    () => PessoaTipo,
    tipo => tipo.pessoa,
    { cascade: true }
  )
  @JoinColumn()
  tipos: PessoaTipo[];
}
