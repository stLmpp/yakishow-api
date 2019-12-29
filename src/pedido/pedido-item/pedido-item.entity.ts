import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonHistory } from '../../shared/super-entities/common-history';
import { ApiProperty } from '@nestjs/swagger';
import { Produto } from '../../produto/produto.entity';
import { Pedido } from '../pedido.entity';

@Entity()
export class PedidoItem extends CommonHistory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ unique: false, nullable: true })
  @ApiProperty()
  produtoId: number;

  @ManyToOne(
    () => Produto,
    produto => produto.pedidoItems
  )
  @JoinColumn()
  produto: Produto;

  @Column({ unique: false })
  pedidoId: number;

  @ManyToOne(
    () => Pedido,
    pedido => pedido.pedidoItems
  )
  @JoinColumn()
  pedido: Pedido;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  @ApiProperty()
  total: number;

  @Column()
  @ApiProperty()
  quantidade: number;
}
