import { SerializedData } from '../../serialization/json.js';
export interface HubCollaborationUpdateRequestV2025R0 {
    /**
     * The level of access granted to hub.
     * Possible values are `editor`, `viewer`, and `co-owner`. */
    readonly role?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeHubCollaborationUpdateRequestV2025R0(val: HubCollaborationUpdateRequestV2025R0): SerializedData;
export declare function deserializeHubCollaborationUpdateRequestV2025R0(val: SerializedData): HubCollaborationUpdateRequestV2025R0;
