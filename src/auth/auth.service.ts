import { AuthRegisterDto } from './user/dto/register';
import { User } from './user/user.entity';
import { UserRepository } from './user/user.repository';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './user/dto/credentials';

export class AuthService {
  constructor(
    @InjectRepository(UserRepository)
    private userRepository: UserRepository,
    private jwtService: JwtService
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
}
