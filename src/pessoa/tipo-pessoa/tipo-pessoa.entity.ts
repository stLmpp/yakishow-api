import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonHistory } from '../../shared/super-entities/common-history';

@Entity()
export class TipoPessoa extends CommonHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;
}
