"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeSignTemplates = serializeSignTemplates;
exports.deserializeSignTemplates = deserializeSignTemplates;
const signTemplate_generated_js_1 = require("./signTemplate.generated.js");
const signTemplate_generated_js_2 = require("./signTemplate.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeSignTemplates(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['prev_marker']: val.prevMarker,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, signTemplate_generated_js_1.serializeSignTemplate)(item);
            }),
    };
}
function deserializeSignTemplates(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "SignTemplates"' });
    }
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "SignTemplates"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "SignTemplates"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.prev_marker == void 0) && !(0, json_js_2.sdIsString)(val.prev_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "prev_marker" of type "SignTemplates"',
        });
    }
    const prevMarker = val.prev_marker == void 0 ? void 0 : val.prev_marker;
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "SignTemplates"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, signTemplate_generated_js_2.deserializeSignTemplate)(itm);
            })
            : [];
    return {
        limit: limit,
        nextMarker: nextMarker,
        prevMarker: prevMarker,
        entries: entries,
    };
}
//# sourceMappingURL=signTemplates.generated.js.map