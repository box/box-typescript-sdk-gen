"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignRequests = serializeSignRequests;
exports.deserializeSignRequests = deserializeSignRequests;
const signRequest_generated_js_1 = require("./signRequest.generated.js");
const signRequest_generated_js_2 = require("./signRequest.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeSignRequests(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, signRequest_generated_js_1.serializeSignRequest)(item);
            }),
    };
}
function deserializeSignRequests(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "SignRequests"' });
    }
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "SignRequests"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "SignRequests"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "SignRequests"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, signRequest_generated_js_2.deserializeSignRequest)(itm);
            })
            : [];
    return {
        limit: limit,
        nextMarker: nextMarker,
        entries: entries,
    };
}
//# sourceMappingURL=signRequests.generated.js.map