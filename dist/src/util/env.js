"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("config");
function getEnvVar(property) {
    try {
        return config_1.get(property);
    }
    catch (e) {
        return process.env[property];
    }
}
exports.getEnvVar = getEnvVar;
exports.isProd = getEnvVar('NODE_ENV') === 'production';
exports.LOCALE_ID = 'pt-BR';
//# sourceMappingURL=env.js.map