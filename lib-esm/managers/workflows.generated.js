import { deserializeWorkflows } from '../schemas/workflows.generated.js';
import { serializeOutcome } from '../schemas/outcome.generated.js';
import { deserializeOutcome } from '../schemas/outcome.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { NetworkSession } from '../networking/network.generated.js';
import { FetchOptions } from '../networking/fetchOptions.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetWorkflowsOptionals {
    constructor(fields) {
        this.headers = new GetWorkflowsHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class StartWorkflowOptionals {
    constructor(fields) {
        this.headers = new StartWorkflowHeaders({});
        this.cancellationToken = void 0;
        if (fields.headers !== undefined) {
            this.headers = fields.headers;
        }
        if (fields.cancellationToken !== undefined) {
            this.cancellationToken = fields.cancellationToken;
        }
    }
}
export class GetWorkflowsHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class StartWorkflowHeaders {
    constructor(fields) {
        /**
         * Extra headers that will be included in the HTTP request. */
        this.extraHeaders = {};
        if (fields.extraHeaders !== undefined) {
            this.extraHeaders = fields.extraHeaders;
        }
    }
}
export class WorkflowsManager {
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
     * Returns list of workflows that act on a given `folder ID`, and
     * have a flow with a trigger type of `WORKFLOW_MANUAL_START`.
     *
     * You application must be authorized to use the `Manage Box Relay` application
     * scope within the developer console in to use this endpoint.
     * @param {GetWorkflowsQueryParams} queryParams Query parameters of getWorkflows method
     * @param {GetWorkflowsOptionalsInput} optionalsInput
     * @returns {Promise<Workflows>}
     */
    async getWorkflows(queryParams, optionalsInput = {}) {
        const optionals = new GetWorkflowsOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const queryParamsMap = prepareParams({
            ['folder_id']: toString(queryParams.folderId),
            ['trigger_type']: toString(queryParams.triggerType),
            ['limit']: toString(queryParams.limit),
            ['marker']: toString(queryParams.marker),
        });
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/workflows'),
            method: 'GET',
            params: queryParamsMap,
            headers: headersMap,
            responseFormat: 'json',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return {
            ...deserializeWorkflows(response.data),
            rawData: response.data,
        };
    }
    /**
       * Initiates a flow with a trigger type of `WORKFLOW_MANUAL_START`.
       *
       * You application must be authorized to use the `Manage Box Relay` application
       * scope within the developer console.
       * @param {string} workflowId The ID of the workflow.
      Example: "12345"
       * @param {StartWorkflowRequestBody} requestBody Request body of startWorkflow method
       * @param {StartWorkflowOptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    async startWorkflow(workflowId, requestBody, optionalsInput = {}) {
        const optionals = new StartWorkflowOptionals({
            headers: optionalsInput.headers,
            cancellationToken: optionalsInput.cancellationToken,
        });
        const headers = optionals.headers;
        const cancellationToken = optionals.cancellationToken;
        const headersMap = prepareParams({ ...{}, ...headers.extraHeaders });
        const response = await this.networkSession.networkClient.fetch(new FetchOptions({
            url: ''.concat(this.networkSession.baseUrls.baseUrl, '/2.0/workflows/', toString(workflowId), '/start'),
            method: 'POST',
            headers: headersMap,
            data: serializeStartWorkflowRequestBody(requestBody),
            contentType: 'application/json',
            responseFormat: 'no_content',
            auth: this.auth,
            networkSession: this.networkSession,
            cancellationToken: cancellationToken,
        }));
        return void 0;
    }
}
export function serializeStartWorkflowRequestBodyTypeField(val) {
    return val;
}
export function deserializeStartWorkflowRequestBodyTypeField(val) {
    if (val == 'workflow_parameters') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize StartWorkflowRequestBodyTypeField",
    });
}
export function serializeStartWorkflowRequestBodyFlowField(val) {
    return { ['type']: val.type, ['id']: val.id };
}
export function deserializeStartWorkflowRequestBodyFlowField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "StartWorkflowRequestBodyFlowField"',
        });
    }
    if (!(val.type == void 0) && !sdIsString(val.type)) {
        throw new BoxSdkError({
            message: 'Expecting string for "type" of type "StartWorkflowRequestBodyFlowField"',
        });
    }
    const type = val.type == void 0 ? void 0 : val.type;
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "StartWorkflowRequestBodyFlowField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
export function serializeStartWorkflowRequestBodyFilesTypeField(val) {
    return val;
}
export function deserializeStartWorkflowRequestBodyFilesTypeField(val) {
    if (val == 'file') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize StartWorkflowRequestBodyFilesTypeField",
    });
}
export function serializeStartWorkflowRequestBodyFilesField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeStartWorkflowRequestBodyFilesTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeStartWorkflowRequestBodyFilesField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "StartWorkflowRequestBodyFilesField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeStartWorkflowRequestBodyFilesTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "StartWorkflowRequestBodyFilesField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
export function serializeStartWorkflowRequestBodyFolderTypeField(val) {
    return val;
}
export function deserializeStartWorkflowRequestBodyFolderTypeField(val) {
    if (val == 'folder') {
        return val;
    }
    throw new BoxSdkError({
        message: "Can't deserialize StartWorkflowRequestBodyFolderTypeField",
    });
}
export function serializeStartWorkflowRequestBodyFolderField(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeStartWorkflowRequestBodyFolderTypeField(val.type),
        ['id']: val.id,
    };
}
export function deserializeStartWorkflowRequestBodyFolderField(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "StartWorkflowRequestBodyFolderField"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeStartWorkflowRequestBodyFolderTypeField(val.type);
    if (!(val.id == void 0) && !sdIsString(val.id)) {
        throw new BoxSdkError({
            message: 'Expecting string for "id" of type "StartWorkflowRequestBodyFolderField"',
        });
    }
    const id = val.id == void 0 ? void 0 : val.id;
    return { type: type, id: id };
}
export function serializeStartWorkflowRequestBody(val) {
    return {
        ['type']: val.type == void 0
            ? val.type
            : serializeStartWorkflowRequestBodyTypeField(val.type),
        ['flow']: serializeStartWorkflowRequestBodyFlowField(val.flow),
        ['files']: val.files.map(function (item) {
            return serializeStartWorkflowRequestBodyFilesField(item);
        }),
        ['folder']: serializeStartWorkflowRequestBodyFolderField(val.folder),
        ['outcomes']: val.outcomes == void 0
            ? val.outcomes
            : val.outcomes.map(function (item) {
                return serializeOutcome(item);
            }),
    };
}
export function deserializeStartWorkflowRequestBody(val) {
    if (!sdIsMap(val)) {
        throw new BoxSdkError({
            message: 'Expecting a map for "StartWorkflowRequestBody"',
        });
    }
    const type = val.type == void 0
        ? void 0
        : deserializeStartWorkflowRequestBodyTypeField(val.type);
    if (val.flow == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "flow" of type "StartWorkflowRequestBody" to be defined',
        });
    }
    const flow = deserializeStartWorkflowRequestBodyFlowField(val.flow);
    if (val.files == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "files" of type "StartWorkflowRequestBody" to be defined',
        });
    }
    if (!sdIsList(val.files)) {
        throw new BoxSdkError({
            message: 'Expecting array for "files" of type "StartWorkflowRequestBody"',
        });
    }
    const files = sdIsList(val.files)
        ? val.files.map(function (itm) {
            return deserializeStartWorkflowRequestBodyFilesField(itm);
        })
        : [];
    if (val.folder == void 0) {
        throw new BoxSdkError({
            message: 'Expecting "folder" of type "StartWorkflowRequestBody" to be defined',
        });
    }
    const folder = deserializeStartWorkflowRequestBodyFolderField(val.folder);
    if (!(val.outcomes == void 0) && !sdIsList(val.outcomes)) {
        throw new BoxSdkError({
            message: 'Expecting array for "outcomes" of type "StartWorkflowRequestBody"',
        });
    }
    const outcomes = val.outcomes == void 0
        ? void 0
        : sdIsList(val.outcomes)
            ? val.outcomes.map(function (itm) {
                return deserializeOutcome(itm);
            })
            : [];
    return {
        type: type,
        flow: flow,
        files: files,
        folder: folder,
        outcomes: outcomes,
    };
}
//# sourceMappingURL=workflows.generated.js.map