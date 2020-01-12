"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
function mySQLError(err, message) {
    const msg = formatMsg(err, message);
    switch (err.errno) {
        case 1169:
        case 1557:
        case 1062:
            return new common_1.ConflictException(msg, 'Erro');
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