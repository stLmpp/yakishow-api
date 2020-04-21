import { EntityRepository, Repository } from 'typeorm';
import { genSalt, hash } from 'bcryptjs';
import { UnauthorizedException } from '@nestjs/common';
import { User } from './user.entity';
import { AuthRegisterDto } from './dto/register.dto';
import { AuthCredentialsDto } from './dto/credentials.dto';
import { handleError } from '../../shared/error/handle-error';

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
      handleError(err, 'Erro ao tentar registar o usuário');
    }
  }

  async login(dto: AuthCredentialsDto): Promise<User> {
    const { username, password } = dto;
    const user = await this.findOne({
      where: [{ username }, { email: username }],
    });
    const errorMessage = 'Login ou senha inválidos';
    if (!user) {
      throw new UnauthorizedException(errorMessage);
    }
    const isPasswordValid = await user.validatePassword(password);
    if (!isPasswordValid) {
      throw new UnauthorizedException(errorMessage);
    }
    user.password = null;
    user.salt = null;
    return user;
  }
}
