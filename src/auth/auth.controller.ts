import { Body, Controller, Post, ValidationPipe } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './user/dto/register.dto';
import { User } from './user/user.entity';
import { CredentialsDto } from './user/dto/credentials.dto';
import { ApiResponse } from '@nestjs/swagger';
import { UpdateHistoryPipe } from './update-history.pipe';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('register')
  @ApiResponse({ status: 200, type: User })
  async register(
    @Body(ValidationPipe, UpdateHistoryPipe) dto: RegisterDto,
  ): Promise<User> {
    return this.authService.register(dto);
  }

  @Post('login')
  @ApiResponse({ status: 200, type: User })
  async login(@Body(ValidationPipe) dto: CredentialsDto): Promise<User> {
    return this.authService.login(dto);
  }
}
