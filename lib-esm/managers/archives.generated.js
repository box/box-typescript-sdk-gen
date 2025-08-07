import { deserializeArchivesV2025R0 } from '../schemas/v2025R0/archivesV2025R0.generated.js';
import { deserializeArchiveV2025R0 } from '../schemas/v2025R0/archiveV2025R0.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class CreateArchiveV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateArchiveV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteArchiveByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteArchiveByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetArchivesV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class CreateArchiveV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class DeleteArchiveByIdV2025R0Headers {
    constructor(fields) {
        /**
         * Version header. */
        this.boxVersion = '2025.0';
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.boxVersion !== undefined) {
            this.boxVersion = fields.boxVersion;
        }
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class ArchivesManager {
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
     * Retrieves archives for an enterprise.
     * @param {GetArchivesV2025R0QueryParams} queryParams Query parameters of getArchivesV2025R0 method
     * @param {GetArchivesV2025R0HeadersInput} headersInput Headers of getArchivesV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ArchivesV2025R0>}
     */
    async getArchivesV2025R0(queryParams = {}, headersInput = new GetArchivesV2025R0Headers({}), cancellationToken) {
        const headers = new GetArchivesV2025R0Headers({
            boxVersion: headersInput.boxVersion,
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['limit']: toString(queryParams.limit),
            ['marker']: toString(queryParams.marker),
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/archives'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeArchivesV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
     * Creates an archive.
     * @param {CreateArchiveV2025R0RequestBody} requestBody Request body of createArchiveV2025R0 method
     * @param {CreateArchiveV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<ArchiveV2025R0>}
     */
    async createArchiveV2025R0(requestBody, optionalsInput = {}) {
        const optionals = new CreateArchiveV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/archives'),
            method: 'POST',
            headers: headersMap,
            data: serializeCreateArchiveV2025R0RequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeArchiveV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Permanently deletes an archive.
       * @param {string} archiveId The ID of the archive.
      Example: "982312"
       * @param {DeleteArchiveByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteArchiveByIdV2025R0(archiveId, optionalsInput = {}) {
        const optionals = new DeleteArchiveByIdV2025R0Optionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/archives/', toString(archiveId)),
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
export function serializeCreateArchiveV2025R0RequestBody(val) {
    return { ['name']: val.name };
}
export function deserializeCreateArchiveV2025R0RequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "CreateArchiveV2025R0RequestBody"',
        });
    }
    if (val.name == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "name" of type "CreateArchiveV2025R0RequestBody" to be defined',
        });
    }
    if (!sdIsString(val.name)) {
        throw new BoxSdkError({
            message: 'Expecting string for "name" of type "CreateArchiveV2025R0RequestBody"',
        });
    }
    const name = val.name;
    return { name: name };
}
//# sourceMappingURL=archives.generated.js.map