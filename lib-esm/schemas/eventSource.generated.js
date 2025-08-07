import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeEventSourceItemTypeField(val) {
    return val;
}
export function deserializeEventSourceItemTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize EventSourceItemTypeField",
    });
}
export function serializeEventSourceClassificationField(val) {
    return { ['name']: val.name };
}
export function deserializeEventSourceClassificationField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "EventSourceClassificationField"',
        });
    }
    if (!(val.name == void 0) && !sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "EventSourceClassificationField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return { name: name };
}
export function serializeEventSource(val) {
    return {
        ['item_type']: serializeEventSourceItemTypeField(val.itemType),
        ['item_id']: val.itemId,
        ['item_name']: val.itemName,
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeEventSourceClassificationField(val.classification),
        ['parent']: val.parent == void 0 ? val.parent : serializeFolderMini(val.parent),
        ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : serializeUserMini(val.ownedBy),
    };
}
export function deserializeEventSource(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "EventSource"' });
    }
    if (val.item_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item_type" of type "EventSource" to be defined',
        });
    }
    const itemType = deserializeEventSourceItemTypeField(val.item_type);
    if (val.item_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item_id" of type "EventSource" to be defined',
        });
    }
    if (!sdIsString(val.item_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "item_id" of type "EventSource"',
        });
    }
    const itemId = val.item_id;
    if (val.item_name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "item_name" of type "EventSource" to be defined',
        });
    }
    if (!sdIsString(val.item_name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "item_name" of type "EventSource"',
        });
    }
    const itemName = val.item_name;
    const classification = val.classification == void 0
        ? void 0
        : deserializeEventSourceClassificationField(val.classification);
    const parent = val.parent == void 0 ? void 0 : deserializeFolderMini(val.parent);
    const ownedBy = val.owned_by == void 0 ? void 0 : deserializeUserMini(val.owned_by);
    return {
        itemType: itemType,
        itemId: itemId,
        itemName: itemName,
        classification: classification,
        parent: parent,
        ownedBy: ownedBy,
    };
}
//# sourceMappingURL=eventSource.generated.js.map