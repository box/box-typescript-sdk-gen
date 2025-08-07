"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalHoldPolicy = void 0;
exports.serializeLegalHoldPolicyStatusField = serializeLegalHoldPolicyStatusField;
exports.deserializeLegalHoldPolicyStatusField = deserializeLegalHoldPolicyStatusField;
exports.serializeLegalHoldPolicyAssignmentCountsField = serializeLegalHoldPolicyAssignmentCountsField;
exports.deserializeLegalHoldPolicyAssignmentCountsField = deserializeLegalHoldPolicyAssignmentCountsField;
exports.serializeLegalHoldPolicy = serializeLegalHoldPolicy;
exports.deserializeLegalHoldPolicy = deserializeLegalHoldPolicy;
const legalHoldPolicyMini_generated_js_1 = require("./legalHoldPolicyMini.generated.js");
const legalHoldPolicyMini_generated_js_2 = require("./legalHoldPolicyMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const legalHoldPolicyMini_generated_js_3 = require("./legalHoldPolicyMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class LegalHoldPolicy extends legalHoldPolicyMini_generated_js_3.LegalHoldPolicyMini {
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
exports.LegalHoldPolicy = LegalHoldPolicy;
function serializeLegalHoldPolicyStatusField(val) {
    return val;
}
function deserializeLegalHoldPolicyStatusField(val) {
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
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize LegalHoldPolicyStatusField",
    });
}
function serializeLegalHoldPolicyAssignmentCountsField(val) {
    return {
        ['user']: val.user,
        ['folder']: val.folder,
        ['file']: val.file,
        ['file_version']: val.fileVersion,
    };
}
function deserializeLegalHoldPolicyAssignmentCountsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyAssignmentCountsField"',
        });
    }
    if (!(val.user == void 0) && !(0, json_js_1.sdIsNumber)(val.user)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "user" of type "LegalHoldPolicyAssignmentCountsField"',
        });
    }
    const user = val.user == void 0 ? void 0 : val.user;
    if (!(val.folder == void 0) && !(0, json_js_1.sdIsNumber)(val.folder)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "folder" of type "LegalHoldPolicyAssignmentCountsField"',
        });
    }
    const folder = val.folder == void 0 ? void 0 : val.folder;
    if (!(val.file == void 0) && !(0, json_js_1.sdIsNumber)(val.file)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "file" of type "LegalHoldPolicyAssignmentCountsField"',
        });
    }
    const file = val.file == void 0 ? void 0 : val.file;
    if (!(val.file_version == void 0) && !(0, json_js_1.sdIsNumber)(val.file_version)) {
        throw new errors_js_1.BoxSdkError({
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
function serializeLegalHoldPolicy(val) {
    const base = (0, legalHoldPolicyMini_generated_js_2.serializeLegalHoldPolicyMini)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "LegalHoldPolicy"' });
    }
    return Object.assign(Object.assign({}, base), {
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
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['deleted_at']: val.deletedAt == void 0
            ? val.deletedAt
            : (0, utils_js_1.serializeDateTime)(val.deletedAt),
        ['filter_started_at']: val.filterStartedAt == void 0
            ? val.filterStartedAt
            : (0, utils_js_1.serializeDateTime)(val.filterStartedAt),
        ['filter_ended_at']: val.filterEndedAt == void 0
            ? val.filterEndedAt
            : (0, utils_js_1.serializeDateTime)(val.filterEndedAt),
        ['release_notes']: val.releaseNotes,
    });
}
function deserializeLegalHoldPolicy(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "LegalHoldPolicy"' });
    }
    if (!(val.policy_name == void 0) && !(0, json_js_2.sdIsString)(val.policy_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "policy_name" of type "LegalHoldPolicy"',
        });
    }
    const policyName = val.policy_name == void 0 ? void 0 : val.policy_name;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
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
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "LegalHoldPolicy"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (!(val.modified_at == void 0) && !(0, json_js_2.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "LegalHoldPolicy"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.deleted_at == void 0) && !(0, json_js_2.sdIsString)(val.deleted_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "deleted_at" of type "LegalHoldPolicy"',
        });
    }
    const deletedAt = val.deleted_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.deleted_at);
    if (!(val.filter_started_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.filter_started_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "filter_started_at" of type "LegalHoldPolicy"',
        });
    }
    const filterStartedAt = val.filter_started_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.filter_started_at);
    if (!(val.filter_ended_at == void 0) && !(0, json_js_2.sdIsString)(val.filter_ended_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "filter_ended_at" of type "LegalHoldPolicy"',
        });
    }
    const filterEndedAt = val.filter_ended_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.filter_ended_at);
    if (!(val.release_notes == void 0) && !(0, json_js_2.sdIsString)(val.release_notes)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "release_notes" of type "LegalHoldPolicy"',
        });
    }
    const releaseNotes = val.release_notes == void 0 ? void 0 : val.release_notes;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "LegalHoldPolicy" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicy"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "LegalHoldPolicy" to be defined',
        });
    }
    const type = (0, legalHoldPolicyMini_generated_js_1.deserializeLegalHoldPolicyMiniTypeField)(val.type);
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