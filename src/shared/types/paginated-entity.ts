import { ApiProperty } from '@nestjs/swagger';

export class PaginatedEntity {
  @ApiProperty()
  itemCount: number;
  @ApiProperty()
  totalItems: number;
  @ApiProperty()
  pageCount: number;
  @ApiProperty({ description: 'Next URL' })
  next?: string;
  @ApiProperty({ description: 'Previous URL' })
  previous?: string;
}

export interface PaginatedEntityItems<T> {
  items: T[];
}
