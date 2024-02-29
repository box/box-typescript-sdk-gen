import { AccessToken } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { BoxSdkError } from './errors.js';
export class BoxDeveloperTokenAuth implements Authentication {
  readonly token!: string;
  constructor(
    fields: Omit<
      BoxDeveloperTokenAuth,
      'retrieveToken' | 'refreshToken' | 'retrieveAuthorizationHeader'
    >
  ) {
    Object.assign(this, fields);
  }
  async retrieveToken(networkSession?: NetworkSession): Promise<AccessToken> {
    return { accessToken: this.token } satisfies AccessToken;
  }
  async refreshToken(networkSession?: NetworkSession): Promise<AccessToken> {
    throw new BoxSdkError({
      message: 'Developer token has expired. Please provide a new one.',
    });
  }
  async retrieveAuthorizationHeader(
    networkSession?: NetworkSession
  ): Promise<string> {
    const token: AccessToken = await this.retrieveToken(networkSession);
    return ''.concat('Bearer ', token.accessToken!) as string;
  }
}
