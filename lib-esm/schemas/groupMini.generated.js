import { deserializeGroupBaseTypeField } from './groupBase.generated.js';
import { serializeGroupBase } from './groupBase.generated.js';
import { GroupBase } from './groupBase.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GroupMini extends GroupBase {
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
export function serializeGroupMiniGroupTypeField(val) {
    return val;
}
export function deserializeGroupMiniGroupTypeField(val) {
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
        message: "Can't deserialize GroupMiniGroupTypeField",
    });
}
export function serializeGroupMini(val) {
    const base = serializeGroupBase(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "GroupMini"' });
    }
    return {
        ...base,
        ...{
            ['name']: val.name,
            ['group_type']: val.groupType == void 0
                ? val.groupType
                : serializeGroupMiniGroupTypeField(val.groupType),
        },
    };
}
export function deserializeGroupMini(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "GroupMini"' });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "GroupMini"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const groupType = val.group_type == void 0
        ? void 0
        : deserializeGroupMiniGroupTypeField(val.group_type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "GroupMini" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "GroupMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "GroupMini" to be defined',
        });
    }
    const type = deserializeGroupBaseTypeField(val.type);
    return {
        name: name,
        groupType: groupType,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=groupMini.generated.js.map