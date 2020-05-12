import { FindConditions, Repository, ObjectLiteral } from 'typeorm';

export class RepositoryCustom<T> extends Repository<T> {
  async exists(
    where?: FindConditions<T>[] | FindConditions<T> | ObjectLiteral | string
  ): Promise<boolean> {
    try {
      return !!(await this.findOne({ where, select: ['id' as any] }));
    } catch (e) {
      return !!(await this.findOne({ where }));
    }
  }

  async findRandom(length = 20, select?: (keyof T)[]): Promise<T[]> {
    const queryBuilder = this.createQueryBuilder()
      .orderBy('rand()')
      .limit(length);
    if (select?.length) {
      queryBuilder.addSelect(select as string[]);
    }
    return queryBuilder.getMany();
  }
}
