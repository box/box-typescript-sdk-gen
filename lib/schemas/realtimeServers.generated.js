"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeRealtimeServers = serializeRealtimeServers;
exports.deserializeRealtimeServers = deserializeRealtimeServers;
const realtimeServer_generated_js_1 = require("./realtimeServer.generated.js");
const realtimeServer_generated_js_2 = require("./realtimeServer.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeRealtimeServers(val) {
    return {
        ['chunk_size']: val.chunkSize,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, realtimeServer_generated_js_1.serializeRealtimeServer)(item);
            }),
    };
}
function deserializeRealtimeServers(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "RealtimeServers"' });
    }
    if (!(val.chunk_size == void 0) && !(0, json_js_1.sdIsNumber)(val.chunk_size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "chunk_size" of type "RealtimeServers"',
        });
    }
    const chunkSize = val.chunk_size == void 0 ? void 0 : val.chunk_size;
    if (!(val.entries == void 0) && !(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "RealtimeServers"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, realtimeServer_generated_js_2.deserializeRealtimeServer)(itm);
            })
            : [];
    return { chunkSize: chunkSize, entries: entries };
}
//# sourceMappingURL=realtimeServers.generated.js.map