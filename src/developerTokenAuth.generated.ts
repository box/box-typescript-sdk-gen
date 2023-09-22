import { AccessToken } from './schemas.generated.js';
import { Authentication } from './auth.js';
import { NetworkSession } from './network.js';
export class BoxDeveloperTokenAuth implements Authentication {
  readonly token!: string;
  constructor(
    fields: Omit<BoxDeveloperTokenAuth, 'retrieveToken' | 'refreshToken'>
  ) {
    Object.assign(this, fields);
  }
  async retrieveToken(networkSession?: NetworkSession): Promise<AccessToken> {
    return { accessToken: this.token } satisfies AccessToken;
  }
  async refreshToken(networkSession?: NetworkSession): Promise<AccessToken> {
    throw 'Developer token has expired. Please provide a new one.';
  }
}
