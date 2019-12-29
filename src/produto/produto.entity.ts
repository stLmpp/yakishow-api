import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { CommonHistory } from '../shared/super-entities/common-history';
import { ApiProperty } from '@nestjs/swagger';
import { PedidoItem } from '../pedido/pedido-item/pedido-item.entity';

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

  @Column({ length: 300 })
  @ApiProperty()
  descricao: string;

  @Column('decimal', { precision: 10, scale: 2 })
  @ApiProperty()
  valor: number;

  @OneToMany(
    () => PedidoItem,
    pedidoItem => pedidoItem.produto,
    { cascade: ['insert'] }
  )
  pedidoItems: PedidoItem[];
}
