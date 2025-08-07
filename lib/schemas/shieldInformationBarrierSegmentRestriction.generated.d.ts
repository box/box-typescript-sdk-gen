import { ShieldInformationBarrierSegmentRestrictionMini } from './shieldInformationBarrierSegmentRestrictionMini.generated.js';
import { ShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentRestriction = ShieldInformationBarrierSegmentRestrictionMini & {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    /**
     * ISO date time string when this
     * shield information barrier
     * Segment Restriction object was created. */
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    /**
     * ISO date time string when this
     * shield information barrier segment
     * Restriction was updated. */
    readonly updatedAt?: DateTime;
    readonly updatedBy?: UserBase;
};
export declare function serializeShieldInformationBarrierSegmentRestriction(val: ShieldInformationBarrierSegmentRestriction): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentRestriction(val: SerializedData): ShieldInformationBarrierSegmentRestriction;
//# sourceMappingURL=shieldInformationBarrierSegmentRestriction.generated.d.ts.map