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

  @Column({ type: 'enum', enum: PedidoStatusEnum })
  @ApiProperty({ enum: PedidoStatusEnum })
  status: PedidoStatusEnum;

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
  @ApiProperty({
    type: PedidoItem,
    isArray: true,
  })
  pedidoItems: PedidoItem[];
}
