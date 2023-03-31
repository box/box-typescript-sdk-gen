import { SignRequestCreateRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type SignRequestsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetSignRequestsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class SignRequestsManager {
    readonly auth: SignRequestsManagerAuthField;
    constructor(fields: Omit<SignRequestsManager, "createSignRequestCancel" | "createSignRequestResend" | "getSignRequestById" | "getSignRequests" | "createSignRequest">);
    createSignRequestCancel(signRequestId: string): Promise<any>;
    createSignRequestResend(signRequestId: string): Promise<any>;
    getSignRequestById(signRequestId: string): Promise<any>;
    getSignRequests(options?: GetSignRequestsOptionsArg): Promise<any>;
    createSignRequest(requestBody: SignRequestCreateRequest): Promise<any>;
}
