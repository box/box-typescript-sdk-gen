import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializePostOAuth2Revoke(val) {
    return {
        ['client_id']: val.clientId,
        ['client_secret']: val.clientSecret,
        ['token']: val.token,
    };
}
export function deserializePostOAuth2Revoke(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "PostOAuth2Revoke"',
        });
    }
    if (!(val.client_id == void 0) && !sdIsString(val.client_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "client_id" of type "PostOAuth2Revoke"',
        });
    }
    const clientId = val.client_id == void 0 ? void 0 : val.client_id;
    if (!(val.client_secret == void 0) && !sdIsString(val.client_secret)) {
        throw new BoxSdkError({
            message: 'Expecting string for "client_secret" of type "PostOAuth2Revoke"',
        });
    }
    const clientSecret = val.client_secret == void 0 ? void 0 : val.client_secret;
    if (!(val.token == void 0) && !sdIsString(val.token)) {
        throw new BoxSdkError({
            message: 'Expecting string for "token" of type "PostOAuth2Revoke"',
        });
    }
    const token = val.token == void 0 ? void 0 : val.token;
    return {
        clientId: clientId,
        clientSecret: clientSecret,
        token: token,
    };
}
//# sourceMappingURL=postOAuth2Revoke.generated.js.map