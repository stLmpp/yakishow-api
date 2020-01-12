"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("@nestjs/common");
exports.GetUser = common_1.createParamDecorator((data, req) => {
    const user = req.user;
    user.token = req.headers.authorization;
    return user;
});
//# sourceMappingURL=get-user.decorator.js.map