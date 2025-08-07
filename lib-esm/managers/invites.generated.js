import { deserializeInvite } from '../schemas/invite.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateInviteOptionals {
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
export class GetInviteByIdOptionals {
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
export class CreateInviteHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetInviteByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class InvitesManager {
    constructor(fields) {
        this.networkSession = new NetworkSession({});
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
    async createInvite(requestBody, optionalsInput = {}) {
        const optionals = new CreateInviteOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
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
        return {
            ...deserializeInvite(response.data),
            rawData: response.data,
        };
    }
    /**
       * Returns the status of a user invite.
       * @param {string} inviteId The ID of an invite.
      Example: "213723"
       * @param {GetInviteByIdOptionalsInput} optionalsInput
       * @returns {Promise<Invite>}
       */
    async getInviteById(inviteId, optionalsInput = {}) {
        const optionals = new GetInviteByIdOptionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['fields']: queryParams.fields
                ? queryParams.fields.map(toString).join(',')
                : undefined,
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/invites/', toString(inviteId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeInvite(response.data),
            rawData: response.data,
        };
    }
}
export function serializeCreateInviteRequestBodyEnterpriseField(val) {
    return { ['id']: val.id };
}
export function deserializeCreateInviteRequestBodyEnterpriseField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateInviteRequestBodyEnterpriseField"',
        });
    }
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateInviteRequestBodyEnterpriseField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateInviteRequestBodyEnterpriseField"',
        });
    }
    const id = val.id;
    return { id: id };
}
export function serializeCreateInviteRequestBodyActionableByField(val) {
    return { ['login']: val.login };
}
export function deserializeCreateInviteRequestBodyActionableByField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateInviteRequestBodyActionableByField"',
        });
    }
    if (!(val.login == void 0) && !sdIsString(val.login)) {
        throw new BoxSdkError({
            message: 'Expecting string for "login" of type "CreateInviteRequestBodyActionableByField"',
        });
    }
    const login = val.login == void 0 ? void 0 : val.login;
    return { login: login };
}
export function serializeCreateInviteRequestBody(val) {
    return {
        ['enterprise']: serializeCreateInviteRequestBodyEnterpriseField(val.enterprise),
        ['actionable_by']: serializeCreateInviteRequestBodyActionableByField(val.actionableBy),
    };
}
export function deserializeCreateInviteRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateInviteRequestBody"',
        });
    }
    if (val.enterprise == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "enterprise" of type "CreateInviteRequestBody" to be defined',
        });
    }
    const enterprise = deserializeCreateInviteRequestBodyEnterpriseField(val.enterprise);
    if (val.actionable_by == void 0) {
        throw new BoxSdkError({
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