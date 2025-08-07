"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserCollaborations = void 0;
exports.serializeUserCollaborations = serializeUserCollaborations;
exports.deserializeUserCollaborations = deserializeUserCollaborations;
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const userBase_generated_js_3 = require("./userBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class UserCollaborations extends userBase_generated_js_3.UserBase {
    constructor(fields) {
        super(fields);
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.login !== undefined) {
            this.login = fields.login;
        }
        if (fields.isActive !== undefined) {
            this.isActive = fields.isActive;
        }
    }
}
exports.UserCollaborations = UserCollaborations;
function serializeUserCollaborations(val) {
    const base = (0, userBase_generated_js_2.serializeUserBase)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UserCollaborations"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['name']: val.name,
        ['login']: val.login,
        ['is_active']: val.isActive,
    });
}
function deserializeUserCollaborations(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UserCollaborations"',
        });
    }
    if (!(val.name == void 0) && !(0, json_js_2.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "UserCollaborations"',
        });
    }
    const name = val.name == void 0 ? void 0 : val.name;
    if (!(val.login == void 0) && !(0, json_js_2.sdIsString)(val.login)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "login" of type "UserCollaborations"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    if (!(val.is_active == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_active)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_active" of type "UserCollaborations"',
        });
    }
    const isActive = val.is_active == void 0 ? void 0 : val.is_active;
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "UserCollaborations" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UserCollaborations"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "UserCollaborations" to be defined',
        });
    }
    const type = (0, userBase_generated_js_1.deserializeUserBaseTypeField)(val.type);
    return {
        name: name,
        login: login,
        isActive: isActive,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=userCollaborations.generated.js.map