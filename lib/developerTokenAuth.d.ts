export declare class DeveloperTokenAuth {
    token: string;
    constructor({ token }: {
        token: string;
    });
    retrieveToken(): Promise<string>;
    refreshToken(): Promise<void>;
}
