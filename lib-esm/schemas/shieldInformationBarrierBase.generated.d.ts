import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierBaseTypeField = 'shield_information_barrier';
export interface ShieldInformationBarrierBase {
    /**
     * The unique identifier for the shield information barrier. */
    readonly id?: string;
    /**
     * The type of the shield information barrier. */
    readonly type?: ShieldInformationBarrierBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierBaseTypeField(val: ShieldInformationBarrierBaseTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierBaseTypeField(val: SerializedData): ShieldInformationBarrierBaseTypeField;
export declare function serializeShieldInformationBarrierBase(val: ShieldInformationBarrierBase): SerializedData;
export declare function deserializeShieldInformationBarrierBase(val: SerializedData): ShieldInformationBarrierBase;
