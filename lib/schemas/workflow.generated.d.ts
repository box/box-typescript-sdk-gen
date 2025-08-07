import { WorkflowMini } from './workflowMini.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type WorkflowFlowsTypeField = 'flow';
export type WorkflowFlowsTriggerTypeField = 'trigger';
export type WorkflowFlowsTriggerTriggerTypeField = 'WORKFLOW_MANUAL_START' | string;
export type WorkflowFlowsTriggerScopeTypeField = 'trigger_scope';
export type WorkflowFlowsTriggerScopeObjectTypeField = 'folder';
export interface WorkflowFlowsTriggerScopeObjectField {
    /**
     * The type of the object. */
    readonly type?: WorkflowFlowsTriggerScopeObjectTypeField;
    /**
     * The id of the object. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export interface WorkflowFlowsTriggerScopeField {
    /**
     * The trigger scope's resource type. */
    readonly type?: WorkflowFlowsTriggerScopeTypeField;
    /**
     * Indicates the path of the condition value to check. */
    readonly ref?: string;
    /**
     * The object the `ref` points to. */
    readonly object?: WorkflowFlowsTriggerScopeObjectField;
    readonly rawData?: SerializedData;
}
export interface WorkflowFlowsTriggerField {
    /**
     * The trigger's resource type. */
    readonly type?: WorkflowFlowsTriggerTypeField;
    /**
     * The type of trigger selected for this flow. */
    readonly triggerType?: WorkflowFlowsTriggerTriggerTypeField;
    /**
     * List of trigger scopes. */
    readonly scope?: readonly WorkflowFlowsTriggerScopeField[];
    readonly rawData?: SerializedData;
}
export type WorkflowFlowsOutcomesTypeField = 'outcome';
export type WorkflowFlowsOutcomesActionTypeField = 'add_metadata' | 'assign_task' | 'copy_file' | 'copy_folder' | 'create_folder' | 'delete_file' | 'delete_folder' | 'lock_file' | 'move_file' | 'move_folder' | 'remove_watermark_file' | 'rename_folder' | 'restore_folder' | 'share_file' | 'share_folder' | 'unlock_file' | 'upload_file' | 'wait_for_task' | 'watermark_file' | 'go_back_to_step' | 'apply_file_classification' | 'apply_folder_classification' | 'send_notification' | string;
export type WorkflowFlowsOutcomesIfRejectedTypeField = 'outcome';
export type WorkflowFlowsOutcomesIfRejectedActionTypeField = 'add_metadata' | 'assign_task' | 'copy_file' | 'copy_folder' | 'create_folder' | 'delete_file' | 'delete_folder' | 'lock_file' | 'move_file' | 'move_folder' | 'remove_watermark_file' | 'rename_folder' | 'restore_folder' | 'share_file' | 'share_folder' | 'unlock_file' | 'upload_file' | 'wait_for_task' | 'watermark_file' | 'go_back_to_step' | 'apply_file_classification' | 'apply_folder_classification' | 'send_notification' | string;
export interface WorkflowFlowsOutcomesIfRejectedField {
    /**
     * The identifier of the outcome. */
    readonly id?: string;
    /**
     * The outcomes resource type. */
    readonly type?: WorkflowFlowsOutcomesIfRejectedTypeField;
    /**
     * The name of the outcome. */
    readonly name?: string;
    readonly actionType?: WorkflowFlowsOutcomesIfRejectedActionTypeField;
    readonly rawData?: SerializedData;
}
export interface WorkflowFlowsOutcomesField {
    /**
     * The identifier of the outcome. */
    readonly id?: string;
    /**
     * The outcomes resource type. */
    readonly type?: WorkflowFlowsOutcomesTypeField;
    /**
     * The name of the outcome. */
    readonly name?: string;
    readonly actionType?: WorkflowFlowsOutcomesActionTypeField;
    /**
     * If `action_type` is `assign_task` and the task is rejected, returns a
     * list of outcomes to complete. */
    readonly ifRejected?: readonly WorkflowFlowsOutcomesIfRejectedField[];
    readonly rawData?: SerializedData;
}
export interface WorkflowFlowsField {
    /**
     * The identifier of the flow. */
    readonly id?: string;
    /**
     * The flow's resource type. */
    readonly type?: WorkflowFlowsTypeField;
    readonly trigger?: WorkflowFlowsTriggerField;
    readonly outcomes?: readonly WorkflowFlowsOutcomesField[];
    /**
     * When this flow was created. */
    readonly createdAt?: DateTime;
    readonly createdBy?: UserBase;
    readonly rawData?: SerializedData;
}
export type Workflow = WorkflowMini & {
    /**
     * A list of flows assigned to a workflow. */
    readonly flows?: readonly WorkflowFlowsField[];
};
export declare function serializeWorkflowFlowsTypeField(val: WorkflowFlowsTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTypeField(val: SerializedData): WorkflowFlowsTypeField;
export declare function serializeWorkflowFlowsTriggerTypeField(val: WorkflowFlowsTriggerTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerTypeField(val: SerializedData): WorkflowFlowsTriggerTypeField;
export declare function serializeWorkflowFlowsTriggerTriggerTypeField(val: WorkflowFlowsTriggerTriggerTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerTriggerTypeField(val: SerializedData): WorkflowFlowsTriggerTriggerTypeField;
export declare function serializeWorkflowFlowsTriggerScopeTypeField(val: WorkflowFlowsTriggerScopeTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerScopeTypeField(val: SerializedData): WorkflowFlowsTriggerScopeTypeField;
export declare function serializeWorkflowFlowsTriggerScopeObjectTypeField(val: WorkflowFlowsTriggerScopeObjectTypeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerScopeObjectTypeField(val: SerializedData): WorkflowFlowsTriggerScopeObjectTypeField;
export declare function serializeWorkflowFlowsTriggerScopeObjectField(val: WorkflowFlowsTriggerScopeObjectField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerScopeObjectField(val: SerializedData): WorkflowFlowsTriggerScopeObjectField;
export declare function serializeWorkflowFlowsTriggerScopeField(val: WorkflowFlowsTriggerScopeField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerScopeField(val: SerializedData): WorkflowFlowsTriggerScopeField;
export declare function serializeWorkflowFlowsTriggerField(val: WorkflowFlowsTriggerField): SerializedData;
export declare function deserializeWorkflowFlowsTriggerField(val: SerializedData): WorkflowFlowsTriggerField;
export declare function serializeWorkflowFlowsOutcomesTypeField(val: WorkflowFlowsOutcomesTypeField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesTypeField(val: SerializedData): WorkflowFlowsOutcomesTypeField;
export declare function serializeWorkflowFlowsOutcomesActionTypeField(val: WorkflowFlowsOutcomesActionTypeField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesActionTypeField(val: SerializedData): WorkflowFlowsOutcomesActionTypeField;
export declare function serializeWorkflowFlowsOutcomesIfRejectedTypeField(val: WorkflowFlowsOutcomesIfRejectedTypeField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesIfRejectedTypeField(val: SerializedData): WorkflowFlowsOutcomesIfRejectedTypeField;
export declare function serializeWorkflowFlowsOutcomesIfRejectedActionTypeField(val: WorkflowFlowsOutcomesIfRejectedActionTypeField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesIfRejectedActionTypeField(val: SerializedData): WorkflowFlowsOutcomesIfRejectedActionTypeField;
export declare function serializeWorkflowFlowsOutcomesIfRejectedField(val: WorkflowFlowsOutcomesIfRejectedField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesIfRejectedField(val: SerializedData): WorkflowFlowsOutcomesIfRejectedField;
export declare function serializeWorkflowFlowsOutcomesField(val: WorkflowFlowsOutcomesField): SerializedData;
export declare function deserializeWorkflowFlowsOutcomesField(val: SerializedData): WorkflowFlowsOutcomesField;
export declare function serializeWorkflowFlowsField(val: WorkflowFlowsField): SerializedData;
export declare function deserializeWorkflowFlowsField(val: SerializedData): WorkflowFlowsField;
export declare function serializeWorkflow(val: Workflow): SerializedData;
export declare function deserializeWorkflow(val: SerializedData): Workflow;
//# sourceMappingURL=workflow.generated.d.ts.map