import { FindConditions, Repository } from 'typeorm';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';

export class RepositoryCustom<T> extends Repository<T> {
  async exists(
    where?:
      | Array<FindConditions<T>>
      | FindConditions<T>
      | ObjectLiteral
      | string
  ): Promise<boolean> {
    return !!(await this.findOne({ where }));
  }
}
