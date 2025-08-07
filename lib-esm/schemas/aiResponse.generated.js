import { serializeAiAgentInfo } from './aiAgentInfo.generated.js';
import { deserializeAiAgentInfo } from './aiAgentInfo.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiResponse(val) {
    return {
        ['answer']: val.answer,
        ['created_at']: serializeDateTime(val.createdAt),
        ['completion_reason']: val.completionReason,
        ['ai_agent_info']: val.aiAgentInfo == void 0
            ? val.aiAgentInfo
            : serializeAiAgentInfo(val.aiAgentInfo),
    };
}
export function deserializeAiResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AiResponse"' });
    }
    if (val.answer == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "answer" of type "AiResponse" to be defined',
        });
    }
    if (!sdIsString(val.answer)) {
        throw new BoxSdkError({
            message: 'Expecting string for "answer" of type "AiResponse"',
        });
    }
    const answer = val.answer;
    if (val.created_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "created_at" of type "AiResponse" to be defined',
        });
    }
    if (!sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "AiResponse"',
        });
    }
    const createdAt = deserializeDateTime(val.created_at);
    if (!(val.completion_reason == void 0) &&
        !sdIsString(val.completion_reason)) {
        throw new BoxSdkError({
            message: 'Expecting string for "completion_reason" of type "AiResponse"',
        });
    }
    const completionReason = val.completion_reason == void 0 ? void 0 : val.completion_reason;
    const aiAgentInfo = val.ai_agent_info == void 0
        ? void 0
        : deserializeAiAgentInfo(val.ai_agent_info);
    return {
        answer: answer,
        createdAt: createdAt,
        completionReason: completionReason,
        aiAgentInfo: aiAgentInfo,
    };
}
//# sourceMappingURL=aiResponse.generated.js.map