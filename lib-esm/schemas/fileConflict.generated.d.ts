import { FileMini } from './fileMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class FileConflict extends FileMini {
    constructor(fields: FileConflict);
}
export declare function serializeFileConflict(val: FileConflict): SerializedData;
export declare function deserializeFileConflict(val: SerializedData): FileConflict;
