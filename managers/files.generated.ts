import { File } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { TrashFileRestored } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import Immutable from "immutable";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
export type FilesManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetByIdOptionsArg {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     * 
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested.
     * 
     * Additionally this field can be used to query any metadata
     * applied to the file by specifying the `metadata` field as well
     * as the scope and key of the template to retrieve, for example
     * `?field=metadata.enterprise_12345.contractTemplate`. */
    readonly fields?: string[];
    /**
     * Ensures an item is only returned if it has changed.
     * 
     * Pass in the item's last observed `etag` value
     * into this header and the endpoint will fail
     * with a `304 Not Modified` if the item has not
     * changed since. */
    readonly ifNoneMatch?: string;
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
}
export interface CreateRequestBodyArgParentField {
    /**
     * The ID of parent item */
    readonly id?: string;
}
export interface CreateRequestBodyArg {
    /**
     * An optional new name for the file. */
    readonly name?: string;
    readonly parent?: CreateRequestBodyArgParentField;
}
export interface CreateOptionsArg {
    /**
     * A comma-separated list of attributes to include in the
     * response. This can be used to request fields that are
     * not normally returned in a standard response.
     * 
     * Be aware that specifying this parameter will have the
     * effect that none of the standard fields are returned in
     * the response unless explicitly specified, instead only
     * fields for the mini representation are returned, additional
     * to the fields requested. */
    readonly fields?: string[];
}
export class FilesManager {
    readonly auth!: FilesManagerAuthField;
    constructor(fields: Omit<FilesManager, "getById" | "create">) {
        Object.assign(this, fields);
    }
    async getById(fileId: string, xRepHints: string, options: GetByIdOptionsArg = ({} as GetByIdOptionsArg)): Promise<File> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, ({ method: "GET", params: Immutable.Map<string, any>([
                ["fields", options.fields]
            ]), headers: Immutable.Map<string, any>([
                ["if-none-match", options.ifNoneMatch],
                ["boxapi", options.boxapi],
                ["x-rep-hints", xRepHints]
            ]), auth: this.auth } as FetchOptions)) as FetchResponse;
        return JSON.parse(response.text) as File;
    }
    async create(fileId: string, requestBody: CreateRequestBodyArg, options: CreateOptionsArg = ({} as CreateOptionsArg)): Promise<TrashFileRestored> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId) as string, ({ method: "POST", params: Immutable.Map<string, any>([
                ["fields", options.fields]
            ]), body: JSON.stringify(requestBody), auth: this.auth } as FetchOptions)) as FetchResponse;
        return JSON.parse(response.text) as TrashFileRestored;
    }
}
