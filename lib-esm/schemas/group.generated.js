import { deserializeGroupBaseTypeField } from './groupBase.generated.js';
import { deserializeGroupMiniGroupTypeField } from './groupMini.generated.js';
import { serializeGroupMini } from './groupMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { GroupMini } from './groupMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class Group extends GroupMini {
    constructor(fields) {
        super(fields);
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.modifiedAt !== undefined) {
            this.modifiedAt = fields.modifiedAt;
        }
    }
}
export function serializeGroup(val) {
    const base = serializeGroupMini(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Group"' });
    }
    return {
        ...base,
        ...{
            ['created_at']: val.createdAt == void 0
                ? val.createdAt
                : serializeDateTime(val.createdAt),
            ['modified_at']: val.modifiedAt == void 0
                ? val.modifiedAt
                : serializeDateTime(val.modifiedAt),
        },
    };
}
export function deserializeGroup(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "Group"' });
    }
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "Group"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    if (!(val.modified_at == void 0) && !sdIsString(val.modified_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "modified_at" of type "Group"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : deserializeDateTime(val.modified_at);
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "Group"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    const groupType = val.group_type == void 0
        ? void 0
        : deserializeGroupMiniGroupTypeField(val.group_type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "Group" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "Group"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "Group" to be defined',
        });
    }
    const type = deserializeGroupBaseTypeField(val.type);
    return {
        createdAt: createdAt,
        modifiedAt: modifiedAt,
        name: name,
        groupType: groupType,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=group.generated.js.map