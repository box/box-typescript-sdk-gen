export type CCGConfig = {
    clientId: string;
    clientSecret: string;
    enterpriseId?: string;
    userId?: string;
};
export declare class CCGAuth {
    config: CCGConfig;
    token?: string;
    subjectId: string;
    subjectType: string;
    constructor({ config }: Pick<CCGAuth, 'config'>);
    retrieveToken(): Promise<string>;
    refreshToken(): Promise<string | undefined>;
    authenticateUser(userId: string): Promise<string | undefined>;
    authenticateEnterprise(enterpriseId: string): Promise<string | undefined>;
}
