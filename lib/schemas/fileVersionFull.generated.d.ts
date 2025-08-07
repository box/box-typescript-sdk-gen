import { FileVersion } from './fileVersion.generated.js';
import { SerializedData } from '../serialization/json.js';
export declare class FileVersionFull extends FileVersion {
    readonly versionNumber?: string;
    constructor(fields: FileVersionFull);
}
export declare function serializeFileVersionFull(val: FileVersionFull): SerializedData;
export declare function deserializeFileVersionFull(val: SerializedData): FileVersionFull;
//# sourceMappingURL=fileVersionFull.generated.d.ts.map