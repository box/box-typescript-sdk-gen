import { deserializeFileVersionLegalHold } from '../schemas/fileVersionLegalHold.generated.js';
import { deserializeFileVersionLegalHolds } from '../schemas/fileVersionLegalHolds.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class GetFileVersionLegalHoldByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileVersionLegalHoldByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileVersionLegalHoldsOptionals {
    constructor(fields) {
        this.headers = new GetFileVersionLegalHoldsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileVersionLegalHoldByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileVersionLegalHoldsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FileVersionLegalHoldsManager {
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
       * Retrieves information about the legal hold policies
       * assigned to a file version.
       * @param {string} fileVersionLegalHoldId The ID of the file version legal hold.
      Example: "2348213"
       * @param {GetFileVersionLegalHoldByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionLegalHold>}
       */
    async getFileVersionLegalHoldById(fileVersionLegalHoldId, optionalsInput = {}) {
        const optionals = new GetFileVersionLegalHoldByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_legal_holds/', toString(fileVersionLegalHoldId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileVersionLegalHold(response.data),
            rawData: response.data,
        };
    }
    /**
     * Get a list of file versions on legal hold for a legal hold
     * assignment.
     *
     * Due to ongoing re-architecture efforts this API might not return all file
     * versions for this policy ID.
     *
     * Instead, this API will only return file versions held in the legacy
     * architecture. Two new endpoints will available to request any file versions
     * held in the new architecture.
     *
     * For file versions held in the new architecture, the `GET
     * /legal_hold_policy_assignments/:id/file_versions_on_hold` API can be used to
     * return all past file versions available for this policy assignment, and the
     * `GET /legal_hold_policy_assignments/:id/files_on_hold` API can be used to
     * return any current (latest) versions of a file under legal hold.
     *
     * The `GET /legal_hold_policy_assignments?policy_id={id}` API can be used to
     * find a list of policy assignments for a given policy ID.
     *
     * Once the re-architecture is completed this API will be deprecated.
     * @param {GetFileVersionLegalHoldsQueryParams} queryParams Query parameters of getFileVersionLegalHolds method
     * @param {GetFileVersionLegalHoldsOptionalsInput} optionalsInput
     * @returns {Promise<FileVersionLegalHolds>}
     */
    async getFileVersionLegalHolds(queryParams, optionalsInput = {}) {
        const optionals = new GetFileVersionLegalHoldsOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['policy_id']: toString(queryParams.policyId),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_legal_holds'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileVersionLegalHolds(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=fileVersionLegalHolds.generated.js.map