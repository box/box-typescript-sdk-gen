import { SerializedData } from '../../serialization/json.js';
export type ShieldListContentCountryV2025R0TypeField = 'country';
export declare class ShieldListContentCountryV2025R0 {
    /**
     * The type of content in the shield list. */
    readonly type: ShieldListContentCountryV2025R0TypeField;
    /**
     * List of country codes values. */
    readonly countryCodes: readonly string[];
    readonly rawData?: SerializedData;
    constructor(fields: Omit<ShieldListContentCountryV2025R0, 'type'> & Partial<Pick<ShieldListContentCountryV2025R0, 'type'>>);
}
export interface ShieldListContentCountryV2025R0Input {
    /**
     * The type of content in the shield list. */
    readonly type?: ShieldListContentCountryV2025R0TypeField;
    /**
     * List of country codes values. */
    readonly countryCodes: readonly string[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListContentCountryV2025R0TypeField(val: ShieldListContentCountryV2025R0TypeField): SerializedData;
export declare function deserializeShieldListContentCountryV2025R0TypeField(val: SerializedData): ShieldListContentCountryV2025R0TypeField;
export declare function serializeShieldListContentCountryV2025R0(val: ShieldListContentCountryV2025R0): SerializedData;
export declare function deserializeShieldListContentCountryV2025R0(val: SerializedData): ShieldListContentCountryV2025R0;
export declare function serializeShieldListContentCountryV2025R0Input(val: ShieldListContentCountryV2025R0Input): SerializedData;
export declare function deserializeShieldListContentCountryV2025R0Input(val: SerializedData): ShieldListContentCountryV2025R0Input;
