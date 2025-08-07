import { FileVersionMini } from './fileVersionMini.generated.js';
import { FileMini } from './fileMini.generated.js';
import { LegalHoldPolicyAssignment } from './legalHoldPolicyAssignment.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type FileVersionLegalHoldTypeField = 'file_version_legal_hold';
export interface FileVersionLegalHold {
    /**
     * The unique identifier for this file version legal hold. */
    readonly id?: string;
    /**
     * The value will always be `file_version_legal_hold`. */
    readonly type?: FileVersionLegalHoldTypeField;
    readonly fileVersion?: FileVersionMini;
    readonly file?: FileMini;
    /**
     * List of assignments contributing to this Hold. */
    readonly legalHoldPolicyAssignments?: readonly LegalHoldPolicyAssignment[];
    /**
     * Time that this File-Version-Legal-Hold was
     * deleted. */
    readonly deletedAt?: DateTime;
    readonly rawData?: SerializedData;
}
export declare function serializeFileVersionLegalHoldTypeField(val: FileVersionLegalHoldTypeField): SerializedData;
export declare function deserializeFileVersionLegalHoldTypeField(val: SerializedData): FileVersionLegalHoldTypeField;
export declare function serializeFileVersionLegalHold(val: FileVersionLegalHold): SerializedData;
export declare function deserializeFileVersionLegalHold(val: SerializedData): FileVersionLegalHold;
