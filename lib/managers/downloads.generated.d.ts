import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetDownloadFileUrlOptionals {
    readonly queryParams: GetDownloadFileUrlQueryParams;
    readonly headers: GetDownloadFileUrlHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetDownloadFileUrlOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetDownloadFileUrlOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetDownloadFileUrlOptionalsInput {
    readonly queryParams?: GetDownloadFileUrlQueryParams;
    readonly headers?: GetDownloadFileUrlHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class DownloadFileOptionals {
    readonly queryParams: DownloadFileQueryParams;
    readonly headers: DownloadFileHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<DownloadFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<DownloadFileOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface DownloadFileOptionalsInput {
    readonly queryParams?: DownloadFileQueryParams;
    readonly headers?: DownloadFileHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetDownloadFileUrlQueryParams {
    /**
     * The file version to download. */
    readonly version?: string;
    /**
     * An optional access token that can be used to pre-authenticate this request, which means that a download link can be shared with a browser or a third party service without them needing to know how to handle the authentication.
     * When using this parameter, please make sure that the access token is sufficiently scoped down to only allow read access to that file and no other files or folders. */
    readonly accessToken?: string;
}
export declare class GetDownloadFileUrlHeaders {
    /**
     * The byte range of the content to download.
     *
     * The format `bytes={start_byte}-{end_byte}` can be used to specify
     * what section of the file to download. */
    readonly range?: string;
    /**
     * The URL, and optional password, for the shared link of this item.
     *
     * This header can be used to access items that have not been
     * explicitly shared with a user.
     *
     * Use the format `shared_link=[link]` or if a password is required then
     * use `shared_link=[link]&shared_link_password=[password]`.
     *
     * This header can be used on the file or folder shared, as well as on any files
     * or folders nested within the item. */
    readonly boxapi?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetDownloadFileUrlHeaders, 'extraHeaders'> & Partial<Pick<GetDownloadFileUrlHeaders, 'extraHeaders'>>);
}
export interface GetDownloadFileUrlHeadersInput {
    /**
     * The byte range of the content to download.
     *
     * The format `bytes={start_byte}-{end_byte}` can be used to specify
     * what section of the file to download. */
    readonly range?: string;
    /**
     * The URL, and optional password, for the shared link of this item.
     *
     * This header can be used to access items that have not been
     * explicitly shared with a user.
     *
     * Use the format `shared_link=[link]` or if a password is required then
     * use `shared_link=[link]&shared_link_password=[password]`.
     *
     * This header can be used on the file or folder shared, as well as on any files
     * or folders nested within the item. */
    readonly boxapi?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface DownloadFileQueryParams {
    /**
     * The file version to download. */
    readonly version?: string;
    /**
     * An optional access token that can be used to pre-authenticate this request, which means that a download link can be shared with a browser or a third party service without them needing to know how to handle the authentication.
     * When using this parameter, please make sure that the access token is sufficiently scoped down to only allow read access to that file and no other files or folders. */
    readonly accessToken?: string;
}
export declare class DownloadFileHeaders {
    /**
     * The byte range of the content to download.
     *
     * The format `bytes={start_byte}-{end_byte}` can be used to specify
     * what section of the file to download. */
    readonly range?: string;
    /**
     * The URL, and optional password, for the shared link of this item.
     *
     * This header can be used to access items that have not been
     * explicitly shared with a user.
     *
     * Use the format `shared_link=[link]` or if a password is required then
     * use `shared_link=[link]&shared_link_password=[password]`.
     *
     * This header can be used on the file or folder shared, as well as on any files
     * or folders nested within the item. */
    readonly boxapi?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<DownloadFileHeaders, 'extraHeaders'> & Partial<Pick<DownloadFileHeaders, 'extraHeaders'>>);
}
export interface DownloadFileHeadersInput {
    /**
     * The byte range of the content to download.
     *
     * The format `bytes={start_byte}-{end_byte}` can be used to specify
     * what section of the file to download. */
    readonly range?: string;
    /**
     * The URL, and optional password, for the shared link of this item.
     *
     * This header can be used to access items that have not been
     * explicitly shared with a user.
     *
     * Use the format `shared_link=[link]` or if a password is required then
     * use `shared_link=[link]&shared_link_password=[password]`.
     *
     * This header can be used on the file or folder shared, as well as on any files
     * or folders nested within the item. */
    readonly boxapi?: string;
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class DownloadsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<DownloadsManager, 'networkSession' | 'getDownloadFileUrl' | 'downloadFile'> & Partial<Pick<DownloadsManager, 'networkSession'>>);
    /**
       * Returns the contents of a file in binary format.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetDownloadFileUrlOptionalsInput} optionalsInput
       * @returns {Promise<string>}
       */
    getDownloadFileUrl(fileId: string, optionalsInput?: GetDownloadFileUrlOptionalsInput): Promise<string>;
    /**
       * Returns the contents of a file in binary format.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {DownloadFileOptionalsInput} optionalsInput
       * @returns {Promise<undefined | ByteStream>}
       */
    downloadFile(fileId: string, optionalsInput?: DownloadFileOptionalsInput): Promise<undefined | ByteStream>;
}
export interface DownloadsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=downloads.generated.d.ts.map