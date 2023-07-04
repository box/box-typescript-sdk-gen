import { SignRequest } from "../schemas.generated.js";
import { SignRequests } from "../schemas.generated.js";
import { SignRequestCreateRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetSignRequestsQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class SignRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SignRequestsManager, "cancelSignRequest" | "resendSignRequest" | "getSignRequestById" | "getSignRequests" | "createSignRequest">);
    cancelSignRequest(signRequestId: string): Promise<SignRequest>;
    resendSignRequest(signRequestId: string): Promise<any>;
    getSignRequestById(signRequestId: string): Promise<SignRequest>;
    getSignRequests(queryParams?: undefined | GetSignRequestsQueryParamsArg): Promise<SignRequests>;
    createSignRequest(requestBody: SignRequestCreateRequest): Promise<SignRequest>;
}
export declare function newSerializeGetSignRequestsQueryParamsArg(val: GetSignRequestsQueryParamsArg): Json;
export declare function newDeserializeGetSignRequestsQueryParamsArg(val: any): GetSignRequestsQueryParamsArg;
