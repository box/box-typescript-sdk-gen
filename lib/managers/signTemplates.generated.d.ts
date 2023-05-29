import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetSignTemplatesOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class SignTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SignTemplatesManager, "getSignTemplates" | "getSignTemplateById">);
    getSignTemplates(options?: GetSignTemplatesOptionsArg): Promise<any>;
    getSignTemplateById(templateId: string): Promise<any>;
}
