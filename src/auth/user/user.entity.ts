import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcryptjs';
import { ApiProperty } from '@nestjs/swagger';
import { CommonHistory } from '../../shared/super-entities/common-history';
import { ThemesEnum } from './themes.enum';

@Entity()
export class User extends CommonHistory {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id: number;

  @Column({ unique: true })
  @ApiProperty()
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ unique: true })
  @ApiProperty()
  email: string;

  @Column({
    nullable: true,
    type: 'enum',
    enum: ThemesEnum,
    default: ThemesEnum.light,
  })
  @ApiProperty({ enum: ThemesEnum })
  theme: ThemesEnum;

  @ApiProperty()
  token?: string;

  async validatePassword(password: string): Promise<boolean> {
    return (await hash(password, this.salt)) === this.password;
  }
}
