import { AccessToken } from '../schemas/accessToken.generated.js';
export interface TokenStorage {
    /**
     * @param {AccessToken} token
     * @returns {Promise<undefined>}
     */
    store(token: AccessToken): Promise<undefined>;
    /**
     * @returns {Promise<undefined | AccessToken>}
     */
    get(): Promise<undefined | AccessToken>;
    /**
     * @returns {Promise<undefined>}
     */
    clear(): Promise<undefined>;
}
export declare class InMemoryTokenStorage implements TokenStorage {
    token?: AccessToken;
    constructor(fields: Omit<InMemoryTokenStorage, 'token' | 'store' | 'get' | 'clear'> & Partial<Pick<InMemoryTokenStorage, 'token'>>);
    /**
     * @param {AccessToken} token
     * @returns {Promise<undefined>}
     */
    store(token: AccessToken): Promise<undefined>;
    /**
     * @returns {Promise<undefined | AccessToken>}
     */
    get(): Promise<undefined | AccessToken>;
    /**
     * @returns {Promise<undefined>}
     */
    clear(): Promise<undefined>;
}
