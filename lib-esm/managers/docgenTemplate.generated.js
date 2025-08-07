import { deserializeDocGenTemplateBaseV2025R0 } from '../schemas/v2025R0/docGenTemplateBaseV2025R0.generated.js';
import { serializeDocGenTemplateCreateRequestV2025R0 } from '../schemas/v2025R0/docGenTemplateCreateRequestV2025R0.generated.js';
import { deserializeDocGenTemplatesV2025R0 } from '../schemas/v2025R0/docGenTemplatesV2025R0.generated.js';
import { deserializeDocGenTemplateV2025R0 } from '../schemas/v2025R0/docGenTemplateV2025R0.generated.js';
import { deserializeDocGenTagsV2025R0 } from '../schemas/v2025R0/docGenTagsV2025R0.generated.js';
import { deserializeDocGenJobsV2025R0 } from '../schemas/v2025R0/docGenJobsV2025R0.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
export class CreateDocgenTemplateV2025R0Optionals {
    constructor(fields) {
        this.headers = new CreateDocgenTemplateV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class DeleteDocgenTemplateByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new DeleteDocgenTemplateByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetDocgenTemplateByIdV2025R0Optionals {
    constructor(fields) {
        this.headers = new GetDocgenTemplateByIdV2025R0Headers({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetDocgenTemplateTagsV2025R0Optionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetDocgenTemplateTagsV2025R0Headers({});
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
export class GetDocgenTemplateJobByIdV2025R0Optionals {
    constructor(fields) {
        this.queryParams = {};
        this.headers = new GetDocgenTemplateJobByIdV2025R0Headers({});
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
export class CreateDocgenTemplateV2025R0Headers {
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
export class GetDocgenTemplatesV2025R0Headers {
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
export class DeleteDocgenTemplateByIdV2025R0Headers {
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
export class GetDocgenTemplateByIdV2025R0Headers {
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
export class GetDocgenTemplateTagsV2025R0Headers {
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
export class GetDocgenTemplateJobByIdV2025R0Headers {
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
export class DocgenTemplateManager {
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
     * Marks a file as a Box Doc Gen template.
     * @param {DocGenTemplateCreateRequestV2025R0} requestBody Request body of createDocgenTemplateV2025R0 method
     * @param {CreateDocgenTemplateV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<DocGenTemplateBaseV2025R0>}
     */
    async createDocgenTemplateV2025R0(requestBody, optionalsInput = {}) {
        const optionals = new CreateDocgenTemplateV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates'),
            method: 'POST',
            headers: headersMap,
            data: serializeDocGenTemplateCreateRequestV2025R0(requestBody),
            contentType: 'application/json',
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDocGenTemplateBaseV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
     * Lists Box Doc Gen templates on which the user is a collaborator.
     * @param {GetDocgenTemplatesV2025R0QueryParams} queryParams Query parameters of getDocgenTemplatesV2025R0 method
     * @param {GetDocgenTemplatesV2025R0HeadersInput} headersInput Headers of getDocgenTemplatesV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<DocGenTemplatesV2025R0>}
     */
    async getDocgenTemplatesV2025R0(queryParams = {}, headersInput = new GetDocgenTemplatesV2025R0Headers({}), cancellationToken) {
        const headers = new GetDocgenTemplatesV2025R0Headers({
            boxVersion: headersInput.boxVersion,
            extraHeaders: headersInput.extraHeaders,
        });
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDocGenTemplatesV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Unmarks file as Box Doc Gen template.
       * @param {string} templateId ID of the file which will no longer be marked as a Box Doc Gen template.
      Example: "123"
       * @param {DeleteDocgenTemplateByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async deleteDocgenTemplateByIdV2025R0(templateId, optionalsInput = {}) {
        const optionals = new DeleteDocgenTemplateByIdV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates/', toString(templateId)),
            method: 'DELETE',
            headers: headersMap,
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
    /**
       * Lists details of a specific Box Doc Gen template.
       * @param {string} templateId The ID of a Box Doc Gen template.
      Example: 123
       * @param {GetDocgenTemplateByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenTemplateV2025R0>}
       */
    async getDocgenTemplateByIdV2025R0(templateId, optionalsInput = {}) {
        const optionals = new GetDocgenTemplateByIdV2025R0Optionals({
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
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates/', toString(templateId)),
            method: 'GET',
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDocGenTemplateV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Lists all tags in a Box Doc Gen template.
       * @param {string} templateId ID of template.
      Example: 123
       * @param {GetDocgenTemplateTagsV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenTagsV2025R0>}
       */
    async getDocgenTemplateTagsV2025R0(templateId, optionalsInput = {}) {
        const optionals = new GetDocgenTemplateTagsV2025R0Optionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['template_version_id']: toString(queryParams.templateVersionId),
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_templates/', toString(templateId), '/tags'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDocGenTagsV2025R0(response.data),
            rawData: response.data,
        };
    }
    /**
       * Lists the users jobs which use this template.
       * @param {string} templateId Id of template to fetch jobs for.
      Example: 123
       * @param {GetDocgenTemplateJobByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<DocGenJobsV2025R0>}
       */
    async getDocgenTemplateJobByIdV2025R0(templateId, optionalsInput = {}) {
        const optionals = new GetDocgenTemplateJobByIdV2025R0Optionals({
            queryParams: optionalsInput.queryParams,
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const queryParams = optionals.queryParams;
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['marker']: toString(queryParams.marker),
            ['limit']: toString(queryParams.limit),
        });
        const headersMap = prepareParams({
            ...{ ['box-version']: toString(headers.boxVersion) },
            ...headers.extraHeaders,
        });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/docgen_template_jobs/', toString(templateId)),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeDocGenJobsV2025R0(response.data),
            rawData: response.data,
        };
    }
}
//# sourceMappingURL=docgenTemplate.generated.js.map