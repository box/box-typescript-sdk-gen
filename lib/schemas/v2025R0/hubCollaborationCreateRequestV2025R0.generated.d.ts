import { SerializedData } from '../../serialization/json.js';
export type HubCollaborationCreateRequestV2025R0HubTypeField = 'hubs';
export declare class HubCollaborationCreateRequestV2025R0HubField {
    /**
     * The value will always be `hubs`. */
    readonly type: HubCollaborationCreateRequestV2025R0HubTypeField;
    /**
     * ID of the object. */
    readonly id: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<HubCollaborationCreateRequestV2025R0HubField, 'type'> & Partial<Pick<HubCollaborationCreateRequestV2025R0HubField, 'type'>>);
}
export interface HubCollaborationCreateRequestV2025R0HubFieldInput {
    /**
     * The value will always be `hubs`. */
    readonly type?: HubCollaborationCreateRequestV2025R0HubTypeField;
    /**
     * ID of the object. */
    readonly id: string;
    readonly rawData?: SerializedData;
}
export interface HubCollaborationCreateRequestV2025R0AccessibleByField {
    /**
     * The type of collaborator to invite.
     * Possible values are `user` or `group`. */
    readonly type: string;
    /**
     * The ID of the user or group.
     *
     * Alternatively, use `login` to specify a user by email
     * address. */
    readonly id?: string;
    /**
     * The email address of the user who gets access to the item.
     *
     * Alternatively, use `id` to specify a user by user ID. */
    readonly login?: string;
    readonly rawData?: SerializedData;
}
export interface HubCollaborationCreateRequestV2025R0 {
    /**
     * Hubs reference. */
    readonly hub: HubCollaborationCreateRequestV2025R0HubField;
    /**
     * The user or group who gets access to the item. */
    readonly accessibleBy: HubCollaborationCreateRequestV2025R0AccessibleByField;
    /**
     * The level of access granted to hub.
     * Possible values are `editor`, `viewer`, and `co-owner`. */
    readonly role: string;
    readonly rawData?: SerializedData;
}
export declare function serializeHubCollaborationCreateRequestV2025R0HubTypeField(val: HubCollaborationCreateRequestV2025R0HubTypeField): SerializedData;
export declare function deserializeHubCollaborationCreateRequestV2025R0HubTypeField(val: SerializedData): HubCollaborationCreateRequestV2025R0HubTypeField;
export declare function serializeHubCollaborationCreateRequestV2025R0HubField(val: HubCollaborationCreateRequestV2025R0HubField): SerializedData;
export declare function deserializeHubCollaborationCreateRequestV2025R0HubField(val: SerializedData): HubCollaborationCreateRequestV2025R0HubField;
export declare function serializeHubCollaborationCreateRequestV2025R0HubFieldInput(val: HubCollaborationCreateRequestV2025R0HubFieldInput): SerializedData;
export declare function deserializeHubCollaborationCreateRequestV2025R0HubFieldInput(val: SerializedData): HubCollaborationCreateRequestV2025R0HubFieldInput;
export declare function serializeHubCollaborationCreateRequestV2025R0AccessibleByField(val: HubCollaborationCreateRequestV2025R0AccessibleByField): SerializedData;
export declare function deserializeHubCollaborationCreateRequestV2025R0AccessibleByField(val: SerializedData): HubCollaborationCreateRequestV2025R0AccessibleByField;
export declare function serializeHubCollaborationCreateRequestV2025R0(val: HubCollaborationCreateRequestV2025R0): SerializedData;
export declare function deserializeHubCollaborationCreateRequestV2025R0(val: SerializedData): HubCollaborationCreateRequestV2025R0;
//# sourceMappingURL=hubCollaborationCreateRequestV2025R0.generated.d.ts.map