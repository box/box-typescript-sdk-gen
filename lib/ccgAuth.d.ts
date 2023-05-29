import { Authentication } from './auth';
import { NetworkSession } from './network';
export type CcgConfig = {
    clientId: string;
    clientSecret: string;
    enterpriseId?: string;
    userId?: string;
};
export declare class CcgAuth implements Authentication {
    config: CcgConfig;
    token?: string;
    subjectId: string;
    subjectType: string;
    constructor({ config }: Pick<CcgAuth, 'config'>);
    retrieveToken(networkSession?: NetworkSession): Promise<string>;
    refreshToken(networkSession?: NetworkSession): Promise<string | undefined>;
    asUser(userId: string): void;
    asEnterprise(enterpriseId: string): void;
}
