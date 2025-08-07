import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type CollaborationAllowlistEntryTypeField = 'collaboration_whitelist_entry';
export type CollaborationAllowlistEntryDirectionField = 'inbound' | 'outbound' | 'both' | string;
export type CollaborationAllowlistEntryEnterpriseTypeField = 'enterprise';
export interface CollaborationAllowlistEntryEnterpriseField {
    /**
     * The unique identifier for this enterprise. */
    readonly id?: string;
    /**
     * The value will always be `enterprise`. */
    readonly type?: CollaborationAllowlistEntryEnterpriseTypeField;
    /**
     * The name of the enterprise. */
    readonly name?: string;
    readonly rawData?: SerializedData;
}
export interface CollaborationAllowlistEntry {
    /**
     * The unique identifier for this entry. */
    readonly id?: string;
    /**
     * The value will always be `collaboration_whitelist_entry`. */
    readonly type?: CollaborationAllowlistEntryTypeField;
    /**
     * The whitelisted domain. */
    readonly domain?: string;
    /**
     * The direction of the collaborations to allow. */
    readonly direction?: CollaborationAllowlistEntryDirectionField;
    readonly enterprise?: CollaborationAllowlistEntryEnterpriseField;
    /**
     * The time the entry was created at. */
    readonly createdAt?: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeCollaborationAllowlistEntryTypeField(val: CollaborationAllowlistEntryTypeField): SerializedData;
export declare function deserializeCollaborationAllowlistEntryTypeField(val: SerializedData): CollaborationAllowlistEntryTypeField;
export declare function serializeCollaborationAllowlistEntryDirectionField(val: CollaborationAllowlistEntryDirectionField): SerializedData;
export declare function deserializeCollaborationAllowlistEntryDirectionField(val: SerializedData): CollaborationAllowlistEntryDirectionField;
export declare function serializeCollaborationAllowlistEntryEnterpriseTypeField(val: CollaborationAllowlistEntryEnterpriseTypeField): SerializedData;
export declare function deserializeCollaborationAllowlistEntryEnterpriseTypeField(val: SerializedData): CollaborationAllowlistEntryEnterpriseTypeField;
export declare function serializeCollaborationAllowlistEntryEnterpriseField(val: CollaborationAllowlistEntryEnterpriseField): SerializedData;
export declare function deserializeCollaborationAllowlistEntryEnterpriseField(val: SerializedData): CollaborationAllowlistEntryEnterpriseField;
export declare function serializeCollaborationAllowlistEntry(val: CollaborationAllowlistEntry): SerializedData;
export declare function deserializeCollaborationAllowlistEntry(val: SerializedData): CollaborationAllowlistEntry;
