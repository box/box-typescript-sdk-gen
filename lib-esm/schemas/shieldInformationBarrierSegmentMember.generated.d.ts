import { ShieldInformationBarrierSegmentMemberMini } from './shieldInformationBarrierSegmentMemberMini.generated.js';
import { ShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField = 'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField {
    /**
     * The ID reference of the requesting
     * shield information barrier segment. */
    readonly id?: string;
    /**
     * The type of the shield information barrier segment. */
    readonly type?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField;
    readonly rawData?: SerializedData;
}
export type ShieldInformationBarrierSegmentMember = ShieldInformationBarrierSegmentMemberMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * The `type` and `id` of the requested
     * shield information barrier segment. */
    readonly shieldInformationBarrierSegment?: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
    /**
     * ISO date time string when this shield
     * information barrier object was created. */
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier segment Member was updated. */
    readonly updatedAt?: DateTime;
    readonly updatedBy?: UserBase;
};
export declare function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField(val: SerializedData): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentTypeField;
export declare function serializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField(val: SerializedData): ShieldInformationBarrierSegmentMemberShieldInformationBarrierSegmentField;
export declare function serializeShieldInformationBarrierSegmentMember(val: ShieldInformationBarrierSegmentMember): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMember(val: SerializedData): ShieldInformationBarrierSegmentMember;
