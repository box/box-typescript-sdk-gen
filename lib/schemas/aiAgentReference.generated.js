"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiAgentReference = void 0;
exports.serializeAiAgentReferenceTypeField = serializeAiAgentReferenceTypeField;
exports.deserializeAiAgentReferenceTypeField = deserializeAiAgentReferenceTypeField;
exports.serializeAiAgentReference = serializeAiAgentReference;
exports.deserializeAiAgentReference = deserializeAiAgentReference;
exports.serializeAiAgentReferenceInput = serializeAiAgentReferenceInput;
exports.deserializeAiAgentReferenceInput = deserializeAiAgentReferenceInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class AiAgentReference {
    constructor(fields) {
        /**
         * The type of AI agent used to handle queries. */
        this.type = 'ai_agent_id';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AiAgentReference = AiAgentReference;
function serializeAiAgentReferenceTypeField(val) {
    return val;
}
function deserializeAiAgentReferenceTypeField(val) {
    if (val == 'ai_agent_id') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentReferenceTypeField",
    });
}
function serializeAiAgentReference(val) {
    return {
        ['type']: serializeAiAgentReferenceTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeAiAgentReference(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentReference"',
        });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiAgentReference" to be defined',
        });
    }
    const type = deserializeAiAgentReferenceTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiAgentReference"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
function serializeAiAgentReferenceInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiAgentReferenceTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeAiAgentReferenceInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentReferenceInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeAiAgentReferenceTypeField(val.type);
    if (!(val.id == void 0) && !(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "AiAgentReferenceInput"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
//# sourceMappingURL=aiAgentReference.generated.js.map