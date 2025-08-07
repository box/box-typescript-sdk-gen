import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeFileRequestUpdateRequestStatusField(val) {
    return val;
}
export function deserializeFileRequestUpdateRequestStatusField(val) {
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
        message: "Can't deserialize FileRequestUpdateRequestStatusField",
    });
}
export function serializeFileRequestUpdateRequest(val) {
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
            : serializeDateTime(val.expiresAt),
    };
}
export function deserializeFileRequestUpdateRequest(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "FileRequestUpdateRequest"',
        });
    }
    if (!(val.title == void 0) && !sdIsString(val.title)) {
        throw new BoxSdkError({
            message: 'Expecting string for "title" of type "FileRequestUpdateRequest"',
        });
    }
    const title = val.title == void 0 ? void 0 : val.title;
    if (!(val.description == void 0) && !sdIsString(val.description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "description" of type "FileRequestUpdateRequest"',
        });
    }
    const description = val.description == void 0 ? void 0 : val.description;
    const status = val.status == void 0
        ? void 0
        : deserializeFileRequestUpdateRequestStatusField(val.status);
    if (!(val.is_email_required == void 0) &&
        !sdIsBoolean(val.is_email_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_email_required" of type "FileRequestUpdateRequest"',
        });
    }
    const isEmailRequired = val.is_email_required == void 0 ? void 0 : val.is_email_required;
    if (!(val.is_description_required == void 0) &&
        !sdIsBoolean(val.is_description_required)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_description_required" of type "FileRequestUpdateRequest"',
        });
    }
    const isDescriptionRequired = val.is_description_required == void 0
        ? void 0
        : val.is_description_required;
    if (!(val.expires_at == void 0) && !sdIsString(val.expires_at)) {
        throw new BoxSdkError({
            message: 'Expecting string for "expires_at" of type "FileRequestUpdateRequest"',
        });
    }
    const expiresAt = val.expires_at == void 0 ? void 0 : deserializeDateTime(val.expires_at);
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