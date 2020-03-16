import {
  IsEmail,
  IsNotEmpty,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class AuthRegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  password: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  email: string;
}
