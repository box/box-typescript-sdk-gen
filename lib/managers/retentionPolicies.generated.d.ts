import { RetentionPolicies } from "../schemas.generated.js";
import { RetentionPolicy } from "../schemas.generated.js";
import { UserMini } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export type GetRetentionPoliciesQueryParamsArgPolicyTypeField = "finite" | "indefinite";
export interface GetRetentionPoliciesQueryParamsArg {
    readonly policyName?: string;
    readonly policyType?: GetRetentionPoliciesQueryParamsArgPolicyTypeField;
    readonly createdByUserId?: string;
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export declare class GetRetentionPoliciesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetRetentionPoliciesHeadersArg);
}
export type CreateRetentionPolicyRequestBodyArgPolicyTypeField = "finite" | "indefinite";
export type CreateRetentionPolicyRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export type CreateRetentionPolicyRequestBodyArgRetentionTypeField = "modifiable" | "non-modifiable";
export interface CreateRetentionPolicyRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly policyType: CreateRetentionPolicyRequestBodyArgPolicyTypeField;
    readonly dispositionAction: CreateRetentionPolicyRequestBodyArgDispositionActionField;
    readonly retentionLength?: string;
    readonly retentionType?: CreateRetentionPolicyRequestBodyArgRetentionTypeField;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export declare class CreateRetentionPolicyHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateRetentionPolicyHeadersArg);
}
export interface GetRetentionPolicyByIdQueryParamsArg {
    readonly fields?: string;
}
export declare class GetRetentionPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetRetentionPolicyByIdHeadersArg);
}
export type UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export interface UpdateRetentionPolicyByIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly dispositionAction?: UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField;
    readonly retentionType?: string;
    readonly retentionLength?: string;
    readonly status?: string;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export declare class UpdateRetentionPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: UpdateRetentionPolicyByIdHeadersArg);
}
export declare class DeleteRetentionPolicyByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteRetentionPolicyByIdHeadersArg);
}
export declare class RetentionPoliciesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<RetentionPoliciesManager, "getRetentionPolicies" | "createRetentionPolicy" | "getRetentionPolicyById" | "updateRetentionPolicyById" | "deleteRetentionPolicyById">);
    getRetentionPolicies(queryParams?: GetRetentionPoliciesQueryParamsArg, headers?: GetRetentionPoliciesHeadersArg): Promise<RetentionPolicies>;
    createRetentionPolicy(requestBody: CreateRetentionPolicyRequestBodyArg, headers?: CreateRetentionPolicyHeadersArg): Promise<RetentionPolicy>;
    getRetentionPolicyById(retentionPolicyId: string, queryParams?: GetRetentionPolicyByIdQueryParamsArg, headers?: GetRetentionPolicyByIdHeadersArg): Promise<RetentionPolicy>;
    updateRetentionPolicyById(retentionPolicyId: string, requestBody: UpdateRetentionPolicyByIdRequestBodyArg, headers?: UpdateRetentionPolicyByIdHeadersArg): Promise<RetentionPolicy>;
    deleteRetentionPolicyById(retentionPolicyId: string, headers?: DeleteRetentionPolicyByIdHeadersArg): Promise<undefined>;
}
export declare function serializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val: CreateRetentionPolicyRequestBodyArgPolicyTypeField): Json;
export declare function deserializeCreateRetentionPolicyRequestBodyArgPolicyTypeField(val: any): CreateRetentionPolicyRequestBodyArgPolicyTypeField;
export declare function serializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val: CreateRetentionPolicyRequestBodyArgDispositionActionField): Json;
export declare function deserializeCreateRetentionPolicyRequestBodyArgDispositionActionField(val: any): CreateRetentionPolicyRequestBodyArgDispositionActionField;
export declare function serializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val: CreateRetentionPolicyRequestBodyArgRetentionTypeField): Json;
export declare function deserializeCreateRetentionPolicyRequestBodyArgRetentionTypeField(val: any): CreateRetentionPolicyRequestBodyArgRetentionTypeField;
export declare function serializeCreateRetentionPolicyRequestBodyArg(val: CreateRetentionPolicyRequestBodyArg): Json;
export declare function deserializeCreateRetentionPolicyRequestBodyArg(val: any): CreateRetentionPolicyRequestBodyArg;
export declare function serializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val: UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField): Json;
export declare function deserializeUpdateRetentionPolicyByIdRequestBodyArgDispositionActionField(val: any): UpdateRetentionPolicyByIdRequestBodyArgDispositionActionField;
export declare function serializeUpdateRetentionPolicyByIdRequestBodyArg(val: UpdateRetentionPolicyByIdRequestBodyArg): Json;
export declare function deserializeUpdateRetentionPolicyByIdRequestBodyArg(val: any): UpdateRetentionPolicyByIdRequestBodyArg;
