import { ShieldInformationBarrierSegmentRestrictionBase } from './shieldInformationBarrierSegmentRestrictionBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField = 'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField {
    /**
     * The ID reference of the
     * requesting shield information barrier segment. */
    readonly id?: string;
    /**
     * The type of the shield information barrier segment. */
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField;
    readonly rawData?: SerializedData;
}
export type ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField = 'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField {
    /**
     * The ID reference of the
     * restricted shield information barrier segment. */
    readonly id?: string;
    /**
     * The type of the shield information segment. */
    readonly type?: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField;
    readonly rawData?: SerializedData;
}
export type ShieldInformationBarrierSegmentRestrictionMini = ShieldInformationBarrierSegmentRestrictionBase & {
    /**
     * The `type` and `id` of the
     * requested shield information barrier segment. */
    readonly shieldInformationBarrierSegment: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
    /**
     * The `type` and `id` of the
     * restricted shield information barrier segment. */
    readonly restrictedSegment: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
};
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField(val: SerializedData): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentTypeField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField(val: SerializedData): ShieldInformationBarrierSegmentRestrictionMiniShieldInformationBarrierSegmentField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField(val: SerializedData): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentTypeField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField(val: SerializedData): ShieldInformationBarrierSegmentRestrictionMiniRestrictedSegmentField;
export declare function serializeShieldInformationBarrierSegmentRestrictionMini(val: ShieldInformationBarrierSegmentRestrictionMini): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestrictionMini(val: SerializedData): ShieldInformationBarrierSegmentRestrictionMini;
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictionMini.generated.d.ts.map