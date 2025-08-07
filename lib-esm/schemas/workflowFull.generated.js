import { deserializeWorkflowMiniTypeField } from './workflowMini.generated.js';
import { deserializeWorkflowFlowsField } from './workflow.generated.js';
import { serializeWorkflow } from './workflow.generated.js';
import { serializeUserBase } from './userBase.generated.js';
import { deserializeUserBase } from './userBase.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeWorkflowFull(val) {
    const base = serializeWorkflow(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "WorkflowFull"' });
    }
    return {
        ...base,
        ...{
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['modified_at']: val.modifiedAt == void 0
                ? val.modifiedAt
                : serializeDateTime(val.modifiedAt),
            ['created_by']: val.createdBy == void 0
                ? val.createdBy
                : serializeUserBase(val.createdBy),
            ['modified_by']: val.modifiedBy == void 0
                ? val.modifiedBy
                : serializeUserBase(val.modifiedBy),
        },
    };
}
export function deserializeWorkflowFull(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "WorkflowFull"' });
    }
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "WorkflowFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "WorkflowFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserBase(val.created_by);
    const modifiedBy = val.modified_by == void 0 ? void 0 : deserializeUserBase(val.modified_by);
    if (!(val.flows == void 0) && !sdIsList(val.flows)) {
        throw new BoxSdkError({
            message: 'Expecting array for "flows" of type "WorkflowFull"',
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
            message: 'Expecting string for "id" of type "WorkflowFull"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "WorkflowFull"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "WorkflowFull"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.is_enabled == void 0) && !sdIsBoolean(val.is_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_enabled" of type "WorkflowFull"',
        });
    }
    const isEnabled = val.is_enabled == void 0 ? void 0 : val.is_enabled;
    return {
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        createdBy: createdBy,
        modifiedBy: modifiedBy,
        flows: flows,
        id: id,
        type: type,
        name: name,
        description: description,
        isEnabled: isEnabled,
    };
}
//# sourceMappingURL=workflowFull.generated.js.map