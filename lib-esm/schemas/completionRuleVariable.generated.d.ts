import { SerializedData } from '../serialization/json.js';
export type CompletionRuleVariableTypeField = 'variable';
export type CompletionRuleVariableVariableTypeField = 'task_completion_rule' | string;
export type CompletionRuleVariableVariableValueField = 'all_assignees' | 'any_assignees' | string;
export declare class CompletionRuleVariable {
    /**
     * Completion
     * Rule object type. */
    readonly type: CompletionRuleVariableTypeField;
    /**
     * Variable type
     * for the Completion
     * Rule object. */
    readonly variableType: CompletionRuleVariableVariableTypeField;
    /**
     * Variable
     * values for a completion
     * rule. */
    readonly variableValue: CompletionRuleVariableVariableValueField;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<CompletionRuleVariable, 'type' | 'variableType'> & Partial<Pick<CompletionRuleVariable, 'type' | 'variableType'>>);
}
export interface CompletionRuleVariableInput {
    /**
     * Completion
     * Rule object type. */
    readonly type?: CompletionRuleVariableTypeField;
    /**
     * Variable type
     * for the Completion
     * Rule object. */
    readonly variableType?: CompletionRuleVariableVariableTypeField;
    /**
     * Variable
     * values for a completion
     * rule. */
    readonly variableValue: CompletionRuleVariableVariableValueField;
    readonly rawData?: SerializedData;
}
export declare function serializeCompletionRuleVariableTypeField(val: CompletionRuleVariableTypeField): SerializedData;
export declare function deserializeCompletionRuleVariableTypeField(val: SerializedData): CompletionRuleVariableTypeField;
export declare function serializeCompletionRuleVariableVariableTypeField(val: CompletionRuleVariableVariableTypeField): SerializedData;
export declare function deserializeCompletionRuleVariableVariableTypeField(val: SerializedData): CompletionRuleVariableVariableTypeField;
export declare function serializeCompletionRuleVariableVariableValueField(val: CompletionRuleVariableVariableValueField): SerializedData;
export declare function deserializeCompletionRuleVariableVariableValueField(val: SerializedData): CompletionRuleVariableVariableValueField;
export declare function serializeCompletionRuleVariable(val: CompletionRuleVariable): SerializedData;
export declare function deserializeCompletionRuleVariable(val: SerializedData): CompletionRuleVariable;
export declare function serializeCompletionRuleVariableInput(val: CompletionRuleVariableInput): SerializedData;
export declare function deserializeCompletionRuleVariableInput(val: SerializedData): CompletionRuleVariableInput;
