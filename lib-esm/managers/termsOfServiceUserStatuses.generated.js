import { deserializeTermsOfServiceUserStatuses } from '../schemas/termsOfServiceUserStatuses.generated.js';
import { deserializeTermsOfServiceUserStatus } from '../schemas/termsOfServiceUserStatus.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetTermsOfServiceUserStatusesOptionals {
    constructor(fields) {
        this.headers = new GetTermsOfServiceUserStatusesHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateTermsOfServiceStatusForUserOptionals {
    constructor(fields) {
        this.headers = new CreateTermsOfServiceStatusForUserHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class UpdateTermsOfServiceStatusForUserByIdOptionals {
    constructor(fields) {
        this.headers = new UpdateTermsOfServiceStatusForUserByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetTermsOfServiceUserStatusesHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateTermsOfServiceStatusForUserRequestBodyTosField {
    constructor(fields) {
        /**
         * The type of object. */
        this.type = 'terms_of_service';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class CreateTermsOfServiceStatusForUserRequestBodyUserField {
    constructor(fields) {
        /**
         * The type of object. */
        this.type = 'user';
        if (fields.type !== undefined) {
            this.type = fields.type;
        }
        if (fields.id !== undefined) {
            this.id = fields.id;
        }
        if (fields.rawData !== undefined) {
            this.rawData = fields.rawData;
        }
    }
}
export class CreateTermsOfServiceStatusForUserHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class UpdateTermsOfServiceStatusForUserByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class TermsOfServiceUserStatusesManager {
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
     * Retrieves an overview of users and their status for a
     * terms of service, including Whether they have accepted
     * the terms and when.
     * @param {GetTermsOfServiceUserStatusesQueryParams} queryParams Query parameters of getTermsOfServiceUserStatuses method
     * @param {GetTermsOfServiceUserStatusesOptionalsInput} optionalsInput
     * @returns {Promise<TermsOfServiceUserStatuses>}
     */
    async getTermsOfServiceUserStatuses(queryParams, optionalsInput = {}) {
        const optionals = new GetTermsOfServiceUserStatusesOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['tos_id']: toString(queryParams.tosId),
            ['user_id']: toString(queryParams.userId),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_service_user_statuses'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTermsOfServiceUserStatuses(response.data),
            rawData: response.data,
        };
    }
    /**
     * Sets the status for a terms of service for a user.
     * @param {CreateTermsOfServiceStatusForUserRequestBody} requestBody Request body of createTermsOfServiceStatusForUser method
     * @param {CreateTermsOfServiceStatusForUserOptionalsInput} optionalsInput
     * @returns {Promise<TermsOfServiceUserStatus>}
     */
    async createTermsOfServiceStatusForUser(requestBody, optionalsInput = {}) {
        const optionals = new CreateTermsOfServiceStatusForUserOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_service_user_statuses'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateTermsOfServiceStatusForUserRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTermsOfServiceUserStatus(response.data),
            rawData: response.data,
        };
    }
    /**
       * Updates the status for a terms of service for a user.
       * @param {string} termsOfServiceUserStatusId The ID of the terms of service status.
      Example: "324234"
       * @param {UpdateTermsOfServiceStatusForUserByIdRequestBody} requestBody Request body of updateTermsOfServiceStatusForUserById method
       * @param {UpdateTermsOfServiceStatusForUserByIdOptionalsInput} optionalsInput
       * @returns {Promise<TermsOfServiceUserStatus>}
       */
    async updateTermsOfServiceStatusForUserById(termsOfServiceUserStatusId, requestBody, optionalsInput = {}) {
        const optionals = new UpdateTermsOfServiceStatusForUserByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/terms_of_service_user_statuses/', toString(termsOfServiceUserStatusId)),
            method: 'PUT',
            headers: headersMap,
            data: serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeTermsOfServiceUserStatus(response.data),
            rawData: response.data,
        };
    }
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val) {
    return val;
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val) {
    if (val == 'terms_of_service') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateTermsOfServiceStatusForUserRequestBodyTosTypeField",
    });
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val) {
    return {
        ['type']: serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyTosField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateTermsOfServiceStatusForUserRequestBodyTosField" to be defined',
        });
    }
    const type = deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyTosFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateTermsOfServiceStatusForUserRequestBodyTosTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyTosFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val) {
    return val;
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val) {
    if (val == 'user') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize CreateTermsOfServiceStatusForUserRequestBodyUserTypeField",
    });
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val) {
    return {
        ['type']: serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyUserField"',
        });
    }
    if (val.type == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "type" of type "CreateTermsOfServiceStatusForUserRequestBodyUserField" to be defined',
        });
    }
    const type = deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserField" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserField"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBodyUserFieldInput(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeCreateTermsOfServiceStatusForUserRequestBodyUserTypeField(val.type);
    if (val.id == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput" to be defined',
        });
    }
    if (!sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "CreateTermsOfServiceStatusForUserRequestBodyUserFieldInput"',
        });
    }
    const id = val.id;
    return {
        type: type,
        id: id,
    };
}
export function serializeCreateTermsOfServiceStatusForUserRequestBody(val) {
    return {
        ['tos']: serializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val.tos),
        ['user']: serializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val.user),
        ['is_accepted']: val.isAccepted,
    };
}
export function deserializeCreateTermsOfServiceStatusForUserRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateTermsOfServiceStatusForUserRequestBody"',
        });
    }
    if (val.tos == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "tos" of type "CreateTermsOfServiceStatusForUserRequestBody" to be defined',
        });
    }
    const tos = deserializeCreateTermsOfServiceStatusForUserRequestBodyTosField(val.tos);
    if (val.user == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "user" of type "CreateTermsOfServiceStatusForUserRequestBody" to be defined',
        });
    }
    const user = deserializeCreateTermsOfServiceStatusForUserRequestBodyUserField(val.user);
    if (val.is_accepted == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "is_accepted" of type "CreateTermsOfServiceStatusForUserRequestBody" to be defined',
        });
    }
    if (!sdIsBoolean(val.is_accepted)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_accepted" of type "CreateTermsOfServiceStatusForUserRequestBody"',
        });
    }
    const isAccepted = val.is_accepted;
    return {
        tos: tos,
        user: user,
        isAccepted: isAccepted,
    };
}
export function serializeUpdateTermsOfServiceStatusForUserByIdRequestBody(val) {
    return { ['is_accepted']: val.isAccepted };
}
export function deserializeUpdateTermsOfServiceStatusForUserByIdRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "UpdateTermsOfServiceStatusForUserByIdRequestBody"',
        });
    }
    if (val.is_accepted == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "is_accepted" of type "UpdateTermsOfServiceStatusForUserByIdRequestBody" to be defined',
        });
    }
    if (!sdIsBoolean(val.is_accepted)) {
        throw new BoxSdkError({
            message: 'Expecting boolean for "is_accepted" of type "UpdateTermsOfServiceStatusForUserByIdRequestBody"',
        });
    }
    const isAccepted = val.is_accepted;
    return {
        isAccepted: isAccepted,
    };
}
//# sourceMappingURL=termsOfServiceUserStatuses.generated.js.map