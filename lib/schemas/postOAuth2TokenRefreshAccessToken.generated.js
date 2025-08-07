"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PostOAuth2TokenRefreshAccessToken = void 0;
exports.serializePostOAuth2TokenRefreshAccessTokenGrantTypeField = serializePostOAuth2TokenRefreshAccessTokenGrantTypeField;
exports.deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField = deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField;
exports.serializePostOAuth2TokenRefreshAccessToken = serializePostOAuth2TokenRefreshAccessToken;
exports.deserializePostOAuth2TokenRefreshAccessToken = deserializePostOAuth2TokenRefreshAccessToken;
exports.serializePostOAuth2TokenRefreshAccessTokenInput = serializePostOAuth2TokenRefreshAccessTokenInput;
exports.deserializePostOAuth2TokenRefreshAccessTokenInput = deserializePostOAuth2TokenRefreshAccessTokenInput;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class PostOAuth2TokenRefreshAccessToken {
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
exports.PostOAuth2TokenRefreshAccessToken = PostOAuth2TokenRefreshAccessToken;
function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val) {
    return val;
}
function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val) {
    if (val == 'refresh_token') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize PostOAuth2TokenRefreshAccessTokenGrantTypeField",
    });
}
function serializePostOAuth2TokenRefreshAccessToken(val) {
    return {
        ['grant_type']: serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grantType),
        ['client_id']: val.clientId,
        ['client_secret']: val.clientSecret,
        ['refresh_token']: val.refreshToken,
    };
}
function deserializePostOAuth2TokenRefreshAccessToken(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "PostOAuth2TokenRefreshAccessToken"',
        });
    }
    if (val.grant_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "grant_type" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
        });
    }
    const grantType = deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grant_type);
    if (val.client_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "client_id" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.client_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "client_id" of type "PostOAuth2TokenRefreshAccessToken"',
        });
    }
    const clientId = val.client_id;
    if (val.client_secret == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "client_secret" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.client_secret)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "client_secret" of type "PostOAuth2TokenRefreshAccessToken"',
        });
    }
    const clientSecret = val.client_secret;
    if (val.refresh_token == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "refresh_token" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.refresh_token)) {
        throw new errors_js_1.BoxSdkError({
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
function serializePostOAuth2TokenRefreshAccessTokenInput(val) {
    return {
        ['grantType']: val.grantType == void 0
            ? val.grantType
            : serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grantType),
        ['client_id']: val.clientId,
        ['client_secret']: val.clientSecret,
        ['refresh_token']: val.refreshToken,
    };
}
function deserializePostOAuth2TokenRefreshAccessTokenInput(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "PostOAuth2TokenRefreshAccessTokenInput"',
        });
    }
    const grantType = val.grantType == void 0
        ? void 0
        : deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grantType);
    if (val.client_id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "client_id" of type "PostOAuth2TokenRefreshAccessTokenInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.client_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "client_id" of type "PostOAuth2TokenRefreshAccessTokenInput"',
        });
    }
    const clientId = val.client_id;
    if (val.client_secret == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "client_secret" of type "PostOAuth2TokenRefreshAccessTokenInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.client_secret)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "client_secret" of type "PostOAuth2TokenRefreshAccessTokenInput"',
        });
    }
    const clientSecret = val.client_secret;
    if (val.refresh_token == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "refresh_token" of type "PostOAuth2TokenRefreshAccessTokenInput" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.refresh_token)) {
        throw new errors_js_1.BoxSdkError({
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