"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeDocGenJobsFullV2025R0 = serializeDocGenJobsFullV2025R0;
exports.deserializeDocGenJobsFullV2025R0 = deserializeDocGenJobsFullV2025R0;
const docGenJobFullV2025R0_generated_js_1 = require("./docGenJobFullV2025R0.generated.js");
const docGenJobFullV2025R0_generated_js_2 = require("./docGenJobFullV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
const json_js_4 = require("../../serialization/json.js");
function serializeDocGenJobsFullV2025R0(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['prev_marker']: val.prevMarker,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, docGenJobFullV2025R0_generated_js_1.serializeDocGenJobFullV2025R0)(item);
            }),
    };
}
function deserializeDocGenJobsFullV2025R0(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "DocGenJobsFullV2025R0"',
        });
    }
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "DocGenJobsFullV2025R0"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "DocGenJobsFullV2025R0"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.prev_marker == void 0) && !(0, json_js_2.sdIsString)(val.prev_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prev_marker" of type "DocGenJobsFullV2025R0"',
        });
    }
    const prevMarker = val.prev_marker == void 0 ? void 0 : val.prev_marker;
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "DocGenJobsFullV2025R0"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, docGenJobFullV2025R0_generated_js_2.deserializeDocGenJobFullV2025R0)(itm);
            })
            : [];
    return {
        limit: limit,
        nextMarker: nextMarker,
        prevMarker: prevMarker,
        entries: entries,
    };
}
//# sourceMappingURL=docGenJobsFullV2025R0.generated.js.map