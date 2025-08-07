"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsOfServiceBaseV2025R0 = void 0;
exports.serializeTermsOfServiceBaseV2025R0TypeField = serializeTermsOfServiceBaseV2025R0TypeField;
exports.deserializeTermsOfServiceBaseV2025R0TypeField = deserializeTermsOfServiceBaseV2025R0TypeField;
exports.serializeTermsOfServiceBaseV2025R0 = serializeTermsOfServiceBaseV2025R0;
exports.deserializeTermsOfServiceBaseV2025R0 = deserializeTermsOfServiceBaseV2025R0;
exports.serializeTermsOfServiceBaseV2025R0Input = serializeTermsOfServiceBaseV2025R0Input;
exports.deserializeTermsOfServiceBaseV2025R0Input = deserializeTermsOfServiceBaseV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class TermsOfServiceBaseV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `terms_of_service`. */
        this.type = 'terms_of_service';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.TermsOfServiceBaseV2025R0 = TermsOfServiceBaseV2025R0;
function serializeTermsOfServiceBaseV2025R0TypeField(val) {
    return val;
}
function deserializeTermsOfServiceBaseV2025R0TypeField(val) {
    if (val == 'terms_of_service') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TermsOfServiceBaseV2025R0TypeField",
    });
}
function serializeTermsOfServiceBaseV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeTermsOfServiceBaseV2025R0TypeField(val.type),
    };
}
function deserializeTermsOfServiceBaseV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceBaseV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TermsOfServiceBaseV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceBaseV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "TermsOfServiceBaseV2025R0" to be defined',
        });
    }
    const type = deserializeTermsOfServiceBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
function serializeTermsOfServiceBaseV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeTermsOfServiceBaseV2025R0TypeField(val.type),
    };
}
function deserializeTermsOfServiceBaseV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceBaseV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TermsOfServiceBaseV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceBaseV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeTermsOfServiceBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=termsOfServiceBaseV2025R0.generated.js.map