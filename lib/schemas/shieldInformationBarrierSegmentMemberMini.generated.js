"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierSegmentMemberMini = serializeShieldInformationBarrierSegmentMemberMini;
exports.deserializeShieldInformationBarrierSegmentMemberMini = deserializeShieldInformationBarrierSegmentMemberMini;
const shieldInformationBarrierSegmentMemberBase_generated_js_1 = require("./shieldInformationBarrierSegmentMemberBase.generated.js");
const shieldInformationBarrierSegmentMemberBase_generated_js_2 = require("./shieldInformationBarrierSegmentMemberBase.generated.js");
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeShieldInformationBarrierSegmentMemberMini(val) {
    const base = (0, shieldInformationBarrierSegmentMemberBase_generated_js_2.serializeShieldInformationBarrierSegmentMemberBase)(val);
    if (!(0, json_js_2.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMemberMini"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['user']: val.user == void 0 ? val.user : (0, userBase_generated_js_1.serializeUserBase)(val.user),
    });
}
function deserializeShieldInformationBarrierSegmentMemberMini(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentMemberMini"',
        });
    }
    const user = val.user == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.user);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldInformationBarrierSegmentMemberMini"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0
        ? void 0
        : (0, shieldInformationBarrierSegmentMemberBase_generated_js_1.deserializeShieldInformationBarrierSegmentMemberBaseTypeField)(val.type);
    return {
        user: user,
        id: id,
        type: type,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentMemberMini.generated.js.map