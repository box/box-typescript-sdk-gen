"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppItemEventSource = void 0;
exports.serializeAppItemEventSourceTypeField = serializeAppItemEventSourceTypeField;
exports.deserializeAppItemEventSourceTypeField = deserializeAppItemEventSourceTypeField;
exports.serializeAppItemEventSource = serializeAppItemEventSource;
exports.deserializeAppItemEventSource = deserializeAppItemEventSource;
exports.serializeAppItemEventSourceInput = serializeAppItemEventSourceInput;
exports.deserializeAppItemEventSourceInput = deserializeAppItemEventSourceInput;
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const groupMini_generated_js_1 = require("./groupMini.generated.js");
const groupMini_generated_js_2 = require("./groupMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class AppItemEventSource {
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
exports.AppItemEventSource = AppItemEventSource;
function serializeAppItemEventSourceTypeField(val) {
    return val;
}
function deserializeAppItemEventSourceTypeField(val) {
    if (val == 'app_item') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AppItemEventSourceTypeField",
    });
}
function serializeAppItemEventSource(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAppItemEventSourceTypeField(val.type),
        ['app_item_type']: val.appItemType,
        ['user']: val.user == void 0 ? val.user : (0, userMini_generated_js_1.serializeUserMini)(val.user),
        ['group']: val.group == void 0 ? val.group : (0, groupMini_generated_js_1.serializeGroupMini)(val.group),
    };
}
function deserializeAppItemEventSource(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AppItemEventSource"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AppItemEventSource" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemEventSource"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AppItemEventSource" to be defined',
        });
    }
    const type = deserializeAppItemEventSourceTypeField(val.type);
    if (val.app_item_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "app_item_type" of type "AppItemEventSource" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.app_item_type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "app_item_type" of type "AppItemEventSource"',
        });
    }
    const appItemType = val.app_item_type;
    const user = val.user == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.user);
    const group = val.group == void 0 ? void 0 : (0, groupMini_generated_js_2.deserializeGroupMini)(val.group);
    return {
        id: id,
        type: type,
        appItemType: appItemType,
        user: user,
        group: group,
    };
}
function serializeAppItemEventSourceInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeAppItemEventSourceTypeField(val.type),
        ['app_item_type']: val.appItemType,
        ['user']: val.user == void 0 ? val.user : (0, userMini_generated_js_1.serializeUserMini)(val.user),
        ['group']: val.group == void 0 ? val.group : (0, groupMini_generated_js_1.serializeGroupMini)(val.group),
    };
}
function deserializeAppItemEventSourceInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AppItemEventSourceInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AppItemEventSourceInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemEventSourceInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeAppItemEventSourceTypeField(val.type);
    if (val.app_item_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "app_item_type" of type "AppItemEventSourceInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.app_item_type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "app_item_type" of type "AppItemEventSourceInput"',
        });
    }
    const appItemType = val.app_item_type;
    const user = val.user == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.user);
    const group = val.group == void 0 ? void 0 : (0, groupMini_generated_js_2.deserializeGroupMini)(val.group);
    return {
        id: id,
        type: type,
        appItemType: appItemType,
        user: user,
        group: group,
    };
}
//# sourceMappingURL=appItemEventSource.generated.js.map