import { GroupMini } from './groupMini.generated.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class Group extends GroupMini {
    readonly createdAt?: DateTime;
    readonly modifiedAt?: DateTime;
    constructor(fields: Group);
}
export declare function serializeGroup(val: Group): SerializedData;
export declare function deserializeGroup(val: SerializedData): Group;
