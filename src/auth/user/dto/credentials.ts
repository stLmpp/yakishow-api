import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthCredentialsDto {
  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  username: string;

  @IsDefined()
  @IsNotEmpty()
  @IsString()
  @ApiProperty()
  password: string;
}
