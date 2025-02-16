import { Inject, Injectable, Scope } from '@nestjs/common';
import { REQUEST } from '@nestjs/core';
import { User } from './user.entity';
import { ThemesEnum } from './themes.enum';
import { InjectRepository } from '@nestjs/typeorm';
import { UserRepository } from './user.repository';
import { UpdateResult } from '../../util/types';
import { handleError } from '../../shared/error/handle-error';

export interface MyRequest extends Request {
  user: User;
}

@Injectable({ scope: Scope.REQUEST })
export class UserService {
  constructor(
    @Inject(REQUEST) private request: MyRequest,
    @InjectRepository(UserRepository) private userRepository: UserRepository
  ) {}

  get user(): User {
    return this.request.user;
  }

  async updateTheme(
    idUsuario: number,
    theme: ThemesEnum
  ): Promise<UpdateResult> {
    try {
      return await this.userRepository.update(idUsuario, { theme });
    } catch (err) {
      handleError(err, 'Erro ao tentar atualizar o tema');
    }
  }
}
