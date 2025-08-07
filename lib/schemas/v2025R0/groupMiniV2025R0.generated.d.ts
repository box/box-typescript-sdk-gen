import { GroupBaseV2025R0 } from './groupBaseV2025R0.generated.js';
import { SerializedData } from '../../serialization/json.js';
export type GroupMiniV2025R0GroupTypeField = 'managed_group' | 'all_users_group' | string;
export declare class GroupMiniV2025R0 extends GroupBaseV2025R0 {
    readonly name?: string;
    readonly groupType?: GroupMiniV2025R0GroupTypeField;
    constructor(fields: GroupMiniV2025R0);
}
export declare function serializeGroupMiniV2025R0GroupTypeField(val: GroupMiniV2025R0GroupTypeField): SerializedData;
export declare function deserializeGroupMiniV2025R0GroupTypeField(val: SerializedData): GroupMiniV2025R0GroupTypeField;
export declare function serializeGroupMiniV2025R0(val: GroupMiniV2025R0): SerializedData;
export declare function deserializeGroupMiniV2025R0(val: SerializedData): GroupMiniV2025R0;
//# sourceMappingURL=groupMiniV2025R0.generated.d.ts.map