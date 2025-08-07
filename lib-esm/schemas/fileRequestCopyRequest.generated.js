import { deserializeFileRequestUpdateRequestStatusField } from './fileRequestUpdateRequest.generated.js';
import { deserializeDateTime } from '../internal/utils.js';
import { serializeFileRequestUpdateRequest } from './fileRequestUpdateRequest.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileRequestCopyRequestFolderTypeField(val) {
    return val;
}
export function deserializeFileRequestCopyRequestFolderTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize FileRequestCopyRequestFolderTypeField",
    });
}
export function serializeFileRequestCopyRequestFolderField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeFileRequestCopyRequestFolderTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeFileRequestCopyRequestFolderField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileRequestCopyRequestFolderField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeFileRequestCopyRequestFolderTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "FileRequestCopyRequestFolderField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "FileRequestCopyRequestFolderField"',
        });
    }
    const id = val.id;
    return { type: type, id: id };
}
export function serializeFileRequestCopyRequest(val) {
    const base = serializeFileRequestUpdateRequest(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileRequestCopyRequest"',
        });
    }
    return {
        ...base,
        ...{ ['folder']: serializeFileRequestCopyRequestFolderField(val.folder) },
    };
}
export function deserializeFileRequestCopyRequest(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileRequestCopyRequest"',
        });
    }
    if (val.folder == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "folder" of type "FileRequestCopyRequest" to be defined',
        });
    }
    const folder = deserializeFileRequestCopyRequestFolderField(val.folder);
    if (!(val.title == void 0) && !sdIsString(val.title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "title" of type "FileRequestCopyRequest"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "FileRequestCopyRequest"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const status = val.status == void 0
        ? void 0
        : deserializeFileRequestUpdateRequestStatusField(val.status);
    if (!(val.is_email_required == void 0) &&
        !sdIsBoolean(val.is_email_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_email_required" of type "FileRequestCopyRequest"',
        });
    }
    const isEmailRequired = val.is_email_required == void 0 ? void 0 : val.is_email_required;
    if (!(val.is_description_required == void 0) &&
        !sdIsBoolean(val.is_description_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_description_required" of type "FileRequestCopyRequest"',
        });
    }
    const isDescriptionRequired = val.is_description_required == void 0
        ? void 0
        : val.is_description_required;
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "FileRequestCopyRequest"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
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