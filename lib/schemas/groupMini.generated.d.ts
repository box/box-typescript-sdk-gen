import { GroupBase } from './groupBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type GroupMiniGroupTypeField = 'managed_group' | 'all_users_group' | string;
export declare class GroupMini extends GroupBase {
    readonly name?: string;
    readonly groupType?: GroupMiniGroupTypeField;
    constructor(fields: GroupMini);
}
export declare function serializeGroupMiniGroupTypeField(val: GroupMiniGroupTypeField): SerializedData;
export declare function deserializeGroupMiniGroupTypeField(val: SerializedData): GroupMiniGroupTypeField;
export declare function serializeGroupMini(val: GroupMini): SerializedData;
export declare function deserializeGroupMini(val: SerializedData): GroupMini;
//# sourceMappingURL=groupMini.generated.d.ts.map