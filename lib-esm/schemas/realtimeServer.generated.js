import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeRealtimeServer(val) {
    return {
        ['type']: val.type,
        ['url']: val.url,
        ['ttl']: val.ttl,
        ['max_retries']: val.maxRetries,
        ['retry_timeout']: val.retryTimeout,
    };
}
export function deserializeRealtimeServer(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "RealtimeServer"' });
    }
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "RealtimeServer"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    if (!(val.url == void 0) && !sdIsString(val.url)) {
        throw new BoxSdkError({
            message: 'Expecting string for "url" of type "RealtimeServer"',
        });
    }
    const url = val.url == void 0 ? void 0 : val.url;
    if (!(val.ttl == void 0) && !sdIsString(val.ttl)) {
        throw new BoxSdkError({
            message: 'Expecting string for "ttl" of type "RealtimeServer"',
        });
    }
    const ttl = val.ttl == void 0 ? void 0 : val.ttl;
    if (!(val.max_retries == void 0) && !sdIsString(val.max_retries)) {
        throw new BoxSdkError({
            message: 'Expecting string for "max_retries" of type "RealtimeServer"',
        });
    }
    const maxRetries = val.max_retries == void 0 ? void 0 : val.max_retries;
    if (!(val.retry_timeout == void 0) && !sdIsNumber(val.retry_timeout)) {
        throw new BoxSdkError({
            message: 'Expecting number for "retry_timeout" of type "RealtimeServer"',
        });
    }
    const retryTimeout = val.retry_timeout == void 0 ? void 0 : val.retry_timeout;
    return {
        type: type,
        url: url,
        ttl: ttl,
        maxRetries: maxRetries,
        retryTimeout: retryTimeout,
    };
}
//# sourceMappingURL=realtimeServer.generated.js.map