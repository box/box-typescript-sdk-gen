"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeFileRequestCopyRequestFolderTypeField = serializeFileRequestCopyRequestFolderTypeField;
exports.deserializeFileRequestCopyRequestFolderTypeField = deserializeFileRequestCopyRequestFolderTypeField;
exports.serializeFileRequestCopyRequestFolderField = serializeFileRequestCopyRequestFolderField;
exports.deserializeFileRequestCopyRequestFolderField = deserializeFileRequestCopyRequestFolderField;
exports.serializeFileRequestCopyRequest = serializeFileRequestCopyRequest;
exports.deserializeFileRequestCopyRequest = deserializeFileRequestCopyRequest;
const fileRequestUpdateRequest_generated_js_1 = require("./fileRequestUpdateRequest.generated.js");
const utils_js_1 = require("../internal/utils.js");
const fileRequestUpdateRequest_generated_js_2 = require("./fileRequestUpdateRequest.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeFileRequestCopyRequestFolderTypeField(val) {
    return val;
}
function deserializeFileRequestCopyRequestFolderTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize FileRequestCopyRequestFolderTypeField",
    });
}
function serializeFileRequestCopyRequestFolderField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeFileRequestCopyRequestFolderTypeField(val.type),
        ['id']: val.id,
    };
}
function deserializeFileRequestCopyRequestFolderField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileRequestCopyRequestFolderField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeFileRequestCopyRequestFolderTypeField(val.type);
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileRequestCopyRequestFolderField" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileRequestCopyRequestFolderField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
function serializeFileRequestCopyRequest(val) {
    const base = (0, fileRequestUpdateRequest_generated_js_2.serializeFileRequestUpdateRequest)(val);
    if (!(0, json_js_3.sdIsMap)(base)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileRequestCopyRequest"',
        });
    }
    return Object.assign(Object.assign({}, base), { ['folder']: serializeFileRequestCopyRequestFolderField(val.folder) });
}
function deserializeFileRequestCopyRequest(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileRequestCopyRequest"',
        });
    }
    if (val.folder == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "folder" of type "FileRequestCopyRequest" to be defined',
        });
    }
    const folder = deserializeFileRequestCopyRequestFolderField(val.folder);
    if (!(val.title == void 0) && !(0, json_js_2.sdIsString)(val.title)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "title" of type "FileRequestCopyRequest"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "FileRequestCopyRequest"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const status = val.status == void 0
        ? void 0
        : (0, fileRequestUpdateRequest_generated_js_1.deserializeFileRequestUpdateRequestStatusField)(val.status);
    if (!(val.is_email_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_email_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_email_required" of type "FileRequestCopyRequest"',
        });
    }
    const isEmailRequired = val.is_email_required == void 0 ? void 0 : val.is_email_required;
    if (!(val.is_description_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_description_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_description_required" of type "FileRequestCopyRequest"',
        });
    }
    const isDescriptionRequired = val.is_description_required == void 0
        ? void 0
        : val.is_description_required;
    if (!(val.expires_at == void 0) && !(0, json_js_2.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "FileRequestCopyRequest"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_1.deserializeDateTime)(val.expires_at);
    return {
        folder: folder,
        title: title,
        description: description,
        status: status,
        isEmailRequired: isEmailRequired,
        isDescriptionRequired: isDescriptionRequired,
        expiresAt: expiresAt,
    };
}
//# sourceMappingURL=fileRequestCopyRequest.generated.js.map