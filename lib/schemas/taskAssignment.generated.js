"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeTaskAssignmentTypeField = serializeTaskAssignmentTypeField;
exports.deserializeTaskAssignmentTypeField = deserializeTaskAssignmentTypeField;
exports.serializeTaskAssignmentResolutionStateField = serializeTaskAssignmentResolutionStateField;
exports.deserializeTaskAssignmentResolutionStateField = deserializeTaskAssignmentResolutionStateField;
exports.serializeTaskAssignment = serializeTaskAssignment;
exports.deserializeTaskAssignment = deserializeTaskAssignment;
const fileMini_generated_js_1 = require("./fileMini.generated.js");
const fileMini_generated_js_2 = require("./fileMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeTaskAssignmentTypeField(val) {
    return val;
}
function deserializeTaskAssignmentTypeField(val) {
    if (val == 'task_assignment') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TaskAssignmentTypeField",
    });
}
function serializeTaskAssignmentResolutionStateField(val) {
    return val;
}
function deserializeTaskAssignmentResolutionStateField(val) {
    if (val == 'completed') {
        return val;
    }
    if (val == 'incomplete') {
        return val;
    }
    if (val == 'approved') {
        return val;
    }
    if (val == 'rejected') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TaskAssignmentResolutionStateField",
    });
}
function serializeTaskAssignment(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeTaskAssignmentTypeField(val.type),
        ['item']: val.item == void 0 ? val.item : (0, fileMini_generated_js_1.serializeFileMini)(val.item),
        ['assigned_to']: val.assignedTo == void 0
            ? val.assignedTo
            : (0, userMini_generated_js_1.serializeUserMini)(val.assignedTo),
        ['message']: val.message,
        ['completed_at']: val.completedAt == void 0
            ? val.completedAt
            : (0, utils_js_1.serializeDateTime)(val.completedAt),
        ['assigned_at']: val.assignedAt == void 0
            ? val.assignedAt
            : (0, utils_js_1.serializeDateTime)(val.assignedAt),
        ['reminded_at']: val.remindedAt == void 0
            ? val.remindedAt
            : (0, utils_js_1.serializeDateTime)(val.remindedAt),
        ['resolution_state']: val.resolutionState == void 0
            ? val.resolutionState
            : serializeTaskAssignmentResolutionStateField(val.resolutionState),
        ['assigned_by']: val.assignedBy == void 0
            ? val.assignedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.assignedBy),
    };
}
function deserializeTaskAssignment(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "TaskAssignment"' });
    }
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TaskAssignment"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeTaskAssignmentTypeField(val.type);
    const item = val.item == void 0 ? void 0 : (0, fileMini_generated_js_2.deserializeFileMini)(val.item);
    const assignedTo = val.assigned_to == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.assigned_to);
    if (!(val.message == void 0) && !(0, json_js_1.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "TaskAssignment"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.completed_at == void 0) && !(0, json_js_1.sdIsString)(val.completed_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "completed_at" of type "TaskAssignment"',
        });
    }
    const completedAt = val.completed_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.completed_at);
    if (!(val.assigned_at == void 0) && !(0, json_js_1.sdIsString)(val.assigned_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "assigned_at" of type "TaskAssignment"',
        });
    }
    const assignedAt = val.assigned_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.assigned_at);
    if (!(val.reminded_at == void 0) && !(0, json_js_1.sdIsString)(val.reminded_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "reminded_at" of type "TaskAssignment"',
        });
    }
    const remindedAt = val.reminded_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.reminded_at);
    const resolutionState = val.resolution_state == void 0
        ? void 0
        : deserializeTaskAssignmentResolutionStateField(val.resolution_state);
    const assignedBy = val.assigned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.assigned_by);
    return {
        id: id,
        type: type,
        item: item,
        assignedTo: assignedTo,
        message: message,
        completedAt: completedAt,
        assignedAt: assignedAt,
        remindedAt: remindedAt,
        resolutionState: resolutionState,
        assignedBy: assignedBy,
    };
}
//# sourceMappingURL=taskAssignment.generated.js.map