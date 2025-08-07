import { UserBaseV2025R0 } from './userBaseV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export declare class HubCollaborationUserV2025R0 extends UserBaseV2025R0 {
    readonly name?: string;
    readonly login?: string;
    constructor(fields: HubCollaborationUserV2025R0);
}
export declare function serializeHubCollaborationUserV2025R0(val: HubCollaborationUserV2025R0): SerializedData;
export declare function deserializeHubCollaborationUserV2025R0(val: SerializedData): HubCollaborationUserV2025R0;
