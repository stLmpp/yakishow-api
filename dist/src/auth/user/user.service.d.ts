import { User } from './user.entity';
export interface MyRequest extends Request {
    user: User;
}
export declare class UserService {
    private request;
    constructor(request: MyRequest);
    get user(): User;
}
