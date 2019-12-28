import { Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonHistory } from '../../util/super-entities/common-history';

@Entity()
export class Item extends CommonHistory {
  @PrimaryGeneratedColumn()
  id: number;
}
