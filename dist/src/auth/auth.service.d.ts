import { AuthRegisterDto } from './user/dto/register';
import { User } from './user/user.entity';
import { UserRepository } from './user/user.repository';
import { JwtService } from '@nestjs/jwt';
import { AuthCredentialsDto } from './user/dto/credentials';
import { UserService } from './user/user.service';
export declare class AuthService {
    private userRepository;
    private jwtService;
    private userService;
    constructor(userRepository: UserRepository, jwtService: JwtService, userService: UserService);
    register(dto: AuthRegisterDto): Promise<User>;
    login(dto: AuthCredentialsDto): Promise<User>;
    private getToken;
    getUser(): User;
    setHistory(entity: any): any;
    setHistoryArray(entities: any[]): any[];
}
