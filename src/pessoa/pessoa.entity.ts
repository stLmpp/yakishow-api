import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonHistory } from '../shared/super-entities/common-history';
import { ApiProperty } from '@nestjs/swagger';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
import {
  PaginatedEntity,
  PaginatedEntityItems,
} from '../shared/types/paginated-entity';

@Entity()
export class Pessoa extends CommonHistory {
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

  @Column()
  @ApiProperty({
    enum: TipoPessoaEnum,
  })
  tipo: TipoPessoaEnum;
}

export class PaginatedPessoa extends PaginatedEntity
  implements PaginatedEntityItems<Pessoa> {
  @ApiProperty({ isArray: true, type: Pessoa })
  items: Pessoa[];
}
