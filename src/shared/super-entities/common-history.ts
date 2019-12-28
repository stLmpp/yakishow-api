import {
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export abstract class CommonHistory extends BaseEntity {
  @CreateDateColumn()
  @ApiProperty({
    type: String,
    description: 'Date',
  })
  creationDate: Date;

  @UpdateDateColumn()
  @ApiProperty({
    type: String,
    description: 'Date',
  })
  lastUpdateDate: Date;

  @Column({ nullable: true })
  @ApiProperty()
  createdBy: number;

  @Column({ nullable: true })
  @ApiProperty()
  lastUpdatedBy: number;
}
