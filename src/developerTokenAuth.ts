import { Authentication } from './auth';
import { NetworkSession } from './network';

export class DeveloperTokenAuth implements Authentication {
  token: string;

  constructor({ token }: { token: string }) {
    this.token = token;
  }

  async retrieveToken(networkSession?: NetworkSession) {
    return this.token;
  }

  async refreshToken(networkSession?: NetworkSession) {
    throw Error('Developer token has expired. Please provide a new one.');
  }
}
