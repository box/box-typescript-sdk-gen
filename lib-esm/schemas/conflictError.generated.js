import { deserializeClientErrorTypeField } from './clientError.generated.js';
import { deserializeClientErrorCodeField } from './clientError.generated.js';
import { serializeClientError } from './clientError.generated.js';
import { serializeFileConflict } from './fileConflict.generated.js';
import { deserializeFileConflict } from './fileConflict.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeConflictErrorContextInfoField(val) {
    return {
        ['conflicts']: val.conflicts == void 0
            ? val.conflicts
            : val.conflicts.map(function (item) {
                return serializeFileConflict(item);
            }),
    };
}
export function deserializeConflictErrorContextInfoField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "ConflictErrorContextInfoField"',
        });
    }
    if (!(val.conflicts == void 0) && !sdIsList(val.conflicts)) {
        throw new BoxSdkError({
            message: 'Expecting array for "conflicts" of type "ConflictErrorContextInfoField"',
        });
    }
    const conflicts = val.conflicts == void 0
        ? void 0
        : sdIsList(val.conflicts)
            ? val.conflicts.map(function (itm) {
                return deserializeFileConflict(itm);
            })
            : [];
    return { conflicts: conflicts };
}
export function serializeConflictError(val) {
    const base = serializeClientError(val);
    if (!sdIsMap(base)) {
        throw new BoxSdkError({ message: 'Expecting a map for "ConflictError"' });
    }
    return { ...base, ...{} };
}
export function deserializeConflictError(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "ConflictError"' });
    }
    const type = val.type == void 0 ? void 0 : deserializeClientErrorTypeField(val.type);
    if (!(val.status == void 0) && !sdIsNumber(val.status)) {
        throw new BoxSdkError({
            message: 'Expecting number for "status" of type "ConflictError"',
        });
    }
    const status = val.status == void 0 ? void 0 : val.status;
    const code = val.code == void 0 ? void 0 : deserializeClientErrorCodeField(val.code);
    if (!(val.message == void 0) && !sdIsString(val.message)) {
        throw new BoxSdkError({
            message: 'Expecting string for "message" of type "ConflictError"',
        });
    }
    const message = val.message == void 0 ? void 0 : val.message;
    if (!(val.context_info == void 0) && !sdIsMap(val.context_info)) {
        throw new BoxSdkError({
            message: 'Expecting object for "context_info" of type "ConflictError"',
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
            message: 'Expecting string for "help_url" of type "ConflictError"',
        });
    }
    const helpUrl = val.help_url == void 0 ? void 0 : val.help_url;
    if (!(val.request_id == void 0) && !sdIsString(val.request_id)) {
        throw new BoxSdkError({
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