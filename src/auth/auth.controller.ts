import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthRegisterDto } from './user/dto/register';
import { User } from './user/user.entity';
import { AuthCredentialsDto } from './user/dto/credentials';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateHistoryPipe } from './update-history.pipe';
import { GetUser } from './get-user.decorator';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: 200, type: User })
  async register(
    @Body(ValidationPipe, UpdateHistoryPipe) dto: AuthRegisterDto
  ): Promise<User> {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiResponse({ status: 200, type: User })
  async login(@Body(ValidationPipe) dto: AuthCredentialsDto): Promise<User> {
    return this.authService.login(dto);
  }

  @Get('auto-login')
  @UseGuards(AuthGuard())
  @ApiResponse({ status: 200, type: User })
  async autoLogin(@GetUser() user: User): Promise<User> {
    user.password = null;
    user.salt = null;
    return user;
  }
}
