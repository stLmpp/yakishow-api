import { BaseEntity, CreateDateColumn, UpdateDateColumn } from 'typeorm';

export abstract class CommonHistory extends BaseEntity {
  @CreateDateColumn()
  creationDate: Date;

  @UpdateDateColumn()
  lastUpdateDate?: Date;
}
