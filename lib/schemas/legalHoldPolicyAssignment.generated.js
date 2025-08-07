"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeLegalHoldPolicyAssignment = serializeLegalHoldPolicyAssignment;
exports.deserializeLegalHoldPolicyAssignment = deserializeLegalHoldPolicyAssignment;
const legalHoldPolicyAssignmentBase_generated_js_1 = require("./legalHoldPolicyAssignmentBase.generated.js");
const legalHoldPolicyAssignmentBase_generated_js_2 = require("./legalHoldPolicyAssignmentBase.generated.js");
const legalHoldPolicyMini_generated_js_1 = require("./legalHoldPolicyMini.generated.js");
const legalHoldPolicyMini_generated_js_2 = require("./legalHoldPolicyMini.generated.js");
const fileOrFolderOrWebLink_generated_js_1 = require("./fileOrFolderOrWebLink.generated.js");
const fileOrFolderOrWebLink_generated_js_2 = require("./fileOrFolderOrWebLink.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeLegalHoldPolicyAssignment(val) {
    const base = (0, legalHoldPolicyAssignmentBase_generated_js_2.serializeLegalHoldPolicyAssignmentBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyAssignment"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['legal_hold_policy']: val.legalHoldPolicy == void 0
            ? val.legalHoldPolicy
            : (0, legalHoldPolicyMini_generated_js_1.serializeLegalHoldPolicyMini)(val.legalHoldPolicy),
        ['assigned_to']: val.assignedTo == void 0
            ? val.assignedTo
            : (0, fileOrFolderOrWebLink_generated_js_1.serializeFileOrFolderOrWebLink)(val.assignedTo),
        ['assigned_by']: val.assignedBy == void 0
            ? val.assignedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.assignedBy),
        ['assigned_at']: val.assignedAt == void 0
            ? val.assignedAt
            : (0, utils_js_1.serializeDateTime)(val.assignedAt),
        ['deleted_at']: val.deletedAt == void 0
            ? val.deletedAt
            : (0, utils_js_1.serializeDateTime)(val.deletedAt),
    });
}
function deserializeLegalHoldPolicyAssignment(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyAssignment"',
        });
    }
    const legalHoldPolicy = val.legal_hold_policy == void 0
        ? void 0
        : (0, legalHoldPolicyMini_generated_js_2.deserializeLegalHoldPolicyMini)(val.legal_hold_policy);
    const assignedTo = val.assigned_to == void 0
        ? void 0
        : (0, fileOrFolderOrWebLink_generated_js_2.deserializeFileOrFolderOrWebLink)(val.assigned_to);
    const assignedBy = val.assigned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.assigned_by);
    if (!(val.assigned_at == void 0) && !(0, json_js_1.sdIsString)(val.assigned_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "assigned_at" of type "LegalHoldPolicyAssignment"',
        });
    }
    const assignedAt = val.assigned_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.assigned_at);
    if (!(val.deleted_at == void 0) && !(0, json_js_1.sdIsString)(val.deleted_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "deleted_at" of type "LegalHoldPolicyAssignment"',
        });
    }
    const deletedAt = val.deleted_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.deleted_at);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicyAssignment"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : (0, legalHoldPolicyAssignmentBase_generated_js_1.deserializeLegalHoldPolicyAssignmentBaseTypeField)(val.type);
    return {
        legalHoldPolicy: legalHoldPolicy,
        assignedTo: assignedTo,
        assignedBy: assignedBy,
        assignedAt: assignedAt,
        deletedAt: deletedAt,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=legalHoldPolicyAssignment.generated.js.map