import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeGroupMini } from './groupMini.generated.js';
import { deserializeGroupMini } from './groupMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class AppItemEventSource {
    constructor(fields) {
        /**
         * The type of the source that this event represents. Can only be `app_item`. */
        this.type = 'app_item';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.appItemType !== undefined) {
            this.appItemType = fields.appItemType;
        }
        if (fields.user !== undefined) {
            this.user = fields.user;
        }
        if (fields.group !== undefined) {
            this.group = fields.group;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializeAppItemEventSourceTypeField(val) {
    return val;
}
export function deserializeAppItemEventSourceTypeField(val) {
    if (val == 'app_item') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AppItemEventSourceTypeField",
    });
}
export function serializeAppItemEventSource(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAppItemEventSourceTypeField(val.type),
        ['app_item_type']: val.appItemType,
        ['user']: val.user == void 0 ? val.user : serializeUserMini(val.user),
        ['group']: val.group == void 0 ? val.group : serializeGroupMini(val.group),
    };
}
export function deserializeAppItemEventSource(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AppItemEventSource"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AppItemEventSource" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemEventSource"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "AppItemEventSource" to be defined',
        });
    }
    const type = deserializeAppItemEventSourceTypeField(val.type);
    if (val.app_item_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "app_item_type" of type "AppItemEventSource" to be defined',
        });
    }
    if (!sdIsString(val.app_item_type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "app_item_type" of type "AppItemEventSource"',
        });
    }
    const appItemType = val.app_item_type;
    const user = val.user == void 0 ? void 0 : deserializeUserMini(val.user);
    const group = val.group == void 0 ? void 0 : deserializeGroupMini(val.group);
    return {
        id: id,
        type: type,
        appItemType: appItemType,
        user: user,
        group: group,
    };
}
export function serializeAppItemEventSourceInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeAppItemEventSourceTypeField(val.type),
        ['app_item_type']: val.appItemType,
        ['user']: val.user == void 0 ? val.user : serializeUserMini(val.user),
        ['group']: val.group == void 0 ? val.group : serializeGroupMini(val.group),
    };
}
export function deserializeAppItemEventSourceInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AppItemEventSourceInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "AppItemEventSourceInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemEventSourceInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeAppItemEventSourceTypeField(val.type);
    if (val.app_item_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "app_item_type" of type "AppItemEventSourceInput" to be defined',
        });
    }
    if (!sdIsString(val.app_item_type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "app_item_type" of type "AppItemEventSourceInput"',
        });
    }
    const appItemType = val.app_item_type;
    const user = val.user == void 0 ? void 0 : deserializeUserMini(val.user);
    const group = val.group == void 0 ? void 0 : deserializeGroupMini(val.group);
    return {
        id: id,
        type: type,
        appItemType: appItemType,
        user: user,
        group: group,
    };
}
//# sourceMappingURL=appItemEventSource.generated.js.map