import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CollaboratorVariableVariableValueField {
    constructor(fields) {
        /**
         * The object type. */
        this.type = 'user';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class CollaboratorVariable {
    constructor(fields) {
        /**
         * Collaborator
         * object type. */
        this.type = 'variable';
        /**
         * Variable type
         * for the Collaborator
         * object. */
        this.variableType = 'user_list';
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
export function serializeCollaboratorVariableTypeField(val) {
    return val;
}
export function deserializeCollaboratorVariableTypeField(val) {
    if (val == 'variable') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaboratorVariableTypeField",
    });
}
export function serializeCollaboratorVariableVariableTypeField(val) {
    return val;
}
export function deserializeCollaboratorVariableVariableTypeField(val) {
    if (val == 'user_list') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaboratorVariableVariableTypeField",
    });
}
export function serializeCollaboratorVariableVariableValueTypeField(val) {
    return val;
}
export function deserializeCollaboratorVariableVariableValueTypeField(val) {
    if (val == 'user') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CollaboratorVariableVariableValueTypeField",
    });
}
export function serializeCollaboratorVariableVariableValueField(val) {
    return {
        ['type']: serializeCollaboratorVariableVariableValueTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCollaboratorVariableVariableValueField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaboratorVariableVariableValueField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CollaboratorVariableVariableValueField" to be defined',
        });
    }
    const type = deserializeCollaboratorVariableVariableValueTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CollaboratorVariableVariableValueField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CollaboratorVariableVariableValueField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCollaboratorVariableVariableValueFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCollaboratorVariableVariableValueTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCollaboratorVariableVariableValueFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaboratorVariableVariableValueFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCollaboratorVariableVariableValueTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CollaboratorVariableVariableValueFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CollaboratorVariableVariableValueFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCollaboratorVariable(val) {
    return {
        ['type']: serializeCollaboratorVariableTypeField(val.type),
        ['variable_type']: serializeCollaboratorVariableVariableTypeField(val.variableType),
        ['variable_value']: val.variableValue.map(function (item) {
            return serializeCollaboratorVariableVariableValueField(item);
        }),
    };
}
export function deserializeCollaboratorVariable(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaboratorVariable"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CollaboratorVariable" to be defined',
        });
    }
    const type = deserializeCollaboratorVariableTypeField(val.type);
    if (val.variable_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "variable_type" of type "CollaboratorVariable" to be defined',
        });
    }
    const variableType = deserializeCollaboratorVariableVariableTypeField(val.variable_type);
    if (val.variable_value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "variable_value" of type "CollaboratorVariable" to be defined',
        });
    }
    if (!sdIsList(val.variable_value)) {
        throw new BoxSdkError({
            message: 'Expecting array for "variable_value" of type "CollaboratorVariable"',
        });
    }
    const variableValue = sdIsList(val.variable_value)
        ? val.variable_value.map(function (itm) {
            return deserializeCollaboratorVariableVariableValueField(itm);
        })
        : [];
    return {
        type: type,
        variableType: variableType,
        variableValue: variableValue,
    };
}
export function serializeCollaboratorVariableInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCollaboratorVariableTypeField(val.type),
        ['variableType']: val.variableType == void 0
            ? val.variableType
            : serializeCollaboratorVariableVariableTypeField(val.variableType),
        ['variable_value']: val.variableValue.map(function (item) {
            return serializeCollaboratorVariableVariableValueField(item);
        }),
    };
}
export function deserializeCollaboratorVariableInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CollaboratorVariableInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCollaboratorVariableTypeField(val.type);
    const variableType = val.variableType == void 0
        ? void 0
        : deserializeCollaboratorVariableVariableTypeField(val.variableType);
    if (val.variable_value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "variable_value" of type "CollaboratorVariableInput" to be defined',
        });
    }
    if (!sdIsList(val.variable_value)) {
        throw new BoxSdkError({
            message: 'Expecting array for "variable_value" of type "CollaboratorVariableInput"',
        });
    }
    const variableValue = sdIsList(val.variable_value)
        ? val.variable_value.map(function (itm) {
            return deserializeCollaboratorVariableVariableValueField(itm);
        })
        : [];
    return {
        type: type,
        variableType: variableType,
        variableValue: variableValue,
    };
}
//# sourceMappingURL=collaboratorVariable.generated.js.map