"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.serializePostOAuth2Revoke = serializePostOAuth2Revoke;
exports.deserializePostOAuth2Revoke = deserializePostOAuth2Revoke;
const errors_js_1 = require("../box/errors.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
function serializePostOAuth2Revoke(val) {
    return {
        ['client_id']: val.clientId,
        ['client_secret']: val.clientSecret,
        ['token']: val.token,
    };
}
function deserializePostOAuth2Revoke(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "PostOAuth2Revoke"',
        });
    }
    if (!(val.client_id == void 0) && !(0, json_js_1.sdIsString)(val.client_id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "client_id" of type "PostOAuth2Revoke"',
        });
    }
    const clientId = val.client_id == void 0 ? void 0 : val.client_id;
    if (!(val.client_secret == void 0) && !(0, json_js_1.sdIsString)(val.client_secret)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "client_secret" of type "PostOAuth2Revoke"',
        });
    }
    const clientSecret = val.client_secret == void 0 ? void 0 : val.client_secret;
    if (!(val.token == void 0) && !(0, json_js_1.sdIsString)(val.token)) {
        throw new errors_js_1.BoxSdkError({
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