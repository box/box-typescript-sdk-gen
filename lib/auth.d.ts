import { NetworkSession } from './network';
export interface Authentication {
    retrieveToken: (networkSession?: NetworkSession) => Promise<string>;
    refreshToken: (networkSession?: NetworkSession) => Promise<string | void>;
}
