import { FindConditions, Repository } from 'typeorm';
import { ObjectLiteral } from 'typeorm/common/ObjectLiteral';
export declare class RepositoryCustom<T> extends Repository<T> {
    exists(where?: Array<FindConditions<T>> | FindConditions<T> | ObjectLiteral | string): Promise<boolean>;
}
