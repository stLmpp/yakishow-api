import { MySQLError, MySQLErrorResponse } from './my-sql-error.model';
import {
  BadRequestException,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';

export interface TypeormError {
  name: string;
  message: string;
}

export function mySQLError(
  err: MySQLError | TypeormError,
  message?: string
): any {
  let mySqlError = new MySQLError();
  if (err.name && err.message) {
    switch (err.name) {
      case 'EntityNotFound':
        mySqlError.errno = 1452;
        mySqlError.code = err.name;
        mySqlError.message = err.message;
        break;
      default: {
        mySqlError = new MySQLError(err);
        break;
      }
    }
  } else {
    mySqlError = new MySQLError(err);
  }
  const msg = formatMsg(mySqlError, message);
  switch (mySqlError.errno) {
    case 1452:
      return new NotFoundException(msg);
    case 1169:
    case 1557:
    case 1062:
      return new ConflictException(msg);
    case 1048:
      return new BadRequestException(msg);
  }
}

function formatMsg(
  { message, errno, code }: MySQLError,
  msg?: string
): MySQLErrorResponse {
  return {
    sqlCode: code,
    sqlErrono: errno,
    sqlMessage: message,
    message: msg,
  };
}
