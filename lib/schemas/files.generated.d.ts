import { FileFull } from './fileFull.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Files {
    /**
     * The number of files. */
    readonly totalCount?: number;
    /**
     * A list of files. */
    readonly entries?: readonly FileFull[];
    readonly rawData?: SerializedData;
}
export declare function serializeFiles(val: Files): SerializedData;
export declare function deserializeFiles(val: SerializedData): Files;
//# sourceMappingURL=files.generated.d.ts.map