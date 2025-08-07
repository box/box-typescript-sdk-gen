import { FileVersionRetentions } from '../schemas/fileVersionRetentions.generated.js';
import { FileVersionRetention } from '../schemas/fileVersionRetention.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class GetFileVersionRetentionByIdOptionals {
    readonly headers: GetFileVersionRetentionByIdHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileVersionRetentionByIdOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetFileVersionRetentionByIdOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetFileVersionRetentionByIdOptionalsInput {
    readonly headers?: GetFileVersionRetentionByIdHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type GetFileVersionRetentionsQueryParamsDispositionActionField = 'permanently_delete' | 'remove_retention' | string;
export interface GetFileVersionRetentionsQueryParams {
    /**
     * Filters results by files with this ID. */
    readonly fileId?: string;
    /**
     * Filters results by file versions with this ID. */
    readonly fileVersionId?: string;
    /**
     * Filters results by the retention policy with this ID. */
    readonly policyId?: string;
    /**
     * Filters results by the retention policy with this disposition
     * action. */
    readonly dispositionAction?: GetFileVersionRetentionsQueryParamsDispositionActionField;
    /**
     * Filters results by files that will have their disposition
     * come into effect before this date. */
    readonly dispositionBefore?: string;
    /**
     * Filters results by files that will have their disposition
     * come into effect after this date. */
    readonly dispositionAfter?: string;
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
export declare class GetFileVersionRetentionsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionRetentionsHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionRetentionsHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionRetentionsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetFileVersionRetentionByIdHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileVersionRetentionByIdHeaders, 'extraHeaders'> & Partial<Pick<GetFileVersionRetentionByIdHeaders, 'extraHeaders'>>);
}
export interface GetFileVersionRetentionByIdHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class FileVersionRetentionsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<FileVersionRetentionsManager, 'networkSession' | 'getFileVersionRetentions' | 'getFileVersionRetentionById'> & Partial<Pick<FileVersionRetentionsManager, 'networkSession'>>);
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
    getFileVersionRetentions(queryParams?: GetFileVersionRetentionsQueryParams, headersInput?: GetFileVersionRetentionsHeadersInput, cancellationToken?: CancellationToken): Promise<FileVersionRetentions>;
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
    getFileVersionRetentionById(fileVersionRetentionId: string, optionalsInput?: GetFileVersionRetentionByIdOptionalsInput): Promise<FileVersionRetention>;
}
export interface FileVersionRetentionsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeGetFileVersionRetentionsQueryParamsDispositionActionField(val: GetFileVersionRetentionsQueryParamsDispositionActionField): SerializedData;
export declare function deserializeGetFileVersionRetentionsQueryParamsDispositionActionField(val: SerializedData): GetFileVersionRetentionsQueryParamsDispositionActionField;
//# sourceMappingURL=fileVersionRetentions.generated.d.ts.map