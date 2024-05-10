import { AccessToken } from '../schemas/accessToken.generated.js';
import { NetworkSession } from './network.generated.js';
export interface Authentication {
  retrieveToken(networkSession?: NetworkSession): Promise<AccessToken>;
  refreshToken(networkSession?: NetworkSession): Promise<AccessToken>;
  retrieveAuthorizationHeader(networkSession?: NetworkSession): Promise<string>;
  revokeToken(networkSession?: NetworkSession): Promise<undefined>;
  downscopeToken(
    scopes: readonly string[],
    resource?: string,
    sharedLink?: string,
    networkSession?: NetworkSession
  ): Promise<AccessToken>;
}
