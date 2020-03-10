import { get } from 'config';
import { networkInterfaces } from 'os';

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

export function getHost(): string {
  return isProd
    ? getEnvVar('HOST')
    : (
        networkInterfaces().WiFi ??
        networkInterfaces().Ethernet ??
        networkInterfaces()['Wi-Fi']
      )?.find(o => o.family === 'IPv4').address ?? getEnvVar('HOST');
}

export const isProd = getEnvVar('NODE_ENV') === 'production';
export const LOCALE_ID = 'pt-BR';
