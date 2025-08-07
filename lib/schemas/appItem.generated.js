"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppItem = void 0;
exports.serializeAppItemTypeField = serializeAppItemTypeField;
exports.deserializeAppItemTypeField = deserializeAppItemTypeField;
exports.serializeAppItem = serializeAppItem;
exports.deserializeAppItem = deserializeAppItem;
exports.serializeAppItemInput = serializeAppItemInput;
exports.deserializeAppItemInput = deserializeAppItemInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class AppItem {
    constructor(fields) {
        /**
         * The value will always be `app_item`. */
        this.type = 'app_item';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.applicationType !== undefined) {
            this.applicationType = fields.applicationType;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AppItem = AppItem;
function serializeAppItemTypeField(val) {
    return val;
}
function deserializeAppItemTypeField(val) {
    if (val == 'app_item') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize AppItemTypeField" });
}
function serializeAppItem(val) {
    return {
        ['id']: val.id,
        ['type']: serializeAppItemTypeField(val.type),
        ['application_type']: val.applicationType,
    };
}
function deserializeAppItem(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AppItem"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AppItem" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AppItem"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AppItem" to be defined',
        });
    }
    const type = deserializeAppItemTypeField(val.type);
    if (val.application_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "application_type" of type "AppItem" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.application_type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "application_type" of type "AppItem"',
        });
    }
    const applicationType = val.application_type;
    return {
        id: id,
        type: type,
        applicationType: applicationType,
    };
}
function serializeAppItemInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeAppItemTypeField(val.type),
        ['application_type']: val.applicationType,
    };
}
function deserializeAppItemInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AppItemInput"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AppItemInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AppItemInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeAppItemTypeField(val.type);
    if (val.application_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "application_type" of type "AppItemInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.application_type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "application_type" of type "AppItemInput"',
        });
    }
    const applicationType = val.application_type;
    return {
        id: id,
        type: type,
        applicationType: applicationType,
    };
}
//# sourceMappingURL=appItem.generated.js.map