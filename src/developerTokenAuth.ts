import { Authentication } from './auth';
import { AccessToken } from './schemas.generated.js';
import { NetworkSession } from './network';

export class DeveloperTokenAuth implements Authentication {
  token: AccessToken;

  constructor({ token }: { token: string }) {
    this.token = { accessToken: token } satisfies AccessToken;
  }

  /**
   * Retrieves stored developer token
   * @param networkSession An object to keep network session state
   * @returns {AccessToken} A stored access token.
   */
  async retrieveToken(networkSession?: NetworkSession) {
    return this.token;
  }

  /**
   * Developer token cannot be refreshed
   * @param networkSession An object to keep network session state
   * @returns Always throws an exception
   */
  async refreshToken(networkSession?: NetworkSession) {
    throw Error('Developer token has expired. Please provide a new one.');
  }
}
