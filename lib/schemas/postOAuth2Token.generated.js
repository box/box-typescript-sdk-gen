"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializePostOAuth2TokenGrantTypeField = serializePostOAuth2TokenGrantTypeField;
exports.deserializePostOAuth2TokenGrantTypeField = deserializePostOAuth2TokenGrantTypeField;
exports.serializePostOAuth2TokenSubjectTokenTypeField = serializePostOAuth2TokenSubjectTokenTypeField;
exports.deserializePostOAuth2TokenSubjectTokenTypeField = deserializePostOAuth2TokenSubjectTokenTypeField;
exports.serializePostOAuth2TokenActorTokenTypeField = serializePostOAuth2TokenActorTokenTypeField;
exports.deserializePostOAuth2TokenActorTokenTypeField = deserializePostOAuth2TokenActorTokenTypeField;
exports.serializePostOAuth2TokenBoxSubjectTypeField = serializePostOAuth2TokenBoxSubjectTypeField;
exports.deserializePostOAuth2TokenBoxSubjectTypeField = deserializePostOAuth2TokenBoxSubjectTypeField;
exports.serializePostOAuth2Token = serializePostOAuth2Token;
exports.deserializePostOAuth2Token = deserializePostOAuth2Token;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializePostOAuth2TokenGrantTypeField(val) {
    return val;
}
function deserializePostOAuth2TokenGrantTypeField(val) {
    if (val == 'authorization_code') {
        return val;
    }
    if (val == 'refresh_token') {
        return val;
    }
    if (val == 'client_credentials') {
        return val;
    }
    if (val == 'urn:ietf:params:oauth:grant-type:jwt-bearer') {
        return val;
    }
    if (val == 'urn:ietf:params:oauth:grant-type:token-exchange') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize PostOAuth2TokenGrantTypeField",
    });
}
function serializePostOAuth2TokenSubjectTokenTypeField(val) {
    return val;
}
function deserializePostOAuth2TokenSubjectTokenTypeField(val) {
    if (val == 'urn:ietf:params:oauth:token-type:access_token') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize PostOAuth2TokenSubjectTokenTypeField",
    });
}
function serializePostOAuth2TokenActorTokenTypeField(val) {
    return val;
}
function deserializePostOAuth2TokenActorTokenTypeField(val) {
    if (val == 'urn:ietf:params:oauth:token-type:id_token') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize PostOAuth2TokenActorTokenTypeField",
    });
}
function serializePostOAuth2TokenBoxSubjectTypeField(val) {
    return val;
}
function deserializePostOAuth2TokenBoxSubjectTypeField(val) {
    if (val == 'enterprise') {
        return val;
    }
    if (val == 'user') {
        return val;
    }
    if ((0, json_js_1.sdIsString)(val)) {
        return val;
    }
    throw new errors_js_1.BoxSdkError({
        message: "Can't deserialize PostOAuth2TokenBoxSubjectTypeField",
    });
}
function serializePostOAuth2Token(val) {
    return {
        ['grant_type']: serializePostOAuth2TokenGrantTypeField(val.grantType),
        ['client_id']: val.clientId,
        ['client_secret']: val.clientSecret,
        ['code']: val.code,
        ['refresh_token']: val.refreshToken,
        ['assertion']: val.assertion,
        ['subject_token']: val.subjectToken,
        ['subject_token_type']: val.subjectTokenType == void 0
            ? val.subjectTokenType
            : serializePostOAuth2TokenSubjectTokenTypeField(val.subjectTokenType),
        ['actor_token']: val.actorToken,
        ['actor_token_type']: val.actorTokenType == void 0
            ? val.actorTokenType
            : serializePostOAuth2TokenActorTokenTypeField(val.actorTokenType),
        ['scope']: val.scope,
        ['resource']: val.resource,
        ['box_subject_type']: val.boxSubjectType == void 0
            ? val.boxSubjectType
            : serializePostOAuth2TokenBoxSubjectTypeField(val.boxSubjectType),
        ['box_subject_id']: val.boxSubjectId,
        ['box_shared_link']: val.boxSharedLink,
    };
}
function deserializePostOAuth2Token(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "PostOAuth2Token"' });
    }
    if (val.grant_type == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "grant_type" of type "PostOAuth2Token" to be defined',
        });
    }
    const grantType = deserializePostOAuth2TokenGrantTypeField(val.grant_type);
    if (!(val.client_id == void 0) && !(0, json_js_1.sdIsString)(val.client_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "client_id" of type "PostOAuth2Token"',
        });
    }
    const clientId = val.client_id == void 0 ? void 0 : val.client_id;
    if (!(val.client_secret == void 0) && !(0, json_js_1.sdIsString)(val.client_secret)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "client_secret" of type "PostOAuth2Token"',
        });
    }
    const clientSecret = val.client_secret == void 0 ? void 0 : val.client_secret;
    if (!(val.code == void 0) && !(0, json_js_1.sdIsString)(val.code)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "code" of type "PostOAuth2Token"',
        });
    }
    const code = val.code == void 0 ? void 0 : val.code;
    if (!(val.refresh_token == void 0) && !(0, json_js_1.sdIsString)(val.refresh_token)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "refresh_token" of type "PostOAuth2Token"',
        });
    }
    const refreshToken = val.refresh_token == void 0 ? void 0 : val.refresh_token;
    if (!(val.assertion == void 0) && !(0, json_js_1.sdIsString)(val.assertion)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "assertion" of type "PostOAuth2Token"',
        });
    }
    const assertion = val.assertion == void 0 ? void 0 : val.assertion;
    if (!(val.subject_token == void 0) && !(0, json_js_1.sdIsString)(val.subject_token)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "subject_token" of type "PostOAuth2Token"',
        });
    }
    const subjectToken = val.subject_token == void 0 ? void 0 : val.subject_token;
    const subjectTokenType = val.subject_token_type == void 0
        ? void 0
        : deserializePostOAuth2TokenSubjectTokenTypeField(val.subject_token_type);
    if (!(val.actor_token == void 0) && !(0, json_js_1.sdIsString)(val.actor_token)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "actor_token" of type "PostOAuth2Token"',
        });
    }
    const actorToken = val.actor_token == void 0 ? void 0 : val.actor_token;
    const actorTokenType = val.actor_token_type == void 0
        ? void 0
        : deserializePostOAuth2TokenActorTokenTypeField(val.actor_token_type);
    if (!(val.scope == void 0) && !(0, json_js_1.sdIsString)(val.scope)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "scope" of type "PostOAuth2Token"',
        });
    }
    const scope = val.scope == void 0 ? void 0 : val.scope;
    if (!(val.resource == void 0) && !(0, json_js_1.sdIsString)(val.resource)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "resource" of type "PostOAuth2Token"',
        });
    }
    const resource = val.resource == void 0 ? void 0 : val.resource;
    const boxSubjectType = val.box_subject_type == void 0
        ? void 0
        : deserializePostOAuth2TokenBoxSubjectTypeField(val.box_subject_type);
    if (!(val.box_subject_id == void 0) && !(0, json_js_1.sdIsString)(val.box_subject_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "box_subject_id" of type "PostOAuth2Token"',
        });
    }
    const boxSubjectId = val.box_subject_id == void 0 ? void 0 : val.box_subject_id;
    if (!(val.box_shared_link == void 0) && !(0, json_js_1.sdIsString)(val.box_shared_link)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "box_shared_link" of type "PostOAuth2Token"',
        });
    }
    const boxSharedLink = val.box_shared_link == void 0 ? void 0 : val.box_shared_link;
    return {
        grantType: grantType,
        clientId: clientId,
        clientSecret: clientSecret,
        code: code,
        refreshToken: refreshToken,
        assertion: assertion,
        subjectToken: subjectToken,
        subjectTokenType: subjectTokenType,
        actorToken: actorToken,
        actorTokenType: actorTokenType,
        scope: scope,
        resource: resource,
        boxSubjectType: boxSubjectType,
        boxSubjectId: boxSubjectId,
        boxSharedLink: boxSharedLink,
    };
}
//# sourceMappingURL=postOAuth2Token.generated.js.map