import { AuthRegisterDto } from './user/dto/register';
import { User } from './user/user.entity';
import { UserRepository } from './user/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './user/dto/credentials';
import { UserService } from './user/user.service';
import { CommonHistory } from '../shared/super-entities/common-history';

export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService,
    private userService: UserService
  ) {}

  async register(dto: AuthRegisterDto): Promise<User> {
    const user = await this.userRepository.register(dto);
    user.token = await this.getToken(user.id);
    return user;
  }

  async login(dto: AuthCredentialsDto): Promise<User> {
    const user = await this.userRepository.login(dto);
    user.token = await this.getToken(user.id);
    return user;
  }

  private async getToken(id: number): Promise<string> {
    return await this.jwtService.signAsync({ id });
  }

  getUser(): User {
    return this.userService.user;
  }

  setHistory<T extends CommonHistory>(entity: T): T {
    const user = this.getUser();
    const id = user ? user.id : -1;
    if (!entity.createdBy) entity.createdBy = id;
    entity.lastUpdatedBy = id;
    return entity;
  }

  setHistoryArray<T extends CommonHistory>(entities: T[]): T[] {
    let index = entities.length;
    while (index--) entities[index] = this.setHistory(entities[index]);
    return entities;
  }
}
