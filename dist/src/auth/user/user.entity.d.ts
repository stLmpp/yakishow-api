import { CommonHistory } from '../../shared/super-entities/common-history';
export declare class User extends CommonHistory {
    id: number;
    username: string;
    password: string;
    salt: string;
    email: string;
    token?: string;
    validatePassword(password: string): Promise<boolean>;
}
