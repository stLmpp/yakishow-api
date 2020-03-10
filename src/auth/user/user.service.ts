import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { User } from './user.entity';
import { ThemesEnum } from './themes.enum';
import { UpdateResult } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';

export interface MyRequest extends Request {
  user: User;
}

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  constructor(
    @Inject(REQUEST)
    private request: MyRequest,
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) {}

  get user(): User {
    return this.request.user;
  }

  async updateTheme(id: number, theme: ThemesEnum): Promise<UpdateResult> {
    return await this.userRepository.update(id, { theme });
  }
}
