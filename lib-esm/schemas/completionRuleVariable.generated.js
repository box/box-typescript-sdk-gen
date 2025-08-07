import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CompletionRuleVariable {
    constructor(fields) {
        /**
         * Completion
         * Rule object type. */
        this.type = 'variable';
        /**
         * Variable type
         * for the Completion
         * Rule object. */
        this.variableType = 'task_completion_rule';
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
export function serializeCompletionRuleVariableTypeField(val) {
    return val;
}
export function deserializeCompletionRuleVariableTypeField(val) {
    if (val == 'variable') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CompletionRuleVariableTypeField",
    });
}
export function serializeCompletionRuleVariableVariableTypeField(val) {
    return val;
}
export function deserializeCompletionRuleVariableVariableTypeField(val) {
    if (val == 'task_completion_rule') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CompletionRuleVariableVariableTypeField",
    });
}
export function serializeCompletionRuleVariableVariableValueField(val) {
    return val;
}
export function deserializeCompletionRuleVariableVariableValueField(val) {
    if (val == 'all_assignees') {
        return val;
    }
    if (val == 'any_assignees') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CompletionRuleVariableVariableValueField",
    });
}
export function serializeCompletionRuleVariable(val) {
    return {
        ['type']: serializeCompletionRuleVariableTypeField(val.type),
        ['variable_type']: serializeCompletionRuleVariableVariableTypeField(val.variableType),
        ['variable_value']: serializeCompletionRuleVariableVariableValueField(val.variableValue),
    };
}
export function deserializeCompletionRuleVariable(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CompletionRuleVariable"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CompletionRuleVariable" to be defined',
        });
    }
    const type = deserializeCompletionRuleVariableTypeField(val.type);
    if (val.variable_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "variable_type" of type "CompletionRuleVariable" to be defined',
        });
    }
    const variableType = deserializeCompletionRuleVariableVariableTypeField(val.variable_type);
    if (val.variable_value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "variable_value" of type "CompletionRuleVariable" to be defined',
        });
    }
    const variableValue = deserializeCompletionRuleVariableVariableValueField(val.variable_value);
    return {
        type: type,
        variableType: variableType,
        variableValue: variableValue,
    };
}
export function serializeCompletionRuleVariableInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCompletionRuleVariableTypeField(val.type),
        ['variableType']: val.variableType == void 0
            ? val.variableType
            : serializeCompletionRuleVariableVariableTypeField(val.variableType),
        ['variable_value']: serializeCompletionRuleVariableVariableValueField(val.variableValue),
    };
}
export function deserializeCompletionRuleVariableInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CompletionRuleVariableInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCompletionRuleVariableTypeField(val.type);
    const variableType = val.variableType == void 0
        ? void 0
        : deserializeCompletionRuleVariableVariableTypeField(val.variableType);
    if (val.variable_value == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "variable_value" of type "CompletionRuleVariableInput" to be defined',
        });
    }
    const variableValue = deserializeCompletionRuleVariableVariableValueField(val.variable_value);
    return {
        type: type,
        variableType: variableType,
        variableValue: variableValue,
    };
}
//# sourceMappingURL=completionRuleVariable.generated.js.map