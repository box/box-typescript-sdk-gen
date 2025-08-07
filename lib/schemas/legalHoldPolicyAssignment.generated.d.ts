import { LegalHoldPolicyAssignmentBase } from './legalHoldPolicyAssignmentBase.generated.js';
import { LegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { FileOrFolderOrWebLink } from './fileOrFolderOrWebLink.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type LegalHoldPolicyAssignment = LegalHoldPolicyAssignmentBase & {
    readonly legalHoldPolicy?: LegalHoldPolicyMini;
    readonly assignedTo?: FileOrFolderOrWebLink;
    readonly assignedBy?: UserMini;
    /**
     * When the legal hold policy assignment object was
     * created. */
    readonly assignedAt?: DateTime;
    /**
     * When the assignment release request was sent.
     * (Because it can take time for an assignment to fully
     * delete, this isn't quite the same time that the
     * assignment is fully deleted). If null, Assignment
     * was not deleted. */
    readonly deletedAt?: DateTime;
};
export declare function serializeLegalHoldPolicyAssignment(val: LegalHoldPolicyAssignment): SerializedData;
export declare function deserializeLegalHoldPolicyAssignment(val: SerializedData): LegalHoldPolicyAssignment;
//# sourceMappingURL=legalHoldPolicyAssignment.generated.d.ts.map