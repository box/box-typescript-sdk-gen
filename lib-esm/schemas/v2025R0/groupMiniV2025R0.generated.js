import { deserializeGroupBaseV2025R0TypeField } from './groupBaseV2025R0.generated.js';
import { serializeGroupBaseV2025R0 } from './groupBaseV2025R0.generated.js';
import { GroupBaseV2025R0 } from './groupBaseV2025R0.generated.js';
import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export class GroupMiniV2025R0 extends GroupBaseV2025R0 {
    constructor(fields) {
        super(fields);
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.groupType !== undefined) {
            this.groupType = fields.groupType;
        }
    }
}
export function serializeGroupMiniV2025R0GroupTypeField(val) {
    return val;
}
export function deserializeGroupMiniV2025R0GroupTypeField(val) {
    if (val == 'managed_group') {
        return val;
    }
    if (val == 'all_users_group') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GroupMiniV2025R0GroupTypeField",
    });
}
export function serializeGroupMiniV2025R0(val) {
    const base = serializeGroupBaseV2025R0(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "GroupMiniV2025R0"',
        });
    }
    return {
        ...base,
        ...{
            ['name']: val.name,
            ['group_type']: val.groupType == void 0
                ? val.groupType
                : serializeGroupMiniV2025R0GroupTypeField(val.groupType),
        },
    };
}
export function deserializeGroupMiniV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "GroupMiniV2025R0"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "GroupMiniV2025R0"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const groupType = val.group_type == void 0
        ? void 0
        : deserializeGroupMiniV2025R0GroupTypeField(val.group_type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "GroupMiniV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "GroupMiniV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "GroupMiniV2025R0" to be defined',
        });
    }
    const type = deserializeGroupBaseV2025R0TypeField(val.type);
    return {
        name: name,
        groupType: groupType,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=groupMiniV2025R0.generated.js.map