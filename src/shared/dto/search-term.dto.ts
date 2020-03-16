import { IsDefined, IsNotEmpty, IsString } from 'class-validator';

export class SearchTermDto {
  @IsString()
  @IsDefined()
  @IsNotEmpty()
  term: string;
}
