import { IsDefined, IsNotEmpty, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class SearchTermDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  @ApiProperty()
  term: string;
}
