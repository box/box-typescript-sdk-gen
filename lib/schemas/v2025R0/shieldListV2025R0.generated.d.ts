import { EnterpriseReferenceV2025R0 } from './enterpriseReferenceV2025R0.generated.js';
import { ShieldListContentV2025R0 } from './shieldListContentV2025R0.generated.js';
import { DateTime } from '../../internal/utils.js';
import { SerializedData } from '../../serialization/json.js';
export interface ShieldListV2025R0 {
    /**
     * Unique identifier for the shield list. */
    readonly id: string;
    /**
     * Type of the object. */
    readonly type: string;
    /**
     * Name of the shield list. */
    readonly name: string;
    readonly enterprise: EnterpriseReferenceV2025R0;
    /**
     * Description of Shield List. */
    readonly description?: string;
    /**
     * ISO date time string when this shield list object was created. */
    readonly createdAt: DateTime;
    /**
     * ISO date time string when this shield list object was updated. */
    readonly updatedAt: DateTime;
    readonly content: ShieldListContentV2025R0;
    readonly rawData?: SerializedData;
}
export declare function serializeShieldListV2025R0(val: ShieldListV2025R0): SerializedData;
export declare function deserializeShieldListV2025R0(val: SerializedData): ShieldListV2025R0;
//# sourceMappingURL=shieldListV2025R0.generated.d.ts.map