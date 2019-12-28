import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(50)
  @ApiProperty({
    required: true,
    minLength: 3,
    maxLength: 50,
  })
  username: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(4)
  @ApiProperty({
    required: true,
    minLength: 4,
  })
  password: string;

  @IsString()
  @IsNotEmpty()
  email: string;
}
