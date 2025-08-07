import { FileMini } from './fileMini.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TaskAssignmentTypeField = 'task_assignment';
export type TaskAssignmentResolutionStateField = 'completed' | 'incomplete' | 'approved' | 'rejected' | string;
export interface TaskAssignment {
    /**
     * The unique identifier for this task assignment. */
    readonly id?: string;
    /**
     * The value will always be `task_assignment`. */
    readonly type?: TaskAssignmentTypeField;
    readonly item?: FileMini;
    readonly assignedTo?: UserMini;
    /**
     * A message that will is included with the task
     * assignment. This is visible to the assigned user in the web and mobile
     * UI. */
    readonly message?: string;
    /**
     * The date at which this task assignment was
     * completed. This will be `null` if the task is not completed yet. */
    readonly completedAt?: DateTime;
    /**
     * The date at which this task was assigned to the user. */
    readonly assignedAt?: DateTime;
    /**
     * The date at which the assigned user was reminded of this task
     * assignment. */
    readonly remindedAt?: DateTime;
    /**
     * The current state of the assignment. The available states depend on
     * the `action` value of the task object. */
    readonly resolutionState?: TaskAssignmentResolutionStateField;
    readonly assignedBy?: UserMini;
    readonly rawData?: SerializedData;
}
export declare function serializeTaskAssignmentTypeField(val: TaskAssignmentTypeField): SerializedData;
export declare function deserializeTaskAssignmentTypeField(val: SerializedData): TaskAssignmentTypeField;
export declare function serializeTaskAssignmentResolutionStateField(val: TaskAssignmentResolutionStateField): SerializedData;
export declare function deserializeTaskAssignmentResolutionStateField(val: SerializedData): TaskAssignmentResolutionStateField;
export declare function serializeTaskAssignment(val: TaskAssignment): SerializedData;
export declare function deserializeTaskAssignment(val: SerializedData): TaskAssignment;
//# sourceMappingURL=taskAssignment.generated.d.ts.map