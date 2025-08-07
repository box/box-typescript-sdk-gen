import { SerializedData } from '../../serialization/json.js';
export type HubBaseV2025R0TypeField = 'hubs';
export declare class HubBaseV2025R0 {
    /**
     * The unique identifier that represent a hub.
     *
     * The ID for any hub can be determined
     * by visiting a hub in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/hubs/123`
     * the `hub_id` is `123`. */
    readonly id: string;
    /**
     * The value will always be `hubs`. */
    readonly type: HubBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<HubBaseV2025R0, 'type'> & Partial<Pick<HubBaseV2025R0, 'type'>>);
}
export interface HubBaseV2025R0Input {
    /**
     * The unique identifier that represent a hub.
     *
     * The ID for any hub can be determined
     * by visiting a hub in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/hubs/123`
     * the `hub_id` is `123`. */
    readonly id: string;
    /**
     * The value will always be `hubs`. */
    readonly type?: HubBaseV2025R0TypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeHubBaseV2025R0TypeField(val: HubBaseV2025R0TypeField): SerializedData;
export declare function deserializeHubBaseV2025R0TypeField(val: SerializedData): HubBaseV2025R0TypeField;
export declare function serializeHubBaseV2025R0(val: HubBaseV2025R0): SerializedData;
export declare function deserializeHubBaseV2025R0(val: SerializedData): HubBaseV2025R0;
export declare function serializeHubBaseV2025R0Input(val: HubBaseV2025R0Input): SerializedData;
export declare function deserializeHubBaseV2025R0Input(val: SerializedData): HubBaseV2025R0Input;
//# sourceMappingURL=hubBaseV2025R0.generated.d.ts.map