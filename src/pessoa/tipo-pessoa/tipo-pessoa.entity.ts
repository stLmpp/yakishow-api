import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { CommonHistory } from '../../shared/super-entities/common-history';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class TipoPessoa extends CommonHistory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty()
  nome: string;
}
