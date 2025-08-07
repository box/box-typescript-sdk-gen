import { deserializeUserAvatar } from '../schemas/userAvatar.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetUserAvatarOptionals {
    constructor(fields) {
        this.headers = new GetUserAvatarHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class CreateUserAvatarOptionals {
    constructor(fields) {
        this.headers = new CreateUserAvatarHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteUserAvatarOptionals {
    constructor(fields) {
        this.headers = new DeleteUserAvatarHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetUserAvatarHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateUserAvatarHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteUserAvatarHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class AvatarsManager {
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
       * Retrieves an image of a the user's avatar.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {GetUserAvatarOptionalsInput} optionalsInput
       * @returns {Promise<ByteStream>}
       */
    async getUserAvatar(userId, optionalsInput = {}) {
        const optionals = new GetUserAvatarOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId), '/avatar'),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'binary',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return response.content;
    }
    /**
       * Adds or updates a user avatar.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {CreateUserAvatarRequestBody} requestBody Request body of createUserAvatar method
       * @param {CreateUserAvatarOptionalsInput} optionalsInput
       * @returns {Promise<UserAvatar>}
       */
    async createUserAvatar(userId, requestBody, optionalsInput = {}) {
        const optionals = new CreateUserAvatarOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId), '/avatar'),
            method: 'POST',
            headers: headersMap,
            multipartData: [
                {
                    partName: 'pic',
                    fileStream: requestBody.pic,
                    fileName: requestBody.picFileName,
                    contentType: requestBody.picContentType,
                },
            ],
            contentType: 'multipart/form-data',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeUserAvatar(response.data),
            rawData: response.data,
        };
    }
    /**
       * Removes an existing user avatar.
       * You cannot reverse this operation.
       * @param {string} userId The ID of the user.
      Example: "12345"
       * @param {DeleteUserAvatarOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteUserAvatar(userId, optionalsInput = {}) {
        const optionals = new DeleteUserAvatarOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/users/', toString(userId), '/avatar'),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
//# sourceMappingURL=avatars.generated.js.map