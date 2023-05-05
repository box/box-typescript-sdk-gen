import { SignRequestCreateRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
import { JwtAuth } from "../jwtAuth.js";
export type SignRequestsManagerAuthField = DeveloperTokenAuth | CcgAuth | JwtAuth;
export interface GetSignRequestsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class SignRequestsManager {
    readonly auth: SignRequestsManagerAuthField;
    constructor(fields: Omit<SignRequestsManager, "cancelSignRequest" | "resendSignRequest" | "getSignRequestById" | "getSignRequests" | "createSignRequest">);
    cancelSignRequest(signRequestId: string): Promise<any>;
    resendSignRequest(signRequestId: string): Promise<any>;
    getSignRequestById(signRequestId: string): Promise<any>;
    getSignRequests(options?: GetSignRequestsOptionsArg): Promise<any>;
    createSignRequest(requestBody: SignRequestCreateRequest): Promise<any>;
}
