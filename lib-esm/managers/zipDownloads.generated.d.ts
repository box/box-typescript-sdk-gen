import { ZipDownload } from '../schemas/zipDownload.generated.js';
import { ZipDownloadRequest } from '../schemas/zipDownloadRequest.generated.js';
import { ZipDownloadStatus } from '../schemas/zipDownloadStatus.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
export declare class CreateZipDownloadOptionals {
    readonly headers: CreateZipDownloadHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<CreateZipDownloadOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<CreateZipDownloadOptionals, 'headers' | 'cancellationToken'>>);
}
export interface CreateZipDownloadOptionalsInput {
    readonly headers?: CreateZipDownloadHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetZipDownloadContentOptionals {
    readonly headers: GetZipDownloadContentHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetZipDownloadContentOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetZipDownloadContentOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetZipDownloadContentOptionalsInput {
    readonly headers?: GetZipDownloadContentHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetZipDownloadStatusOptionals {
    readonly headers: GetZipDownloadStatusHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetZipDownloadStatusOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<GetZipDownloadStatusOptionals, 'headers' | 'cancellationToken'>>);
}
export interface GetZipDownloadStatusOptionalsInput {
    readonly headers?: GetZipDownloadStatusHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DownloadZipOptionals {
    readonly headers: DownloadZipHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DownloadZipOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<DownloadZipOptionals, 'headers' | 'cancellationToken'>>);
}
export interface DownloadZipOptionalsInput {
    readonly headers?: DownloadZipHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class CreateZipDownloadHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<CreateZipDownloadHeaders, 'extraHeaders'> & Partial<Pick<CreateZipDownloadHeaders, 'extraHeaders'>>);
}
export interface CreateZipDownloadHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetZipDownloadContentHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetZipDownloadContentHeaders, 'extraHeaders'> & Partial<Pick<GetZipDownloadContentHeaders, 'extraHeaders'>>);
}
export interface GetZipDownloadContentHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class GetZipDownloadStatusHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetZipDownloadStatusHeaders, 'extraHeaders'> & Partial<Pick<GetZipDownloadStatusHeaders, 'extraHeaders'>>);
}
export interface GetZipDownloadStatusHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DownloadZipHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DownloadZipHeaders, 'extraHeaders'> & Partial<Pick<DownloadZipHeaders, 'extraHeaders'>>);
}
export interface DownloadZipHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class ZipDownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<ZipDownloadsManager, 'networkSession' | 'createZipDownload' | 'getZipDownloadContent' | 'getZipDownloadStatus' | 'downloadZip'> & Partial<Pick<ZipDownloadsManager, 'networkSession'>>);
    /**
     * Creates a request to download multiple files and folders as a single `zip`
     * archive file. This API does not return the archive but instead performs all
     * the checks to ensure that the user has access to all the items, and then
     * returns a `download_url` and a `status_url` that can be used to download the
     * archive.
     *
     * The limit for an archive is either the Account's upload limit or
     * 10,000 files, whichever is met first.
     *
     * **Note**: Downloading a large file can be
     * affected by various
     * factors such as distance, network latency,
     * bandwidth, and congestion, as well as packet loss
     * ratio and current server load.
     * For these reasons we recommend that a maximum ZIP archive
     * total size does not exceed 25GB.
     * @param {ZipDownloadRequest} requestBody Request body of createZipDownload method
     * @param {CreateZipDownloadOptionalsInput} optionalsInput
     * @returns {Promise<ZipDownload>}
     */
    createZipDownload(requestBody: ZipDownloadRequest, optionalsInput?: CreateZipDownloadOptionalsInput): Promise<ZipDownload>;
    /**
       * Returns the contents of a `zip` archive in binary format. This URL does not
       * require any form of authentication and could be used in a user's browser to
       * download the archive to a user's device.
       *
       * By default, this URL is only valid for a few seconds from the creation of
       * the request for this archive. Once a download has started it can not be
       * stopped and resumed, instead a new request for a zip archive would need to
       * be created.
       *
       * The URL of this endpoint should not be considered as fixed. Instead, use
       * the [Create zip download](e://post_zip_downloads) API to request to create a
       * `zip` archive, and then follow the `download_url` field in the response to
       * this endpoint.
       * @param {string} downloadUrl The URL that can be used to download created `zip` archive.
       Example: `https://dl.boxcloud.com/2.0/zip_downloads/29l00nfxDyHOt7RphI9zT_w==nDnZEDjY2S8iEWWCHEEiptFxwoWojjlibZjJ6geuE5xnXENDTPxzgbks_yY=/content`
       * @param {GetZipDownloadContentOptionalsInput} optionalsInput
       * @returns {Promise<ByteStream>}
       */
    getZipDownloadContent(downloadUrl: string, optionalsInput?: GetZipDownloadContentOptionalsInput): Promise<ByteStream>;
    /**
       * Returns the download status of a `zip` archive, allowing an application to
       * inspect the progress of the download as well as the number of items that
       * might have been skipped.
       *
       * This endpoint can only be accessed once the download has started.
       * Subsequently this endpoint is valid for 12 hours from the start of the
       * download.
       *
       * The URL of this endpoint should not be considered as fixed. Instead, use
       * the [Create zip download](e://post_zip_downloads) API to request to create a
       * `zip` archive, and then follow the `status_url` field in the response to
       * this endpoint.
       * @param {string} statusUrl The URL that can be used to get the status of the `zip` archive being downloaded.
       Example: `https://dl.boxcloud.com/2.0/zip_downloads/29l00nfxDyHOt7RphI9zT_w==nDnZEDjY2S8iEWWCHEEiptFxwoWojjlibZjJ6geuE5xnXENDTPxzgbks_yY=/status`
       * @param {GetZipDownloadStatusOptionalsInput} optionalsInput
       * @returns {Promise<ZipDownloadStatus>}
       */
    getZipDownloadStatus(statusUrl: string, optionalsInput?: GetZipDownloadStatusOptionalsInput): Promise<ZipDownloadStatus>;
    /**
     * Creates a zip and downloads its content
     * @param {ZipDownloadRequest} requestBody Zip download request body
     * @param {DownloadZipOptionalsInput} optionalsInput
     * @returns {Promise<ByteStream>}
     */
    downloadZip(requestBody: ZipDownloadRequest, optionalsInput?: DownloadZipOptionalsInput): Promise<ByteStream>;
}
export interface ZipDownloadsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
