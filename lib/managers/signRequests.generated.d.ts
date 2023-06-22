import { SignRequestCreateRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface GetSignRequestsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class SignRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SignRequestsManager, "cancelSignRequest" | "resendSignRequest" | "getSignRequestById" | "getSignRequests" | "createSignRequest">);
    cancelSignRequest(signRequestId: string): Promise<any>;
    resendSignRequest(signRequestId: string): Promise<any>;
    getSignRequestById(signRequestId: string): Promise<any>;
    getSignRequests(options?: GetSignRequestsOptionsArg): Promise<any>;
    createSignRequest(requestBody: SignRequestCreateRequest): Promise<any>;
}
