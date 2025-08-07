import { deserializeDateTime } from '../internal/utils.js';
import { deserializeAiAgentInfo } from './aiAgentInfo.generated.js';
import { serializeAiResponse } from './aiResponse.generated.js';
import { serializeAiCitation } from './aiCitation.generated.js';
import { deserializeAiCitation } from './aiCitation.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiResponseFull(val) {
    const base = serializeAiResponse(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiResponseFull"' });
    }
    return {
        ...base,
        ...{
            ['citations']: val.citations == void 0
                ? val.citations
                : val.citations.map(function (item) {
                    return serializeAiCitation(item);
                }),
        },
    };
}
export function deserializeAiResponseFull(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiResponseFull"' });
    }
    if (!(val.citations == void 0) && !sdIsList(val.citations)) {
        throw new BoxSdkError({
            message: 'Expecting array for "citations" of type "AiResponseFull"',
        });
    }
    const citations = val.citations == void 0
        ? void 0
        : sdIsList(val.citations)
            ? val.citations.map(function (itm) {
                return deserializeAiCitation(itm);
            })
            : [];
    if (val.answer == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "answer" of type "AiResponseFull" to be defined',
        });
    }
    if (!sdIsString(val.answer)) {
        throw new BoxSdkError({
            message: 'Expecting string for "answer" of type "AiResponseFull"',
        });
    }
    const answer = val.answer;
    if (val.created_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "created_at" of type "AiResponseFull" to be defined',
        });
    }
    if (!sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiResponseFull"',
        });
    }
    const createdAt = deserializeDateTime(val.created_at);
    if (!(val.completion_reason == void 0) &&
        !sdIsString(val.completion_reason)) {
        throw new BoxSdkError({
            message: 'Expecting string for "completion_reason" of type "AiResponseFull"',
        });
    }
    const completionReason = val.completion_reason == void 0 ? void 0 : val.completion_reason;
    const aiAgentInfo = val.ai_agent_info == void 0
        ? void 0
        : deserializeAiAgentInfo(val.ai_agent_info);
    return {
        citations: citations,
        answer: answer,
        createdAt: createdAt,
        completionReason: completionReason,
        aiAgentInfo: aiAgentInfo,
    };
}
//# sourceMappingURL=aiResponseFull.generated.js.map