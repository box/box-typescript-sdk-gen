import { FileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface DocGenTemplateCreateRequestV2025R0 {
    readonly file: FileReferenceV2025R0;
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenTemplateCreateRequestV2025R0(val: DocGenTemplateCreateRequestV2025R0): SerializedData;
export declare function deserializeDocGenTemplateCreateRequestV2025R0(val: SerializedData): DocGenTemplateCreateRequestV2025R0;
//# sourceMappingURL=docGenTemplateCreateRequestV2025R0.generated.d.ts.map