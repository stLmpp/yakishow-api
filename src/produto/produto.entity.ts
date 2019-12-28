import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonHistory } from '../shared/super-entities/common-history';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Produto extends CommonHistory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({
    unique: true,
  })
  @ApiProperty()
  codigo: string;

  @Column()
  @ApiProperty()
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @ApiProperty()
  valor: number;
}
