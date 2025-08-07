"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateAiAgent = void 0;
exports.serializeCreateAiAgentTypeField = serializeCreateAiAgentTypeField;
exports.deserializeCreateAiAgentTypeField = deserializeCreateAiAgentTypeField;
exports.serializeCreateAiAgent = serializeCreateAiAgent;
exports.deserializeCreateAiAgent = deserializeCreateAiAgent;
exports.serializeCreateAiAgentInput = serializeCreateAiAgentInput;
exports.deserializeCreateAiAgentInput = deserializeCreateAiAgentInput;
const aiAgentAllowedEntity_generated_js_1 = require("./aiAgentAllowedEntity.generated.js");
const aiAgentAllowedEntity_generated_js_2 = require("./aiAgentAllowedEntity.generated.js");
const aiStudioAgentAsk_generated_js_1 = require("./aiStudioAgentAsk.generated.js");
const aiStudioAgentAsk_generated_js_2 = require("./aiStudioAgentAsk.generated.js");
const aiStudioAgentTextGen_generated_js_1 = require("./aiStudioAgentTextGen.generated.js");
const aiStudioAgentTextGen_generated_js_2 = require("./aiStudioAgentTextGen.generated.js");
const aiStudioAgentExtract_generated_js_1 = require("./aiStudioAgentExtract.generated.js");
const aiStudioAgentExtract_generated_js_2 = require("./aiStudioAgentExtract.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class CreateAiAgent {
    constructor(fields) {
        /**
         * The type of agent used to handle queries. */
        this.type = 'ai_agent';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.name !== undefined) {
            this.name = fields.name;
        }
        if (fields.accessState !== undefined) {
            this.accessState = fields.accessState;
        }
        if (fields.iconReference !== undefined) {
            this.iconReference = fields.iconReference;
        }
        if (fields.allowedEntities !== undefined) {
            this.allowedEntities = fields.allowedEntities;
        }
        if (fields.ask !== undefined) {
            this.ask = fields.ask;
        }
        if (fields.textGen !== undefined) {
            this.textGen = fields.textGen;
        }
        if (fields.extract !== undefined) {
            this.extract = fields.extract;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.CreateAiAgent = CreateAiAgent;
function serializeCreateAiAgentTypeField(val) {
    return val;
}
function deserializeCreateAiAgentTypeField(val) {
    if (val == 'ai_agent') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize CreateAiAgentTypeField",
    });
}
function serializeCreateAiAgent(val) {
    return {
        ['type']: serializeCreateAiAgentTypeField(val.type),
        ['name']: val.name,
        ['access_state']: val.accessState,
        ['icon_reference']: val.iconReference,
        ['allowed_entities']: val.allowedEntities == void 0
            ? val.allowedEntities
            : val.allowedEntities.map(function (item) {
                return (0, aiAgentAllowedEntity_generated_js_1.serializeAiAgentAllowedEntity)(item);
            }),
        ['ask']: val.ask == void 0 ? val.ask : (0, aiStudioAgentAsk_generated_js_1.serializeAiStudioAgentAsk)(val.ask),
        ['text_gen']: val.textGen == void 0
            ? val.textGen
            : (0, aiStudioAgentTextGen_generated_js_1.serializeAiStudioAgentTextGen)(val.textGen),
        ['extract']: val.extract == void 0
            ? val.extract
            : (0, aiStudioAgentExtract_generated_js_1.serializeAiStudioAgentExtract)(val.extract),
    };
}
function deserializeCreateAiAgent(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "CreateAiAgent"' });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "CreateAiAgent" to be defined',
        });
    }
    const type = deserializeCreateAiAgentTypeField(val.type);
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "CreateAiAgent" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "CreateAiAgent"',
        });
    }
    const name = val.name;
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "CreateAiAgent" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "CreateAiAgent"',
        });
    }
    const accessState = val.access_state;
    if (!(val.icon_reference == void 0) && !(0, json_js_1.sdIsString)(val.icon_reference)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "icon_reference" of type "CreateAiAgent"',
        });
    }
    const iconReference = val.icon_reference == void 0 ? void 0 : val.icon_reference;
    if (!(val.allowed_entities == void 0) && !(0, json_js_2.sdIsList)(val.allowed_entities)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "allowed_entities" of type "CreateAiAgent"',
        });
    }
    const allowedEntities = val.allowed_entities == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.allowed_entities)
            ? val.allowed_entities.map(function (itm) {
                return (0, aiAgentAllowedEntity_generated_js_2.deserializeAiAgentAllowedEntity)(itm);
            })
            : [];
    const ask = val.ask == void 0 ? void 0 : (0, aiStudioAgentAsk_generated_js_2.deserializeAiStudioAgentAsk)(val.ask);
    const textGen = val.text_gen == void 0
        ? void 0
        : (0, aiStudioAgentTextGen_generated_js_2.deserializeAiStudioAgentTextGen)(val.text_gen);
    const extract = val.extract == void 0
        ? void 0
        : (0, aiStudioAgentExtract_generated_js_2.deserializeAiStudioAgentExtract)(val.extract);
    return {
        type: type,
        name: name,
        accessState: accessState,
        iconReference: iconReference,
        allowedEntities: allowedEntities,
        ask: ask,
        textGen: textGen,
        extract: extract,
    };
}
function serializeCreateAiAgentInput(val) {
    return {
        ['type']: val.type == void 0 ? val.type : serializeCreateAiAgentTypeField(val.type),
        ['name']: val.name,
        ['access_state']: val.accessState,
        ['icon_reference']: val.iconReference,
        ['allowed_entities']: val.allowedEntities == void 0
            ? val.allowedEntities
            : val.allowedEntities.map(function (item) {
                return (0, aiAgentAllowedEntity_generated_js_1.serializeAiAgentAllowedEntity)(item);
            }),
        ['ask']: val.ask == void 0 ? val.ask : (0, aiStudioAgentAsk_generated_js_1.serializeAiStudioAgentAsk)(val.ask),
        ['text_gen']: val.textGen == void 0
            ? val.textGen
            : (0, aiStudioAgentTextGen_generated_js_1.serializeAiStudioAgentTextGen)(val.textGen),
        ['extract']: val.extract == void 0
            ? val.extract
            : (0, aiStudioAgentExtract_generated_js_1.serializeAiStudioAgentExtract)(val.extract),
    };
}
function deserializeCreateAiAgentInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateAiAgentInput"',
        });
    }
    const type = val.type == void 0 ? void 0 : deserializeCreateAiAgentTypeField(val.type);
    if (val.name == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "name" of type "CreateAiAgentInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.name)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "name" of type "CreateAiAgentInput"',
        });
    }
    const name = val.name;
    if (val.access_state == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "access_state" of type "CreateAiAgentInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.access_state)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_state" of type "CreateAiAgentInput"',
        });
    }
    const accessState = val.access_state;
    if (!(val.icon_reference == void 0) && !(0, json_js_1.sdIsString)(val.icon_reference)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "icon_reference" of type "CreateAiAgentInput"',
        });
    }
    const iconReference = val.icon_reference == void 0 ? void 0 : val.icon_reference;
    if (!(val.allowed_entities == void 0) && !(0, json_js_2.sdIsList)(val.allowed_entities)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "allowed_entities" of type "CreateAiAgentInput"',
        });
    }
    const allowedEntities = val.allowed_entities == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.allowed_entities)
            ? val.allowed_entities.map(function (itm) {
                return (0, aiAgentAllowedEntity_generated_js_2.deserializeAiAgentAllowedEntity)(itm);
            })
            : [];
    const ask = val.ask == void 0 ? void 0 : (0, aiStudioAgentAsk_generated_js_2.deserializeAiStudioAgentAsk)(val.ask);
    const textGen = val.text_gen == void 0
        ? void 0
        : (0, aiStudioAgentTextGen_generated_js_2.deserializeAiStudioAgentTextGen)(val.text_gen);
    const extract = val.extract == void 0
        ? void 0
        : (0, aiStudioAgentExtract_generated_js_2.deserializeAiStudioAgentExtract)(val.extract);
    return {
        type: type,
        name: name,
        accessState: accessState,
        iconReference: iconReference,
        allowedEntities: allowedEntities,
        ask: ask,
        textGen: textGen,
        extract: extract,
    };
}
//# sourceMappingURL=createAiAgent.generated.js.map