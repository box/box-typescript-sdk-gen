import { FileVersionBase } from './fileVersionBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class FileVersionMini extends FileVersionBase {
    readonly sha1?: string;
    constructor(fields: FileVersionMini);
}
export declare function serializeFileVersionMini(val: FileVersionMini): SerializedData;
export declare function deserializeFileVersionMini(val: SerializedData): FileVersionMini;
