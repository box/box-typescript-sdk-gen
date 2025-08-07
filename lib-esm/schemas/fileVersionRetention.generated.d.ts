import { FileVersionMini } from './fileVersionMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { RetentionPolicyMini } from './retentionPolicyMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type FileVersionRetentionTypeField = 'file_version_retention';
export interface FileVersionRetention {
    /**
     * The unique identifier for this file version retention. */
    readonly id?: string;
    /**
     * The value will always be `file_version_retention`. */
    readonly type?: FileVersionRetentionTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    /**
     * When this file version retention object was
     * created. */
    readonly appliedAt?: DateTime;
    /**
     * When the retention expires on this file
     * version retention. */
    readonly dispositionAt?: DateTime;
    readonly winningRetentionPolicy?: RetentionPolicyMini;
    readonly rawData?: SerializedData;
}
export declare function serializeFileVersionRetentionTypeField(val: FileVersionRetentionTypeField): SerializedData;
export declare function deserializeFileVersionRetentionTypeField(val: SerializedData): FileVersionRetentionTypeField;
export declare function serializeFileVersionRetention(val: FileVersionRetention): SerializedData;
export declare function deserializeFileVersionRetention(val: SerializedData): FileVersionRetention;
