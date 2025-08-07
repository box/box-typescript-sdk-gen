import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentMemberBaseTypeField = 'shield_information_barrier_segment_member';
export interface ShieldInformationBarrierSegmentMemberBase {
    /**
     * The unique identifier for the
     * shield information barrier segment member. */
    readonly id?: string;
    /**
     * The type of the shield information barrier segment member. */
    readonly type?: ShieldInformationBarrierSegmentMemberBaseTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierSegmentMemberBaseTypeField(val: ShieldInformationBarrierSegmentMemberBaseTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMemberBaseTypeField(val: SerializedData): ShieldInformationBarrierSegmentMemberBaseTypeField;
export declare function serializeShieldInformationBarrierSegmentMemberBase(val: ShieldInformationBarrierSegmentMemberBase): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMemberBase(val: SerializedData): ShieldInformationBarrierSegmentMemberBase;
//# sourceMappingURL=shieldInformationBarrierSegmentMemberBase.generated.d.ts.map