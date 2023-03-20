import { SignRequestCreateRequest } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type SignRequestsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetSignRequestsOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class SignRequestsManager {
    readonly auth: SignRequestsManagerAuthField;
    constructor(fields: Omit<SignRequestsManager, "postSignRequestsIdCancel" | "postSignRequestsIdResend" | "getSignRequestsId" | "getSignRequests" | "postSignRequests">);
    postSignRequestsIdCancel(signRequestId: string): Promise<any>;
    postSignRequestsIdResend(signRequestId: string): Promise<any>;
    getSignRequestsId(signRequestId: string): Promise<any>;
    getSignRequests(options?: GetSignRequestsOptionsArg): Promise<any>;
    postSignRequests(requestBody: SignRequestCreateRequest): Promise<any>;
}
