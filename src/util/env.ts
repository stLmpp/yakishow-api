import { get } from 'config';
import { networkInterfaces } from 'os';

export const LOCALE_ID = 'pt-BR';

export function getEnvVar(property: string): any {
  try {
    return get(property);
  } catch (e) {
    return process.env[property];
  }
}

export const isProd = getEnvVar('NODE_ENV') === 'production';

export function getHost(): string {
  return isProd
    ? getEnvVar('HOST')
    : (
        networkInterfaces().WiFi ??
        networkInterfaces().Ethernet ??
        networkInterfaces()['Wi-Fi']
      )?.find(o => o.family === 'IPv4').address ?? getEnvVar('HOST');
}
