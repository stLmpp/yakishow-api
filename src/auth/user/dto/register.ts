import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthRegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({
    minLength: 3,
    maxLength: 50,
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({
    minLength: 4,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
