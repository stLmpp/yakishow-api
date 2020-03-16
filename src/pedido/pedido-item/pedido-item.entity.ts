import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CommonHistory } from '../../shared/super-entities/common-history';
import { Produto } from '../../produto/produto.entity';
import { Pedido } from '../pedido.entity';

@Entity()
export class PedidoItem extends CommonHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  produtoId: number;

  @ManyToOne(() => Produto)
  @JoinColumn()
  produto: Produto;

  @Column()
  pedidoId: number;

  @ManyToOne(
    () => Pedido,
    pedido => pedido.pedidoItems
  )
  @JoinColumn()
  pedido: Pedido;

  @Column()
  quantidade: number;

  @Column('decimal', { precision: 10, scale: 2, nullable: true })
  total: number;

  @Column({ length: 500 })
  observacao: string;
}
