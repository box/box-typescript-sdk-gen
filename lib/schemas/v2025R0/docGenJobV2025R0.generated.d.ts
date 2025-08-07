import { DocGenJobBaseV2025R0 } from './docGenJobBaseV2025R0.generated.js';
import { DocGenBatchBaseV2025R0 } from './docGenBatchBaseV2025R0.generated.js';
import { FileReferenceV2025R0 } from './fileReferenceV2025R0.generated.js';
import { FileVersionBaseV2025R0 } from './fileVersionBaseV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export type DocGenJobV2025R0StatusField = 'submitted' | 'completed' | 'failed' | 'completed_with_error' | 'pending' | string;
export declare class DocGenJobV2025R0 extends DocGenJobBaseV2025R0 {
    readonly batch: DocGenBatchBaseV2025R0;
    readonly templateFile: FileReferenceV2025R0;
    readonly templateFileVersion: FileVersionBaseV2025R0;
    readonly outputFile?: FileReferenceV2025R0 | undefined;
    readonly outputFileVersion?: FileVersionBaseV2025R0 | undefined;
    readonly status: DocGenJobV2025R0StatusField;
    readonly outputType: string;
    constructor(fields: DocGenJobV2025R0);
}
export declare function serializeDocGenJobV2025R0StatusField(val: DocGenJobV2025R0StatusField): SerializedData;
export declare function deserializeDocGenJobV2025R0StatusField(val: SerializedData): DocGenJobV2025R0StatusField;
export declare function serializeDocGenJobV2025R0(val: DocGenJobV2025R0): SerializedData;
export declare function deserializeDocGenJobV2025R0(val: SerializedData): DocGenJobV2025R0;
//# sourceMappingURL=docGenJobV2025R0.generated.d.ts.map