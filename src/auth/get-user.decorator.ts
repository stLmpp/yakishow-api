import { createParamDecorator } from '@nestjs/common';
import { User } from './user/user.entity';

export const GetUser = createParamDecorator(
  (data, req): User => {
    const user = req.user;
    user.token = req.headers.authorization;
    return user;
  }
);
