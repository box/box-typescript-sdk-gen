"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldListV2025R0 = serializeShieldListV2025R0;
exports.deserializeShieldListV2025R0 = deserializeShieldListV2025R0;
const enterpriseReferenceV2025R0_generated_js_1 = require("./enterpriseReferenceV2025R0.generated.js");
const enterpriseReferenceV2025R0_generated_js_2 = require("./enterpriseReferenceV2025R0.generated.js");
const shieldListContentV2025R0_generated_js_1 = require("./shieldListContentV2025R0.generated.js");
const shieldListContentV2025R0_generated_js_2 = require("./shieldListContentV2025R0.generated.js");
const utils_js_1 = require("../../internal/utils.js");
const utils_js_2 = require("../../internal/utils.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
function serializeShieldListV2025R0(val) {
    return {
        ['id']: val.id,
        ['type']: val.type,
        ['name']: val.name,
        ['enterprise']: (0, enterpriseReferenceV2025R0_generated_js_1.serializeEnterpriseReferenceV2025R0)(val.enterprise),
        ['description']: val.description,
        ['created_at']: (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['updated_at']: (0, utils_js_1.serializeDateTime)(val.updatedAt),
        ['content']: (0, shieldListContentV2025R0_generated_js_1.serializeShieldListContentV2025R0)(val.content),
    };
}
function deserializeShieldListV2025R0(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldListV2025R0"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "ShieldListV2025R0"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.type)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "type" of type "ShieldListV2025R0"',
        });
    }
    const type = val.type;
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "ShieldListV2025R0"',
        });
    }
    const name = val.name;
    if (val.enterprise == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "enterprise" of type "ShieldListV2025R0" to be defined',
        });
    }
    const enterprise = (0, enterpriseReferenceV2025R0_generated_js_2.deserializeEnterpriseReferenceV2025R0)(val.enterprise);
    if (!(val.description == void 0) && !(0, json_js_1.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "ShieldListV2025R0"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    if (val.created_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "created_at" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "ShieldListV2025R0"',
        });
    }
    const createdAt = (0, utils_js_2.deserializeDateTime)(val.created_at);
    if (val.updated_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "updated_at" of type "ShieldListV2025R0" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.updated_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "updated_at" of type "ShieldListV2025R0"',
        });
    }
    const updatedAt = (0, utils_js_2.deserializeDateTime)(val.updated_at);
    if (val.content == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "content" of type "ShieldListV2025R0" to be defined',
        });
    }
    const content = (0, shieldListContentV2025R0_generated_js_2.deserializeShieldListContentV2025R0)(val.content);
    return {
        id: id,
        type: type,
        name: name,
        enterprise: enterprise,
        description: description,
        createdAt: createdAt,
        updatedAt: updatedAt,
        content: content,
    };
}
//# sourceMappingURL=shieldListV2025R0.generated.js.map