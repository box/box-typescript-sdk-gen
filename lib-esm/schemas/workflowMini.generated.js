import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeWorkflowMiniTypeField(val) {
    return val;
}
export function deserializeWorkflowMiniTypeField(val) {
    if (val == 'workflow') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize WorkflowMiniTypeField" });
}
export function serializeWorkflowMini(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeWorkflowMiniTypeField(val.type),
        ['name']: val.name,
        ['description']: val.description,
        ['is_enabled']: val.isEnabled,
    };
}
export function deserializeWorkflowMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "WorkflowMini"' });
    }
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "WorkflowMini"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeWorkflowMiniTypeField(val.type);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "WorkflowMini"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "WorkflowMini"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (!(val.is_enabled == void 0) && !sdIsBoolean(val.is_enabled)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_enabled" of type "WorkflowMini"',
        });
    }
    const isEnabled = val.is_enabled == void 0 ? void 0 : val.is_enabled;
    return {
        id: id,
        type: type,
        name: name,
        description: description,
        isEnabled: isEnabled,
    };
}
//# sourceMappingURL=workflowMini.generated.js.map