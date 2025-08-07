import { serializeFileOrFolderScope } from './fileOrFolderScope.generated.js';
import { deserializeFileOrFolderScope } from './fileOrFolderScope.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export function serializeAccessTokenTokenTypeField(val) {
    return val;
}
export function deserializeAccessTokenTokenTypeField(val) {
    if (val == 'bearer') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AccessTokenTokenTypeField",
    });
}
export function serializeAccessTokenIssuedTokenTypeField(val) {
    return val;
}
export function deserializeAccessTokenIssuedTokenTypeField(val) {
    if (val == 'urn:ietf:params:oauth:token-type:access_token') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize AccessTokenIssuedTokenTypeField",
    });
}
export function serializeAccessToken(val) {
    return {
        ['access_token']: val.accessToken,
        ['expires_in']: val.expiresIn,
        ['token_type']: val.tokenType == void 0
            ? val.tokenType
            : serializeAccessTokenTokenTypeField(val.tokenType),
        ['restricted_to']: val.restrictedTo == void 0
            ? val.restrictedTo
            : val.restrictedTo.map(function (item) {
                return serializeFileOrFolderScope(item);
            }),
        ['refresh_token']: val.refreshToken,
        ['issued_token_type']: val.issuedTokenType == void 0
            ? val.issuedTokenType
            : serializeAccessTokenIssuedTokenTypeField(val.issuedTokenType),
    };
}
export function deserializeAccessToken(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({ message: 'Expecting a map for "AccessToken"' });
    }
    if (!(val.access_token == void 0) && !sdIsString(val.access_token)) {
        throw new BoxSdkError({
            message: 'Expecting string for "access_token" of type "AccessToken"',
        });
    }
    const accessToken = val.access_token == void 0 ? void 0 : val.access_token;
    if (!(val.expires_in == void 0) && !sdIsNumber(val.expires_in)) {
        throw new BoxSdkError({
            message: 'Expecting number for "expires_in" of type "AccessToken"',
        });
    }
    const expiresIn = val.expires_in == void 0 ? void 0 : val.expires_in;
    const tokenType = val.token_type == void 0
        ? void 0
        : deserializeAccessTokenTokenTypeField(val.token_type);
    if (!(val.restricted_to == void 0) && !sdIsList(val.restricted_to)) {
        throw new BoxSdkError({
            message: 'Expecting array for "restricted_to" of type "AccessToken"',
        });
    }
    const restrictedTo = val.restricted_to == void 0
        ? void 0
        : sdIsList(val.restricted_to)
            ? val.restricted_to.map(function (itm) {
                return deserializeFileOrFolderScope(itm);
            })
            : [];
    if (!(val.refresh_token == void 0) && !sdIsString(val.refresh_token)) {
        throw new BoxSdkError({
            message: 'Expecting string for "refresh_token" of type "AccessToken"',
        });
    }
    const refreshToken = val.refresh_token == void 0 ? void 0 : val.refresh_token;
    const issuedTokenType = val.issued_token_type == void 0
        ? void 0
        : deserializeAccessTokenIssuedTokenTypeField(val.issued_token_type);
    return {
        accessToken: accessToken,
        expiresIn: expiresIn,
        tokenType: tokenType,
        restrictedTo: restrictedTo,
        refreshToken: refreshToken,
        issuedTokenType: issuedTokenType,
    };
}
//# sourceMappingURL=accessToken.generated.js.map