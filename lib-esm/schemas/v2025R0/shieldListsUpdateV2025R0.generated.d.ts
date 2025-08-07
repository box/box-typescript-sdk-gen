import { ShieldListContentRequestV2025R0 } from './shieldListContentRequestV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface ShieldListsUpdateV2025R0 {
    /**
     * The name of the shield list. */
    readonly name: string;
    /**
     * Optional description of Shield List. */
    readonly description?: string;
    readonly content: ShieldListContentRequestV2025R0;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListsUpdateV2025R0(val: ShieldListsUpdateV2025R0): SerializedData;
export declare function deserializeShieldListsUpdateV2025R0(val: SerializedData): ShieldListsUpdateV2025R0;
