import { get } from 'config';

type Env =
  | 'NODE_ENV'
  | 'DB_HOST'
  | 'DB_PORT'
  | 'DB_USERNAME'
  | 'DB_PASSWORD'
  | 'DB_NAME'
  | 'DB_SYNC'
  | 'JWT_SECRET'
  | 'JWT_EXPIRES_IN'
  | 'SECRET_CHAR'
  | 'PORT'
  | 'HOST';

export function getEnvVar(property: string): any {
  try {
    return get(property);
  } catch (e) {
    return process.env[property];
  }
}

export const isProd = getEnvVar('NODE_ENV') === 'production';
