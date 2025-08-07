"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser = serializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser;
exports.deserializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser = deserializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser;
const appItemEventSource_generated_js_1 = require("./appItemEventSource.generated.js");
const appItemEventSource_generated_js_2 = require("./appItemEventSource.generated.js");
const eventSource_generated_js_1 = require("./eventSource.generated.js");
const eventSource_generated_js_2 = require("./eventSource.generated.js");
const file_generated_js_1 = require("./file.generated.js");
const file_generated_js_2 = require("./file.generated.js");
const folder_generated_js_1 = require("./folder.generated.js");
const folder_generated_js_2 = require("./folder.generated.js");
const genericSource_generated_js_1 = require("./genericSource.generated.js");
const genericSource_generated_js_2 = require("./genericSource.generated.js");
const user_generated_js_1 = require("./user.generated.js");
const user_generated_js_2 = require("./user.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
function serializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser(val) {
    if (val.type == 'app_item') {
        return (0, appItemEventSource_generated_js_1.serializeAppItemEventSource)(val);
    }
    if (val.type == 'file') {
        return (0, file_generated_js_1.serializeFile)(val);
    }
    if (val.type == 'folder') {
        return (0, folder_generated_js_1.serializeFolder)(val);
    }
    if (val.type == 'user') {
        return (0, user_generated_js_1.serializeUser)(val);
    }
    if (val.itemType == 'file') {
        return (0, eventSource_generated_js_1.serializeEventSource)(val);
    }
    if (val.itemType == 'folder') {
        return (0, eventSource_generated_js_1.serializeEventSource)(val);
    }
    return (0, genericSource_generated_js_1.serializeGenericSource)(val);
}
function deserializeAppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser"',
        });
    }
    if (val.type == 'app_item') {
        return (0, appItemEventSource_generated_js_2.deserializeAppItemEventSource)(val);
    }
    if (val.type == 'file') {
        return (0, file_generated_js_2.deserializeFile)(val);
    }
    if (val.type == 'folder') {
        return (0, folder_generated_js_2.deserializeFolder)(val);
    }
    if (val.type == 'user') {
        return (0, user_generated_js_2.deserializeUser)(val);
    }
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser"',
        });
    }
    if (val.item_type == 'file') {
        return (0, eventSource_generated_js_2.deserializeEventSource)(val);
    }
    if (val.item_type == 'folder') {
        return (0, eventSource_generated_js_2.deserializeEventSource)(val);
    }
    try {
        return (0, genericSource_generated_js_2.deserializeGenericSource)(val);
    }
    catch (error) {
        void 0;
    }
    finally {
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AppItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser",
    });
}
//# sourceMappingURL=appItemEventSourceOrEventSourceOrFileOrFolderOrGenericSourceOrUser.generated.js.map