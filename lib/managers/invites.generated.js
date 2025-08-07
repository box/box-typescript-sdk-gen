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
exports.InvitesManager = exports.GetInviteByIdHeaders = exports.CreateInviteHeaders = exports.GetInviteByIdOptionals = exports.CreateInviteOptionals = void 0;
exports.serializeCreateInviteRequestBodyEnterpriseField = serializeCreateInviteRequestBodyEnterpriseField;
exports.deserializeCreateInviteRequestBodyEnterpriseField = deserializeCreateInviteRequestBodyEnterpriseField;
exports.serializeCreateInviteRequestBodyActionableByField = serializeCreateInviteRequestBodyActionableByField;
exports.deserializeCreateInviteRequestBodyActionableByField = deserializeCreateInviteRequestBodyActionableByField;
exports.serializeCreateInviteRequestBody = serializeCreateInviteRequestBody;
exports.deserializeCreateInviteRequestBody = deserializeCreateInviteRequestBody;
const invite_generated_js_1 = require("../schemas/invite.generated.js");
const errors_js_1 = require("../box/errors.js");
const network_generated_js_1 = require("../networking/network.generated.js");
const fetchOptions_generated_js_1 = require("../networking/fetchOptions.generated.js");
const utils_js_1 = require("../internal/utils.js");
const utils_js_2 = require("../internal/utils.js");
const json_js_1 = require("../serialization/json.js");
const json_js_2 = require("../serialization/json.js");
class CreateInviteOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new CreateInviteHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.CreateInviteOptionals = CreateInviteOptionals;
class GetInviteByIdOptionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetInviteByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.queryParams !== undefined) {
            this.queryParams = fields.queryParams;
        }
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
exports.GetInviteByIdOptionals = GetInviteByIdOptionals;
class CreateInviteHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.CreateInviteHeaders = CreateInviteHeaders;
class GetInviteByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
exports.GetInviteByIdHeaders = GetInviteByIdHeaders;
class InvitesManager {
    constructor(fields) {
        this.networkSession = new network_generated_js_1.NetworkSession({});
        if (fields.auth !== undefined) {
            this.auth = fields.auth;
        }
        if (fields.networkSession !== undefined) {
            this.networkSession = fields.networkSession;
        }
    }
    /**
     * Invites an existing external user to join an enterprise.
     *
     * The existing user can not be part of another enterprise and
     * must already have a Box account. Once invited, the user will receive an
     * email and are prompted to accept the invitation within the
     * Box web application.
     *
     * This method requires the "Manage An Enterprise" scope enabled for
     * the application, which can be enabled within the developer console.
     * @param {CreateInviteRequestBody} requestBody Request body of createInvite method
     * @param {CreateInviteOptionalsInput} optionalsInput
     * @returns {Promise<Invite>}
     */
    createInvite(requestBody_1) {
        return __awaiter(this, arguments, void 0, function* (requestBody, optionalsInput = {}) {
            const optionals = new CreateInviteOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/invites'),
                method: 'POST',
                params: queryParamsMap,
                headers: headersMap,
                data: serializeCreateInviteRequestBody(requestBody),
                contentType: 'application/json',
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, invite_generated_js_1.deserializeInvite)(response.data)), { rawData: response.data });
        });
    }
    /**
       * Returns the status of a user invite.
       * @param {string} inviteId The ID of an invite.
      Example: "213723"
       * @param {GetInviteByIdOptionalsInput} optionalsInput
       * @returns {Promise<Invite>}
       */
    getInviteById(inviteId_1) {
        return __awaiter(this, arguments, void 0, function* (inviteId, optionalsInput = {}) {
            const optionals = new GetInviteByIdOptionals({
                queryParams: optionalsInput.queryParams,
                headers: optionalsInput.headers,
                cancellationToken: optionalsInput.cancellationToken,
            });
            const queryParams = optionals.queryParams;
            const headers = optionals.headers;
            const cancellationToken = optionals.cancellationToken;
            const queryParamsMap = (0, utils_js_1.prepareParams)({
                ['fields']: queryParams.fields
                    ? queryParams.fields.map(utils_js_2.toString).join(',')
                    : undefined,
            });
            const headersMap = (0, utils_js_1.prepareParams)(Object.assign({}, headers.extraHeaders));
            const response = yield this.networkSession.networkClient.fetch(new fetchOptions_generated_js_1.FetchOptions({
                url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/invites/', (0, utils_js_2.toString)(inviteId)),
                method: 'GET',
                params: queryParamsMap,
                headers: headersMap,
                responseFormat: 'json',
                auth: this.auth,
                networkSession: this.networkSession,
                cancellationToken: cancellationToken,
            }));
            return Object.assign(Object.assign({}, (0, invite_generated_js_1.deserializeInvite)(response.data)), { rawData: response.data });
        });
    }
}
exports.InvitesManager = InvitesManager;
function serializeCreateInviteRequestBodyEnterpriseField(val) {
    return { ['id']: val.id };
}
function deserializeCreateInviteRequestBodyEnterpriseField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateInviteRequestBodyEnterpriseField"',
        });
    }
    if (val.id == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "id" of type "CreateInviteRequestBodyEnterpriseField" to be defined',
        });
    }
    if (!(0, json_js_1.sdIsString)(val.id)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "id" of type "CreateInviteRequestBodyEnterpriseField"',
        });
    }
    const id = val.id;
    return { id: id };
}
function serializeCreateInviteRequestBodyActionableByField(val) {
    return { ['login']: val.login };
}
function deserializeCreateInviteRequestBodyActionableByField(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateInviteRequestBodyActionableByField"',
        });
    }
    if (!(val.login == void 0) && !(0, json_js_1.sdIsString)(val.login)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting string for "login" of type "CreateInviteRequestBodyActionableByField"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    return { login: login };
}
function serializeCreateInviteRequestBody(val) {
    return {
        ['enterprise']: serializeCreateInviteRequestBodyEnterpriseField(val.enterprise),
        ['actionable_by']: serializeCreateInviteRequestBodyActionableByField(val.actionableBy),
    };
}
function deserializeCreateInviteRequestBody(val) {
    if (!(0, json_js_2.sdIsMap)(val)) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting a map for "CreateInviteRequestBody"',
        });
    }
    if (val.enterprise == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "enterprise" of type "CreateInviteRequestBody" to be defined',
        });
    }
    const enterprise = deserializeCreateInviteRequestBodyEnterpriseField(val.enterprise);
    if (val.actionable_by == void 0) {
        throw new errors_js_1.BoxSdkError({
            message: 'Expecting "actionable_by" of type "CreateInviteRequestBody" to be defined',
        });
    }
    const actionableBy = deserializeCreateInviteRequestBodyActionableByField(val.actionable_by);
    return {
        enterprise: enterprise,
        actionableBy: actionableBy,
    };
}
//# sourceMappingURL=invites.generated.js.map