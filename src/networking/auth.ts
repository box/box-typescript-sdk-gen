import { AccessToken } from '../schemas.generated';
import { NetworkSession } from './network.generated';

export interface Authentication {
  retrieveToken: (networkSession?: NetworkSession) => Promise<AccessToken>;
  refreshToken: (networkSession?: NetworkSession) => Promise<AccessToken>;
}
