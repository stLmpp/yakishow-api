import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonHistory } from '../shared/super-entities/common-history';
import { ApiProperty } from '@nestjs/swagger';
import { TipoPessoaEnum } from './tipo-pessoa.enum';
import { IsEmail } from 'class-validator';

@Entity()
export class Pessoa extends CommonHistory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  nome: string;

  @Column({
    length: 12,
    unique: true,
  })
  @ApiProperty()
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
  })
  @IsEmail()
  @ApiProperty()
  email: string;

  @Column()
  @ApiProperty({
    enum: TipoPessoaEnum,
  })
  tipo: TipoPessoaEnum;
}
