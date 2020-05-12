import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { hash } from 'bcryptjs';
import { CommonHistory } from '../../shared/super-entities/common-history';
import { ThemesEnum } from './themes.enum';

@Entity()
export class User extends CommonHistory {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  username: string;

  @Column()
  password: string;

  @Column()
  salt: string;

  @Column({ unique: true })
  email: string;

  @Column({
    nullable: true,
    type: 'enum',
    enum: ThemesEnum,
    default: ThemesEnum.light,
  })
  theme: ThemesEnum;

  token?: string;

  async validatePassword(password: string): Promise<boolean> {
    return (await hash(password, this.salt)) === this.password;
  }
}
