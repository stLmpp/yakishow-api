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
  | 'SECRET_CHAR';

export function getEnvVar(property: Env): any {
  return get(property);
}

export const isProd = getEnvVar('NODE_ENV') === 'production';
