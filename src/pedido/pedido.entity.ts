import { CommonHistory } from '../shared/super-entities/common-history';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { Pessoa } from '../pessoa/pessoa.entity';
import { PedidoStatusEnum } from './pedido-status.enum';
import { PedidoItem } from './pedido-item/pedido-item.entity';

@Entity()
export class Pedido extends CommonHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'enum', enum: PedidoStatusEnum })
  status: PedidoStatusEnum;

  @Column()
  clienteId: number;

  @ManyToOne(() => Pessoa)
  @JoinColumn()
  cliente: Pessoa;

  @Column({ nullable: true })
  entregadorId: number;

  @ManyToOne(() => Pessoa)
  @JoinColumn()
  entregador: Pessoa;

  @OneToMany(
    () => PedidoItem,
    item => item.pedido,
    {
      cascade: true,
    }
  )
  pedidoItems: PedidoItem[];

  @Column({ nullable: true })
  dataFinalizado: Date;
}
