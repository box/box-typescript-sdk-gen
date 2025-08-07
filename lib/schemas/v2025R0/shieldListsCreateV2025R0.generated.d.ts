import { ShieldListContentRequestV2025R0 } from './shieldListContentRequestV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface ShieldListsCreateV2025R0 {
    /**
     * The name of the shield list. */
    readonly name: string;
    /**
     * Optional description of Shield List. */
    readonly description?: string;
    readonly content: ShieldListContentRequestV2025R0;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListsCreateV2025R0(val: ShieldListsCreateV2025R0): SerializedData;
export declare function deserializeShieldListsCreateV2025R0(val: SerializedData): ShieldListsCreateV2025R0;
//# sourceMappingURL=shieldListsCreateV2025R0.generated.d.ts.map