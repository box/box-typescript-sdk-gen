import { User } from './user.generated.js';
import { TrackingCode } from './trackingCode.generated.js';
import { SerializedData } from '../serialization/json.js';
export type UserFullRoleField = 'admin' | 'coadmin' | 'user' | string;
export type UserFullEnterpriseTypeField = 'enterprise';
export interface UserFullEnterpriseField {
    /**
     * The unique identifier for this enterprise. */
    readonly id?: string;
    /**
     * The value will always be `enterprise`. */
    readonly type?: UserFullEnterpriseTypeField;
    /**
     * The name of the enterprise. */
    readonly name?: string;
    readonly rawData?: SerializedData;
}
export declare class UserFull extends User {
    readonly role?: UserFullRoleField;
    readonly trackingCodes?: readonly TrackingCode[];
    readonly canSeeManagedUsers?: boolean;
    readonly isSyncEnabled?: boolean;
    readonly isExternalCollabRestricted?: boolean;
    readonly isExemptFromDeviceLimits?: boolean;
    readonly isExemptFromLoginVerification?: boolean;
    readonly enterprise?: UserFullEnterpriseField;
    readonly myTags?: readonly string[];
    readonly hostname?: string;
    readonly isPlatformAccessOnly?: boolean;
    readonly externalAppUserId?: string;
    constructor(fields: UserFull);
}
export declare function serializeUserFullRoleField(val: UserFullRoleField): SerializedData;
export declare function deserializeUserFullRoleField(val: SerializedData): UserFullRoleField;
export declare function serializeUserFullEnterpriseTypeField(val: UserFullEnterpriseTypeField): SerializedData;
export declare function deserializeUserFullEnterpriseTypeField(val: SerializedData): UserFullEnterpriseTypeField;
export declare function serializeUserFullEnterpriseField(val: UserFullEnterpriseField): SerializedData;
export declare function deserializeUserFullEnterpriseField(val: SerializedData): UserFullEnterpriseField;
export declare function serializeUserFull(val: UserFull): SerializedData;
export declare function deserializeUserFull(val: SerializedData): UserFull;
//# sourceMappingURL=userFull.generated.d.ts.map