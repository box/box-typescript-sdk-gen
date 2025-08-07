import { ShieldListMiniV2025R0 } from './shieldListMiniV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface ShieldListsV2025R0 {
    /**
     * A list of shield list objects. */
    readonly entries?: readonly ShieldListMiniV2025R0[];
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListsV2025R0(val: ShieldListsV2025R0): SerializedData;
export declare function deserializeShieldListsV2025R0(val: SerializedData): ShieldListsV2025R0;
//# sourceMappingURL=shieldListsV2025R0.generated.d.ts.map