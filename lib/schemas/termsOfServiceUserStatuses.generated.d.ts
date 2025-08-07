import { TermsOfServiceUserStatus } from './termsOfServiceUserStatus.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface TermsOfServiceUserStatuses {
    /**
     * The total number of objects. */
    readonly totalCount?: number;
    /**
     * A list of terms of service user statuses. */
    readonly entries?: readonly TermsOfServiceUserStatus[];
    readonly rawData?: SerializedData;
}
export declare function serializeTermsOfServiceUserStatuses(val: TermsOfServiceUserStatuses): SerializedData;
export declare function deserializeTermsOfServiceUserStatuses(val: SerializedData): TermsOfServiceUserStatuses;
//# sourceMappingURL=termsOfServiceUserStatuses.generated.d.ts.map