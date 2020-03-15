import { get } from 'config';
import { networkInterfaces } from 'os';

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
