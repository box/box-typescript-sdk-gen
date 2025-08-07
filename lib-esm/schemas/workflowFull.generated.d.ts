import { Workflow } from './workflow.generated.js';
import { UserBase } from './userBase.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type WorkflowFull = Workflow & {
    /**
     * The date and time when the workflow was created on Box. */
    readonly createdAt?: DateTime;
    /**
     * The date and time when the workflow was last updated on Box. */
    readonly modifiedAt?: DateTime;
    readonly createdBy?: UserBase;
    readonly modifiedBy?: UserBase;
};
export declare function serializeWorkflowFull(val: WorkflowFull): SerializedData;
export declare function deserializeWorkflowFull(val: SerializedData): WorkflowFull;
