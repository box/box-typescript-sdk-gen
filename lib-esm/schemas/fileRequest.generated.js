import { serializeFolderMini } from './folderMini.generated.js';
import { deserializeFolderMini } from './folderMini.generated.js';
import { serializeUserMini } from './userMini.generated.js';
import { deserializeUserMini } from './userMini.generated.js';
import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class FileRequest {
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
export function serializeFileRequestTypeField(val) {
    return val;
}
export function deserializeFileRequestTypeField(val) {
    if (val == 'file_request') {
        return val;
    }
    throw new BoxSdkError({ message: "Can't deserialize FileRequestTypeField" });
}
export function serializeFileRequestStatusField(val) {
    return val;
}
export function deserializeFileRequestStatusField(val) {
    if (val == 'active') {
        return val;
    }
    if (val == 'inactive') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileRequestStatusField",
    });
}
export function serializeFileRequest(val) {
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
            : serializeDateTime(val.expiresAt),
        ['folder']: serializeFolderMini(val.folder),
        ['url']: val.url,
        ['etag']: val.etag,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserMini(val.createdBy),
        ['created_at']: serializeDateTime(val.createdAt),
        ['updated_by']: val.updatedBy == void 0
            ? val.updatedBy
            : serializeUserMini(val.updatedBy),
        ['updated_at']: serializeDateTime(val.updatedAt),
    };
}
export function deserializeFileRequest(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "FileRequest"' });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileRequest" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileRequest"',
        });
    }
    const id = val.id;
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "FileRequest" to be defined',
        });
    }
    const type = deserializeFileRequestTypeField(val.type);
    if (!(val.title == void 0) && !sdIsString(val.title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "title" of type "FileRequest"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "FileRequest"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const status = val.status == void 0
        ? void 0
        : deserializeFileRequestStatusField(val.status);
    if (!(val.is_email_required == void 0) &&
        !sdIsBoolean(val.is_email_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_email_required" of type "FileRequest"',
        });
    }
    const isEmailRequired = val.is_email_required == void 0 ? void 0 : val.is_email_required;
    if (!(val.is_description_required == void 0) &&
        !sdIsBoolean(val.is_description_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_description_required" of type "FileRequest"',
        });
    }
    const isDescriptionRequired = val.is_description_required == void 0
        ? void 0
        : val.is_description_required;
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "FileRequest"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
    if (val.folder == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "folder" of type "FileRequest" to be defined',
        });
    }
    const folder = deserializeFolderMini(val.folder);
    if (!(val.url == void 0) && !sdIsString(val.url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "url" of type "FileRequest"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "FileRequest"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (val.created_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "created_at" of type "FileRequest" to be defined',
        });
    }
    if (!sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "FileRequest"',
        });
    }
    const createdAt = deserializeDateTime(val.created_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : deserializeUserMini(val.updated_by);
    if (val.updated_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "updated_at" of type "FileRequest" to be defined',
        });
    }
    if (!sdIsString(val.updated_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "updated_at" of type "FileRequest"',
        });
    }
    const updatedAt = deserializeDateTime(val.updated_at);
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
export function serializeFileRequestInput(val) {
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
            : serializeDateTime(val.expiresAt),
        ['folder']: serializeFolderMini(val.folder),
        ['url']: val.url,
        ['etag']: val.etag,
        ['created_by']: val.createdBy == void 0
            ? val.createdBy
            : serializeUserMini(val.createdBy),
        ['created_at']: serializeDateTime(val.createdAt),
        ['updated_by']: val.updatedBy == void 0
            ? val.updatedBy
            : serializeUserMini(val.updatedBy),
        ['updated_at']: serializeDateTime(val.updatedAt),
    };
}
export function deserializeFileRequestInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileRequestInput"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileRequestInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileRequestInput"',
        });
    }
    const id = val.id;
    const type = val.type == void 0 ? void 0 : deserializeFileRequestTypeField(val.type);
    if (!(val.title == void 0) && !sdIsString(val.title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "title" of type "FileRequestInput"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "FileRequestInput"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const status = val.status == void 0
        ? void 0
        : deserializeFileRequestStatusField(val.status);
    if (!(val.is_email_required == void 0) &&
        !sdIsBoolean(val.is_email_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_email_required" of type "FileRequestInput"',
        });
    }
    const isEmailRequired = val.is_email_required == void 0 ? void 0 : val.is_email_required;
    if (!(val.is_description_required == void 0) &&
        !sdIsBoolean(val.is_description_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_description_required" of type "FileRequestInput"',
        });
    }
    const isDescriptionRequired = val.is_description_required == void 0
        ? void 0
        : val.is_description_required;
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "FileRequestInput"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
    if (val.folder == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "folder" of type "FileRequestInput" to be defined',
        });
    }
    const folder = deserializeFolderMini(val.folder);
    if (!(val.url == void 0) && !sdIsString(val.url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "url" of type "FileRequestInput"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.etag == void 0) && !sdIsString(val.etag)) {
        throw new BoxSdkError({
            message: 'Expecting string for "etag" of type "FileRequestInput"',
        });
    }
    const etag = val.etag == void 0 ? void 0 : val.etag;
    const createdBy = val.created_by == void 0 ? void 0 : deserializeUserMini(val.created_by);
    if (val.created_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "created_at" of type "FileRequestInput" to be defined',
        });
    }
    if (!sdIsString(val.created_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "created_at" of type "FileRequestInput"',
        });
    }
    const createdAt = deserializeDateTime(val.created_at);
    const updatedBy = val.updated_by == void 0 ? void 0 : deserializeUserMini(val.updated_by);
    if (val.updated_at == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "updated_at" of type "FileRequestInput" to be defined',
        });
    }
    if (!sdIsString(val.updated_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "updated_at" of type "FileRequestInput"',
        });
    }
    const updatedAt = deserializeDateTime(val.updated_at);
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