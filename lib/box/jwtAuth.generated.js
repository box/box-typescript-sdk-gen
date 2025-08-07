"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BoxJwtAuth = exports.JwtConfig = void 0;
exports.serializeJwtConfigAppSettingsAppAuth = serializeJwtConfigAppSettingsAppAuth;
exports.deserializeJwtConfigAppSettingsAppAuth = deserializeJwtConfigAppSettingsAppAuth;
exports.serializeJwtConfigAppSettings = serializeJwtConfigAppSettings;
exports.deserializeJwtConfigAppSettings = deserializeJwtConfigAppSettings;
exports.serializeJwtConfigFile = serializeJwtConfigFile;
exports.deserializeJwtConfigFile = deserializeJwtConfigFile;
const network_generated_js_1 = require("../networking/network.generated.js");
const tokenStorage_generated_js_1 = require("./tokenStorage.generated.js");
const json_js_1 = require("../serialization/json.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const utils_js_3 = require("../internal/utils.js");
const utils_js_4 = require("../internal/utils.js");
const utils_js_5 = require("../internal/utils.js");
const utils_js_6 = require("../internal/utils.js");
const authorization_generated_js_1 = require("../managers/authorization.generated.js");
const errors_js_1 = require("./errors.js");
const json_js_2 = require("../serialization/json.js");
const json_js_3 = require("../serialization/json.js");
class JwtConfig {
    constructor(fields) {
        this.algorithm = 'RS256';
        this.tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({});
        this.privateKeyDecryptor = new utils_js_6.DefaultPrivateKeyDecryptor({});
        if (fields.clientId !== undefined) {
            this.clientId = fields.clientId;
        }
        if (fields.clientSecret !== undefined) {
            this.clientSecret = fields.clientSecret;
        }
        if (fields.jwtKeyId !== undefined) {
            this.jwtKeyId = fields.jwtKeyId;
        }
        if (fields.privateKey !== undefined) {
            this.privateKey = fields.privateKey;
        }
        if (fields.privateKeyPassphrase !== undefined) {
            this.privateKeyPassphrase = fields.privateKeyPassphrase;
        }
        if (fields.enterpriseId !== undefined) {
            this.enterpriseId = fields.enterpriseId;
        }
        if (fields.userId !== undefined) {
            this.userId = fields.userId;
        }
        if (fields.algorithm !== undefined) {
            this.algorithm = fields.algorithm;
        }
        if (fields.tokenStorage !== undefined) {
            this.tokenStorage = fields.tokenStorage;
        }
        if (fields.privateKeyDecryptor !== undefined) {
            this.privateKeyDecryptor = fields.privateKeyDecryptor;
        }
    }
    /**
     * Create an auth instance as defined by a string content of JSON file downloaded from the Box Developer Console.
     * See https://developer.box.com/en/guides/authentication/jwt/ for more information.
     * @param {string} configJsonString String content of JSON file containing the configuration.
     * @param {TokenStorage} tokenStorage Object responsible for storing token. If no custom implementation provided, the token will be stored in memory
     * @param {PrivateKeyDecryptor} privateKeyDecryptor Object responsible for decrypting private key for jwt auth. If no custom implementation provided, the DefaultPrivateKeyDecryptor will be used.
     * @returns {JwtConfig}
     */
    static fromConfigJsonString(configJsonString, tokenStorage, privateKeyDecryptor) {
        const configJson = Object.assign(Object.assign({}, deserializeJwtConfigFile((0, json_js_1.jsonToSerializedData)(configJsonString))), { rawData: (0, json_js_1.jsonToSerializedData)(configJsonString) });
        const tokenStorageToUse = tokenStorage == void 0 ? new tokenStorage_generated_js_1.InMemoryTokenStorage({}) : tokenStorage;
        const privateKeyDecryptorToUse = privateKeyDecryptor == void 0
            ? new utils_js_6.DefaultPrivateKeyDecryptor({})
            : privateKeyDecryptor;
        const newConfig = new JwtConfig({
            clientId: configJson.boxAppSettings.clientId,
            clientSecret: configJson.boxAppSettings.clientSecret,
            enterpriseId: configJson.enterpriseId,
            userId: configJson.userId,
            jwtKeyId: configJson.boxAppSettings.appAuth.publicKeyId,
            privateKey: configJson.boxAppSettings.appAuth.privateKey,
            privateKeyPassphrase: configJson.boxAppSettings.appAuth.passphrase,
            tokenStorage: tokenStorageToUse,
            privateKeyDecryptor: privateKeyDecryptorToUse,
        });
        return newConfig;
    }
    /**
     * Create an auth instance as defined by a JSON file downloaded from the Box Developer Console.
     * See https://developer.box.com/en/guides/authentication/jwt/ for more information.
     * @param {string} configFilePath Path to the JSON file containing the configuration.
     * @param {TokenStorage} tokenStorage Object responsible for storing token. If no custom implementation provided, the token will be stored in memory.
     * @param {PrivateKeyDecryptor} privateKeyDecryptor Object responsible for decrypting private key for jwt auth. If no custom implementation provided, the DefaultPrivateKeyDecryptor will be used.
     * @returns {JwtConfig}
     */
    static fromConfigFile(configFilePath, tokenStorage, privateKeyDecryptor) {
        const configJsonString = (0, utils_js_2.readTextFromFile)(configFilePath);
        return JwtConfig.fromConfigJsonString(configJsonString, tokenStorage, privateKeyDecryptor);
    }
}
exports.JwtConfig = JwtConfig;
class BoxJwtAuth {
    constructor(fields) {
        if (fields.config !== undefined) {
            this.config = fields.config;
        }
        this.tokenStorage = this.config.tokenStorage;
        this.subjectId = !(this.config.enterpriseId == void 0)
            ? this.config.enterpriseId
            : this.config.userId;
        this.subjectType = !(this.config.enterpriseId == void 0)
            ? 'enterprise'
            : 'user';
    }
    /**
     * Get new access token using JWT auth.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    refreshToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            if ((0, utils_js_3.isBrowser)()) {
                throw new errors_js_1.BoxSdkError({
                    message: 'JWT auth is not supported in browser environment.',
                });
            }
            const alg = !(this.config.algorithm == void 0)
                ? this.config.algorithm
                : 'RS256';
            const claims = {
                ['exp']: (0, utils_js_4.getEpochTimeInSeconds)() + 30,
                ['box_sub_type']: this.subjectType,
            };
            const jwtOptions = {
                algorithm: alg,
                audience: 'https://api.box.com/oauth2/token',
                subject: this.subjectId,
                issuer: this.config.clientId,
                jwtid: (0, utils_js_1.getUuid)(),
                keyid: this.config.jwtKeyId,
                privateKeyDecryptor: this.config.privateKeyDecryptor,
            };
            const jwtKey = {
                key: this.config.privateKey,
                passphrase: this.config.privateKeyPassphrase,
            };
            const assertion = yield (0, utils_js_5.createJwtAssertion)(claims, jwtKey, jwtOptions);
            const authManager = new authorization_generated_js_1.AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new network_generated_js_1.NetworkSession({}),
            });
            const token = yield authManager.requestAccessToken({
                grantType: 'urn:ietf:params:oauth:grant-type:jwt-bearer',
                assertion: assertion,
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
            });
            yield this.tokenStorage.store(token);
            return token;
        });
    }
    /**
     * Get the current access token. If the current access token is expired or not found, this method will attempt to refresh the token.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    retrieveToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldToken = yield this.tokenStorage.get();
            if (oldToken == void 0) {
                const newToken = yield this.refreshToken(networkSession);
                return newToken;
            }
            return oldToken;
        });
    }
    /**
     * @param {NetworkSession} networkSession
     * @returns {Promise<string>}
     */
    retrieveAuthorizationHeader(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.retrieveToken(networkSession);
            return ''.concat('Bearer ', token.accessToken);
        });
    }
    /**
     * Create a new BoxJWTAuth instance that uses the provided user ID as the subject of the JWT assertion.
     * May be one of this application's created App User. Depending on the configured User Access Level, may also be any other App User or Managed User in the enterprise.
     * <https://developer.box.com/en/guides/applications/>
     * <https://developer.box.com/en/guides/authentication/select/>
     * @param {string} userId The id of the user to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxJWTAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxJwtAuth}
     */
    withUserSubject(userId, tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({})) {
        const newConfig = new JwtConfig({
            clientId: this.config.clientId,
            clientSecret: this.config.clientSecret,
            enterpriseId: void 0,
            userId: userId,
            jwtKeyId: this.config.jwtKeyId,
            privateKey: this.config.privateKey,
            privateKeyPassphrase: this.config.privateKeyPassphrase,
            tokenStorage: tokenStorage,
        });
        const newAuth = new BoxJwtAuth({ config: newConfig });
        return newAuth;
    }
    /**
     * Create a new BoxJWTAuth instance that uses the provided enterprise ID as the subject of the JWT assertion.
     * @param {string} enterpriseId The id of the enterprise to authenticate
     * @param {TokenStorage} tokenStorage Object responsible for storing token in newly created BoxJWTAuth. If no custom implementation provided, the token will be stored in memory.
     * @returns {BoxJwtAuth}
     */
    withEnterpriseSubject(enterpriseId, tokenStorage = new tokenStorage_generated_js_1.InMemoryTokenStorage({})) {
        const newConfig = new JwtConfig({
            clientId: this.config.clientId,
            clientSecret: this.config.clientSecret,
            enterpriseId: enterpriseId,
            userId: void 0,
            jwtKeyId: this.config.jwtKeyId,
            privateKey: this.config.privateKey,
            privateKeyPassphrase: this.config.privateKeyPassphrase,
            tokenStorage: tokenStorage,
        });
        const newAuth = new BoxJwtAuth({ config: newConfig });
        return newAuth;
    }
    /**
     * Downscope access token to the provided scopes. Returning a new access token with the provided scopes, with the original access token unchanged.
     * @param {readonly string[]} scopes The scope(s) to apply to the resulting token.
     * @param {string} resource The file or folder to get a downscoped token for. If None and shared_link None, the resulting token will not be scoped down to just a single item. The resource should be a full URL to an item, e.g. https://api.box.com/2.0/files/123456.
     * @param {string} sharedLink The shared link to get a downscoped token for. If None and item None, the resulting token will not be scoped down to just a single item.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<AccessToken>}
     */
    downscopeToken(scopes, resource, sharedLink, networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const token = yield this.retrieveToken(networkSession);
            if (token == void 0) {
                throw new errors_js_1.BoxSdkError({
                    message: 'No access token is available. Make an API call to retrieve a token before calling this method.',
                });
            }
            const authManager = new authorization_generated_js_1.AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new network_generated_js_1.NetworkSession({}),
            });
            const downscopedToken = yield authManager.requestAccessToken({
                grantType: 'urn:ietf:params:oauth:grant-type:token-exchange',
                subjectToken: token.accessToken,
                subjectTokenType: 'urn:ietf:params:oauth:token-type:access_token',
                resource: resource,
                scope: scopes.join(' '),
                boxSharedLink: sharedLink,
            });
            return downscopedToken;
        });
    }
    /**
     * Revoke the current access token and remove it from token storage.
     * @param {NetworkSession} networkSession An object to keep network session state
     * @returns {Promise<undefined>}
     */
    revokeToken(networkSession) {
        return __awaiter(this, void 0, void 0, function* () {
            const oldToken = yield this.tokenStorage.get();
            if (oldToken == void 0) {
                return void 0;
            }
            const authManager = new authorization_generated_js_1.AuthorizationManager({
                networkSession: !(networkSession == void 0)
                    ? networkSession
                    : new network_generated_js_1.NetworkSession({}),
            });
            yield authManager.revokeAccessToken({
                token: oldToken.accessToken,
                clientId: this.config.clientId,
                clientSecret: this.config.clientSecret,
            });
            yield this.tokenStorage.clear();
            return void 0;
        });
    }
}
exports.BoxJwtAuth = BoxJwtAuth;
function serializeJwtConfigAppSettingsAppAuth(val) {
    return {
        ['publicKeyID']: val.publicKeyId,
        ['privateKey']: val.privateKey,
        ['passphrase']: val.passphrase,
    };
}
function deserializeJwtConfigAppSettingsAppAuth(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "JwtConfigAppSettingsAppAuth"',
        });
    }
    if (val.publicKeyID == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "publicKeyID" of type "JwtConfigAppSettingsAppAuth" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.publicKeyID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "publicKeyID" of type "JwtConfigAppSettingsAppAuth"',
        });
    }
    const publicKeyId = val.publicKeyID;
    if (val.privateKey == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "privateKey" of type "JwtConfigAppSettingsAppAuth" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.privateKey)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "privateKey" of type "JwtConfigAppSettingsAppAuth"',
        });
    }
    const privateKey = val.privateKey;
    if (val.passphrase == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "passphrase" of type "JwtConfigAppSettingsAppAuth" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.passphrase)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "passphrase" of type "JwtConfigAppSettingsAppAuth"',
        });
    }
    const passphrase = val.passphrase;
    return {
        publicKeyId: publicKeyId,
        privateKey: privateKey,
        passphrase: passphrase,
    };
}
function serializeJwtConfigAppSettings(val) {
    return {
        ['clientID']: val.clientId,
        ['clientSecret']: val.clientSecret,
        ['appAuth']: serializeJwtConfigAppSettingsAppAuth(val.appAuth),
    };
}
function deserializeJwtConfigAppSettings(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "JwtConfigAppSettings"',
        });
    }
    if (val.clientID == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "clientID" of type "JwtConfigAppSettings" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.clientID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "clientID" of type "JwtConfigAppSettings"',
        });
    }
    const clientId = val.clientID;
    if (val.clientSecret == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "clientSecret" of type "JwtConfigAppSettings" to be defined',
        });
    }
    if (!(0, json_js_2.sdIsString)(val.clientSecret)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "clientSecret" of type "JwtConfigAppSettings"',
        });
    }
    const clientSecret = val.clientSecret;
    if (val.appAuth == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "appAuth" of type "JwtConfigAppSettings" to be defined',
        });
    }
    const appAuth = deserializeJwtConfigAppSettingsAppAuth(val.appAuth);
    return {
        clientId: clientId,
        clientSecret: clientSecret,
        appAuth: appAuth,
    };
}
function serializeJwtConfigFile(val) {
    return {
        ['enterpriseID']: val.enterpriseId,
        ['userID']: val.userId,
        ['boxAppSettings']: serializeJwtConfigAppSettings(val.boxAppSettings),
    };
}
function deserializeJwtConfigFile(val) {
    if (!(0, json_js_3.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({ message: 'Expecting a map for "JwtConfigFile"' });
    }
    if (!(val.enterpriseID == void 0) && !(0, json_js_2.sdIsString)(val.enterpriseID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "enterpriseID" of type "JwtConfigFile"',
        });
    }
    const enterpriseId = val.enterpriseID == void 0 ? void 0 : val.enterpriseID;
    if (!(val.userID == void 0) && !(0, json_js_2.sdIsString)(val.userID)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "userID" of type "JwtConfigFile"',
        });
    }
    const userId = val.userID == void 0 ? void 0 : val.userID;
    if (val.boxAppSettings == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "boxAppSettings" of type "JwtConfigFile" to be defined',
        });
    }
    const boxAppSettings = deserializeJwtConfigAppSettings(val.boxAppSettings);
    return {
        enterpriseId: enterpriseId,
        userId: userId,
        boxAppSettings: boxAppSettings,
    };
}
//# sourceMappingURL=jwtAuth.generated.js.map