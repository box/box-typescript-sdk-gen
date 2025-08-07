"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeArchivesV2025R0 = serializeArchivesV2025R0;
exports.deserializeArchivesV2025R0 = deserializeArchivesV2025R0;
const archiveV2025R0_generated_js_1 = require("./archiveV2025R0.generated.js");
const archiveV2025R0_generated_js_2 = require("./archiveV2025R0.generated.js");
const errors_js_1 = require("../../box/errors.js");
const json_js_1 = require("../../serialization/json.js");
const json_js_2 = require("../../serialization/json.js");
const json_js_3 = require("../../serialization/json.js");
const json_js_4 = require("../../serialization/json.js");
function serializeArchivesV2025R0(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, archiveV2025R0_generated_js_1.serializeArchiveV2025R0)(item);
            }),
        ['limit']: val.limit,
        ['next_marker']: val.nextMarker,
    };
}
function deserializeArchivesV2025R0(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "ArchivesV2025R0"' });
    }
    if (!(val.entries == void 0) && !(0, json_js_3.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "ArchivesV2025R0"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, archiveV2025R0_generated_js_2.deserializeArchiveV2025R0)(itm);
            })
            : [];
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "ArchivesV2025R0"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.next_marker == void 0) && !(0, json_js_2.sdIsString)(val.next_marker)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "next_marker" of type "ArchivesV2025R0"',
        });
    }
    const nextMarker = val.next_marker == void 0 ? void 0 : val.next_marker;
    return {
        entries: entries,
        limit: limit,
        nextMarker: nextMarker,
    };
}
//# sourceMappingURL=archivesV2025R0.generated.js.map