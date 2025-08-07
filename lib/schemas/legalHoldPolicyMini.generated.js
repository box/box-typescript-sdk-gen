"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegalHoldPolicyMini = void 0;
exports.serializeLegalHoldPolicyMiniTypeField = serializeLegalHoldPolicyMiniTypeField;
exports.deserializeLegalHoldPolicyMiniTypeField = deserializeLegalHoldPolicyMiniTypeField;
exports.serializeLegalHoldPolicyMini = serializeLegalHoldPolicyMini;
exports.deserializeLegalHoldPolicyMini = deserializeLegalHoldPolicyMini;
exports.serializeLegalHoldPolicyMiniInput = serializeLegalHoldPolicyMiniInput;
exports.deserializeLegalHoldPolicyMiniInput = deserializeLegalHoldPolicyMiniInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class LegalHoldPolicyMini {
    constructor(fields) {
        /**
         * The value will always be `legal_hold_policy`. */
        this.type = 'legal_hold_policy';
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
exports.LegalHoldPolicyMini = LegalHoldPolicyMini;
function serializeLegalHoldPolicyMiniTypeField(val) {
    return val;
}
function deserializeLegalHoldPolicyMiniTypeField(val) {
    if (val == 'legal_hold_policy') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize LegalHoldPolicyMiniTypeField",
    });
}
function serializeLegalHoldPolicyMini(val) {
    return {
        ['id']: val.id,
        ['type']: serializeLegalHoldPolicyMiniTypeField(val.type),
    };
}
function deserializeLegalHoldPolicyMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyMini"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "LegalHoldPolicyMini" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicyMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "LegalHoldPolicyMini" to be defined',
        });
    }
    const type = deserializeLegalHoldPolicyMiniTypeField(val.type);
    return { id: id, type: type };
}
function serializeLegalHoldPolicyMiniInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeLegalHoldPolicyMiniTypeField(val.type),
    };
}
function deserializeLegalHoldPolicyMiniInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "LegalHoldPolicyMiniInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "LegalHoldPolicyMiniInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "LegalHoldPolicyMiniInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeLegalHoldPolicyMiniTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=legalHoldPolicyMini.generated.js.map