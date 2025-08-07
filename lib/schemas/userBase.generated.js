"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserBase = void 0;
exports.serializeUserBaseTypeField = serializeUserBaseTypeField;
exports.deserializeUserBaseTypeField = deserializeUserBaseTypeField;
exports.serializeUserBase = serializeUserBase;
exports.deserializeUserBase = deserializeUserBase;
exports.serializeUserBaseInput = serializeUserBaseInput;
exports.deserializeUserBaseInput = deserializeUserBaseInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class UserBase {
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
exports.UserBase = UserBase;
function serializeUserBaseTypeField(val) {
    return val;
}
function deserializeUserBaseTypeField(val) {
    if (val == 'user') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize UserBaseTypeField" });
}
function serializeUserBase(val) {
    return { ['id']: val.id, ['type']: serializeUserBaseTypeField(val.type) };
}
function deserializeUserBase(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserBase"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UserBase" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UserBase"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "UserBase" to be defined',
        });
    }
    const type = deserializeUserBaseTypeField(val.type);
    return { id: id, type: type };
}
function serializeUserBaseInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeUserBaseTypeField(val.type),
    };
}
function deserializeUserBaseInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserBaseInput"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UserBaseInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UserBaseInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeUserBaseTypeField(val.type);
    return { id: id, type: type };
}
//# sourceMappingURL=userBase.generated.js.map