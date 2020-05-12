import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user/user.entity';

export const GetUser = createParamDecorator(
  (data: any, ctx: ExecutionContext): User => {
    const req = ctx.switchToHttp().getRequest();
    const user = req.user;
    user.token = req.headers.authorization;
    return user;
  }
);
