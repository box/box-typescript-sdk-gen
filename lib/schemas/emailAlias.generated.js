"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeEmailAliasTypeField = serializeEmailAliasTypeField;
exports.deserializeEmailAliasTypeField = deserializeEmailAliasTypeField;
exports.serializeEmailAlias = serializeEmailAlias;
exports.deserializeEmailAlias = deserializeEmailAlias;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeEmailAliasTypeField(val) {
    return val;
}
function deserializeEmailAliasTypeField(val) {
    if (val == 'email_alias') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize EmailAliasTypeField" });
}
function serializeEmailAlias(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeEmailAliasTypeField(val.type),
        ['email']: val.email,
        ['is_confirmed']: val.isConfirmed,
    };
}
function deserializeEmailAlias(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "EmailAlias"' });
    }
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "EmailAlias"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeEmailAliasTypeField(val.type);
    if (!(val.email == void 0) && !(0, json_js_2.sdIsString)(val.email)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "email" of type "EmailAlias"',
        });
    }
    const email = val.email == void 0 ? void 0 : val.email;
    if (!(val.is_confirmed == void 0) && !(0, json_js_1.sdIsBoolean)(val.is_confirmed)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_confirmed" of type "EmailAlias"',
        });
    }
    const isConfirmed = val.is_confirmed == void 0 ? void 0 : val.is_confirmed;
    return {
        id: id,
        type: type,
        email: email,
        isConfirmed: isConfirmed,
    };
}
//# sourceMappingURL=emailAlias.generated.js.map