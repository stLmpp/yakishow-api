import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonHistory } from '../shared/super-entities/common-history';
import { ApiProperty } from '@nestjs/swagger';
import { PessoaTipo } from './pessoa-tipo/pessoa-tipo.entity';

@Entity()
export class Pessoa extends CommonHistory {
  constructor(partial?: Partial<Pessoa>) {
    super();
    Object.assign(this, partial);
  }

  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  nome: string;

  @Column({
    length: 11,
    unique: true,
  })
  @ApiProperty()
  celular: string;

  @Column({
    length: 500,
  })
  @ApiProperty()
  endereco: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  complemento: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  cep: string;

  @Column({
    nullable: true,
    unique: true,
  })
  @ApiProperty()
  email: string;

  @OneToMany(
    () => PessoaTipo,
    tipo => tipo.pessoa,
    { cascade: true }
  )
  @JoinColumn()
  @ApiProperty({ isArray: true, type: PessoaTipo })
  tipos: PessoaTipo[];
}
