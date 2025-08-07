"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeRetentionPolicies = serializeRetentionPolicies;
exports.deserializeRetentionPolicies = deserializeRetentionPolicies;
const retentionPolicy_generated_js_1 = require("./retentionPolicy.generated.js");
const retentionPolicy_generated_js_2 = require("./retentionPolicy.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeRetentionPolicies(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, retentionPolicy_generated_js_1.serializeRetentionPolicy)(item);
            }),
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
    };
}
function deserializeRetentionPolicies(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "RetentionPolicies"',
        });
    }
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "RetentionPolicies"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, retentionPolicy_generated_js_2.deserializeRetentionPolicy)(itm);
            })
            : [];
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "RetentionPolicies"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "RetentionPolicies"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    return {
        entries: entries,
        limit: limit,
        nextMarker: nextMarker,
    };
}
//# sourceMappingURL=retentionPolicies.generated.js.map