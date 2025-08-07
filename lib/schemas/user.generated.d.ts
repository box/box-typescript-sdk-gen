import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type UserStatusField = 'active' | 'inactive' | 'cannot_delete_edit' | 'cannot_delete_edit_upload' | string;
export interface UserNotificationEmailField {
    /**
     * The email address to send the notifications to. */
    readonly email?: string;
    /**
     * Specifies if this email address has been confirmed. */
    readonly isConfirmed?: boolean;
    readonly rawData?: SerializedData;
}
export declare class User extends UserMini {
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly language?: string;
    readonly timezone?: string;
    readonly spaceAmount?: number;
    readonly spaceUsed?: number;
    readonly maxUploadSize?: number;
    readonly status?: UserStatusField;
    readonly jobTitle?: string;
    readonly phone?: string;
    readonly address?: string;
    readonly avatarUrl?: string;
    readonly notificationEmail?: UserNotificationEmailField | null;
    constructor(fields: User);
}
export declare function serializeUserStatusField(val: UserStatusField): SerializedData;
export declare function deserializeUserStatusField(val: SerializedData): UserStatusField;
export declare function serializeUserNotificationEmailField(val: UserNotificationEmailField): SerializedData;
export declare function deserializeUserNotificationEmailField(val: SerializedData): UserNotificationEmailField;
export declare function serializeUser(val: User): SerializedData;
export declare function deserializeUser(val: SerializedData): User;
//# sourceMappingURL=user.generated.d.ts.map