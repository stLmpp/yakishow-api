import { IsNotEmpty, IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
  })
  username: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty({
    required: true,
  })
  password: string;
}
