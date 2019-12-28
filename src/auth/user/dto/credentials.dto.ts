import { IsNotEmpty, IsString, IsDefined } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class CredentialsDto {
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
