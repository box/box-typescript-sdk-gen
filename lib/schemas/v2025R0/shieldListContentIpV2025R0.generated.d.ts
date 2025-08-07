import { SerializedData } from '../../serialization/json.js';
export type ShieldListContentIpV2025R0TypeField = 'ip';
export declare class ShieldListContentIpV2025R0 {
    /**
     * The type of content in the shield list. */
    readonly type: ShieldListContentIpV2025R0TypeField;
    /**
     * List of ips and cidrs. */
    readonly ipAddresses: readonly string[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<ShieldListContentIpV2025R0, 'type'> & Partial<Pick<ShieldListContentIpV2025R0, 'type'>>);
}
export interface ShieldListContentIpV2025R0Input {
    /**
     * The type of content in the shield list. */
    readonly type?: ShieldListContentIpV2025R0TypeField;
    /**
     * List of ips and cidrs. */
    readonly ipAddresses: readonly string[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListContentIpV2025R0TypeField(val: ShieldListContentIpV2025R0TypeField): SerializedData;
export declare function deserializeShieldListContentIpV2025R0TypeField(val: SerializedData): ShieldListContentIpV2025R0TypeField;
export declare function serializeShieldListContentIpV2025R0(val: ShieldListContentIpV2025R0): SerializedData;
export declare function deserializeShieldListContentIpV2025R0(val: SerializedData): ShieldListContentIpV2025R0;
export declare function serializeShieldListContentIpV2025R0Input(val: ShieldListContentIpV2025R0Input): SerializedData;
export declare function deserializeShieldListContentIpV2025R0Input(val: SerializedData): ShieldListContentIpV2025R0Input;
//# sourceMappingURL=shieldListContentIpV2025R0.generated.d.ts.map