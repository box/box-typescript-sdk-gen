import { deserializeFileVersionRetentions } from '../schemas/fileVersionRetentions.generated.js';
import { deserializeFileVersionRetention } from '../schemas/fileVersionRetention.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
export class GetFileVersionRetentionByIdOptionals {
    constructor(fields) {
        this.headers = new GetFileVersionRetentionByIdHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetFileVersionRetentionsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class GetFileVersionRetentionByIdHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class FileVersionRetentionsManager {
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
     * Retrieves all file version retentions for the given enterprise.
     *
     * **Note**:
     * File retention API is now **deprecated**.
     * To get information about files and file versions under retention,
     * see [files under retention](e://get-retention-policy-assignments-id-files-under-retention) or [file versions under retention](e://get-retention-policy-assignments-id-file-versions-under-retention) endpoints.
     * @param {GetFileVersionRetentionsQueryParams} queryParams Query parameters of getFileVersionRetentions method
     * @param {GetFileVersionRetentionsHeadersInput} headersInput Headers of getFileVersionRetentions method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<FileVersionRetentions>}
     */
    async getFileVersionRetentions(queryParams = {}, headersInput = new GetFileVersionRetentionsHeaders({}), cancellationToken) {
        const headers = new GetFileVersionRetentionsHeaders({
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['file_id']: toString(queryParams.fileId),
            ['file_version_id']: toString(queryParams.fileVersionId),
            ['policy_id']: toString(queryParams.policyId),
            ['disposition_action']: toString(queryParams.dispositionAction),
            ['disposition_before']: toString(queryParams.dispositionBefore),
            ['disposition_after']: toString(queryParams.dispositionAfter),
            ['limit']: toString(queryParams.limit),
            ['marker']: toString(queryParams.marker),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_retentions'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileVersionRetentions(response.data),
            rawData: response.data,
        };
    }
    /**
       * Returns information about a file version retention.
       *
       * **Note**:
       * File retention API is now **deprecated**.
       * To get information about files and file versions under retention,
       * see [files under retention](e://get-retention-policy-assignments-id-files-under-retention) or [file versions under retention](e://get-retention-policy-assignments-id-file-versions-under-retention) endpoints.
       * @param {string} fileVersionRetentionId The ID of the file version retention.
      Example: "3424234"
       * @param {GetFileVersionRetentionByIdOptionalsInput} optionalsInput
       * @returns {Promise<FileVersionRetention>}
       */
    async getFileVersionRetentionById(fileVersionRetentionId, optionalsInput = {}) {
        const optionals = new GetFileVersionRetentionByIdOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/file_version_retentions/', toString(fileVersionRetentionId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeFileVersionRetention(response.data),
            rawData: response.data,
        };
    }
}
export function serializeGetFileVersionRetentionsQueryParamsDispositionActionField(val) {
    return val;
}
export function deserializeGetFileVersionRetentionsQueryParamsDispositionActionField(val) {
    if (val == 'permanently_delete') {
        return val;
    }
    if (val == 'remove_retention') {
        return val;
    }
    if (sdIsString(val)) {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize GetFileVersionRetentionsQueryParamsDispositionActionField",
    });
}
//# sourceMappingURL=fileVersionRetentions.generated.js.map