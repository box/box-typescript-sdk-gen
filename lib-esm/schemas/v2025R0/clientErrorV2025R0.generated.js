import { BoxSdkError } from '../../box/errors.js';
import { sdIsNumber } from '../../serialization/json.js';
import { sdIsString } from '../../serialization/json.js';
import { sdIsMap } from '../../serialization/json.js';
export function serializeClientErrorV2025R0TypeField(val) {
    return val;
}
export function deserializeClientErrorV2025R0TypeField(val) {
    if (val == 'error') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ClientErrorV2025R0TypeField",
    });
}
export function serializeClientErrorV2025R0CodeField(val) {
    return val;
}
export function deserializeClientErrorV2025R0CodeField(val) {
    if (val == 'created') {
        return val;
    }
    if (val == 'accepted') {
        return val;
    }
    if (val == 'no_content') {
        return val;
    }
    if (val == 'redirect') {
        return val;
    }
    if (val == 'not_modified') {
        return val;
    }
    if (val == 'bad_request') {
        return val;
    }
    if (val == 'unauthorized') {
        return val;
    }
    if (val == 'forbidden') {
        return val;
    }
    if (val == 'not_found') {
        return val;
    }
    if (val == 'method_not_allowed') {
        return val;
    }
    if (val == 'conflict') {
        return val;
    }
    if (val == 'precondition_failed') {
        return val;
    }
    if (val == 'too_many_requests') {
        return val;
    }
    if (val == 'internal_server_error') {
        return val;
    }
    if (val == 'unavailable') {
        return val;
    }
    if (val == 'item_name_invalid') {
        return val;
    }
    if (val == 'insufficient_scope') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize ClientErrorV2025R0CodeField",
    });
}
export function serializeClientErrorV2025R0(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeClientErrorV2025R0TypeField(val.type),
        ['status']: val.status,
        ['code']: val.code == void 0
            ? val.code
            : serializeClientErrorV2025R0CodeField(val.code),
        ['message']: val.message,
        ['context_info']: val.contextInfo == void 0
            ? val.contextInfo
            : Object.fromEntries(Object.entries(val.contextInfo).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ])),
        ['help_url']: val.helpUrl,
        ['request_id']: val.requestId,
    };
}
export function deserializeClientErrorV2025R0(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ClientErrorV2025R0"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeClientErrorV2025R0TypeField(val.type);
    if (!(val.status == void 0) && !sdIsNumber(val.status)) {
        throw new BoxSdkError({
            message: 'Expecting number for "status" of type "ClientErrorV2025R0"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    const code = val.code == void 0
        ? void 0
        : deserializeClientErrorV2025R0CodeField(val.code);
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "ClientErrorV2025R0"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.context_info == void 0) && !sdIsMap(val.context_info)) {
        throw new BoxSdkError({
            message: 'Expecting object for "context_info" of type "ClientErrorV2025R0"',
        });
    }
    const contextInfo = val.context_info == void 0
        ? void 0
        : sdIsMap(val.context_info)
            ? Object.fromEntries(Object.entries(val.context_info).map(([k, v]) => [
                k,
                (function (v) {
                    return v;
                })(v),
            ]))
            : {};
    if (!(val.help_url == void 0) && !sdIsString(val.help_url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "help_url" of type "ClientErrorV2025R0"',
        });
    }
    const helpUrl = val.help_url == void 0 ? void 0 : val.help_url;
    if (!(val.request_id == void 0) && !sdIsString(val.request_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "request_id" of type "ClientErrorV2025R0"',
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
//# sourceMappingURL=clientErrorV2025R0.generated.js.map