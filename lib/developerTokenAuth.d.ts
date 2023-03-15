export interface DeveloperTokenConfig {
    readonly token: string;
}
export declare class DeveloperTokenAuth {
    token: string;
    constructor(config: DeveloperTokenConfig);
    retrieveToken(): Promise<string>;
    refreshToken(): Promise<void>;
}
