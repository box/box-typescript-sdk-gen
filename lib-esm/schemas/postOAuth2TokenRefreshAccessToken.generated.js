import { BoxSdkError } from '../box/errors.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class PostOAuth2TokenRefreshAccessToken {
    constructor(fields) {
        /**
         * The type of request being made, in this case a refresh request. */
        this.grantType = 'refresh_token';
        if (fields.grantType !== undefined) {
            this.grantType = fields.grantType;
        }
        if (fields.clientId !== undefined) {
            this.clientId = fields.clientId;
        }
        if (fields.clientSecret !== undefined) {
            this.clientSecret = fields.clientSecret;
        }
        if (fields.refreshToken !== undefined) {
            this.refreshToken = fields.refreshToken;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val) {
    return val;
}
export function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val) {
    if (val == 'refresh_token') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize PostOAuth2TokenRefreshAccessTokenGrantTypeField",
    });
}
export function serializePostOAuth2TokenRefreshAccessToken(val) {
    return {
        ['grant_type']: serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grantType),
        ['client_id']: val.clientId,
        ['client_secret']: val.clientSecret,
        ['refresh_token']: val.refreshToken,
    };
}
export function deserializePostOAuth2TokenRefreshAccessToken(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "PostOAuth2TokenRefreshAccessToken"',
        });
    }
    if (val.grant_type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "grant_type" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
        });
    }
    const grantType = deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grant_type);
    if (val.client_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "client_id" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
        });
    }
    if (!sdIsString(val.client_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "client_id" of type "PostOAuth2TokenRefreshAccessToken"',
        });
    }
    const clientId = val.client_id;
    if (val.client_secret == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "client_secret" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
        });
    }
    if (!sdIsString(val.client_secret)) {
        throw new BoxSdkError({
            message: 'Expecting string for "client_secret" of type "PostOAuth2TokenRefreshAccessToken"',
        });
    }
    const clientSecret = val.client_secret;
    if (val.refresh_token == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "refresh_token" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
        });
    }
    if (!sdIsString(val.refresh_token)) {
        throw new BoxSdkError({
            message: 'Expecting string for "refresh_token" of type "PostOAuth2TokenRefreshAccessToken"',
        });
    }
    const refreshToken = val.refresh_token;
    return {
        grantType: grantType,
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
    };
}
export function serializePostOAuth2TokenRefreshAccessTokenInput(val) {
    return {
        ['grantType']: val.grantType == void 0
            ? val.grantType
            : serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grantType),
        ['client_id']: val.clientId,
        ['client_secret']: val.clientSecret,
        ['refresh_token']: val.refreshToken,
    };
}
export function deserializePostOAuth2TokenRefreshAccessTokenInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "PostOAuth2TokenRefreshAccessTokenInput"',
        });
    }
    const grantType = val.grantType == void 0
        ? void 0
        : deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grantType);
    if (val.client_id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "client_id" of type "PostOAuth2TokenRefreshAccessTokenInput" to be defined',
        });
    }
    if (!sdIsString(val.client_id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "client_id" of type "PostOAuth2TokenRefreshAccessTokenInput"',
        });
    }
    const clientId = val.client_id;
    if (val.client_secret == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "client_secret" of type "PostOAuth2TokenRefreshAccessTokenInput" to be defined',
        });
    }
    if (!sdIsString(val.client_secret)) {
        throw new BoxSdkError({
            message: 'Expecting string for "client_secret" of type "PostOAuth2TokenRefreshAccessTokenInput"',
        });
    }
    const clientSecret = val.client_secret;
    if (val.refresh_token == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "refresh_token" of type "PostOAuth2TokenRefreshAccessTokenInput" to be defined',
        });
    }
    if (!sdIsString(val.refresh_token)) {
        throw new BoxSdkError({
            message: 'Expecting string for "refresh_token" of type "PostOAuth2TokenRefreshAccessTokenInput"',
        });
    }
    const refreshToken = val.refresh_token;
    return {
        grantType: grantType,
        clientId: clientId,
        clientSecret: clientSecret,
        refreshToken: refreshToken,
    };
}
//# sourceMappingURL=postOAuth2TokenRefreshAccessToken.generated.js.map