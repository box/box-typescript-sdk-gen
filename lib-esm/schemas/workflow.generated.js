import { deserializeWorkflowMiniTypeField } from './workflowMini.generated.js';
import { serializeWorkflowMini } from './workflowMini.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeWorkflowFlowsTypeField(val) {
    return val;
}
export function deserializeWorkflowFlowsTypeField(val) {
    if (val == 'flow') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WorkflowFlowsTypeField",
    });
}
export function serializeWorkflowFlowsTriggerTypeField(val) {
    return val;
}
export function deserializeWorkflowFlowsTriggerTypeField(val) {
    if (val == 'trigger') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WorkflowFlowsTriggerTypeField",
    });
}
export function serializeWorkflowFlowsTriggerTriggerTypeField(val) {
    return val;
}
export function deserializeWorkflowFlowsTriggerTriggerTypeField(val) {
    if (val == 'WORKFLOW_MANUAL_START') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WorkflowFlowsTriggerTriggerTypeField",
    });
}
export function serializeWorkflowFlowsTriggerScopeTypeField(val) {
    return val;
}
export function deserializeWorkflowFlowsTriggerScopeTypeField(val) {
    if (val == 'trigger_scope') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WorkflowFlowsTriggerScopeTypeField",
    });
}
export function serializeWorkflowFlowsTriggerScopeObjectTypeField(val) {
    return val;
}
export function deserializeWorkflowFlowsTriggerScopeObjectTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WorkflowFlowsTriggerScopeObjectTypeField",
    });
}
export function serializeWorkflowFlowsTriggerScopeObjectField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeWorkflowFlowsTriggerScopeObjectTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeWorkflowFlowsTriggerScopeObjectField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WorkflowFlowsTriggerScopeObjectField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeWorkflowFlowsTriggerScopeObjectTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WorkflowFlowsTriggerScopeObjectField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
export function serializeWorkflowFlowsTriggerScopeField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeWorkflowFlowsTriggerScopeTypeField(val.type),
        ['ref']: val.ref,
        ['object']: val.object == void 0
            ? val.object
            : serializeWorkflowFlowsTriggerScopeObjectField(val.object),
    };
}
export function deserializeWorkflowFlowsTriggerScopeField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WorkflowFlowsTriggerScopeField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeWorkflowFlowsTriggerScopeTypeField(val.type);
    if (!(val.ref == void 0) && !sdIsString(val.ref)) {
        throw new BoxSdkError({
            message: 'Expecting string for "ref" of type "WorkflowFlowsTriggerScopeField"',
        });
    }
    const ref = val.ref == void 0 ? void 0 : val.ref;
    const object = val.object == void 0
        ? void 0
        : deserializeWorkflowFlowsTriggerScopeObjectField(val.object);
    return {
        type: type,
        ref: ref,
        object: object,
    };
}
export function serializeWorkflowFlowsTriggerField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeWorkflowFlowsTriggerTypeField(val.type),
        ['trigger_type']: val.triggerType == void 0
            ? val.triggerType
            : serializeWorkflowFlowsTriggerTriggerTypeField(val.triggerType),
        ['scope']: val.scope == void 0
            ? val.scope
            : val.scope.map(function (item) {
                return serializeWorkflowFlowsTriggerScopeField(item);
            }),
    };
}
export function deserializeWorkflowFlowsTriggerField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WorkflowFlowsTriggerField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeWorkflowFlowsTriggerTypeField(val.type);
    const triggerType = val.trigger_type == void 0
        ? void 0
        : deserializeWorkflowFlowsTriggerTriggerTypeField(val.trigger_type);
    if (!(val.scope == void 0) && !sdIsList(val.scope)) {
        throw new BoxSdkError({
            message: 'Expecting array for "scope" of type "WorkflowFlowsTriggerField"',
        });
    }
    const scope = val.scope == void 0
        ? void 0
        : sdIsList(val.scope)
            ? val.scope.map(function (itm) {
                return deserializeWorkflowFlowsTriggerScopeField(itm);
            })
            : [];
    return {
        type: type,
        triggerType: triggerType,
        scope: scope,
    };
}
export function serializeWorkflowFlowsOutcomesTypeField(val) {
    return val;
}
export function deserializeWorkflowFlowsOutcomesTypeField(val) {
    if (val == 'outcome') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WorkflowFlowsOutcomesTypeField",
    });
}
export function serializeWorkflowFlowsOutcomesActionTypeField(val) {
    return val;
}
export function deserializeWorkflowFlowsOutcomesActionTypeField(val) {
    if (val == 'add_metadata') {
        return val;
    }
    if (val == 'assign_task') {
        return val;
    }
    if (val == 'copy_file') {
        return val;
    }
    if (val == 'copy_folder') {
        return val;
    }
    if (val == 'create_folder') {
        return val;
    }
    if (val == 'delete_file') {
        return val;
    }
    if (val == 'delete_folder') {
        return val;
    }
    if (val == 'lock_file') {
        return val;
    }
    if (val == 'move_file') {
        return val;
    }
    if (val == 'move_folder') {
        return val;
    }
    if (val == 'remove_watermark_file') {
        return val;
    }
    if (val == 'rename_folder') {
        return val;
    }
    if (val == 'restore_folder') {
        return val;
    }
    if (val == 'share_file') {
        return val;
    }
    if (val == 'share_folder') {
        return val;
    }
    if (val == 'unlock_file') {
        return val;
    }
    if (val == 'upload_file') {
        return val;
    }
    if (val == 'wait_for_task') {
        return val;
    }
    if (val == 'watermark_file') {
        return val;
    }
    if (val == 'go_back_to_step') {
        return val;
    }
    if (val == 'apply_file_classification') {
        return val;
    }
    if (val == 'apply_folder_classification') {
        return val;
    }
    if (val == 'send_notification') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WorkflowFlowsOutcomesActionTypeField",
    });
}
export function serializeWorkflowFlowsOutcomesIfRejectedTypeField(val) {
    return val;
}
export function deserializeWorkflowFlowsOutcomesIfRejectedTypeField(val) {
    if (val == 'outcome') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WorkflowFlowsOutcomesIfRejectedTypeField",
    });
}
export function serializeWorkflowFlowsOutcomesIfRejectedActionTypeField(val) {
    return val;
}
export function deserializeWorkflowFlowsOutcomesIfRejectedActionTypeField(val) {
    if (val == 'add_metadata') {
        return val;
    }
    if (val == 'assign_task') {
        return val;
    }
    if (val == 'copy_file') {
        return val;
    }
    if (val == 'copy_folder') {
        return val;
    }
    if (val == 'create_folder') {
        return val;
    }
    if (val == 'delete_file') {
        return val;
    }
    if (val == 'delete_folder') {
        return val;
    }
    if (val == 'lock_file') {
        return val;
    }
    if (val == 'move_file') {
        return val;
    }
    if (val == 'move_folder') {
        return val;
    }
    if (val == 'remove_watermark_file') {
        return val;
    }
    if (val == 'rename_folder') {
        return val;
    }
    if (val == 'restore_folder') {
        return val;
    }
    if (val == 'share_file') {
        return val;
    }
    if (val == 'share_folder') {
        return val;
    }
    if (val == 'unlock_file') {
        return val;
    }
    if (val == 'upload_file') {
        return val;
    }
    if (val == 'wait_for_task') {
        return val;
    }
    if (val == 'watermark_file') {
        return val;
    }
    if (val == 'go_back_to_step') {
        return val;
    }
    if (val == 'apply_file_classification') {
        return val;
    }
    if (val == 'apply_folder_classification') {
        return val;
    }
    if (val == 'send_notification') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize WorkflowFlowsOutcomesIfRejectedActionTypeField",
    });
}
export function serializeWorkflowFlowsOutcomesIfRejectedField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeWorkflowFlowsOutcomesIfRejectedTypeField(val.type),
        ['name']: val.name,
        ['action_type']: val.actionType == void 0
            ? val.actionType
            : serializeWorkflowFlowsOutcomesIfRejectedActionTypeField(val.actionType),
    };
}
export function deserializeWorkflowFlowsOutcomesIfRejectedField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WorkflowFlowsOutcomesIfRejectedField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WorkflowFlowsOutcomesIfRejectedField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeWorkflowFlowsOutcomesIfRejectedTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "WorkflowFlowsOutcomesIfRejectedField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const actionType = val.action_type == void 0
        ? void 0
        : deserializeWorkflowFlowsOutcomesIfRejectedActionTypeField(val.action_type);
    return {
        id: id,
        type: type,
        name: name,
        actionType: actionType,
    };
}
export function serializeWorkflowFlowsOutcomesField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeWorkflowFlowsOutcomesTypeField(val.type),
        ['name']: val.name,
        ['action_type']: val.actionType == void 0
            ? val.actionType
            : serializeWorkflowFlowsOutcomesActionTypeField(val.actionType),
        ['if_rejected']: val.ifRejected == void 0
            ? val.ifRejected
            : val.ifRejected.map(function (item) {
                return serializeWorkflowFlowsOutcomesIfRejectedField(item);
            }),
    };
}
export function deserializeWorkflowFlowsOutcomesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WorkflowFlowsOutcomesField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WorkflowFlowsOutcomesField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeWorkflowFlowsOutcomesTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "WorkflowFlowsOutcomesField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const actionType = val.action_type == void 0
        ? void 0
        : deserializeWorkflowFlowsOutcomesActionTypeField(val.action_type);
    if (!(val.if_rejected == void 0) && !sdIsList(val.if_rejected)) {
        throw new BoxSdkError({
            message: 'Expecting array for "if_rejected" of type "WorkflowFlowsOutcomesField"',
        });
    }
    const ifRejected = val.if_rejected == void 0
        ? void 0
        : sdIsList(val.if_rejected)
            ? val.if_rejected.map(function (itm) {
                return deserializeWorkflowFlowsOutcomesIfRejectedField(itm);
            })
            : [];
    return {
        id: id,
        type: type,
        name: name,
        actionType: actionType,
        ifRejected: ifRejected,
    };
}
export function serializeWorkflowFlowsField(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeWorkflowFlowsTypeField(val.type),
        ['trigger']: val.trigger == void 0
            ? val.trigger
            : serializeWorkflowFlowsTriggerField(val.trigger),
        ['outcomes']: val.outcomes == void 0
            ? val.outcomes
            : val.outcomes.map(function (item) {
                return serializeWorkflowFlowsOutcomesField(item);
            }),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserBase(val.createdBy),
    };
}
export function deserializeWorkflowFlowsField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "WorkflowFlowsField"',
        });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WorkflowFlowsField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeWorkflowFlowsTypeField(val.type);
    const trigger = val.trigger == void 0
        ? void 0
        : deserializeWorkflowFlowsTriggerField(val.trigger);
    if (!(val.outcomes == void 0) && !sdIsList(val.outcomes)) {
        throw new BoxSdkError({
            message: 'Expecting array for "outcomes" of type "WorkflowFlowsField"',
        });
    }
    const outcomes = val.outcomes == void 0
        ? void 0
        : sdIsList(val.outcomes)
            ? val.outcomes.map(function (itm) {
                return deserializeWorkflowFlowsOutcomesField(itm);
            })
            : [];
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "WorkflowFlowsField"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    return {
        id: id,
        type: type,
        trigger: trigger,
        outcomes: outcomes,
        createdAt: createdAt,
        createdBy: createdBy,
    };
}
export function serializeWorkflow(val) {
    const base = serializeWorkflowMini(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Workflow"' });
    }
    return {
        ...base,
        ...{
            ['flows']: val.flows == void 0
                ? val.flows
                : val.flows.map(function (item) {
                    return serializeWorkflowFlowsField(item);
                }),
        },
    };
}
export function deserializeWorkflow(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Workflow"' });
    }
    if (!(val.flows == void 0) && !sdIsList(val.flows)) {
        throw new BoxSdkError({
            message: 'Expecting array for "flows" of type "Workflow"',
        });
    }
    const flows = val.flows == void 0
        ? void 0
        : sdIsList(val.flows)
            ? val.flows.map(function (itm) {
                return deserializeWorkflowFlowsField(itm);
            })
            : [];
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "Workflow"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "Workflow"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "Workflow"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.is_enabled == void 0) && !sdIsBoolean(val.is_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_enabled" of type "Workflow"',
        });
    }
    const isEnabled = val.is_enabled == void 0 ? void 0 : val.is_enabled;
    return {
        flows: flows,
        id: id,
        type: type,
        name: name,
        description: description,
        isEnabled: isEnabled,
    };
}
//# sourceMappingURL=workflow.generated.js.map