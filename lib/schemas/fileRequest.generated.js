"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileRequest = void 0;
exports.serializeFileRequestTypeField = serializeFileRequestTypeField;
exports.deserializeFileRequestTypeField = deserializeFileRequestTypeField;
exports.serializeFileRequestStatusField = serializeFileRequestStatusField;
exports.deserializeFileRequestStatusField = deserializeFileRequestStatusField;
exports.serializeFileRequest = serializeFileRequest;
exports.deserializeFileRequest = deserializeFileRequest;
exports.serializeFileRequestInput = serializeFileRequestInput;
exports.deserializeFileRequestInput = deserializeFileRequestInput;
const folderMini_generated_js_1 = require("./folderMini.generated.js");
const folderMini_generated_js_2 = require("./folderMini.generated.js");
const userMini_generated_js_1 = require("./userMini.generated.js");
const userMini_generated_js_2 = require("./userMini.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class FileRequest {
    constructor(fields) {
        /**
         * The value will always be `file_request`. */
        this.type = 'file_request';
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.title !== undefined) {
            this.title = fields.title;
        }
        if (fields.description !== undefined) {
            this.description = fields.description;
        }
        if (fields.status !== undefined) {
            this.status = fields.status;
        }
        if (fields.isEmailRequired !== undefined) {
            this.isEmailRequired = fields.isEmailRequired;
        }
        if (fields.isDescriptionRequired !== undefined) {
            this.isDescriptionRequired = fields.isDescriptionRequired;
        }
        if (fields.expiresAt !== undefined) {
            this.expiresAt = fields.expiresAt;
        }
        if (fields.folder !== undefined) {
            this.folder = fields.folder;
        }
        if (fields.url !== undefined) {
            this.url = fields.url;
        }
        if (fields.etag !== undefined) {
            this.etag = fields.etag;
        }
        if (fields.createdBy !== undefined) {
            this.createdBy = fields.createdBy;
        }
        if (fields.createdAt !== undefined) {
            this.createdAt = fields.createdAt;
        }
        if (fields.updatedBy !== undefined) {
            this.updatedBy = fields.updatedBy;
        }
        if (fields.updatedAt !== undefined) {
            this.updatedAt = fields.updatedAt;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
exports.FileRequest = FileRequest;
function serializeFileRequestTypeField(val) {
    return val;
}
function deserializeFileRequestTypeField(val) {
    if (val == 'file_request') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({ message: "Can't deserialize FileRequestTypeField" });
}
function serializeFileRequestStatusField(val) {
    return val;
}
function deserializeFileRequestStatusField(val) {
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
        message: "Can't deserialize FileRequestStatusField",
    });
}
function serializeFileRequest(val) {
    return {
        ['id']: val.id,
        ['type']: serializeFileRequestTypeField(val.type),
        ['title']: val.title,
        ['description']: val.description,
        ['status']: val.status == void 0
            ? val.status
            : serializeFileRequestStatusField(val.status),
        ['is_email_required']: val.isEmailRequired,
        ['is_description_required']: val.isDescriptionRequired,
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : (0, utils_js_1.serializeDateTime)(val.expiresAt),
        ['folder']: (0, folderMini_generated_js_1.serializeFolderMini)(val.folder),
        ['url']: val.url,
        ['etag']: val.etag,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['created_at']: (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['updated_by']: val.updatedBy == void 0
            ? val.updatedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.updatedBy),
        ['updated_at']: (0, utils_js_1.serializeDateTime)(val.updatedAt),
    };
}
function deserializeFileRequest(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "FileRequest"' });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileRequest" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileRequest"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "type" of type "FileRequest" to be defined',
        });
    }
    const type = deserializeFileRequestTypeField(val.type);
    if (!(val.title == void 0) && !(0, json_js_2.sdIsString)(val.title)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "title" of type "FileRequest"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "FileRequest"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const status = val.status == void 0
        ? void 0
        : deserializeFileRequestStatusField(val.status);
    if (!(val.is_email_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_email_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_email_required" of type "FileRequest"',
        });
    }
    const isEmailRequired = val.is_email_required == void 0 ? void 0 : val.is_email_required;
    if (!(val.is_description_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_description_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_description_required" of type "FileRequest"',
        });
    }
    const isDescriptionRequired = val.is_description_required == void 0
        ? void 0
        : val.is_description_required;
    if (!(val.expires_at == void 0) && !(0, json_js_2.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "FileRequest"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expires_at);
    if (val.folder == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "folder" of type "FileRequest" to be defined',
        });
    }
    const folder = (0, folderMini_generated_js_2.deserializeFolderMini)(val.folder);
    if (!(val.url == void 0) && !(0, json_js_2.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "FileRequest"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.etag == void 0) && !(0, json_js_2.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FileRequest"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (val.created_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "created_at" of type "FileRequest" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "FileRequest"',
        });
    }
    const createdAt = (0, utils_js_2.deserializeDateTime)(val.created_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.updated_by);
    if (val.updated_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "updated_at" of type "FileRequest" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.updated_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "updated_at" of type "FileRequest"',
        });
    }
    const updatedAt = (0, utils_js_2.deserializeDateTime)(val.updated_at);
    return {
        id: id,
        type: type,
        title: title,
        description: description,
        status: status,
        isEmailRequired: isEmailRequired,
        isDescriptionRequired: isDescriptionRequired,
        expiresAt: expiresAt,
        folder: folder,
        url: url,
        etag: etag,
        createdBy: createdBy,
        createdAt: createdAt,
        updatedBy: updatedBy,
        updatedAt: updatedAt,
    };
}
function serializeFileRequestInput(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeFileRequestTypeField(val.type),
        ['title']: val.title,
        ['description']: val.description,
        ['status']: val.status == void 0
            ? val.status
            : serializeFileRequestStatusField(val.status),
        ['is_email_required']: val.isEmailRequired,
        ['is_description_required']: val.isDescriptionRequired,
        ['expires_at']: val.expiresAt == void 0
            ? val.expiresAt
            : (0, utils_js_1.serializeDateTime)(val.expiresAt),
        ['folder']: (0, folderMini_generated_js_1.serializeFolderMini)(val.folder),
        ['url']: val.url,
        ['etag']: val.etag,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.createdBy),
        ['created_at']: (0, utils_js_1.serializeDateTime)(val.createdAt),
        ['updated_by']: val.updatedBy == void 0
            ? val.updatedBy
            : (0, userMini_generated_js_1.serializeUserMini)(val.updatedBy),
        ['updated_at']: (0, utils_js_1.serializeDateTime)(val.updatedAt),
    };
}
function deserializeFileRequestInput(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "FileRequestInput"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "FileRequestInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "FileRequestInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeFileRequestTypeField(val.type);
    if (!(val.title == void 0) && !(0, json_js_2.sdIsString)(val.title)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "title" of type "FileRequestInput"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !(0, json_js_2.sdIsString)(val.description)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "description" of type "FileRequestInput"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const status = val.status == void 0
        ? void 0
        : deserializeFileRequestStatusField(val.status);
    if (!(val.is_email_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_email_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_email_required" of type "FileRequestInput"',
        });
    }
    const isEmailRequired = val.is_email_required == void 0 ? void 0 : val.is_email_required;
    if (!(val.is_description_required == void 0) &&
        !(0, json_js_1.sdIsBoolean)(val.is_description_required)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting boolean for "is_description_required" of type "FileRequestInput"',
        });
    }
    const isDescriptionRequired = val.is_description_required == void 0
        ? void 0
        : val.is_description_required;
    if (!(val.expires_at == void 0) && !(0, json_js_2.sdIsString)(val.expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "expires_at" of type "FileRequestInput"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : (0, utils_js_2.deserializeDateTime)(val.expires_at);
    if (val.folder == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "folder" of type "FileRequestInput" to be defined',
        });
    }
    const folder = (0, folderMini_generated_js_2.deserializeFolderMini)(val.folder);
    if (!(val.url == void 0) && !(0, json_js_2.sdIsString)(val.url)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "url" of type "FileRequestInput"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.etag == void 0) && !(0, json_js_2.sdIsString)(val.etag)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "etag" of type "FileRequestInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const createdBy = val.created_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.created_by);
    if (val.created_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "created_at" of type "FileRequestInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.created_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "created_at" of type "FileRequestInput"',
        });
    }
    const createdAt = (0, utils_js_2.deserializeDateTime)(val.created_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : (0, userMini_generated_js_2.deserializeUserMini)(val.updated_by);
    if (val.updated_at == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "updated_at" of type "FileRequestInput" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.updated_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "updated_at" of type "FileRequestInput"',
        });
    }
    const updatedAt = (0, utils_js_2.deserializeDateTime)(val.updated_at);
    return {
        id: id,
        type: type,
        title: title,
        description: description,
        status: status,
        isEmailRequired: isEmailRequired,
        isDescriptionRequired: isDescriptionRequired,
        expiresAt: expiresAt,
        folder: folder,
        url: url,
        etag: etag,
        createdBy: createdBy,
        createdAt: createdAt,
        updatedBy: updatedBy,
        updatedAt: updatedAt,
    };
}
//# sourceMappingURL=fileRequest.generated.js.map