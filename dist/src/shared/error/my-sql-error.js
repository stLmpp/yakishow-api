"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const my_sql_error_model_1 = require("./my-sql-error.model");
const common_1 = require("@nestjs/common");
function mySQLError(err, message) {
    let mySqlError = new my_sql_error_model_1.MySQLError();
    if (err.name && err.message) {
        switch (err.name) {
            case 'EntityNotFound':
                mySqlError.errno = 1452;
                mySqlError.code = err.name;
                mySqlError.message = err.message;
                break;
        }
    }
    else {
        mySqlError = new my_sql_error_model_1.MySQLError(err);
    }
    const msg = formatMsg(mySqlError, message);
    switch (mySqlError.errno) {
        case 1452:
            return new common_1.NotFoundException(msg);
        case 1169:
        case 1557:
        case 1062:
            return new common_1.ConflictException(msg);
        case 1048:
            return new common_1.BadRequestException(msg);
    }
}
exports.mySQLError = mySQLError;
function formatMsg({ message, errno, code }, msg) {
    return {
        sqlCode: code,
        sqlErrono: errno,
        sqlMessage: message,
        message: msg,
    };
}
//# sourceMappingURL=my-sql-error.js.map