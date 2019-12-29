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
import { ApiProperty } from '@nestjs/swagger';
import { PedidoStatusEnum } from './pedido-status.enum';
import { PedidoItem } from './pedido-item/pedido-item.entity';

@Entity()
export class Pedido extends CommonHistory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column()
  @ApiProperty({ enum: PedidoStatusEnum })
  status: PedidoStatusEnum;

  @Column()
  @ApiProperty({ type: String, description: 'Date' })
  dataInicio: Date;

  @Column({ nullable: true })
  @ApiProperty({ type: String, description: 'Date' })
  dataFinalizado: Date;

  @Column()
  @ApiProperty()
  clienteId: number;

  @ManyToOne(() => Pessoa)
  @JoinColumn()
  cliente: Pessoa;

  @Column({ nullable: true })
  @ApiProperty()
  entregadorId: number;

  @ManyToOne(() => Pessoa)
  @JoinColumn()
  entregador: Pessoa;

  @OneToMany(
    () => PedidoItem,
    item => item.pedido
  )
  pedidoItems: PedidoItem[];
}
