"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeUploadSessionTypeField = serializeUploadSessionTypeField;
exports.deserializeUploadSessionTypeField = deserializeUploadSessionTypeField;
exports.serializeUploadSessionSessionEndpointsField = serializeUploadSessionSessionEndpointsField;
exports.deserializeUploadSessionSessionEndpointsField = deserializeUploadSessionSessionEndpointsField;
exports.serializeUploadSession = serializeUploadSession;
exports.deserializeUploadSession = deserializeUploadSession;
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
function serializeUploadSessionTypeField(val) {
    return val;
}
function deserializeUploadSessionTypeField(val) {
    if (val == 'upload_session') {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize UploadSessionTypeField",
    });
}
function serializeUploadSessionSessionEndpointsField(val) {
    return {
        ['upload_part']: val.uploadPart,
        ['commit']: val.commit,
        ['abort']: val.abort,
        ['list_parts']: val.listParts,
        ['status']: val.status,
        ['log_event']: val.logEvent,
    };
}
function deserializeUploadSessionSessionEndpointsField(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "UploadSessionSessionEndpointsField"',
        });
    }
    if (!(val.upload_part == void 0) && !(0, json_js_2.sdIsString)(val.upload_part)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "upload_part" of type "UploadSessionSessionEndpointsField"',
        });
    }
    const uploadPart = val.upload_part == void 0 ? void 0 : val.upload_part;
    if (!(val.commit == void 0) && !(0, json_js_2.sdIsString)(val.commit)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "commit" of type "UploadSessionSessionEndpointsField"',
        });
    }
    const commit = val.commit == void 0 ? void 0 : val.commit;
    if (!(val.abort == void 0) && !(0, json_js_2.sdIsString)(val.abort)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "abort" of type "UploadSessionSessionEndpointsField"',
        });
    }
    const abort = val.abort == void 0 ? void 0 : val.abort;
    if (!(val.list_parts == void 0) && !(0, json_js_2.sdIsString)(val.list_parts)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "list_parts" of type "UploadSessionSessionEndpointsField"',
        });
    }
    const listParts = val.list_parts == void 0 ? void 0 : val.list_parts;
    if (!(val.status == void 0) && !(0, json_js_2.sdIsString)(val.status)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "status" of type "UploadSessionSessionEndpointsField"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    if (!(val.log_event == void 0) && !(0, json_js_2.sdIsString)(val.log_event)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "log_event" of type "UploadSessionSessionEndpointsField"',
        });
    }
    const logEvent = val.log_event == void 0 ? void 0 : val.log_event;
    return {
        uploadPart: uploadPart,
        commit: commit,
        abort: abort,
        listParts: listParts,
        status: status,
        logEvent: logEvent,
    };
}
function serializeUploadSession(val) {
    return {
        ['id']: val.id,
        ['type']: val.type == void 0 ? val.type : serializeUploadSessionTypeField(val.type),
        ['session_expires_at']: val.sessionExpiresAt == void 0
            ? val.sessionExpiresAt
            : (0, utils_js_1.serializeDateTime)(val.sessionExpiresAt),
        ['part_size']: val.partSize,
        ['total_parts']: val.totalParts,
        ['num_parts_processed']: val.numPartsProcessed,
        ['session_endpoints']: val.sessionEndpoints == void 0
            ? val.sessionEndpoints
            : serializeUploadSessionSessionEndpointsField(val.sessionEndpoints),
    };
}
function deserializeUploadSession(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "UploadSession"' });
    }
    if (!(val.id == void 0) && !(0, json_js_2.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "UploadSession"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    const type = val.type == void 0 ? void 0 : deserializeUploadSessionTypeField(val.type);
    if (!(val.session_expires_at == void 0) &&
        !(0, json_js_2.sdIsString)(val.session_expires_at)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "session_expires_at" of type "UploadSession"',
        });
    }
    const sessionExpiresAt = val.session_expires_at == void 0
        ? void 0
        : (0, utils_js_2.deserializeDateTime)(val.session_expires_at);
    if (!(val.part_size == void 0) && !(0, json_js_1.sdIsNumber)(val.part_size)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "part_size" of type "UploadSession"',
        });
    }
    const partSize = val.part_size == void 0 ? void 0 : val.part_size;
    if (!(val.total_parts == void 0) && !(0, json_js_1.sdIsNumber)(val.total_parts)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "total_parts" of type "UploadSession"',
        });
    }
    const totalParts = val.total_parts == void 0 ? void 0 : val.total_parts;
    if (!(val.num_parts_processed == void 0) &&
        !(0, json_js_1.sdIsNumber)(val.num_parts_processed)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "num_parts_processed" of type "UploadSession"',
        });
    }
    const numPartsProcessed = val.num_parts_processed == void 0 ? void 0 : val.num_parts_processed;
    const sessionEndpoints = val.session_endpoints == void 0
        ? void 0
        : deserializeUploadSessionSessionEndpointsField(val.session_endpoints);
    return {
        id: id,
        type: type,
        sessionExpiresAt: sessionExpiresAt,
        partSize: partSize,
        totalParts: totalParts,
        numPartsProcessed: numPartsProcessed,
        sessionEndpoints: sessionEndpoints,
    };
}
//# sourceMappingURL=uploadSession.generated.js.map