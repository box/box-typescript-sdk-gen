"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TermsOfServiceBase = void 0;
exports.serializeTermsOfServiceBaseTypeField = serializeTermsOfServiceBaseTypeField;
exports.deserializeTermsOfServiceBaseTypeField = deserializeTermsOfServiceBaseTypeField;
exports.serializeTermsOfServiceBase = serializeTermsOfServiceBase;
exports.deserializeTermsOfServiceBase = deserializeTermsOfServiceBase;
exports.serializeTermsOfServiceBaseInput = serializeTermsOfServiceBaseInput;
exports.deserializeTermsOfServiceBaseInput = deserializeTermsOfServiceBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class TermsOfServiceBase {
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
exports.TermsOfServiceBase = TermsOfServiceBase;
function serializeTermsOfServiceBaseTypeField(val) {
    return val;
}
function deserializeTermsOfServiceBaseTypeField(val) {
    if (val == 'terms_of_service') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize TermsOfServiceBaseTypeField",
    });
}
function serializeTermsOfServiceBase(val) {
    return {
        ['id']: val.id,
        ['type']: serializeTermsOfServiceBaseTypeField(val.type),
    };
}
function deserializeTermsOfServiceBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceBase"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TermsOfServiceBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "TermsOfServiceBase" to be defined',
        });
    }
    const type = deserializeTermsOfServiceBaseTypeField(val.type);
    return { id: id, type: type };
}
function serializeTermsOfServiceBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeTermsOfServiceBaseTypeField(val.type),
    };
}
function deserializeTermsOfServiceBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceBaseInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "TermsOfServiceBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "TermsOfServiceBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeTermsOfServiceBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=termsOfServiceBase.generated.js.map