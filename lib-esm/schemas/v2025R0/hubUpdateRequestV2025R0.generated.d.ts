import { SerializedData } from '../../serialization/json.js';
export interface HubUpdateRequestV2025R0 {
    /**
     * Title of the Hub. It cannot be empty and should be less than 50 characters. */
    readonly title?: string;
    /**
     * Description of the Hub. */
    readonly description?: string;
    /**
     * Indicates if AI features are enabled for the Hub. */
    readonly isAiEnabled?: boolean;
    /**
     * Indicates if collaboration is restricted to the enterprise. */
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    /**
     * Indicates if non-owners can invite others to the Hub. */
    readonly canNonOwnersInvite?: boolean;
    /**
     * Indicates if a shared link can be created for the Hub. */
    readonly canSharedLinkBeCreated?: boolean;
    readonly rawData?: SerializedData;
}
export declare function serializeHubUpdateRequestV2025R0(val: HubUpdateRequestV2025R0): SerializedData;
export declare function deserializeHubUpdateRequestV2025R0(val: SerializedData): HubUpdateRequestV2025R0;
