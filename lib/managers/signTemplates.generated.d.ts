import { SignTemplates } from "../schemas.generated.js";
import { SignTemplate } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetSignTemplatesQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class SignTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SignTemplatesManager, "getSignTemplates" | "getSignTemplateById">);
    getSignTemplates(queryParams?: undefined | GetSignTemplatesQueryParamsArg): Promise<SignTemplates>;
    getSignTemplateById(templateId: string): Promise<SignTemplate>;
}
export declare function newSerializeGetSignTemplatesQueryParamsArg(val: GetSignTemplatesQueryParamsArg): Json;
export declare function newDeserializeGetSignTemplatesQueryParamsArg(val: any): GetSignTemplatesQueryParamsArg;
