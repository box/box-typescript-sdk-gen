"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiSingleAgentResponseFull = serializeAiSingleAgentResponseFull;
exports.deserializeAiSingleAgentResponseFull = deserializeAiSingleAgentResponseFull;
const aiSingleAgentResponse_generated_js_1 = require("./aiSingleAgentResponse.generated.js");
const userBase_generated_js_1 = require("./userBase.generated.js");
const utils_js_1 = require("../internal/utils.js");
const aiAgentAllowedEntity_generated_js_1 = require("./aiAgentAllowedEntity.generated.js");
const aiSingleAgentResponse_generated_js_2 = require("./aiSingleAgentResponse.generated.js");
const aiStudioAgentAskResponse_generated_js_1 = require("./aiStudioAgentAskResponse.generated.js");
const aiStudioAgentAskResponse_generated_js_2 = require("./aiStudioAgentAskResponse.generated.js");
const aiStudioAgentTextGenResponse_generated_js_1 = require("./aiStudioAgentTextGenResponse.generated.js");
const aiStudioAgentTextGenResponse_generated_js_2 = require("./aiStudioAgentTextGenResponse.generated.js");
const aiStudioAgentExtractResponse_generated_js_1 = require("./aiStudioAgentExtractResponse.generated.js");
const aiStudioAgentExtractResponse_generated_js_2 = require("./aiStudioAgentExtractResponse.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeAiSingleAgentResponseFull(val) {
    const base = (0, aiSingleAgentResponse_generated_js_2.serializeAiSingleAgentResponse)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiSingleAgentResponseFull"',
        });
    }
    return Object.assign(Object.assign({}, base), {
        ['ask']: val.ask == void 0
            ? val.ask
            : (0, aiStudioAgentAskResponse_generated_js_1.serializeAiStudioAgentAskResponse)(val.ask),
        ['text_gen']: val.textGen == void 0
            ? val.textGen
            : (0, aiStudioAgentTextGenResponse_generated_js_1.serializeAiStudioAgentTextGenResponse)(val.textGen),
        ['extract']: val.extract == void 0
            ? val.extract
            : (0, aiStudioAgentExtractResponse_generated_js_1.serializeAiStudioAgentExtractResponse)(val.extract),
    });
}
function deserializeAiSingleAgentResponseFull(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiSingleAgentResponseFull"',
        });
    }
    const ask = val.ask == void 0 ? void 0 : (0, aiStudioAgentAskResponse_generated_js_2.deserializeAiStudioAgentAskResponse)(val.ask);
    const textGen = val.text_gen == void 0
        ? void 0
        : (0, aiStudioAgentTextGenResponse_generated_js_2.deserializeAiStudioAgentTextGenResponse)(val.text_gen);
    const extract = val.extract == void 0
        ? void 0
        : (0, aiStudioAgentExtractResponse_generated_js_2.deserializeAiStudioAgentExtractResponse)(val.extract);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "AiSingleAgentResponseFull" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiSingleAgentResponseFull"',
        });
    }
    const id = val.id;
    const type = val.type == void 0
        ? void 0
        : (0, aiSingleAgentResponse_generated_js_1.deserializeAiSingleAgentResponseTypeField)(val.type);
    if (val.origin == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "origin" of type "AiSingleAgentResponseFull" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.origin)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "origin" of type "AiSingleAgentResponseFull"',
        });
    }
    const origin = val.origin;
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "AiSingleAgentResponseFull" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "AiSingleAgentResponseFull"',
        });
    }
    const name = val.name;
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "AiSingleAgentResponseFull" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "AiSingleAgentResponseFull"',
        });
    }
    const accessState = val.access_state;
    const createdBy = val.created_by == void 0 ? void 0 : (0, userBase_generated_js_1.deserializeUserBase)(val.created_by);
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiSingleAgentResponseFull"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.created_at);
    const modifiedBy = val.modified_by == void 0 ? void 0 : (0, userBase_generated_js_1.deserializeUserBase)(val.modified_by);
    if (!(val.modified_at == void 0) && !(0, json_js_1.sdIsString)(val.modified_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "modified_at" of type "AiSingleAgentResponseFull"',
        });
    }
    const modifiedAt = val.modified_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.modified_at);
    if (!(val.icon_reference == void 0) && !(0, json_js_1.sdIsString)(val.icon_reference)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "icon_reference" of type "AiSingleAgentResponseFull"',
        });
    }
    const iconReference = val.icon_reference == void 0 ? void 0 : val.icon_reference;
    if (!(val.allowed_entities == void 0) && !(0, json_js_2.sdIsList)(val.allowed_entities)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "allowed_entities" of type "AiSingleAgentResponseFull"',
        });
    }
    const allowedEntities = val.allowed_entities == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.allowed_entities)
            ? val.allowed_entities.map(function (itm) {
                return (0, aiAgentAllowedEntity_generated_js_1.deserializeAiAgentAllowedEntity)(itm);
            })
            : [];
    return {
        ask: ask,
        textGen: textGen,
        extract: extract,
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
//# sourceMappingURL=aiSingleAgentResponseFull.generated.js.map