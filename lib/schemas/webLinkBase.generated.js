"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebLinkBase = void 0;
exports.serializeWebLinkBaseTypeField = serializeWebLinkBaseTypeField;
exports.deserializeWebLinkBaseTypeField = deserializeWebLinkBaseTypeField;
exports.serializeWebLinkBase = serializeWebLinkBase;
exports.deserializeWebLinkBase = deserializeWebLinkBase;
exports.serializeWebLinkBaseInput = serializeWebLinkBaseInput;
exports.deserializeWebLinkBaseInput = deserializeWebLinkBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class WebLinkBase {
    constructor(fields) {
        /**
         * The value will always be `web_link`. */
        this.type = 'web_link';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.etag !== undefined) {
            this.etag = fields.etag;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.WebLinkBase = WebLinkBase;
function serializeWebLinkBaseTypeField(val) {
    return val;
}
function deserializeWebLinkBaseTypeField(val) {
    if (val == 'web_link') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize WebLinkBaseTypeField" });
}
function serializeWebLinkBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeWebLinkBaseTypeField(val.type),
        ['etag']: val.etag,
    };
}
function deserializeWebLinkBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "WebLinkBase"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "WebLinkBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WebLinkBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "WebLinkBase" to be defined',
        });
    }
    const type = deserializeWebLinkBaseTypeField(val.type);
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "WebLinkBase"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    return { id: id, type: type, etag: etag };
}
function serializeWebLinkBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeWebLinkBaseTypeField(val.type),
        ['etag']: val.etag,
    };
}
function deserializeWebLinkBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "WebLinkBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "WebLinkBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WebLinkBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeWebLinkBaseTypeField(val.type);
    if (!(val.etag == void 0) && !(0, json_js_1.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "WebLinkBaseInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    return { id: id, type: type, etag: etag };
}
//# sourceMappingURL=webLinkBase.generated.js.map