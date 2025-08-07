import { TermsOfServiceBase } from './termsOfServiceBase.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TermsOfServiceUserStatusTypeField = 'terms_of_service_user_status';
export declare class TermsOfServiceUserStatus {
    /**
     * The unique identifier for this terms of service user status. */
    readonly id: string;
    /**
     * The value will always be `terms_of_service_user_status`. */
    readonly type: TermsOfServiceUserStatusTypeField;
    readonly tos?: TermsOfServiceBase;
    readonly user?: UserMini;
    /**
     * If the user has accepted the terms of services. */
    readonly isAccepted?: boolean;
    /**
     * When the legal item was created. */
    readonly createdAt?: DateTime;
    /**
     * When the legal item was modified. */
    readonly modifiedAt?: DateTime;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<TermsOfServiceUserStatus, 'type'> & Partial<Pick<TermsOfServiceUserStatus, 'type'>>);
}
export interface TermsOfServiceUserStatusInput {
    /**
     * The unique identifier for this terms of service user status. */
    readonly id: string;
    /**
     * The value will always be `terms_of_service_user_status`. */
    readonly type?: TermsOfServiceUserStatusTypeField;
    readonly tos?: TermsOfServiceBase;
    readonly user?: UserMini;
    /**
     * If the user has accepted the terms of services. */
    readonly isAccepted?: boolean;
    /**
     * When the legal item was created. */
    readonly createdAt?: DateTime;
    /**
     * When the legal item was modified. */
    readonly modifiedAt?: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeTermsOfServiceUserStatusTypeField(val: TermsOfServiceUserStatusTypeField): SerializedData;
export declare function deserializeTermsOfServiceUserStatusTypeField(val: SerializedData): TermsOfServiceUserStatusTypeField;
export declare function serializeTermsOfServiceUserStatus(val: TermsOfServiceUserStatus): SerializedData;
export declare function deserializeTermsOfServiceUserStatus(val: SerializedData): TermsOfServiceUserStatus;
export declare function serializeTermsOfServiceUserStatusInput(val: TermsOfServiceUserStatusInput): SerializedData;
export declare function deserializeTermsOfServiceUserStatusInput(val: SerializedData): TermsOfServiceUserStatusInput;
