import { AuthService } from './auth.service';
import { AuthRegisterDto } from './user/dto/register';
import { User } from './user/user.entity';
import { AuthCredentialsDto } from './user/dto/credentials';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(dto: AuthRegisterDto): Promise<User>;
    login(dto: AuthCredentialsDto): Promise<User>;
    autoLogin(user: User): Promise<User>;
}
