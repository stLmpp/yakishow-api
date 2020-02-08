"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../util/env");
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
function WithAuthGuard(...guards) {
    return (target) => {
        if (env_1.isProd) {
            common_1.UseGuards(passport_1.AuthGuard(), ...guards)(target);
        }
        else if (guards.length) {
            common_1.UseGuards(...guards)(target);
        }
    };
}
exports.WithAuthGuard = WithAuthGuard;
//# sourceMappingURL=with-auth-guard.decorator.js.map