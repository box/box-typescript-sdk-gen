import { FileBase } from './fileBase.generated.js';
import { FileVersionMini } from './fileVersionMini.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class FileMini extends FileBase {
    readonly sequenceId?: string;
    readonly name?: string;
    readonly sha1?: string;
    readonly fileVersion?: FileVersionMini;
    constructor(fields: FileMini);
}
export declare function serializeFileMini(val: FileMini): SerializedData;
export declare function deserializeFileMini(val: SerializedData): FileMini;
