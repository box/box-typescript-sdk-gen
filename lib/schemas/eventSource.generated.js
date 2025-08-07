"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeEventSourceItemTypeField = serializeEventSourceItemTypeField;
exports.deserializeEventSourceItemTypeField = deserializeEventSourceItemTypeField;
exports.serializeEventSourceClassificationField = serializeEventSourceClassificationField;
exports.deserializeEventSourceClassificationField = deserializeEventSourceClassificationField;
exports.serializeEventSource = serializeEventSource;
exports.deserializeEventSource = deserializeEventSource;
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeEventSourceItemTypeField(val) {
    return val;
}
function deserializeEventSourceItemTypeField(val) {
    if (val == 'file') {
        return val;
    }
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize EventSourceItemTypeField",
    });
}
function serializeEventSourceClassificationField(val) {
    return { ['name']: val.name };
}
function deserializeEventSourceClassificationField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "EventSourceClassificationField"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "EventSourceClassificationField"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    return { name: name };
}
function serializeEventSource(val) {
    return {
        ['item_type']: serializeEventSourceItemTypeField(val.itemType),
        ['item_id']: val.itemId,
        ['item_name']: val.itemName,
        ['classification']: val.classification == void 0
            ? val.classification
            : serializeEventSourceClassificationField(val.classification),
        ['parent']: val.parent == void 0 ? val.parent : (0, folderMini_generated_js_1.serializeFolderMini)(val.parent),
        ['owned_by']: val.ownedBy == void 0 ? val.ownedBy : (0, userMini_generated_js_1.serializeUserMini)(val.ownedBy),
    };
}
function deserializeEventSource(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "EventSource"' });
    }
    if (val.item_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item_type" of type "EventSource" to be defined',
        });
    }
    const itemType = deserializeEventSourceItemTypeField(val.item_type);
    if (val.item_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item_id" of type "EventSource" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.item_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "item_id" of type "EventSource"',
        });
    }
    const itemId = val.item_id;
    if (val.item_name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item_name" of type "EventSource" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.item_name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "item_name" of type "EventSource"',
        });
    }
    const itemName = val.item_name;
    const classification = val.classification == void 0
        ? void 0
        : deserializeEventSourceClassificationField(val.classification);
    const parent = val.parent == void 0 ? void 0 : (0, folderMini_generated_js_2.deserializeFolderMini)(val.parent);
    const ownedBy = val.owned_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.owned_by);
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