import { NetworkSession } from './network.generated';
import { AccessToken } from './schemas.generated';

export interface Authentication {
  retrieveToken: (networkSession?: NetworkSession) => Promise<AccessToken>;
  refreshToken: (networkSession?: NetworkSession) => Promise<AccessToken>;
}
