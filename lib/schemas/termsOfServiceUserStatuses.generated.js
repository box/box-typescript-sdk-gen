"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeTermsOfServiceUserStatuses = serializeTermsOfServiceUserStatuses;
exports.deserializeTermsOfServiceUserStatuses = deserializeTermsOfServiceUserStatuses;
const termsOfServiceUserStatus_generated_js_1 = require("./termsOfServiceUserStatus.generated.js");
const termsOfServiceUserStatus_generated_js_2 = require("./termsOfServiceUserStatus.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeTermsOfServiceUserStatuses(val) {
    return {
        ['total_count']: val.totalCount,
        ['entries']: val.entries == void 0
            ? val.entries
            : val.entries.map(function (item) {
                return (0, termsOfServiceUserStatus_generated_js_1.serializeTermsOfServiceUserStatus)(item);
            }),
    };
}
function deserializeTermsOfServiceUserStatuses(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "TermsOfServiceUserStatuses"',
        });
    }
    if (!(val.total_count == void 0) && !(0, json_js_1.sdIsNumber)(val.total_count)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_count" of type "TermsOfServiceUserStatuses"',
        });
    }
    const totalCount = val.total_count == void 0 ? void 0 : val.total_count;
    if (!(val.entries == void 0) && !(0, json_js_2.sdIsList)(val.entries)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "entries" of type "TermsOfServiceUserStatuses"',
        });
    }
    const entries = val.entries == void 0
        ? void 0
        : (0, json_js_2.sdIsList)(val.entries)
            ? val.entries.map(function (itm) {
                return (0, termsOfServiceUserStatus_generated_js_2.deserializeTermsOfServiceUserStatus)(itm);
            })
            : [];
    return {
        totalCount: totalCount,
        entries: entries,
    };
}
//# sourceMappingURL=termsOfServiceUserStatuses.generated.js.map