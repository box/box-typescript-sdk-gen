import { BoxSdkError } from '../../box/errors.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeHubItemV2025R0TypeField(val) {
    return val;
}
export function deserializeHubItemV2025R0TypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    if (val == 'web_link') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize HubItemV2025R0TypeField",
    });
}
export function serializeHubItemV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeHubItemV2025R0TypeField(val.type),
        ['name']: val.name,
    };
}
export function deserializeHubItemV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "HubItemV2025R0"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "HubItemV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "HubItemV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "HubItemV2025R0" to be defined',
        });
    }
    const type = deserializeHubItemV2025R0TypeField(val.type);
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "HubItemV2025R0" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "HubItemV2025R0"',
        });
    }
    const name = val.name;
    return { id: id, type: type, name: name };
}
//# sourceMappingURL=hubItemV2025R0.generated.js.map