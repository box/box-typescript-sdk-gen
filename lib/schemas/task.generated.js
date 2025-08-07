"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeTaskTypeField = serializeTaskTypeField;
exports.deserializeTaskTypeField = deserializeTaskTypeField;
exports.serializeTaskActionField = serializeTaskActionField;
exports.deserializeTaskActionField = deserializeTaskActionField;
exports.serializeTaskCompletionRuleField = serializeTaskCompletionRuleField;
exports.deserializeTaskCompletionRuleField = deserializeTaskCompletionRuleField;
exports.serializeTask = serializeTask;
exports.deserializeTask = deserializeTask;
const fileMini_generated_js_1 = require("./fileMini.generated.js");
const fileMini_generated_js_2 = require("./fileMini.generated.js");
const taskAssignments_generated_js_1 = require("./taskAssignments.generated.js");
const taskAssignments_generated_js_2 = require("./taskAssignments.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeTaskTypeField(val) {
    return val;
}
function deserializeTaskTypeField(val) {
    if (val == 'task') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize TaskTypeField" });
}
function serializeTaskActionField(val) {
    return val;
}
function deserializeTaskActionField(val) {
    if (val == 'review') {
        return val;
    }
    if (val == 'complete') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize TaskActionField" });
}
function serializeTaskCompletionRuleField(val) {
    return val;
}
function deserializeTaskCompletionRuleField(val) {
    if (val == 'all_assignees') {
        return val;
    }
    if (val == 'any_assignee') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TaskCompletionRuleField",
    });
}
function serializeTask(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeTaskTypeField(val.type),
        ['item']: val.item == void 0 ? val.item : (0, fileMini_generated_js_1.serializeFileMini)(val.item),
        ['due_at']: val.dueAt == void 0 ? val.dueAt : (0, utils_js_1.serializeDateTime)(val.dueAt),
        ['action']: val.action == void 0 ? val.action : serializeTaskActionField(val.action),
        ['message']: val.message,
        ['task_assignment_collection']: val.taskAssignmentCollection == void 0
            ? val.taskAssignmentCollection
            : (0, taskAssignments_generated_js_1.serializeTaskAssignments)(val.taskAssignmentCollection),
        ['is_completed']: val.isCompleted,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['completion_rule']: val.completionRule == void 0
            ? val.completionRule
            : serializeTaskCompletionRuleField(val.completionRule),
    };
}
function deserializeTask(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Task"' });
    }
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "Task"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeTaskTypeField(val.type);
    const item = val.item == void 0 ? void 0 : (0, fileMini_generated_js_2.deserializeFileMini)(val.item);
    if (!(val.due_at == void 0) && !(0, json_js_2.sdIsString)(val.due_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "due_at" of type "Task"',
        });
    }
    const dueAt = val.due_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.due_at);
    const action = val.action == void 0 ? void 0 : deserializeTaskActionField(val.action);
    if (!(val.message == void 0) && !(0, json_js_2.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "Task"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    const taskAssignmentCollection = val.task_assignment_collection == void 0
        ? void 0
        : (0, taskAssignments_generated_js_2.deserializeTaskAssignments)(val.task_assignment_collection);
    if (!(val.is_completed == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_completed)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_completed" of type "Task"',
        });
    }
    const isCompleted = val.is_completed == void 0 ? void 0 : val.is_completed;
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "Task"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const completionRule = val.completion_rule == void 0
        ? void 0
        : deserializeTaskCompletionRuleField(val.completion_rule);
    return {
        id: id,
        type: type,
        item: item,
        dueAt: dueAt,
        action: action,
        message: message,
        taskAssignmentCollection: taskAssignmentCollection,
        isCompleted: isCompleted,
        createdBy: createdBy,
        createdAt: createdAt,
        completionRule: completionRule,
    };
}
//# sourceMappingURL=task.generated.js.map