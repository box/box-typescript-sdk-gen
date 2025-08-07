"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiDialogueHistory = serializeAiDialogueHistory;
exports.deserializeAiDialogueHistory = deserializeAiDialogueHistory;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializeAiDialogueHistory(val) {
    return {
        ['prompt']: val.prompt,
        ['answer']: val.answer,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : (0, utils_js_1.serializeDateTime)(val.createdAt),
    };
}
function deserializeAiDialogueHistory(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiDialogueHistory"',
        });
    }
    if (!(val.prompt == void 0) && !(0, json_js_1.sdIsString)(val.prompt)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiDialogueHistory"',
        });
    }
    const prompt = val.prompt == void 0 ? void 0 : val.prompt;
    if (!(val.answer == void 0) && !(0, json_js_1.sdIsString)(val.answer)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "answer" of type "AiDialogueHistory"',
        });
    }
    const answer = val.answer == void 0 ? void 0 : val.answer;
    if (!(val.created_at == void 0) && !(0, json_js_1.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiDialogueHistory"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.created_at);
    return {
        prompt: prompt,
        answer: answer,
        createdAt: createdAt,
    };
}
//# sourceMappingURL=aiDialogueHistory.generated.js.map