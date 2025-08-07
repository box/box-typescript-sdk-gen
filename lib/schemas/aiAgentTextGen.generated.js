"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AiAgentTextGen = void 0;
exports.serializeAiAgentTextGenTypeField = serializeAiAgentTextGenTypeField;
exports.deserializeAiAgentTextGenTypeField = deserializeAiAgentTextGenTypeField;
exports.serializeAiAgentTextGen = serializeAiAgentTextGen;
exports.deserializeAiAgentTextGen = deserializeAiAgentTextGen;
exports.serializeAiAgentTextGenInput = serializeAiAgentTextGenInput;
exports.deserializeAiAgentTextGenInput = deserializeAiAgentTextGenInput;
const aiAgentBasicGenTool_generated_js_1 = require("./aiAgentBasicGenTool.generated.js");
const aiAgentBasicGenTool_generated_js_2 = require("./aiAgentBasicGenTool.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
class AiAgentTextGen {
    constructor(fields) {
        /**
         * The type of AI agent used for generating text. */
        this.type = 'ai_agent_text_gen';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.basicGen !== undefined) {
            this.basicGen = fields.basicGen;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.AiAgentTextGen = AiAgentTextGen;
function serializeAiAgentTextGenTypeField(val) {
    return val;
}
function deserializeAiAgentTextGenTypeField(val) {
    if (val == 'ai_agent_text_gen') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AiAgentTextGenTypeField",
    });
}
function serializeAiAgentTextGen(val) {
    return {
        ['type']: serializeAiAgentTextGenTypeField(val.type),
        ['basic_gen']: val.basicGen == void 0
            ? val.basicGen
            : (0, aiAgentBasicGenTool_generated_js_1.serializeAiAgentBasicGenTool)(val.basicGen),
    };
}
function deserializeAiAgentTextGen(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AiAgentTextGen"' });
    }
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "AiAgentTextGen" to be defined',
        });
    }
    const type = deserializeAiAgentTextGenTypeField(val.type);
    const basicGen = val.basic_gen == void 0
        ? void 0
        : (0, aiAgentBasicGenTool_generated_js_2.deserializeAiAgentBasicGenTool)(val.basic_gen);
    return { type: type, basicGen: basicGen };
}
function serializeAiAgentTextGenInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeAiAgentTextGenTypeField(val.type),
        ['basic_gen']: val.basicGen == void 0
            ? val.basicGen
            : (0, aiAgentBasicGenTool_generated_js_1.serializeAiAgentBasicGenTool)(val.basicGen),
    };
}
function deserializeAiAgentTextGenInput(val) {
    if (!(0, json_js_1.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiAgentTextGenInput"',
        });
    }
    const type = val.type == void 0 ? void 0 : deserializeAiAgentTextGenTypeField(val.type);
    const basicGen = val.basic_gen == void 0
        ? void 0
        : (0, aiAgentBasicGenTool_generated_js_2.deserializeAiAgentBasicGenTool)(val.basic_gen);
    return { type: type, basicGen: basicGen };
}
//# sourceMappingURL=aiAgentTextGen.generated.js.map