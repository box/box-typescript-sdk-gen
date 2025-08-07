import { serializeFileMini } from './fileMini.generated.js';
import { deserializeFileMini } from './fileMini.generated.js';
import { serializeTaskAssignments } from './taskAssignments.generated.js';
import { deserializeTaskAssignments } from './taskAssignments.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeTaskTypeField(val) {
    return val;
}
export function deserializeTaskTypeField(val) {
    if (val == 'task') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize TaskTypeField" });
}
export function serializeTaskActionField(val) {
    return val;
}
export function deserializeTaskActionField(val) {
    if (val == 'review') {
        return val;
    }
    if (val == 'complete') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize TaskActionField" });
}
export function serializeTaskCompletionRuleField(val) {
    return val;
}
export function deserializeTaskCompletionRuleField(val) {
    if (val == 'all_assignees') {
        return val;
    }
    if (val == 'any_assignee') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize TaskCompletionRuleField",
    });
}
export function serializeTask(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeTaskTypeField(val.type),
        ['item']: val.item == void 0 ? val.item : serializeFileMini(val.item),
        ['due_at']: val.dueAt == void 0 ? val.dueAt : serializeDateTime(val.dueAt),
        ['action']: val.action == void 0 ? val.action : serializeTaskActionField(val.action),
        ['message']: val.message,
        ['task_assignment_collection']: val.taskAssignmentCollection == void 0
            ? val.taskAssignmentCollection
            : serializeTaskAssignments(val.taskAssignmentCollection),
        ['is_completed']: val.isCompleted,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserMini(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['completion_rule']: val.completionRule == void 0
            ? val.completionRule
            : serializeTaskCompletionRuleField(val.completionRule),
    };
}
export function deserializeTask(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Task"' });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "Task"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeTaskTypeField(val.type);
    const item = val.item == void 0 ? void 0 : deserializeFileMini(val.item);
    if (!(val.due_at == void 0) && !sdIsString(val.due_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "due_at" of type "Task"',
        });
    }
    const dueAt = val.due_at == void 0 ? void 0 : deserializeDateTime(val.due_at);
    const action = val.action == void 0 ? void 0 : deserializeTaskActionField(val.action);
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "Task"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    const taskAssignmentCollection = val.task_assignment_collection == void 0
        ? void 0
        : deserializeTaskAssignments(val.task_assignment_collection);
    if (!(val.is_completed == void 0) && !sdIsBoolean(val.is_completed)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_completed" of type "Task"',
        });
    }
    const isCompleted = val.is_completed == void 0 ? void 0 : val.is_completed;
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "Task"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
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