import { SerializedData } from '../../serialization/json.js';
export type HubActionV2025R0 = 'add' | 'remove' | string;
export declare function serializeHubActionV2025R0(val: HubActionV2025R0): SerializedData;
export declare function deserializeHubActionV2025R0(val: SerializedData): HubActionV2025R0;
