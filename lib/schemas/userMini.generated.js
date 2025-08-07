"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserMini = void 0;
exports.serializeUserMini = serializeUserMini;
exports.deserializeUserMini = deserializeUserMini;
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const userBase_generated_js_3 = require("./userBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class UserMini extends userBase_generated_js_3.UserBase {
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
exports.UserMini = UserMini;
function serializeUserMini(val) {
    const base = (0, userBase_generated_js_2.serializeUserBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserMini"' });
    }
    return Object.assign(Object.assign({}, base), { ['name']: val.name, ['login']: val.login });
}
function deserializeUserMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UserMini"' });
    }
    if (!(val.name == void 0) && !(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UserMini"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !(0, json_js_1.sdIsString)(val.login)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "login" of type "UserMini"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UserMini" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UserMini"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "UserMini" to be defined',
        });
    }
    const type = (0, userBase_generated_js_1.deserializeUserBaseTypeField)(val.type);
    return { name: name, login: login, id: id, type: type };
}
//# sourceMappingURL=userMini.generated.js.map