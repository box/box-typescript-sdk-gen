import { v4 as uuidv4 } from 'uuid';

export function getUuid() {
  return uuidv4();
}

export function decodeBase64(value: string) {
  return Buffer.from(value, 'base64').toString('utf8');
}

export function getEnvVar(name: string) {
  return process.env[name] || '';
}
