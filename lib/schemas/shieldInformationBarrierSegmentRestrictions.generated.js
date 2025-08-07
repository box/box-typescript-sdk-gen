"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeShieldInformationBarrierSegmentRestrictions = serializeShieldInformationBarrierSegmentRestrictions;
exports.deserializeShieldInformationBarrierSegmentRestrictions = deserializeShieldInformationBarrierSegmentRestrictions;
const shieldInformationBarrierSegmentRestriction_generated_js_1 = require("./shieldInformationBarrierSegmentRestriction.generated.js");
const shieldInformationBarrierSegmentRestriction_generated_js_2 = require("./shieldInformationBarrierSegmentRestriction.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeShieldInformationBarrierSegmentRestrictions(val) {
    return {
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, shieldInformationBarrierSegmentRestriction_generated_js_1.serializeShieldInformationBarrierSegmentRestriction)(item);
            }),
    };
}
function deserializeShieldInformationBarrierSegmentRestrictions(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ShieldInformationBarrierSegmentRestrictions"',
        });
    }
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "ShieldInformationBarrierSegmentRestrictions"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "ShieldInformationBarrierSegmentRestrictions"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "ShieldInformationBarrierSegmentRestrictions"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, shieldInformationBarrierSegmentRestriction_generated_js_2.deserializeShieldInformationBarrierSegmentRestriction)(itm);
            })
            : [];
    return {
        limit: limit,
        nextMarker: nextMarker,
        entries: entries,
    };
}
//# sourceMappingURL=shieldInformationBarrierSegmentRestrictions.generated.js.map