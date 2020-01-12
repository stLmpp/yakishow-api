"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("config");
function getEnvVar(property) {
    return config_1.get(property);
}
exports.getEnvVar = getEnvVar;
exports.isProd = getEnvVar('NODE_ENV') === 'production';
//# sourceMappingURL=env.js.map