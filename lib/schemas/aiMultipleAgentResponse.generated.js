"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAiMultipleAgentResponse = serializeAiMultipleAgentResponse;
exports.deserializeAiMultipleAgentResponse = deserializeAiMultipleAgentResponse;
const aiSingleAgentResponseFull_generated_js_1 = require("./aiSingleAgentResponseFull.generated.js");
const aiSingleAgentResponseFull_generated_js_2 = require("./aiSingleAgentResponseFull.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeAiMultipleAgentResponse(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['prev_marker']: val.prevMarker,
        ['entries']: val.entries.map(function (item) {
            return (0, aiSingleAgentResponseFull_generated_js_1.serializeAiSingleAgentResponseFull)(item);
        }),
    };
}
function deserializeAiMultipleAgentResponse(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "AiMultipleAgentResponse"',
        });
    }
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "AiMultipleAgentResponse"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "AiMultipleAgentResponse"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.prev_marker == void 0) && !(0, json_js_2.sdIsString)(val.prev_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prev_marker" of type "AiMultipleAgentResponse"',
        });
    }
    const prevMarker = val.prev_marker == void 0 ? void 0 : val.prev_marker;
    if (val.entries == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "entries" of type "AiMultipleAgentResponse" to be defined',
        });
    }
    if (!(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "AiMultipleAgentResponse"',
        });
    }
    const entries = (0, json_js_3.sdIsList)(val.entries)
        ? val.entries.map(function (itm) {
            return (0, aiSingleAgentResponseFull_generated_js_2.deserializeAiSingleAgentResponseFull)(itm);
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