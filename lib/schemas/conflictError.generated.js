"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeConflictErrorContextInfoField = serializeConflictErrorContextInfoField;
exports.deserializeConflictErrorContextInfoField = deserializeConflictErrorContextInfoField;
exports.serializeConflictError = serializeConflictError;
exports.deserializeConflictError = deserializeConflictError;
const clientError_generated_js_1 = require("./clientError.generated.js");
const clientError_generated_js_2 = require("./clientError.generated.js");
const clientError_generated_js_3 = require("./clientError.generated.js");
const fileConflict_generated_js_1 = require("./fileConflict.generated.js");
const fileConflict_generated_js_2 = require("./fileConflict.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeConflictErrorContextInfoField(val) {
    return {
        ['conflicts']: val.conflicts == void 0
            ? val.conflicts
            : val.conflicts.map(function (item) {
                return (0, fileConflict_generated_js_1.serializeFileConflict)(item);
            }),
    };
}
function deserializeConflictErrorContextInfoField(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "ConflictErrorContextInfoField"',
        });
    }
    if (!(val.conflicts == void 0) && !(0, json_js_3.sdIsList)(val.conflicts)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "conflicts" of type "ConflictErrorContextInfoField"',
        });
    }
    const conflicts = val.conflicts == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.conflicts)
            ? val.conflicts.map(function (itm) {
                return (0, fileConflict_generated_js_2.deserializeFileConflict)(itm);
            })
            : [];
    return { conflicts: conflicts };
}
function serializeConflictError(val) {
    const base = (0, clientError_generated_js_3.serializeClientError)(val);
    if (!(0, json_js_4.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "ConflictError"' });
    }
    return Object.assign(Object.assign({}, base), {});
}
function deserializeConflictError(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "ConflictError"' });
    }
    const type = val.type == void 0 ? void 0 : (0, clientError_generated_js_1.deserializeClientErrorTypeField)(val.type);
    if (!(val.status == void 0) && !(0, json_js_1.sdIsNumber)(val.status)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "status" of type "ConflictError"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    const code = val.code == void 0 ? void 0 : (0, clientError_generated_js_2.deserializeClientErrorCodeField)(val.code);
    if (!(val.message == void 0) && !(0, json_js_2.sdIsString)(val.message)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "message" of type "ConflictError"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.context_info == void 0) && !(0, json_js_4.sdIsMap)(val.context_info)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting object for "context_info" of type "ConflictError"',
        });
    }
    const contextInfo = val.context_info == void 0
        ? void 0
        : (0, json_js_4.sdIsMap)(val.context_info)
            ? Object.fromEntries(Object.entries(val.context_info).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ]))
            : {};
    if (!(val.help_url == void 0) && !(0, json_js_2.sdIsString)(val.help_url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "help_url" of type "ConflictError"',
        });
    }
    const helpUrl = val.help_url == void 0 ? void 0 : val.help_url;
    if (!(val.request_id == void 0) && !(0, json_js_2.sdIsString)(val.request_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "request_id" of type "ConflictError"',
        });
    }
    const requestId = val.request_id == void 0 ? void 0 : val.request_id;
    return {
        type: type,
        status: status,
        code: code,
        message: message,
        contextInfo: contextInfo,
        helpUrl: helpUrl,
        requestId: requestId,
    };
}
//# sourceMappingURL=conflictError.generated.js.map