"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeHubCollaborationsV2025R0 = serializeHubCollaborationsV2025R0;
exports.deserializeHubCollaborationsV2025R0 = deserializeHubCollaborationsV2025R0;
const hubCollaborationV2025R0_generated_js_1 = require("./hubCollaborationV2025R0.generated.js");
const hubCollaborationV2025R0_generated_js_2 = require("./hubCollaborationV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
const json_js_4 = require("../../serialization/json.js");
function serializeHubCollaborationsV2025R0(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, hubCollaborationV2025R0_generated_js_1.serializeHubCollaborationV2025R0)(item);
            }),
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
    };
}
function deserializeHubCollaborationsV2025R0(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "HubCollaborationsV2025R0"',
        });
    }
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "HubCollaborationsV2025R0"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, hubCollaborationV2025R0_generated_js_2.deserializeHubCollaborationV2025R0)(itm);
            })
            : [];
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "HubCollaborationsV2025R0"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "HubCollaborationsV2025R0"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    return {
        entries: entries,
        limit: limit,
        nextMarker: nextMarker,
    };
}
//# sourceMappingURL=hubCollaborationsV2025R0.generated.js.map