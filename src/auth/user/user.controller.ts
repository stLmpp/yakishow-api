import { Controller, Param, Patch, Query } from '@nestjs/common';
import { WithAuthGuard } from '../with-auth-guard.decorator';
import { UserService } from './user.service';
import { ParseIntPipe } from '../../shared/pipe/parse-int-pipe';
import { ThemesEnum } from './themes.enum';
import { UpdateResult } from 'typeorm';

@Controller('user')
@WithAuthGuard()
export class UserController {
  constructor(private userService: UserService) {}

  @Patch(':id/theme')
  updateTheme(
    @Param('id', ParseIntPipe) id: number,
    @Query('theme') theme: ThemesEnum
  ): Promise<UpdateResult> {
    return this.userService.updateTheme(id, theme);
  }
}
