import { NetworkSession } from './network';
import { AccessToken } from './schemas.generated.js';

export interface Authentication {
  retrieveToken: (networkSession?: NetworkSession) => Promise<AccessToken>;
  refreshToken: (
    networkSession?: NetworkSession
  ) => Promise<AccessToken | void>;
}
