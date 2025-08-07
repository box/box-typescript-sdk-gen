import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeOAuth2Error(val) {
    return { ['error']: val.error, ['error_description']: val.errorDescription };
}
export function deserializeOAuth2Error(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "OAuth2Error"' });
    }
    if (!(val.error == void 0) && !sdIsString(val.error)) {
        throw new BoxSdkError({
            message: 'Expecting string for "error" of type "OAuth2Error"',
        });
    }
    const error = val.error == void 0 ? void 0 : val.error;
    if (!(val.error_description == void 0) &&
        !sdIsString(val.error_description)) {
        throw new BoxSdkError({
            message: 'Expecting string for "error_description" of type "OAuth2Error"',
        });
    }
    const errorDescription = val.error_description == void 0 ? void 0 : val.error_description;
    return {
        error: error,
        errorDescription: errorDescription,
    };
}
//# sourceMappingURL=oAuth2Error.generated.js.map