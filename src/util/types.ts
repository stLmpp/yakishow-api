import { ApiProperty } from '@nestjs/swagger';

export type Entity<T = any> = {
  [id in string | number]: T;
};

export class UpdateResultRaw {
  @ApiProperty() fieldCount: number;
  @ApiProperty() affectedRows: number;
  @ApiProperty() insertId: number;
  @ApiProperty() serverStatus: number;
  @ApiProperty() warningCount: number;
  @ApiProperty() message: string;
  @ApiProperty() protocol41: boolean;
  @ApiProperty() changedRows: number;
}

export class UpdateResult {
  @ApiProperty() raw: UpdateResultRaw;
  @ApiProperty({ required: false }) affected?: number;
  @ApiProperty() generatedMaps: any[];
}
