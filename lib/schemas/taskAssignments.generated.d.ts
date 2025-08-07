import { TaskAssignment } from './taskAssignment.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface TaskAssignments {
    /**
     * The total number of items in this collection. */
    readonly totalCount?: number;
    /**
     * A list of task assignments. */
    readonly entries?: readonly TaskAssignment[];
    readonly rawData?: SerializedData;
}
export declare function serializeTaskAssignments(val: TaskAssignments): SerializedData;
export declare function deserializeTaskAssignments(val: SerializedData): TaskAssignments;
//# sourceMappingURL=taskAssignments.generated.d.ts.map