import { SerializedData } from '../../serialization/json.js';
export interface HubCopyRequestV2025R0 {
    /**
     * Title of the Hub. It cannot be empty and should be less than 50 characters. */
    readonly title?: string;
    /**
     * Description of the Hub. */
    readonly description?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeHubCopyRequestV2025R0(val: HubCopyRequestV2025R0): SerializedData;
export declare function deserializeHubCopyRequestV2025R0(val: SerializedData): HubCopyRequestV2025R0;
