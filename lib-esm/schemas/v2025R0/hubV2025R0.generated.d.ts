import { HubBaseV2025R0 } from './hubBaseV2025R0.generated.js';
import { UserMiniV2025R0 } from './userMiniV2025R0.generated.js';
import { DateTime } from '../../internal/utils.js';
import { SerializedData } from '../../serialization/json.js';
export declare class HubV2025R0 extends HubBaseV2025R0 {
    readonly title?: string;
    readonly description?: string;
    readonly createdAt?: DateTime;
    readonly updatedAt?: DateTime;
    readonly createdBy?: UserMiniV2025R0;
    readonly updatedBy?: UserMiniV2025R0;
    readonly viewCount?: number;
    readonly isAiEnabled?: boolean;
    readonly isCollaborationRestrictedToEnterprise?: boolean;
    readonly canNonOwnersInvite?: boolean;
    readonly canSharedLinkBeCreated?: boolean;
    constructor(fields: HubV2025R0);
}
export declare function serializeHubV2025R0(val: HubV2025R0): SerializedData;
export declare function deserializeHubV2025R0(val: SerializedData): HubV2025R0;
