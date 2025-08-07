import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type InviteTypeField = 'invite';
export type InviteInvitedToTypeField = 'enterprise';
export interface InviteInvitedToField {
    /**
     * The unique identifier for this enterprise. */
    readonly id?: string;
    /**
     * The value will always be `enterprise`. */
    readonly type?: InviteInvitedToTypeField;
    /**
     * The name of the enterprise. */
    readonly name?: string;
    readonly rawData?: SerializedData;
}
export declare class Invite {
    /**
     * The unique identifier for this invite. */
    readonly id: string;
    /**
     * The value will always be `invite`. */
    readonly type: InviteTypeField;
    /**
     * A representation of a Box enterprise. */
    readonly invitedTo?: InviteInvitedToField;
    readonly actionableBy?: UserMini;
    readonly invitedBy?: UserMini;
    /**
     * The status of the invite. */
    readonly status?: string;
    /**
     * When the invite was created. */
    readonly createdAt?: DateTime;
    /**
     * When the invite was modified. */
    readonly modifiedAt?: DateTime;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<Invite, 'type'> & Partial<Pick<Invite, 'type'>>);
}
export interface InviteInput {
    /**
     * The unique identifier for this invite. */
    readonly id: string;
    /**
     * The value will always be `invite`. */
    readonly type?: InviteTypeField;
    /**
     * A representation of a Box enterprise. */
    readonly invitedTo?: InviteInvitedToField;
    readonly actionableBy?: UserMini;
    readonly invitedBy?: UserMini;
    /**
     * The status of the invite. */
    readonly status?: string;
    /**
     * When the invite was created. */
    readonly createdAt?: DateTime;
    /**
     * When the invite was modified. */
    readonly modifiedAt?: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeInviteTypeField(val: InviteTypeField): SerializedData;
export declare function deserializeInviteTypeField(val: SerializedData): InviteTypeField;
export declare function serializeInviteInvitedToTypeField(val: InviteInvitedToTypeField): SerializedData;
export declare function deserializeInviteInvitedToTypeField(val: SerializedData): InviteInvitedToTypeField;
export declare function serializeInviteInvitedToField(val: InviteInvitedToField): SerializedData;
export declare function deserializeInviteInvitedToField(val: SerializedData): InviteInvitedToField;
export declare function serializeInvite(val: Invite): SerializedData;
export declare function deserializeInvite(val: SerializedData): Invite;
export declare function serializeInviteInput(val: InviteInput): SerializedData;
export declare function deserializeInviteInput(val: SerializedData): InviteInput;
//# sourceMappingURL=invite.generated.d.ts.map