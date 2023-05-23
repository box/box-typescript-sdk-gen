export declare class DeveloperTokenAuth {
    token: string;
    constructor(token: string);
    retrieveToken(): Promise<string>;
    refreshToken(): Promise<void>;
}
