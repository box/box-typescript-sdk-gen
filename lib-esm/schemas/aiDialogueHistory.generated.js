import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiDialogueHistory(val) {
    return {
        ['prompt']: val.prompt,
        ['answer']: val.answer,
        ['created_at']: val.createdAt == void 0
            ? val.createdAt
            : serializeDateTime(val.createdAt),
    };
}
export function deserializeAiDialogueHistory(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiDialogueHistory"',
        });
    }
    if (!(val.prompt == void 0) && !sdIsString(val.prompt)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prompt" of type "AiDialogueHistory"',
        });
    }
    const prompt = val.prompt == void 0 ? void 0 : val.prompt;
    if (!(val.answer == void 0) && !sdIsString(val.answer)) {
        throw new BoxSdkError({
            message: 'Expecting string for "answer" of type "AiDialogueHistory"',
        });
    }
    const answer = val.answer == void 0 ? void 0 : val.answer;
    if (!(val.created_at == void 0) && !sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiDialogueHistory"',
        });
    }
    const createdAt = val.created_at == void 0 ? void 0 : deserializeDateTime(val.created_at);
    return {
        prompt: prompt,
        answer: answer,
        createdAt: createdAt,
    };
}
//# sourceMappingURL=aiDialogueHistory.generated.js.map