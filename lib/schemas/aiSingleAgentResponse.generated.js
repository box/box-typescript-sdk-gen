"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiSingleAgentResponseTypeField = serializeAiSingleAgentResponseTypeField;
exports.deserializeAiSingleAgentResponseTypeField = deserializeAiSingleAgentResponseTypeField;
exports.serializeAiSingleAgentResponse = serializeAiSingleAgentResponse;
exports.deserializeAiSingleAgentResponse = deserializeAiSingleAgentResponse;
const userBase_generated_js_1 = require("./userBase.generated.js");
const userBase_generated_js_2 = require("./userBase.generated.js");
const aiAgentAllowedEntity_generated_js_1 = require("./aiAgentAllowedEntity.generated.js");
const aiAgentAllowedEntity_generated_js_2 = require("./aiAgentAllowedEntity.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiSingleAgentResponseTypeField(val) {
    return val;
}
function deserializeAiSingleAgentResponseTypeField(val) {
    if (val == 'ai_agent') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiSingleAgentResponseTypeField",
    });
}
function serializeAiSingleAgentResponse(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0
            ? val.type
            : serializeAiSingleAgentResponseTypeField(val.type),
        ['origin']: val.origin,
        ['name']: val.name,
        ['access_state']: val.accessState,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userBase_generated_js_1.serializeUserBase)(val.createdBy),
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['modified_by']: val.modifiedBy == void 0
            ? val.modifiedBy
            : (0, userBase_generated_js_1.serializeUserBase)(val.modifiedBy),
        ['modified_at']: val.modifiedAt == void 0
            ? val.modifiedAt
            : (0, utils_js_1.serializeDateTime)(val.modifiedAt),
        ['icon_reference']: val.iconReference,
        ['allowed_entities']: val.allowedEntities == void 0
            ? val.allowedEntities
            : val.allowedEntities.map(function (item) {
                return (0, aiAgentAllowedEntity_generated_js_1.serializeAiAgentAllowedEntity)(item);
            }),
    };
}
function deserializeAiSingleAgentResponse(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiSingleAgentResponse"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AiSingleAgentResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiSingleAgentResponse"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : deserializeAiSingleAgentResponseTypeField(val.type);
    if (val.origin == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "origin" of type "AiSingleAgentResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.origin)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "origin" of type "AiSingleAgentResponse"',
        });
    }
    const origin = val.origin;
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "AiSingleAgentResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "AiSingleAgentResponse"',
        });
    }
    const name = val.name;
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiSingleAgentResponse" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiSingleAgentResponse"',
        });
    }
    const accessState = val.access_state;
    const createdBy = val.created_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiSingleAgentResponse"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userBase_generated_js_2.deserializeUserBase)(val.modified_by);
    if (!(val.modified_at == void 0) && !(0, json_js_1.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "AiSingleAgentResponse"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.modified_at);
    if (!(val.icon_reference == void 0) && !(0, json_js_1.sdIsString)(val.icon_reference)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "icon_reference" of type "AiSingleAgentResponse"',
        });
    }
    const iconReference = val.icon_reference == void 0 ? void 0 : val.icon_reference;
    if (!(val.allowed_entities == void 0) && !(0, json_js_2.sdIsList)(val.allowed_entities)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "allowed_entities" of type "AiSingleAgentResponse"',
        });
    }
    const allowedEntities = val.allowed_entities == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.allowed_entities)
            ? val.allowed_entities.map(function (itm) {
                return (0, aiAgentAllowedEntity_generated_js_2.deserializeAiAgentAllowedEntity)(itm);
            })
            : [];
    return {
        id: id,
        type: type,
        origin: origin,
        name: name,
        accessState: accessState,
        createdBy: createdBy,
        createdAt: createdAt,
        modifiedBy: modifiedBy,
        modifiedAt: modifiedAt,
        iconReference: iconReference,
        allowedEntities: allowedEntities,
    };
}
//# sourceMappingURL=aiSingleAgentResponse.generated.js.map