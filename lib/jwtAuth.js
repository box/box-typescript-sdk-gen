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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JwtAuth = exports.JwtConfig = void 0;
const fs_1 = require("fs");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const node_fetch_1 = __importDefault(require("node-fetch"));
const uuid_1 = require("uuid");
const BOX_JWT_AUDIENCE = 'https://api.box.com/oauth2/token';
const BOX_JWT_GRANT_TYPE = 'urn:ietf:params:oauth:grant-type:jwt-bearer';
const HEADER_XFF = 'X-Forwarded-For';
/**
 * Determines if a given string could represent an authorization code or token.
 *
 * @param {string} codeOrToken The code or token to check.
 * @returns {boolean} True if codeOrToken is valid, false if not.
 * @private
 */
function isValidCodeOrToken(codeOrToken) {
    return typeof codeOrToken === 'string' && codeOrToken.length > 0;
}
/**
 * Determines if a token grant response is valid
 *
 * @param {string} grantType the type of token grant
 * @param {Object} responseBody the body of the response to check
 * @returns {boolean} True if response body has expected fields, false if not.
 * @private
 */
function isValidTokenResponse(grantType, responseBody /* FIXME */) {
    if (!isValidCodeOrToken(responseBody.access_token)) {
        return false;
    }
    if (typeof responseBody.expires_in !== 'number') {
        return false;
    }
    // Check the refresh_token for certain types of grants
    if (grantType === 'authorization_code' || grantType === 'refresh_token') {
        if (!isValidCodeOrToken(responseBody.refresh_token)) {
            return false;
        }
    }
    return true;
}
/**
 *  A class managing the configuration for JWT authentication.
 * @typedef {Object} JwtConfig
 */
class JwtConfig {
    constructor(fields) {
        var _a;
        if (!fields.enterpriseId && !fields.userId) {
            throw new Error('Enterprise ID or User ID is needed');
        }
        Object.assign(this, fields);
        this.jwtAlgorithm = (_a = fields.jwtAlgorithm) !== null && _a !== void 0 ? _a : 'RS256';
    }
    /**
     * Create a JwtConfig instance from a JSON string.
     * @param {string} configJsonString The JSON string to parse.
     * @returns {JwtConfig} The JwtConfig instance.
     */
    static fromConfigJsonString(configJsonString) {
        let config;
        try {
            config = JSON.parse(configJsonString);
        }
        catch (err) {
            throw new Error('Unable to parse the JWT configuration.');
        }
        if (!config['boxAppSettings']) {
            throw new Error('boxAppSettings is missing from the config file. Please check the config file.');
        }
        if (!config['boxAppSettings']['appAuth']) {
            throw new Error('appAuth is missing from the config file. Please check the config file.');
        }
        return new JwtConfig({
            clientId: config['boxAppSettings']['clientID'],
            clientSecret: config['boxAppSettings']['clientSecret'],
            enterpriseId: config['enterpriseID'],
            userId: config['userID'],
            jwtKeyId: config['boxAppSettings']['appAuth']['publicKeyID'],
            privateKey: config['boxAppSettings']['appAuth']['privateKey'],
            privateKeyPassphrase: config['boxAppSettings']['appAuth']['passphrase'],
        });
    }
    /**
     * Create a JwtConfig instance from a JSON file.
     * @param {string} configFilePath The path to the JSON file.
     * @returns {JwtConfig} The JwtConfig instance.
     * @throws {Error} If the file cannot be read.  If the file is not valid JSON.
     * If the file is missing required fields.
     */
    static fromConfigFile(configFilePath) {
        const config = (0, fs_1.readFileSync)(configFilePath, 'utf8');
        return JwtConfig.fromConfigJsonString(config);
    }
}
exports.JwtConfig = JwtConfig;
/**
 * A class that manages the retrieval and storage of access tokens for a given app user.
 * @param {JwtConfig} config The JwtConfig instance.
 * @typedef {Object} JwtAuth
 */
