import { AuthRegisterDto } from './user/dto/register';
import { User } from './user/user.entity';
import { UserRepository } from './user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './user/dto/credentials';
export declare class AuthService {
    private userRepository;
    private jwtService;
    constructor(userRepository: UserRepository, jwtService: JwtService);
    register(dto: AuthRegisterDto): Promise<User>;
    login(dto: AuthCredentialsDto): Promise<User>;
    private getToken;
}
