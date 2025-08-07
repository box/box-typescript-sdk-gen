import { AppItemAssociations } from '../schemas/appItemAssociations.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
export declare class GetFileAppItemAssociationsOptionals {
    readonly queryParams: GetFileAppItemAssociationsQueryParams;
    readonly headers: GetFileAppItemAssociationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFileAppItemAssociationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFileAppItemAssociationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFileAppItemAssociationsOptionalsInput {
    readonly queryParams?: GetFileAppItemAssociationsQueryParams;
    readonly headers?: GetFileAppItemAssociationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class GetFolderAppItemAssociationsOptionals {
    readonly queryParams: GetFolderAppItemAssociationsQueryParams;
    readonly headers: GetFolderAppItemAssociationsHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<GetFolderAppItemAssociationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'> & Partial<Pick<GetFolderAppItemAssociationsOptionals, 'queryParams' | 'headers' | 'cancellationToken'>>);
}
export interface GetFolderAppItemAssociationsOptionalsInput {
    readonly queryParams?: GetFolderAppItemAssociationsQueryParams;
    readonly headers?: GetFolderAppItemAssociationsHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetFileAppItemAssociationsQueryParams {
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * If given, only return app items for this application type. */
    readonly applicationType?: string;
}
export declare class GetFileAppItemAssociationsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFileAppItemAssociationsHeaders, 'extraHeaders'> & Partial<Pick<GetFileAppItemAssociationsHeaders, 'extraHeaders'>>);
}
export interface GetFileAppItemAssociationsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export interface GetFolderAppItemAssociationsQueryParams {
    /**
     * The maximum number of items to return per page. */
    readonly limit?: number;
    /**
     * Defines the position marker at which to begin returning results. This is
     * used when paginating using marker-based pagination.
     *
     * This requires `usemarker` to be set to `true`. */
    readonly marker?: string;
    /**
     * If given, returns only app items for this application type. */
    readonly applicationType?: string;
}
export declare class GetFolderAppItemAssociationsHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<GetFolderAppItemAssociationsHeaders, 'extraHeaders'> & Partial<Pick<GetFolderAppItemAssociationsHeaders, 'extraHeaders'>>);
}
export interface GetFolderAppItemAssociationsHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class AppItemAssociationsManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<AppItemAssociationsManager, 'networkSession' | 'getFileAppItemAssociations' | 'getFolderAppItemAssociations'> & Partial<Pick<AppItemAssociationsManager, 'networkSession'>>);
    /**
       * **This is a beta feature, which means that its availability might be limited.**
       * Returns all app items the file is associated with. This includes app items
       * associated with ancestors of the file. Assuming the context user has access
       * to the file, the type/ids are revealed even if the context user does not
       * have **View** permission on the app item.
       * @param {string} fileId The unique identifier that represents a file.
      
      The ID for any file can be determined
      by visiting a file in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/files/123`
      the `file_id` is `123`.
      Example: "12345"
       * @param {GetFileAppItemAssociationsOptionalsInput} optionalsInput
       * @returns {Promise<AppItemAssociations>}
       */
    getFileAppItemAssociations(fileId: string, optionalsInput?: GetFileAppItemAssociationsOptionalsInput): Promise<AppItemAssociations>;
    /**
       * **This is a beta feature, which means that its availability might be limited.**
       * Returns all app items the folder is associated with. This includes app items
       * associated with ancestors of the folder. Assuming the context user has access
       * to the folder, the type/ids are revealed even if the context user does not
       * have **View** permission on the app item.
       * @param {string} folderId The unique identifier that represent a folder.
      
      The ID for any folder can be determined
      by visiting this folder in the web application
      and copying the ID from the URL. For example,
      for the URL `https://*.app.box.com/folder/123`
      the `folder_id` is `123`.
      
      The root folder of a Box account is
      always represented by the ID `0`.
      Example: "12345"
       * @param {GetFolderAppItemAssociationsOptionalsInput} optionalsInput
       * @returns {Promise<AppItemAssociations>}
       */
    getFolderAppItemAssociations(folderId: string, optionalsInput?: GetFolderAppItemAssociationsOptionalsInput): Promise<AppItemAssociations>;
}
export interface AppItemAssociationsManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
//# sourceMappingURL=appItemAssociations.generated.d.ts.map