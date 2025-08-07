"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WeblinkReferenceV2025R0 = void 0;
exports.serializeWeblinkReferenceV2025R0TypeField = serializeWeblinkReferenceV2025R0TypeField;
exports.deserializeWeblinkReferenceV2025R0TypeField = deserializeWeblinkReferenceV2025R0TypeField;
exports.serializeWeblinkReferenceV2025R0 = serializeWeblinkReferenceV2025R0;
exports.deserializeWeblinkReferenceV2025R0 = deserializeWeblinkReferenceV2025R0;
exports.serializeWeblinkReferenceV2025R0Input = serializeWeblinkReferenceV2025R0Input;
exports.deserializeWeblinkReferenceV2025R0Input = deserializeWeblinkReferenceV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class WeblinkReferenceV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `weblink`. */
        this.type = 'weblink';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.WeblinkReferenceV2025R0 = WeblinkReferenceV2025R0;
function serializeWeblinkReferenceV2025R0TypeField(val) {
    return val;
}
function deserializeWeblinkReferenceV2025R0TypeField(val) {
    if (val == 'weblink') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize WeblinkReferenceV2025R0TypeField",
    });
}
function serializeWeblinkReferenceV2025R0(val) {
    return {
        ['type']: serializeWeblinkReferenceV2025R0TypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeWeblinkReferenceV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "WeblinkReferenceV2025R0"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "WeblinkReferenceV2025R0" to be defined',
        });
    }
    const type = deserializeWeblinkReferenceV2025R0TypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "WeblinkReferenceV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WeblinkReferenceV2025R0"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeWeblinkReferenceV2025R0Input(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeWeblinkReferenceV2025R0TypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeWeblinkReferenceV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "WeblinkReferenceV2025R0Input"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeWeblinkReferenceV2025R0TypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "WeblinkReferenceV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "WeblinkReferenceV2025R0Input"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=weblinkReferenceV2025R0.generated.js.map