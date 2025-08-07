"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppItemAssociation = void 0;
exports.serializeAppItemAssociationTypeField = serializeAppItemAssociationTypeField;
exports.deserializeAppItemAssociationTypeField = deserializeAppItemAssociationTypeField;
exports.serializeAppItemAssociation = serializeAppItemAssociation;
exports.deserializeAppItemAssociation = deserializeAppItemAssociation;
exports.serializeAppItemAssociationInput = serializeAppItemAssociationInput;
exports.deserializeAppItemAssociationInput = deserializeAppItemAssociationInput;
const appItem_generated_js_1 = require("./appItem.generated.js");
const appItem_generated_js_2 = require("./appItem.generated.js");
const fileBaseOrFolderBaseOrWebLinkBase_generated_js_1 = require("./fileBaseOrFolderBaseOrWebLinkBase.generated.js");
const fileBaseOrFolderBaseOrWebLinkBase_generated_js_2 = require("./fileBaseOrFolderBaseOrWebLinkBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class AppItemAssociation {
    constructor(fields) {
        /**
         * The value will always be `app_item_association`. */
        this.type = 'app_item_association';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.appItem !== undefined) {
            this.appItem = fields.appItem;
        }
        if (fields.item !== undefined) {
            this.item = fields.item;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AppItemAssociation = AppItemAssociation;
function serializeAppItemAssociationTypeField(val) {
    return val;
}
function deserializeAppItemAssociationTypeField(val) {
    if (val == 'app_item_association') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AppItemAssociationTypeField",
    });
}
function serializeAppItemAssociation(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAppItemAssociationTypeField(val.type),
        ['app_item']: (0, appItem_generated_js_1.serializeAppItem)(val.appItem),
        ['item']: (0, fileBaseOrFolderBaseOrWebLinkBase_generated_js_1.serializeFileBaseOrFolderBaseOrWebLinkBase)(val.item),
    };
}
function deserializeAppItemAssociation(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AppItemAssociation"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AppItemAssociation" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemAssociation"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AppItemAssociation" to be defined',
        });
    }
    const type = deserializeAppItemAssociationTypeField(val.type);
    if (val.app_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "app_item" of type "AppItemAssociation" to be defined',
        });
    }
    const appItem = (0, appItem_generated_js_2.deserializeAppItem)(val.app_item);
    if (val.item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item" of type "AppItemAssociation" to be defined',
        });
    }
    const item = (0, fileBaseOrFolderBaseOrWebLinkBase_generated_js_2.deserializeFileBaseOrFolderBaseOrWebLinkBase)(val.item);
    return {
        id: id,
        type: type,
        appItem: appItem,
        item: item,
    };
}
function serializeAppItemAssociationInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeAppItemAssociationTypeField(val.type),
        ['app_item']: (0, appItem_generated_js_1.serializeAppItem)(val.appItem),
        ['item']: (0, fileBaseOrFolderBaseOrWebLinkBase_generated_js_1.serializeFileBaseOrFolderBaseOrWebLinkBase)(val.item),
    };
}
function deserializeAppItemAssociationInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AppItemAssociationInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AppItemAssociationInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemAssociationInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeAppItemAssociationTypeField(val.type);
    if (val.app_item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "app_item" of type "AppItemAssociationInput" to be defined',
        });
    }
    const appItem = (0, appItem_generated_js_2.deserializeAppItem)(val.app_item);
    if (val.item == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "item" of type "AppItemAssociationInput" to be defined',
        });
    }
    const item = (0, fileBaseOrFolderBaseOrWebLinkBase_generated_js_2.deserializeFileBaseOrFolderBaseOrWebLinkBase)(val.item);
    return {
        id: id,
        type: type,
        appItem: appItem,
        item: item,
    };
}
//# sourceMappingURL=appItemAssociation.generated.js.map