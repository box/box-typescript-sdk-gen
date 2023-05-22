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
    asUser(userId: string): void;
    asEnterprise(enterpriseId: string): void;
}
