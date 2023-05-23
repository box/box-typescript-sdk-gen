import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type SignTemplatesManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetSignTemplatesOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class SignTemplatesManager {
    readonly auth: SignTemplatesManagerAuthField;
    constructor(fields: Omit<SignTemplatesManager, "getSignTemplates" | "getSignTemplateById">);
    getSignTemplates(options?: GetSignTemplatesOptionsArg): Promise<any>;
    getSignTemplateById(templateId: string): Promise<any>;
}
