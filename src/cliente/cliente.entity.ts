import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonHistory } from '../util/super-entities/common-history';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Cliente extends CommonHistory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({
    nullable: false,
  })
  @ApiProperty()
  nome: string;

  @Column({
    nullable: false,
    length: 12,
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
  @ApiProperty()
  email: string;
}
