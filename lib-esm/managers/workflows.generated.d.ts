import { Workflows } from '../schemas/workflows.generated.js';
import { Outcome } from '../schemas/outcome.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetWorkflowsOptionals {
    readonly headers: GetWorkflowsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetWorkflowsOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetWorkflowsOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetWorkflowsOptionalsInput {
    readonly headers?: GetWorkflowsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class StartWorkflowOptionals {
    readonly headers: StartWorkflowHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<StartWorkflowOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<StartWorkflowOptionals, 'headers' | 'cancellationToken'>>);
}
export interface StartWorkflowOptionalsInput {
    readonly headers?: StartWorkflowHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetWorkflowsQueryParams {
    /**
     * The unique identifier that represent a folder.
     *
     * The ID for any folder can be determined
     * by visiting this folder in the web application
     * and copying the ID from the URL. For example,
     * for the URL `https://*.app.box.com/folder/123`
     * the `folder_id` is `123`.
     *
     * The root folder of a Box account is
     * always represented by the ID `0`. */
    readonly folderId: string;
    /**
     * Type of trigger to search for. */
    readonly triggerType?: string;
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
}
export declare class GetWorkflowsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetWorkflowsHeaders, 'extraHeaders'> & Partial<Pick<GetWorkflowsHeaders, 'extraHeaders'>>);
}
export interface GetWorkflowsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export type StartWorkflowRequestBodyTypeField = 'workflow_parameters';
export interface StartWorkflowRequestBodyFlowField {
    /**
     * The type of the flow object. */
    readonly type?: string;
    /**
     * The id of the flow. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export type StartWorkflowRequestBodyFilesTypeField = 'file';
export interface StartWorkflowRequestBodyFilesField {
    /**
     * The type of the file object. */
    readonly type?: StartWorkflowRequestBodyFilesTypeField;
    /**
     * The id of the file. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export type StartWorkflowRequestBodyFolderTypeField = 'folder';
export interface StartWorkflowRequestBodyFolderField {
    /**
     * The type of the folder object. */
    readonly type?: StartWorkflowRequestBodyFolderTypeField;
    /**
     * The id of the folder. */
    readonly id?: string;
    readonly rawData?: SerializedData;
}
export interface StartWorkflowRequestBody {
    /**
     * The type of the parameters object. */
    readonly type?: StartWorkflowRequestBodyTypeField;
    /**
     * The flow that will be triggered. */
    readonly flow: StartWorkflowRequestBodyFlowField;
    /**
     * The array of files for which the workflow should start. All files
     * must be in the workflow's configured folder. */
    readonly files: readonly StartWorkflowRequestBodyFilesField[];
    /**
     * The folder object for which the workflow is configured. */
    readonly folder: StartWorkflowRequestBodyFolderField;
    /**
     * A configurable outcome the workflow should complete. */
    readonly outcomes?: readonly Outcome[];
    readonly rawData?: SerializedData;
}
export declare class StartWorkflowHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<StartWorkflowHeaders, 'extraHeaders'> & Partial<Pick<StartWorkflowHeaders, 'extraHeaders'>>);
}
export interface StartWorkflowHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class WorkflowsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<WorkflowsManager, 'networkSession' | 'getWorkflows' | 'startWorkflow'> & Partial<Pick<WorkflowsManager, 'networkSession'>>);
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
    getWorkflows(queryParams: GetWorkflowsQueryParams, optionalsInput?: GetWorkflowsOptionalsInput): Promise<Workflows>;
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
    startWorkflow(workflowId: string, requestBody: StartWorkflowRequestBody, optionalsInput?: StartWorkflowOptionalsInput): Promise<undefined>;
}
export interface WorkflowsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeStartWorkflowRequestBodyTypeField(val: StartWorkflowRequestBodyTypeField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyTypeField(val: SerializedData): StartWorkflowRequestBodyTypeField;
export declare function serializeStartWorkflowRequestBodyFlowField(val: StartWorkflowRequestBodyFlowField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFlowField(val: SerializedData): StartWorkflowRequestBodyFlowField;
export declare function serializeStartWorkflowRequestBodyFilesTypeField(val: StartWorkflowRequestBodyFilesTypeField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFilesTypeField(val: SerializedData): StartWorkflowRequestBodyFilesTypeField;
export declare function serializeStartWorkflowRequestBodyFilesField(val: StartWorkflowRequestBodyFilesField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFilesField(val: SerializedData): StartWorkflowRequestBodyFilesField;
export declare function serializeStartWorkflowRequestBodyFolderTypeField(val: StartWorkflowRequestBodyFolderTypeField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFolderTypeField(val: SerializedData): StartWorkflowRequestBodyFolderTypeField;
export declare function serializeStartWorkflowRequestBodyFolderField(val: StartWorkflowRequestBodyFolderField): SerializedData;
export declare function deserializeStartWorkflowRequestBodyFolderField(val: SerializedData): StartWorkflowRequestBodyFolderField;
export declare function serializeStartWorkflowRequestBody(val: StartWorkflowRequestBody): SerializedData;
export declare function deserializeStartWorkflowRequestBody(val: SerializedData): StartWorkflowRequestBody;
