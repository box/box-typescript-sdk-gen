"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubItemsV2025R0 = serializeHubItemsV2025R0;
exports.deserializeHubItemsV2025R0 = deserializeHubItemsV2025R0;
const hubItemV2025R0_generated_js_1 = require("./hubItemV2025R0.generated.js");
const hubItemV2025R0_generated_js_2 = require("./hubItemV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
const json_js_4 = require("../../serialization/json.js");
function serializeHubItemsV2025R0(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, hubItemV2025R0_generated_js_1.serializeHubItemV2025R0)(item);
            }),
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
    };
}
function deserializeHubItemsV2025R0(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "HubItemsV2025R0"' });
    }
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "HubItemsV2025R0"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, hubItemV2025R0_generated_js_2.deserializeHubItemV2025R0)(itm);
            })
            : [];
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "HubItemsV2025R0"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "HubItemsV2025R0"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    return {
        entries: entries,
        limit: limit,
        nextMarker: nextMarker,
    };
}
//# sourceMappingURL=hubItemsV2025R0.generated.js.map