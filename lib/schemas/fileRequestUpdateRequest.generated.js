"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileRequestUpdateRequestStatusField = serializeFileRequestUpdateRequestStatusField;
exports.deserializeFileRequestUpdateRequestStatusField = deserializeFileRequestUpdateRequestStatusField;
exports.serializeFileRequestUpdateRequest = serializeFileRequestUpdateRequest;
exports.deserializeFileRequestUpdateRequest = deserializeFileRequestUpdateRequest;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeFileRequestUpdateRequestStatusField(val) {
    return val;
}
function deserializeFileRequestUpdateRequestStatusField(val) {
    if (val == 'active') {
        return val;
    }
    if (val == 'inactive') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileRequestUpdateRequestStatusField",
    });
}
function serializeFileRequestUpdateRequest(val) {
    return {
        ['title']: val.title,
        ['description']: val.description,
        ['status']: val.status == void 0
            ? val.status
            : serializeFileRequestUpdateRequestStatusField(val.status),
        ['is_email_required']: val.isEmailRequired,
        ['is_description_required']: val.isDescriptionRequired,
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : (0, utils_js_1.serializeDateTime)(val.expiresAt),
    };
}
function deserializeFileRequestUpdateRequest(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileRequestUpdateRequest"',
        });
    }
    if (!(val.title == void 0) && !(0, json_js_2.sdIsString)(val.title)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "title" of type "FileRequestUpdateRequest"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "FileRequestUpdateRequest"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const status = val.status == void 0
        ? void 0
        : deserializeFileRequestUpdateRequestStatusField(val.status);
    if (!(val.is_email_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_email_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_email_required" of type "FileRequestUpdateRequest"',
        });
    }
    const isEmailRequired = val.is_email_required == void 0 ? void 0 : val.is_email_required;
    if (!(val.is_description_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_description_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_description_required" of type "FileRequestUpdateRequest"',
        });
    }
    const isDescriptionRequired = val.is_description_required == void 0
        ? void 0
        : val.is_description_required;
    if (!(val.expires_at == void 0) && !(0, json_js_2.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "FileRequestUpdateRequest"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expires_at);
    return {
        title: title,
        description: description,
        status: status,
        isEmailRequired: isEmailRequired,
        isDescriptionRequired: isDescriptionRequired,
        expiresAt: expiresAt,
    };
}
//# sourceMappingURL=fileRequestUpdateRequest.generated.js.map