class JwtAuth {
    constructor({ config }) {
        this.config = config;
        if (this.config.enterpriseId) {
            this.subjectId = this.config.enterpriseId;
            this.subjectType = 'enterprise';
        }
        else {
            this.subjectId = this.config.userId;
            this.subjectType = 'user';
        }
    }
    /**
     * Get the access token for the app user.  If the token is not cached or is expired, a new one will be fetched.
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    retrieveToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.token) {
                yield this.refreshToken();
            }
            return this.token;
        });
    }
    /**
     * Get a new access token for the app user.
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    refreshToken() {
        var _a, _b;
        return __awaiter(this, void 0, void 0, function* () {
            const expInSec = Math.floor(Date.now() / 1000) + 30;
            const claims = {
                exp: expInSec,
                box_sub_type: this.subjectType,
            };
            const jwtOptions = {
                algorithm: this.config.jwtAlgorithm,
                audience: BOX_JWT_AUDIENCE,
                subject: this.subjectId,
                issuer: this.config.clientId,
                jwtid: (0, uuid_1.v4)(),
                keyid: this.config.jwtKeyId,
            };
            const keyParams = {
                key: this.config.privateKey,
                passphrase: this.config.privateKeyPassphrase,
            };
            const assertion = jsonwebtoken_1.default.sign(claims, keyParams, jwtOptions);
            const formParams = {
                grant_type: BOX_JWT_GRANT_TYPE,
                assertion: assertion,
                client_id: this.config.clientId,
                client_secret: this.config.clientSecret,
            };
            const formParamsUrlEncoded = new URLSearchParams();
            let key;
            for (key in formParams) {
                if (!formParams[key])
                    continue;
                formParamsUrlEncoded.append(key, (_b = (_a = formParams[key]) === null || _a === void 0 ? void 0 : _a.toString()) !== null && _b !== void 0 ? _b : '');
            }
            const params = {
                method: 'POST',
                headers: {},
                body: formParamsUrlEncoded,
            };
            const options = {};
            if (options.ip) {
                params.headers[HEADER_XFF] = options.ip;
            }
            let response, responseJson;
            try {
                response = yield (0, node_fetch_1.default)(BOX_JWT_AUDIENCE, params);
                responseJson = (yield response.json());
            }
            catch (error) {
                const errorBody = yield error.response.text();
                throw new Error(`Error retrieving token: ${response === null || response === void 0 ? void 0 : response.status} - ${error.message} ${errorBody}`);
            }
            if (response.ok) {
                // Check to see if token response is valid in case the API returns us a 200 with a malformed token
                if (!isValidTokenResponse(formParams.grant_type, responseJson)) {
                    throw new Error('Invalid token response');
                }
                const tokenResponse = responseJson;
                this.token = tokenResponse.access_token;
                return this.token;
            }
            // Response Error: The API is telling us that we attempted an invalid token grant. This
            // means that our refresh token or auth code has exipred, so propagate an "Expired Tokens"
            // error.
            if (responseJson.error && responseJson.error === 'invalid_grant') {
                const errDescription = responseJson.error_description;
                const message = errDescription
                    ? `Auth Error: ${errDescription}`
                    : undefined;
                throw new Error(message);
            }
            // Response Error: The API is telling us that we attempted an invalid token grant. This
            // means that our refresh token or auth code has exipred, so propagate an "Expired Tokens"
            // error.
            throw new Error(`Error retrieving token: ${response === null || response === void 0 ? void 0 : response.status} - ${responseJson === null || responseJson === void 0 ? void 0 : responseJson.error} ${responseJson === null || responseJson === void 0 ? void 0 : responseJson.error_description}`);
        });
    }
    /**
     * Authenticate as a user
     * @param {string} userId The ID of the user to authenticate as
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    authenticateUser(userId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.subjectId = userId;
            this.subjectType = 'user';
            return this.refreshToken();
        });
    }
    /**
     * Authenticate as an enterprise
     * @param {string} enterpriseId The ID of the enterprise to authenticate as
     * @returns {Promise<string>} A promise resolving to the access token.
     */
    authenticateEnterprise(enterpriseId) {
        return __awaiter(this, void 0, void 0, function* () {
            this.subjectId = enterpriseId;
            this.subjectType = 'enterprise';
            return this.refreshToken();
        });
    }
}
exports.JwtAuth = JwtAuth;
//# sourceMappingURL=jwtAuth.js.map