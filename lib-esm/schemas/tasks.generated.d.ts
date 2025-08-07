import { Task } from './task.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface Tasks {
    /**
     * One greater than the offset of the last entry in the entire collection.
     * The total number of entries in the collection may be less than
     * `total_count`. */
    readonly totalCount?: number;
    /**
     * A list of tasks. */
    readonly entries?: readonly Task[];
    readonly rawData?: SerializedData;
}
export declare function serializeTasks(val: Tasks): SerializedData;
export declare function deserializeTasks(val: SerializedData): Tasks;
