import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class RoleVariable {
    constructor(fields) {
        /**
         * Role object type. */
        this.type = 'variable';
        /**
         * The variable type used
         * by the object. */
        this.variableType = 'collaborator_role';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.variableType !== undefined) {
            this.variableType = fields.variableType;
        }
        if (fields.variableValue !== undefined) {
            this.variableValue = fields.variableValue;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeRoleVariableTypeField(val) {
    return val;
}
export function deserializeRoleVariableTypeField(val) {
    if (val == 'variable') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize RoleVariableTypeField" });
}
export function serializeRoleVariableVariableTypeField(val) {
    return val;
}
export function deserializeRoleVariableVariableTypeField(val) {
    if (val == 'collaborator_role') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize RoleVariableVariableTypeField",
    });
}
export function serializeRoleVariableVariableValueField(val) {
    return val;
}
export function deserializeRoleVariableVariableValueField(val) {
    if (val == 'editor') {
        return val;
    }
    if (val == 'viewer') {
        return val;
    }
    if (val == 'previewer') {
        return val;
    }
    if (val == 'uploader') {
        return val;
    }
    if (val == 'previewer uploader') {
        return val;
    }
    if (val == 'viewer uploader') {
        return val;
    }
    if (val == 'co-owner') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize RoleVariableVariableValueField",
    });
}
export function serializeRoleVariable(val) {
    return {
        ['type']: serializeRoleVariableTypeField(val.type),
        ['variable_type']: serializeRoleVariableVariableTypeField(val.variableType),
        ['variable_value']: serializeRoleVariableVariableValueField(val.variableValue),
    };
}
export function deserializeRoleVariable(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "RoleVariable"' });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "RoleVariable" to be defined',
        });
    }
    const type = deserializeRoleVariableTypeField(val.type);
    if (val.variable_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "variable_type" of type "RoleVariable" to be defined',
        });
    }
    const variableType = deserializeRoleVariableVariableTypeField(val.variable_type);
    if (val.variable_value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "variable_value" of type "RoleVariable" to be defined',
        });
    }
    const variableValue = deserializeRoleVariableVariableValueField(val.variable_value);
    return {
        type: type,
        variableType: variableType,
        variableValue: variableValue,
    };
}
export function serializeRoleVariableInput(val) {
    return {
        ['type']: val.type == void 0 ? val.type : serializeRoleVariableTypeField(val.type),
        ['variableType']: val.variableType == void 0
            ? val.variableType
            : serializeRoleVariableVariableTypeField(val.variableType),
        ['variable_value']: serializeRoleVariableVariableValueField(val.variableValue),
    };
}
export function deserializeRoleVariableInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "RoleVariableInput"',
        });
    }
    const type = val.type == void 0 ? void 0 : deserializeRoleVariableTypeField(val.type);
    const variableType = val.variableType == void 0
        ? void 0
        : deserializeRoleVariableVariableTypeField(val.variableType);
    if (val.variable_value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "variable_value" of type "RoleVariableInput" to be defined',
        });
    }
    const variableValue = deserializeRoleVariableVariableValueField(val.variable_value);
    return {
        type: type,
        variableType: variableType,
        variableValue: variableValue,
    };
}
//# sourceMappingURL=roleVariable.generated.js.map