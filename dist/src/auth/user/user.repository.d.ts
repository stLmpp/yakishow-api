import { Repository } from 'typeorm';
import { User } from './user.entity';
import { AuthRegisterDto } from './dto/register';
import { AuthCredentialsDto } from './dto/credentials';
export declare class UserRepository extends Repository<User> {
    register(dto: AuthRegisterDto): Promise<User>;
    login(dto: AuthCredentialsDto): Promise<User>;
}
