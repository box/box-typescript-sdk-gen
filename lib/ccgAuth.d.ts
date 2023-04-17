export type CcgConfig = {
    clientId: string;
    clientSecret: string;
    enterpriseId?: string;
    userId?: string;
};
export declare class CcgAuth {
    config: CcgConfig;
    token?: string;
    subjectId: string;
    subjectType: string;
    constructor({ config }: Pick<CcgAuth, 'config'>);
    retrieveToken(): Promise<string>;
    refreshToken(): Promise<string | undefined>;
    authenticateUser(userId: string): Promise<string | undefined>;
    authenticateEnterprise(enterpriseId: string): Promise<string | undefined>;
}
