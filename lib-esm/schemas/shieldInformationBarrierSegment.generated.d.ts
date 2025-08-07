import { ShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentTypeField = 'shield_information_barrier_segment';
export interface ShieldInformationBarrierSegment {
    /**
     * The unique identifier for the shield information barrier segment. */
    readonly id?: string;
    /**
     * The type of the shield information barrier segment. */
    readonly type?: ShieldInformationBarrierSegmentTypeField;
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * Name of the shield information barrier segment. */
    readonly name?: string;
    /**
     * Description of the shield information barrier segment. */
    readonly description?: string;
    /**
     * ISO date time string when this shield information
     * barrier object was created. */
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier segment was updated. */
    readonly updatedAt?: DateTime;
    readonly updatedBy?: UserBase;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierSegmentTypeField(val: ShieldInformationBarrierSegmentTypeField): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentTypeField(val: SerializedData): ShieldInformationBarrierSegmentTypeField;
export declare function serializeShieldInformationBarrierSegment(val: ShieldInformationBarrierSegment): SerializedData;
export declare function deserializeShieldInformationBarrierSegment(val: SerializedData): ShieldInformationBarrierSegment;
