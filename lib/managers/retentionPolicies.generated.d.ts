import { UserMini } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
export type RetentionPoliciesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type GetRetentionPoliciesOptionsArgPolicyTypeField = "finite" | "indefinite";
export interface GetRetentionPoliciesOptionsArg {
    readonly policyName?: string;
    readonly policyType?: GetRetentionPoliciesOptionsArgPolicyTypeField;
    readonly createdByUserId?: string;
    readonly fields?: string;
    readonly limit?: number;
    readonly marker?: string;
}
export type PostRetentionPoliciesRequestBodyArgPolicyTypeField = "finite" | "indefinite";
export type PostRetentionPoliciesRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export type PostRetentionPoliciesRequestBodyArgRetentionTypeField = "modifiable" | "non-modifiable";
export interface PostRetentionPoliciesRequestBodyArg {
    readonly policyName: string;
    readonly description?: string;
    readonly policyType: PostRetentionPoliciesRequestBodyArgPolicyTypeField;
    readonly dispositionAction: PostRetentionPoliciesRequestBodyArgDispositionActionField;
    readonly retentionLength?: string;
    readonly retentionType?: PostRetentionPoliciesRequestBodyArgRetentionTypeField;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export interface GetRetentionPoliciesIdOptionsArg {
    readonly fields?: string;
}
export type PutRetentionPoliciesIdRequestBodyArgDispositionActionField = "permanently_delete" | "remove_retention";
export interface PutRetentionPoliciesIdRequestBodyArg {
    readonly policyName?: string;
    readonly description?: string;
    readonly dispositionAction?: PutRetentionPoliciesIdRequestBodyArgDispositionActionField;
    readonly retentionType?: string;
    readonly retentionLength?: string;
    readonly status?: string;
    readonly canOwnerExtendRetention?: boolean;
    readonly areOwnersNotified?: boolean;
    readonly customNotificationRecipients?: readonly UserMini[];
}
export declare class RetentionPoliciesManager {
    readonly auth: RetentionPoliciesManagerAuthField;
    constructor(fields: Omit<RetentionPoliciesManager, "getRetentionPolicies" | "postRetentionPolicies" | "getRetentionPoliciesId" | "putRetentionPoliciesId" | "deleteRetentionPoliciesId">);
    getRetentionPolicies(options?: GetRetentionPoliciesOptionsArg): Promise<any>;
    postRetentionPolicies(requestBody: PostRetentionPoliciesRequestBodyArg): Promise<any>;
    getRetentionPoliciesId(retentionPolicyId: string, options?: GetRetentionPoliciesIdOptionsArg): Promise<any>;
    putRetentionPoliciesId(retentionPolicyId: string, requestBody: PutRetentionPoliciesIdRequestBodyArg): Promise<any>;
    deleteRetentionPoliciesId(retentionPolicyId: string): Promise<any>;
}
