import { serializeAiSingleAgentResponseFull } from './aiSingleAgentResponseFull.generated.js';
import { deserializeAiSingleAgentResponseFull } from './aiSingleAgentResponseFull.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAiMultipleAgentResponse(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['prev_marker']: val.prevMarker,
        ['entries']: val.entries.map(function (item) {
            return serializeAiSingleAgentResponseFull(item);
        }),
    };
}
export function deserializeAiMultipleAgentResponse(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "AiMultipleAgentResponse"',
        });
    }
    if (!(val.limit == void 0) && !sdIsNumber(val.limit)) {
        throw new BoxSdkError({
            message: 'Expecting number for "limit" of type "AiMultipleAgentResponse"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !sdIsString(val.next_marker)) {
        throw new BoxSdkError({
            message: 'Expecting string for "next_marker" of type "AiMultipleAgentResponse"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.prev_marker == void 0) && !sdIsString(val.prev_marker)) {
        throw new BoxSdkError({
            message: 'Expecting string for "prev_marker" of type "AiMultipleAgentResponse"',
        });
    }
    const prevMarker = val.prev_marker == void 0 ? void 0 : val.prev_marker;
    if (val.entries == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "entries" of type "AiMultipleAgentResponse" to be defined',
        });
    }
    if (!sdIsList(val.entries)) {
        throw new BoxSdkError({
            message: 'Expecting array for "entries" of type "AiMultipleAgentResponse"',
        });
    }
    const entries = sdIsList(val.entries)
        ? val.entries.map(function (itm) {
            return deserializeAiSingleAgentResponseFull(itm);
        })
        : [];
    return {
        limit: limit,
        nextMarker: nextMarker,
        prevMarker: prevMarker,
        entries: entries,
    };
}
//# sourceMappingURL=aiMultipleAgentResponse.generated.js.map