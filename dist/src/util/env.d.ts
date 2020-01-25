declare type Env = 'NODE_ENV' | 'DB_HOST' | 'DB_PORT' | 'DB_USERNAME' | 'DB_PASSWORD' | 'DB_NAME' | 'DB_SYNC' | 'JWT_SECRET' | 'JWT_EXPIRES_IN' | 'SECRET_CHAR' | 'PORT';
export declare function getEnvVar(property: Env): any;
export declare const isProd: boolean;
export {};
