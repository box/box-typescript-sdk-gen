"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBaseV2025R0 = void 0;
exports.serializeUserBaseV2025R0TypeField = serializeUserBaseV2025R0TypeField;
exports.deserializeUserBaseV2025R0TypeField = deserializeUserBaseV2025R0TypeField;
exports.serializeUserBaseV2025R0 = serializeUserBaseV2025R0;
exports.deserializeUserBaseV2025R0 = deserializeUserBaseV2025R0;
exports.serializeUserBaseV2025R0Input = serializeUserBaseV2025R0Input;
exports.deserializeUserBaseV2025R0Input = deserializeUserBaseV2025R0Input;
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class UserBaseV2025R0 {
    constructor(fields) {
        /**
         * The value will always be `user`. */
        this.type = 'user';
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
exports.UserBaseV2025R0 = UserBaseV2025R0;
function serializeUserBaseV2025R0TypeField(val) {
    return val;
}
function deserializeUserBaseV2025R0TypeField(val) {
    if (val == 'user') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UserBaseV2025R0TypeField",
    });
}
function serializeUserBaseV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: serializeUserBaseV2025R0TypeField(val.type),
    };
}
function deserializeUserBaseV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserBaseV2025R0"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UserBaseV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UserBaseV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "UserBaseV2025R0" to be defined',
        });
    }
    const type = deserializeUserBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
function serializeUserBaseV2025R0Input(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeUserBaseV2025R0TypeField(val.type),
    };
}
function deserializeUserBaseV2025R0Input(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UserBaseV2025R0Input"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UserBaseV2025R0Input" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UserBaseV2025R0Input"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeUserBaseV2025R0TypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=userBaseV2025R0.generated.js.map