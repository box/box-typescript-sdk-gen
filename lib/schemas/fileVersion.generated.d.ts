import { FileVersionMini } from './fileVersionMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class FileVersion extends FileVersionMini {
    readonly name?: string;
    readonly size?: number;
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    readonly modifiedBy?: UserMini;
    readonly trashedAt?: DateTime | null;
    readonly trashedBy?: UserMini;
    readonly restoredAt?: DateTime | null;
    readonly restoredBy?: UserMini;
    readonly purgedAt?: DateTime | null;
    readonly uploaderDisplayName?: string;
    constructor(fields: FileVersion);
}
export declare function serializeFileVersion(val: FileVersion): SerializedData;
export declare function deserializeFileVersion(val: SerializedData): FileVersion;
//# sourceMappingURL=fileVersion.generated.d.ts.map