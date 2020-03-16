import { Body, Controller, Get, Post, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './user/dto/register.dto';
import { User } from './user/user.entity';
import { AuthCredentialsDto } from './user/dto/credentials.dto';
import { GetUser } from './get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  async register(@Body() dto: AuthRegisterDto): Promise<User> {
    return this.authService.register(dto);
  }

  @Post('login')
  async login(@Body() dto: AuthCredentialsDto): Promise<User> {
    return this.authService.login(dto);
  }

  @Get('auto-login')
  @UseGuards(AuthGuard())
  async autoLogin(@GetUser() user: User): Promise<User> {
    user.password = null;
    user.salt = null;
    return user;
  }
}
