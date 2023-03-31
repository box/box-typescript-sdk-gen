export declare class JWTConfig {
    clientId: string;
    clientSecret: string;
    jwtKeyId: string;
    privateKey: string;
    privateKeyPassphrase: string;
    enterpriseId?: string;
    userId?: string;
    jwtAlgorithm?: string;
    constructor(fields: Omit<JWTConfig, 'fromConfigJsonString' | 'fromConfigFile'>);
    static fromConfigJsonString(): void;
    static fromConfigFile(): void;
}
export declare class JWTAuth {
    config: JWTConfig;
    token?: string;
    subjectId: string;
    subjectType: string;
    constructor(config: JWTConfig);
    retrieveToken(): Promise<string>;
    refreshToken(): Promise<string>;
    authenticateUser(userId: string): Promise<string>;
    authenticateEnterprise(enterpriseId: string): Promise<string>;
}
