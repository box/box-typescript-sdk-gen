import { SerializedData } from '../../serialization/json.js';
export interface HubCreateRequestV2025R0 {
    /**
     * Title of the Hub. It cannot be empty and should be less than 50 characters. */
    readonly title: string;
    /**
     * Description of the Hub. */
    readonly description?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeHubCreateRequestV2025R0(val: HubCreateRequestV2025R0): SerializedData;
export declare function deserializeHubCreateRequestV2025R0(val: SerializedData): HubCreateRequestV2025R0;
