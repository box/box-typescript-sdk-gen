"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeMetadatas = serializeMetadatas;
exports.deserializeMetadatas = deserializeMetadatas;
const metadata_generated_js_1 = require("./metadata.generated.js");
const metadata_generated_js_2 = require("./metadata.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeMetadatas(val) {
    return {
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, metadata_generated_js_1.serializeMetadata)(item);
            }),
        ['limit']: val.limit,
    };
}
function deserializeMetadatas(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "Metadatas"' });
    }
    if (!(val.entries == void 0) && !(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "Metadatas"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, metadata_generated_js_2.deserializeMetadata)(itm);
            })
            : [];
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "Metadatas"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    return { entries: entries, limit: limit };
}
//# sourceMappingURL=metadatas.generated.js.map