"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMiniV2025R0 = void 0;
exports.serializeUserMiniV2025R0 = serializeUserMiniV2025R0;
exports.deserializeUserMiniV2025R0 = deserializeUserMiniV2025R0;
const userBaseV2025R0_generated_js_1 = require("./userBaseV2025R0.generated.js");
const userBaseV2025R0_generated_js_2 = require("./userBaseV2025R0.generated.js");
const userBaseV2025R0_generated_js_3 = require("./userBaseV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
class UserMiniV2025R0 extends userBaseV2025R0_generated_js_3.UserBaseV2025R0 {
    constructor(fields) {
        super(fields);
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.login !== undefined) {
            this.login = fields.login;
        }
    }
}
exports.UserMiniV2025R0 = UserMiniV2025R0;
function serializeUserMiniV2025R0(val) {
    const base = (0, userBaseV2025R0_generated_js_2.serializeUserBaseV2025R0)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserMiniV2025R0"' });
    }
    return Object.assign(Object.assign({}, base), { ['name']: val.name, ['login']: val.login });
}
function deserializeUserMiniV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserMiniV2025R0"' });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UserMiniV2025R0"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !(0, json_js_1.sdIsString)(val.login)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "login" of type "UserMiniV2025R0"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UserMiniV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UserMiniV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "UserMiniV2025R0" to be defined',
        });
    }
    const type = (0, userBaseV2025R0_generated_js_1.deserializeUserBaseV2025R0TypeField)(val.type);
    return {
        name: name,
        login: login,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=userMiniV2025R0.generated.js.map