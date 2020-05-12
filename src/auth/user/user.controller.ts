import { Controller, Param, Patch, Query } from '@nestjs/common';
import { WithAuthGuard } from '../with-auth-guard.decorator';
import { UserService } from './user.service';
import { ThemesEnum } from './themes.enum';
import { ApiQuery, ApiTags } from '@nestjs/swagger';
import { UpdateResult } from '../../util/types';
import { ParseEnumPipe } from '../../shared/pipe/parse-enum.pipe';

@Controller('user')
@WithAuthGuard()
@ApiTags('User')
export class UserController {
  constructor(private userService: UserService) {}

  @Patch(':idUsuario/theme')
  @ApiQuery({ name: 'theme', enum: ThemesEnum })
  updateTheme(
    @Param('idUsuario') idUsuario: number,
    @Query('theme', ParseEnumPipe) theme: ThemesEnum
  ): Promise<UpdateResult> {
    return this.userService.updateTheme(idUsuario, theme);
  }
}
