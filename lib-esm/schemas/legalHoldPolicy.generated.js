import { deserializeLegalHoldPolicyMiniTypeField } from './legalHoldPolicyMini.generated.js';
import { serializeLegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { LegalHoldPolicyMini } from './legalHoldPolicyMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class LegalHoldPolicy extends LegalHoldPolicyMini {
    constructor(fields) {
        super(fields);
        if (fields.policyName !== undefined) {
            this.policyName = fields.policyName;
        }
        if (fields.description !== undefined) {
            this.description = fields.description;
        }
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.assignmentCounts !== undefined) {
            this.assignmentCounts = fields.assignmentCounts;
        }
        if (fields.createdBy !== undefined) {
            this.createdBy = fields.createdBy;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
        if (fields.deletedAt !== undefined) {
            this.deletedAt = fields.deletedAt;
        }
        if (fields.filterStartedAt !== undefined) {
            this.filterStartedAt = fields.filterStartedAt;
        }
        if (fields.filterEndedAt !== undefined) {
            this.filterEndedAt = fields.filterEndedAt;
        }
        if (fields.releaseNotes !== undefined) {
            this.releaseNotes = fields.releaseNotes;
        }
    }
}
export function serializeLegalHoldPolicyStatusField(val) {
    return val;
}
export function deserializeLegalHoldPolicyStatusField(val) {
    if (val == 'active') {
        return val;
    }
    if (val == 'applying') {
        return val;
    }
    if (val == 'releasing') {
        return val;
    }
    if (val == 'released') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize LegalHoldPolicyStatusField",
    });
}
export function serializeLegalHoldPolicyAssignmentCountsField(val) {
    return {
        ['user']: val.user,
        ['folder']: val.folder,
        ['file']: val.file,
        ['file_version']: val.fileVersion,
    };
}
export function deserializeLegalHoldPolicyAssignmentCountsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyAssignmentCountsField"',
        });
    }
    if (!(val.user == void 0) && !sdIsNumber(val.user)) {
        throw new BoxSdkError({
            message: 'Expecting number for "user" of type "LegalHoldPolicyAssignmentCountsField"',
        });
    }
    const user = val.user == void 0 ? void 0 : val.user;
    if (!(val.folder == void 0) && !sdIsNumber(val.folder)) {
        throw new BoxSdkError({
            message: 'Expecting number for "folder" of type "LegalHoldPolicyAssignmentCountsField"',
        });
    }
    const folder = val.folder == void 0 ? void 0 : val.folder;
    if (!(val.file == void 0) && !sdIsNumber(val.file)) {
        throw new BoxSdkError({
            message: 'Expecting number for "file" of type "LegalHoldPolicyAssignmentCountsField"',
        });
    }
    const file = val.file == void 0 ? void 0 : val.file;
    if (!(val.file_version == void 0) && !sdIsNumber(val.file_version)) {
        throw new BoxSdkError({
            message: 'Expecting number for "file_version" of type "LegalHoldPolicyAssignmentCountsField"',
        });
    }
    const fileVersion = val.file_version == void 0 ? void 0 : val.file_version;
    return {
        user: user,
        folder: folder,
        file: file,
        fileVersion: fileVersion,
    };
}
export function serializeLegalHoldPolicy(val) {
    const base = serializeLegalHoldPolicyMini(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "LegalHoldPolicy"' });
    }
    return {
        ...base,
        ...{
            ['policy_name']: val.policyName,
            ['description']: val.description,
            ['status']: val.status == void 0
                ? val.status
                : serializeLegalHoldPolicyStatusField(val.status),
            ['assignment_counts']: val.assignmentCounts == void 0
                ? val.assignmentCounts
                : serializeLegalHoldPolicyAssignmentCountsField(val.assignmentCounts),
            ['created_by']: val.createdBy == void 0
                ? val.createdBy
                : serializeUserMini(val.createdBy),
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['modified_at']: val.modifiedAt == void 0
                ? val.modifiedAt
                : serializeDateTime(val.modifiedAt),
            ['deleted_at']: val.deletedAt == void 0
                ? val.deletedAt
                : serializeDateTime(val.deletedAt),
            ['filter_started_at']: val.filterStartedAt == void 0
                ? val.filterStartedAt
                : serializeDateTime(val.filterStartedAt),
            ['filter_ended_at']: val.filterEndedAt == void 0
                ? val.filterEndedAt
                : serializeDateTime(val.filterEndedAt),
            ['release_notes']: val.releaseNotes,
        },
    };
}
export function deserializeLegalHoldPolicy(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "LegalHoldPolicy"' });
    }
    if (!(val.policy_name == void 0) && !sdIsString(val.policy_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "policy_name" of type "LegalHoldPolicy"',
        });
    }
    const policyName = val.policy_name == void 0 ? void 0 : val.policy_name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "LegalHoldPolicy"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const status = val.status == void 0
        ? void 0
        : deserializeLegalHoldPolicyStatusField(val.status);
    const assignmentCounts = val.assignment_counts == void 0
        ? void 0
        : deserializeLegalHoldPolicyAssignmentCountsField(val.assignment_counts);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "LegalHoldPolicy"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "LegalHoldPolicy"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.deleted_at == void 0) && !sdIsString(val.deleted_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "deleted_at" of type "LegalHoldPolicy"',
        });
    }
    const deletedAt = val.deleted_at == void 0 ? void 0 : deserializeDateTime(val.deleted_at);
    if (!(val.filter_started_at == void 0) &&
        !sdIsString(val.filter_started_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "filter_started_at" of type "LegalHoldPolicy"',
        });
    }
    const filterStartedAt = val.filter_started_at == void 0
        ? void 0
        : deserializeDateTime(val.filter_started_at);
    if (!(val.filter_ended_at == void 0) && !sdIsString(val.filter_ended_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "filter_ended_at" of type "LegalHoldPolicy"',
        });
    }
    const filterEndedAt = val.filter_ended_at == void 0
        ? void 0
        : deserializeDateTime(val.filter_ended_at);
    if (!(val.release_notes == void 0) && !sdIsString(val.release_notes)) {
        throw new BoxSdkError({
            message: 'Expecting string for "release_notes" of type "LegalHoldPolicy"',
        });
    }
    const releaseNotes = val.release_notes == void 0 ? void 0 : val.release_notes;
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "LegalHoldPolicy" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicy"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "LegalHoldPolicy" to be defined',
        });
    }
    const type = deserializeLegalHoldPolicyMiniTypeField(val.type);
    return {
        policyName: policyName,
        description: description,
        status: status,
        assignmentCounts: assignmentCounts,
        createdBy: createdBy,
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        deletedAt: deletedAt,
        filterStartedAt: filterStartedAt,
        filterEndedAt: filterEndedAt,
        releaseNotes: releaseNotes,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=legalHoldPolicy.generated.js.map