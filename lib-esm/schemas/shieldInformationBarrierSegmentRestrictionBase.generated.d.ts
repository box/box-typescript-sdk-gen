import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentRestrictionBaseTypeField = 'shield_information_barrier_segment_restriction';
export interface ShieldInformationBarrierSegmentRestrictionBase {
    /**
     * Shield information barrier segment restriction. */
    readonly type?: ShieldInformationBarrierSegmentRestrictionBaseTypeField;
    /**
     * The unique identifier for the
     * shield information barrier segment restriction. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: ShieldInformationBarrierSegmentRestrictionBaseTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestrictionBaseTypeField(val: SerializedData): ShieldInformationBarrierSegmentRestrictionBaseTypeField;
export declare function serializeShieldInformationBarrierSegmentRestrictionBase(val: ShieldInformationBarrierSegmentRestrictionBase): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestrictionBase(val: SerializedData): ShieldInformationBarrierSegmentRestrictionBase;
