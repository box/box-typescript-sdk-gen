import { TermsOfService } from './termsOfService.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface TermsOfServices {
    /**
     * The total number of objects. */
    readonly totalCount?: number;
    /**
     * A list of terms of service objects. */
    readonly entries?: readonly TermsOfService[];
    readonly rawData?: SerializedData;
}
export declare function serializeTermsOfServices(val: TermsOfServices): SerializedData;
export declare function deserializeTermsOfServices(val: SerializedData): TermsOfServices;
//# sourceMappingURL=termsOfServices.generated.d.ts.map