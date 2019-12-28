import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';
import { CommonHistory } from '../../shared/super-entities/common-history';

@Entity()
export class User extends CommonHistory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  @ApiProperty()
  username: string;

  @Column({
    nullable: false,
  })
  password: string;

  @Column({
    nullable: false,
  })
  salt: string;

  @Column({
    nullable: false,
  })
  email: string;

  @ApiProperty()
  token?: string;

  async validatePassword(password: string): Promise<boolean> {
    return (await hash(password, this.salt)) === this.password;
  }
}
