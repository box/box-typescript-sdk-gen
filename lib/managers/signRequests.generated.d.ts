import { SignRequest } from "../schemas.generated.js";
import { SignRequests } from "../schemas.generated.js";
import { SignRequestCreateRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export declare class CancelSignRequestHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CancelSignRequestHeadersArg);
}
export declare class ResendSignRequestHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: ResendSignRequestHeadersArg);
}
export declare class GetSignRequestByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetSignRequestByIdHeadersArg);
}
export interface GetSignRequestsQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetSignRequestsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetSignRequestsHeadersArg);
}
export declare class CreateSignRequestHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateSignRequestHeadersArg);
}
export declare class SignRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SignRequestsManager, "cancelSignRequest" | "resendSignRequest" | "getSignRequestById" | "getSignRequests" | "createSignRequest">);
    cancelSignRequest(signRequestId: string, headers?: CancelSignRequestHeadersArg): Promise<SignRequest>;
    resendSignRequest(signRequestId: string, headers?: ResendSignRequestHeadersArg): Promise<undefined>;
    getSignRequestById(signRequestId: string, headers?: GetSignRequestByIdHeadersArg): Promise<SignRequest>;
    getSignRequests(queryParams?: GetSignRequestsQueryParamsArg, headers?: GetSignRequestsHeadersArg): Promise<SignRequests>;
    createSignRequest(requestBody: SignRequestCreateRequest, headers?: CreateSignRequestHeadersArg): Promise<SignRequest>;
}
