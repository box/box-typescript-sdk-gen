import { SignTemplates } from "../schemas.generated.js";
import { SignTemplate } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetSignTemplatesQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetSignTemplatesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetSignTemplatesHeadersArg);
}
export declare class GetSignTemplateByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetSignTemplateByIdHeadersArg);
}
export declare class SignTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SignTemplatesManager, "getSignTemplates" | "getSignTemplateById">);
    getSignTemplates(queryParams?: GetSignTemplatesQueryParamsArg, headers?: GetSignTemplatesHeadersArg): Promise<SignTemplates>;
    getSignTemplateById(templateId: string, headers?: GetSignTemplateByIdHeadersArg): Promise<SignTemplate>;
}
