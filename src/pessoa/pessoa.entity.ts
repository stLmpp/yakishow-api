import {
  Column,
  Entity,
  JoinColumn,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonHistory } from '../shared/super-entities/common-history';
import { ApiProperty } from '@nestjs/swagger';
import {
  PaginatedEntity,
  PaginatedEntityItems,
} from '../shared/types/paginated-entity';
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
    nullable: true,
  })
  @ApiProperty()
  celular: string;

  @Column({
    length: 10,
    nullable: true,
  })
  telefone: string;

  @Column({
    length: 500,
    nullable: true,
  })
  @ApiProperty()
  shortEndereco: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  bairro: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  rua: string;

  @Column({
    nullable: true,
  })
  @ApiProperty()
  numero: number;

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

export class PaginatedPessoa extends PaginatedEntity
  implements PaginatedEntityItems<Pessoa> {
  @ApiProperty({ isArray: true, type: Pessoa })
  items: Pessoa[];
}
