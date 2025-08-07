import { SerializedData } from '../../serialization/json.js';
export type ShieldListMiniV2025R0TypeField = 'shield_list';
export interface ShieldListMiniV2025R0ContentField {
    /**
     * The type of content in the shield list. */
    readonly type?: string;
    readonly rawData?: SerializedData;
}
export declare class ShieldListMiniV2025R0 {
    /**
     * Unique global identifier for this list. */
    readonly id: string;
    /**
     * The type of object. */
    readonly type: ShieldListMiniV2025R0TypeField;
    /**
     * Name of Shield List. */
    readonly name: string;
    readonly content: ShieldListMiniV2025R0ContentField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<ShieldListMiniV2025R0, 'type'> & Partial<Pick<ShieldListMiniV2025R0, 'type'>>);
}
export interface ShieldListMiniV2025R0Input {
    /**
     * Unique global identifier for this list. */
    readonly id: string;
    /**
     * The type of object. */
    readonly type?: ShieldListMiniV2025R0TypeField;
    /**
     * Name of Shield List. */
    readonly name: string;
    readonly content: ShieldListMiniV2025R0ContentField;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListMiniV2025R0TypeField(val: ShieldListMiniV2025R0TypeField): SerializedData;
export declare function deserializeShieldListMiniV2025R0TypeField(val: SerializedData): ShieldListMiniV2025R0TypeField;
export declare function serializeShieldListMiniV2025R0ContentField(val: ShieldListMiniV2025R0ContentField): SerializedData;
export declare function deserializeShieldListMiniV2025R0ContentField(val: SerializedData): ShieldListMiniV2025R0ContentField;
export declare function serializeShieldListMiniV2025R0(val: ShieldListMiniV2025R0): SerializedData;
export declare function deserializeShieldListMiniV2025R0(val: SerializedData): ShieldListMiniV2025R0;
export declare function serializeShieldListMiniV2025R0Input(val: ShieldListMiniV2025R0Input): SerializedData;
export declare function deserializeShieldListMiniV2025R0Input(val: SerializedData): ShieldListMiniV2025R0Input;
//# sourceMappingURL=shieldListMiniV2025R0.generated.d.ts.map