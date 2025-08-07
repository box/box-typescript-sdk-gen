import { ArchivesV2025R0 } from '../schemas/v2025R0/archivesV2025R0.generated.js';
import { BoxVersionHeaderV2025R0 } from '../parameters/v2025R0/boxVersionHeaderV2025R0.generated.js';
import { ArchiveV2025R0 } from '../schemas/v2025R0/archiveV2025R0.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class CreateArchiveV2025R0Optionals {
    readonly headers: CreateArchiveV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateArchiveV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateArchiveV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateArchiveV2025R0OptionalsInput {
    readonly headers?: CreateArchiveV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DeleteArchiveByIdV2025R0Optionals {
    readonly headers: DeleteArchiveByIdV2025R0Headers;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DeleteArchiveByIdV2025R0Optionals, 'headers' | 'cancellationToken'> & Partial<Pick<DeleteArchiveByIdV2025R0Optionals, 'headers' | 'cancellationToken'>>);
}
export interface DeleteArchiveByIdV2025R0OptionalsInput {
    readonly headers?: DeleteArchiveByIdV2025R0Headers;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetArchivesV2025R0QueryParams {
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination. */
    readonly marker?: string;
}
export declare class GetArchivesV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetArchivesV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<GetArchivesV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface GetArchivesV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface CreateArchiveV2025R0RequestBody {
    /**
     * The name of the archive. */
    readonly name: string;
    readonly rawData?: SerializedData;
}
export declare class CreateArchiveV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateArchiveV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<CreateArchiveV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface CreateArchiveV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DeleteArchiveByIdV2025R0Headers {
    /**
     * Version header. */
    readonly boxVersion: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DeleteArchiveByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'> & Partial<Pick<DeleteArchiveByIdV2025R0Headers, 'boxVersion' | 'extraHeaders'>>);
}
export interface DeleteArchiveByIdV2025R0HeadersInput {
    /**
     * Version header. */
    readonly boxVersion?: BoxVersionHeaderV2025R0;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ArchivesManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ArchivesManager, 'networkSession' | 'getArchivesV2025R0' | 'createArchiveV2025R0' | 'deleteArchiveByIdV2025R0'> & Partial<Pick<ArchivesManager, 'networkSession'>>);
    /**
     * Retrieves archives for an enterprise.
     * @param {GetArchivesV2025R0QueryParams} queryParams Query parameters of getArchivesV2025R0 method
     * @param {GetArchivesV2025R0HeadersInput} headersInput Headers of getArchivesV2025R0 method
     * @param {CancellationToken} cancellationToken Token used for request cancellation.
     * @returns {Promise<ArchivesV2025R0>}
     */
    getArchivesV2025R0(queryParams?: GetArchivesV2025R0QueryParams, headersInput?: GetArchivesV2025R0HeadersInput, cancellationToken?: CancellationToken): Promise<ArchivesV2025R0>;
    /**
     * Creates an archive.
     * @param {CreateArchiveV2025R0RequestBody} requestBody Request body of createArchiveV2025R0 method
     * @param {CreateArchiveV2025R0OptionalsInput} optionalsInput
     * @returns {Promise<ArchiveV2025R0>}
     */
    createArchiveV2025R0(requestBody: CreateArchiveV2025R0RequestBody, optionalsInput?: CreateArchiveV2025R0OptionalsInput): Promise<ArchiveV2025R0>;
    /**
       * Permanently deletes an archive.
       * @param {string} archiveId The ID of the archive.
      Example: "982312"
       * @param {DeleteArchiveByIdV2025R0OptionalsInput} optionalsInput
       * @returns {Promise<undefined>}
       */
    deleteArchiveByIdV2025R0(archiveId: string, optionalsInput?: DeleteArchiveByIdV2025R0OptionalsInput): Promise<undefined>;
}
export interface ArchivesManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeCreateArchiveV2025R0RequestBody(val: CreateArchiveV2025R0RequestBody): SerializedData;
export declare function deserializeCreateArchiveV2025R0RequestBody(val: SerializedData): CreateArchiveV2025R0RequestBody;
