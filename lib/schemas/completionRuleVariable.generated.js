"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CompletionRuleVariable = void 0;
exports.serializeCompletionRuleVariableTypeField = serializeCompletionRuleVariableTypeField;
exports.deserializeCompletionRuleVariableTypeField = deserializeCompletionRuleVariableTypeField;
exports.serializeCompletionRuleVariableVariableTypeField = serializeCompletionRuleVariableVariableTypeField;
exports.deserializeCompletionRuleVariableVariableTypeField = deserializeCompletionRuleVariableVariableTypeField;
exports.serializeCompletionRuleVariableVariableValueField = serializeCompletionRuleVariableVariableValueField;
exports.deserializeCompletionRuleVariableVariableValueField = deserializeCompletionRuleVariableVariableValueField;
exports.serializeCompletionRuleVariable = serializeCompletionRuleVariable;
exports.deserializeCompletionRuleVariable = deserializeCompletionRuleVariable;
exports.serializeCompletionRuleVariableInput = serializeCompletionRuleVariableInput;
exports.deserializeCompletionRuleVariableInput = deserializeCompletionRuleVariableInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class CompletionRuleVariable {
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
exports.CompletionRuleVariable = CompletionRuleVariable;
function serializeCompletionRuleVariableTypeField(val) {
    return val;
}
function deserializeCompletionRuleVariableTypeField(val) {
    if (val == 'variable') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CompletionRuleVariableTypeField",
    });
}
function serializeCompletionRuleVariableVariableTypeField(val) {
    return val;
}
function deserializeCompletionRuleVariableVariableTypeField(val) {
    if (val == 'task_completion_rule') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CompletionRuleVariableVariableTypeField",
    });
}
function serializeCompletionRuleVariableVariableValueField(val) {
    return val;
}
function deserializeCompletionRuleVariableVariableValueField(val) {
    if (val == 'all_assignees') {
        return val;
    }
    if (val == 'any_assignees') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CompletionRuleVariableVariableValueField",
    });
}
function serializeCompletionRuleVariable(val) {
    return {
        ['type']: serializeCompletionRuleVariableTypeField(val.type),
        ['variable_type']: serializeCompletionRuleVariableVariableTypeField(val.variableType),
        ['variable_value']: serializeCompletionRuleVariableVariableValueField(val.variableValue),
    };
}
function deserializeCompletionRuleVariable(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CompletionRuleVariable"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CompletionRuleVariable" to be defined',
        });
    }
    const type = deserializeCompletionRuleVariableTypeField(val.type);
    if (val.variable_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "variable_type" of type "CompletionRuleVariable" to be defined',
        });
    }
    const variableType = deserializeCompletionRuleVariableVariableTypeField(val.variable_type);
    if (val.variable_value == void 0) {
        throw new errors_js_1.BoxSdkError({
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
function serializeCompletionRuleVariableInput(val) {
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
function deserializeCompletionRuleVariableInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
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
        throw new errors_js_1.BoxSdkError({
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