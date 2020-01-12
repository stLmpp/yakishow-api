"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const env_1 = require("../util/env");
exports.DB_TYPEORM_CONFIG = {
    type: 'mysql',
    host: env_1.getEnvVar('DB_HOST'),
    port: env_1.getEnvVar('DB_PORT'),
    username: env_1.getEnvVar('DB_USERNAME'),
    password: env_1.getEnvVar('DB_PASSWORD'),
    database: env_1.getEnvVar('DB_NAME'),
    entities: [__dirname + '/../**/*.entity{.ts,.js}'],
    synchronize: env_1.getEnvVar('DB_SYNC'),
    logging: !env_1.isProd ? 'all' : false,
};
//# sourceMappingURL=db.config.js.map