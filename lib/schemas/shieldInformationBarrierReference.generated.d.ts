import { ShieldInformationBarrierBase } from './shieldInformationBarrierBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface ShieldInformationBarrierReference {
    readonly shieldInformationBarrier?: ShieldInformationBarrierBase;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldInformationBarrierReference(val: ShieldInformationBarrierReference): SerializedData;
export declare function deserializeShieldInformationBarrierReference(val: SerializedData): ShieldInformationBarrierReference;
//# sourceMappingURL=shieldInformationBarrierReference.generated.d.ts.map