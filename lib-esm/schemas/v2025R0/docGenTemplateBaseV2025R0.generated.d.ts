import { FileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export interface DocGenTemplateBaseV2025R0 {
    readonly file?: FileReferenceV2025R0;
    readonly rawData?: SerializedData;
}
export declare function serializeDocGenTemplateBaseV2025R0(val: DocGenTemplateBaseV2025R0): SerializedData;
export declare function deserializeDocGenTemplateBaseV2025R0(val: SerializedData): DocGenTemplateBaseV2025R0;
