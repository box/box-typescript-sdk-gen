import { AccessToken } from '../schemas.generated.js';
import { NetworkSession } from './network.generated.js';
export interface Authentication {
  retrieveToken(networkSession?: NetworkSession): Promise<AccessToken>;
  refreshToken(networkSession?: NetworkSession): Promise<AccessToken>;
  retrieveAuthorizationHeader(networkSession?: NetworkSession): Promise<string>;
}
