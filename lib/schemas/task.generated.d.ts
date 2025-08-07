import { FileMini } from './fileMini.generated.js';
import { TaskAssignments } from './taskAssignments.generated.js';
import { UserMini } from './userMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export type TaskTypeField = 'task';
export type TaskActionField = 'review' | 'complete' | string;
export type TaskCompletionRuleField = 'all_assignees' | 'any_assignee' | string;
export interface Task {
    /**
     * The unique identifier for this task. */
    readonly id?: string;
    /**
     * The value will always be `task`. */
    readonly type?: TaskTypeField;
    readonly item?: FileMini;
    /**
     * When the task is due. */
    readonly dueAt?: DateTime;
    /**
     * The type of task the task assignee will be prompted to
     * perform. */
    readonly action?: TaskActionField;
    /**
     * A message that will be included with the task. */
    readonly message?: string;
    readonly taskAssignmentCollection?: TaskAssignments;
    /**
     * Whether the task has been completed. */
    readonly isCompleted?: boolean;
    readonly createdBy?: UserMini;
    /**
     * When the task object was created. */
    readonly createdAt?: DateTime;
    /**
     * Defines which assignees need to complete this task before the task
     * is considered completed.
     *
     * * `all_assignees` requires all assignees to review or
     * approve the the task in order for it to be considered completed.
     * * `any_assignee` accepts any one assignee to review or
     * approve the the task in order for it to be considered completed. */
    readonly completionRule?: TaskCompletionRuleField;
    readonly rawData?: SerializedData;
}
export declare function serializeTaskTypeField(val: TaskTypeField): SerializedData;
export declare function deserializeTaskTypeField(val: SerializedData): TaskTypeField;
export declare function serializeTaskActionField(val: TaskActionField): SerializedData;
export declare function deserializeTaskActionField(val: SerializedData): TaskActionField;
export declare function serializeTaskCompletionRuleField(val: TaskCompletionRuleField): SerializedData;
export declare function deserializeTaskCompletionRuleField(val: SerializedData): TaskCompletionRuleField;
export declare function serializeTask(val: Task): SerializedData;
export declare function deserializeTask(val: SerializedData): Task;
//# sourceMappingURL=task.generated.d.ts.map