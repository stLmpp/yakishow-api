import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonHistory } from '../shared/super-entities/common-history';

@Entity()
export class Produto extends CommonHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    unique: true,
    length: 30,
  })
  codigo: string;

  @Column({ length: 300 })
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  valor: number;

  @Column()
  ativo: boolean;
}
