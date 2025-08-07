import { SerializedData } from '../../serialization/json.js';
export type ShieldListContentEmailV2025R0TypeField = 'email';
export declare class ShieldListContentEmailV2025R0 {
    /**
     * The type of content in the shield list. */
    readonly type: ShieldListContentEmailV2025R0TypeField;
    /**
     * List of emails. */
    readonly emailAddresses: readonly string[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<ShieldListContentEmailV2025R0, 'type'> & Partial<Pick<ShieldListContentEmailV2025R0, 'type'>>);
}
export interface ShieldListContentEmailV2025R0Input {
    /**
     * The type of content in the shield list. */
    readonly type?: ShieldListContentEmailV2025R0TypeField;
    /**
     * List of emails. */
    readonly emailAddresses: readonly string[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListContentEmailV2025R0TypeField(val: ShieldListContentEmailV2025R0TypeField): SerializedData;
export declare function deserializeShieldListContentEmailV2025R0TypeField(val: SerializedData): ShieldListContentEmailV2025R0TypeField;
export declare function serializeShieldListContentEmailV2025R0(val: ShieldListContentEmailV2025R0): SerializedData;
export declare function deserializeShieldListContentEmailV2025R0(val: SerializedData): ShieldListContentEmailV2025R0;
export declare function serializeShieldListContentEmailV2025R0Input(val: ShieldListContentEmailV2025R0Input): SerializedData;
export declare function deserializeShieldListContentEmailV2025R0Input(val: SerializedData): ShieldListContentEmailV2025R0Input;
