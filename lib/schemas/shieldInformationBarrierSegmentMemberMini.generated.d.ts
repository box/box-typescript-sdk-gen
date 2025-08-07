import { ShieldInformationBarrierSegmentMemberBase } from './shieldInformationBarrierSegmentMemberBase.generated.js';
import { UserBase } from './userBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type ShieldInformationBarrierSegmentMemberMini = ShieldInformationBarrierSegmentMemberBase & {
    readonly user?: UserBase;
};
export declare function serializeShieldInformationBarrierSegmentMemberMini(val: ShieldInformationBarrierSegmentMemberMini): SerializedData;
export declare function deserializeShieldInformationBarrierSegmentMemberMini(val: SerializedData): ShieldInformationBarrierSegmentMemberMini;
//# sourceMappingURL=shieldInformationBarrierSegmentMemberMini.generated.d.ts.map