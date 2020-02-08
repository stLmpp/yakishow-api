import { EntityRepository, Repository } from 'typeorm';
import { genSalt, hash } from 'bcryptjs';
import { UnauthorizedException } from '@nestjs/common';
import { User } from './user.entity';
import { AuthRegisterDto } from './dto/register';
import { AuthCredentialsDto } from './dto/credentials';
import { mySQLError } from '../../shared/error/my-sql-error';

@EntityRepository(User)
export class UserRepository extends Repository<User> {
  async register(dto: AuthRegisterDto): Promise<User> {
    const user = { ...dto, ...new User() };
    user.salt = await genSalt();
    user.password = await hash(dto.password, user.salt);
    try {
      const newUser = await this.save(user);
      newUser.password = null;
      newUser.salt = null;
      return newUser;
    } catch (err) {
      throw mySQLError(err, 'Erro ao tentar registar o usuário');
    }
  }

  async login(dto: AuthCredentialsDto): Promise<User> {
    const { username, password } = dto;
    const user = await this.createQueryBuilder('user')
      .andWhere('user.username = :username', { username })
      .getOne();
    if (!user) {
      throw new UnauthorizedException('Usuário / Email ou senha inválida');
    }
    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Usuário / Email ou senha inválida');
    }
    user.password = null;
    user.salt = null;
    return user;
  }
}
