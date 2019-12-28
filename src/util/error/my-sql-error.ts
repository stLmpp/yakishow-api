import { MySQLError, MySQLErrorResponse } from '../types/my-sql-error';
import { ConflictException } from '@nestjs/common';

export function mySQLError(err: MySQLError, message?: string): any {
  const msg = formatMsg(err, message);
  switch (err.errno) {
    case 1169:
    case 1557:
    case 1062:
      return new ConflictException(msg, 'Erro');
  }
}

function formatMsg(
  { message, errno, code }: MySQLError,
  msg?: string,
): MySQLErrorResponse {
  return {
    sqlCode: code,
    sqlErrono: errno,
    sqlMessage: message,
    message: msg,
  };
}
