import { SerializedData } from '../serialization/json.js';
export type WorkflowMiniTypeField = 'workflow';
export interface WorkflowMini {
    /**
     * The unique identifier for the workflow. */
    readonly id?: string;
    /**
     * The value will always be `workflow`. */
    readonly type?: WorkflowMiniTypeField;
    /**
     * The name of the workflow. */
    readonly name?: string;
    /**
     * The description for a workflow. */
    readonly description?: string;
    /**
     * Specifies if this workflow is enabled. */
    readonly isEnabled?: boolean;
    readonly rawData?: SerializedData;
}
export declare function serializeWorkflowMiniTypeField(val: WorkflowMiniTypeField): SerializedData;
export declare function deserializeWorkflowMiniTypeField(val: SerializedData): WorkflowMiniTypeField;
export declare function serializeWorkflowMini(val: WorkflowMini): SerializedData;
export declare function deserializeWorkflowMini(val: SerializedData): WorkflowMini;
//# sourceMappingURL=workflowMini.generated.d.ts.map