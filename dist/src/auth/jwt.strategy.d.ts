import { Strategy } from 'passport-jwt';
import { JwtPayload } from './jwt-payload.interface';
import { UserRepository } from './user/user.repository';
import { User } from './user/user.entity';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    private userRepo;
    constructor(userRepo: UserRepository);
    validate(payload: JwtPayload): Promise<User>;
}
export {};
