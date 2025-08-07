"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializeAccessTokenTokenTypeField = serializeAccessTokenTokenTypeField;
exports.deserializeAccessTokenTokenTypeField = deserializeAccessTokenTokenTypeField;
exports.serializeAccessTokenIssuedTokenTypeField = serializeAccessTokenIssuedTokenTypeField;
exports.deserializeAccessTokenIssuedTokenTypeField = deserializeAccessTokenIssuedTokenTypeField;
exports.serializeAccessToken = serializeAccessToken;
exports.deserializeAccessToken = deserializeAccessToken;
const fileOrFolderScope_generated_js_1 = require("./fileOrFolderScope.generated.js");
const fileOrFolderScope_generated_js_2 = require("./fileOrFolderScope.generated.js");
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
const json_js_4 = require("../serialization/json.js");
function serializeAccessTokenTokenTypeField(val) {
    return val;
}
function deserializeAccessTokenTokenTypeField(val) {
    if (val == 'bearer') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AccessTokenTokenTypeField",
    });
}
function serializeAccessTokenIssuedTokenTypeField(val) {
    return val;
}
function deserializeAccessTokenIssuedTokenTypeField(val) {
    if (val == 'urn:ietf:params:oauth:token-type:access_token') {
        return val;
    }
    if ((0, json_js_2.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize AccessTokenIssuedTokenTypeField",
    });
}
function serializeAccessToken(val) {
    return {
        ['access_token']: val.accessToken,
        ['expires_in']: val.expiresIn,
        ['token_type']: val.tokenType == void 0
            ? val.tokenType
            : serializeAccessTokenTokenTypeField(val.tokenType),
        ['restricted_to']: val.restrictedTo == void 0
            ? val.restrictedTo
            : val.restrictedTo.map(function (item) {
                return (0, fileOrFolderScope_generated_js_1.serializeFileOrFolderScope)(item);
            }),
        ['refresh_token']: val.refreshToken,
        ['issued_token_type']: val.issuedTokenType == void 0
            ? val.issuedTokenType
            : serializeAccessTokenIssuedTokenTypeField(val.issuedTokenType),
    };
}
function deserializeAccessToken(val) {
    if (!(0, json_js_4.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "AccessToken"' });
    }
    if (!(val.access_token == void 0) && !(0, json_js_2.sdIsString)(val.access_token)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "access_token" of type "AccessToken"',
        });
    }
    const accessToken = val.access_token == void 0 ? void 0 : val.access_token;
    if (!(val.expires_in == void 0) && !(0, json_js_1.sdIsNumber)(val.expires_in)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting number for "expires_in" of type "AccessToken"',
        });
    }
    const expiresIn = val.expires_in == void 0 ? void 0 : val.expires_in;
    const tokenType = val.token_type == void 0
        ? void 0
        : deserializeAccessTokenTokenTypeField(val.token_type);
    if (!(val.restricted_to == void 0) && !(0, json_js_3.sdIsList)(val.restricted_to)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting array for "restricted_to" of type "AccessToken"',
        });
    }
    const restrictedTo = val.restricted_to == void 0
        ? void 0
        : (0, json_js_3.sdIsList)(val.restricted_to)
            ? val.restricted_to.map(function (itm) {
                return (0, fileOrFolderScope_generated_js_2.deserializeFileOrFolderScope)(itm);
            })
            : [];
    if (!(val.refresh_token == void 0) && !(0, json_js_2.sdIsString)(val.refresh_token)) {
        throw new errors_js_1.BoxSdkError({
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