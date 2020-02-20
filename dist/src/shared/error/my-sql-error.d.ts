import { MySQLError } from './my-sql-error.model';
export interface TypeormError {
    name: string;
    message: string;
}
export declare function mySQLError(err: MySQLError | TypeormError, message?: string): any;
