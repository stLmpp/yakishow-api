import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

export abstract class CommonHistory extends BaseEntity {
  @CreateDateColumn()
  @ApiProperty()
  creationDate: Date;

  @UpdateDateColumn()
  @ApiProperty()
  lastUpdateDate: Date;
}
