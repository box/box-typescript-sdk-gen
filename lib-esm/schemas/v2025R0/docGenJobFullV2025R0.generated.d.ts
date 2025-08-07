import { DocGenJobV2025R0 } from './docGenJobV2025R0.generated.js';
import { UserBaseV2025R0 } from './userBaseV2025R0.generated.js';
import { EnterpriseReferenceV2025R0 } from './enterpriseReferenceV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export declare class DocGenJobFullV2025R0 extends DocGenJobV2025R0 {
    readonly createdAt?: string;
    readonly createdBy: UserBaseV2025R0;
    readonly enterprise: EnterpriseReferenceV2025R0;
    readonly source: string;
    constructor(fields: DocGenJobFullV2025R0);
}
export declare function serializeDocGenJobFullV2025R0(val: DocGenJobFullV2025R0): SerializedData;
export declare function deserializeDocGenJobFullV2025R0(val: SerializedData): DocGenJobFullV2025R0;
