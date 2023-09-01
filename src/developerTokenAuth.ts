import { Authentication } from './auth';
import { AccessToken } from './schemas.generated.js';
import { NetworkSession } from './network';

export class DeveloperTokenAuth implements Authentication {
  token: AccessToken;

  constructor({ token }: { token: string }) {
    this.token = { accessToken: token } satisfies AccessToken;
  }

  async retrieveToken(networkSession?: NetworkSession) {
    return this.token;
  }

  async refreshToken(networkSession?: NetworkSession) {
    throw Error('Developer token has expired. Please provide a new one.');
  }
}
