import { Authentication } from './auth';
import { NetworkSession } from './network';
export declare class DeveloperTokenAuth implements Authentication {
    token: string;
    constructor({ token }: {
        token: string;
    });
    retrieveToken(networkSession?: NetworkSession): Promise<string>;
    refreshToken(networkSession?: NetworkSession): Promise<void>;
}
