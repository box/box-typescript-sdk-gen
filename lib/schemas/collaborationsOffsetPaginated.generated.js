"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeCollaborationsOffsetPaginated = serializeCollaborationsOffsetPaginated;
exports.deserializeCollaborationsOffsetPaginated = deserializeCollaborationsOffsetPaginated;
const collaboration_generated_js_1 = require("./collaboration.generated.js");
const collaboration_generated_js_2 = require("./collaboration.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeCollaborationsOffsetPaginated(val) {
    return {
        ['total_count']: val.totalCount,
        ['limit']: val.limit,
        ['offset']: val.offset,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, collaboration_generated_js_1.serializeCollaboration)(item);
            }),
    };
}
function deserializeCollaborationsOffsetPaginated(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CollaborationsOffsetPaginated"',
        });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "CollaborationsOffsetPaginated"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.limit == void 0) && !(0, json_js_1.sdIsNumber)(val.limit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "limit" of type "CollaborationsOffsetPaginated"',
        });
    }
    const limit = val.limit == void 0 ? void 0 : val.limit;
    if (!(val.offset == void 0) && !(0, json_js_1.sdIsNumber)(val.offset)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "offset" of type "CollaborationsOffsetPaginated"',
        });
    }
    const offset = val.offset == void 0 ? void 0 : val.offset;
    if (!(val.entries == void 0) && !(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "CollaborationsOffsetPaginated"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, collaboration_generated_js_2.deserializeCollaboration)(itm);
            })
            : [];
    return {
        totalCount: totalCount,
        limit: limit,
        offset: offset,
        entries: entries,
    };
}
//# sourceMappingURL=collaborationsOffsetPaginated.generated.js.map