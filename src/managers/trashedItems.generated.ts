import { serializeItems } from "../schemas.generated.js";
import { deserializeItems } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { Items } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type GetFolderTrashItemsQueryParamsArgDirectionField = "ASC" | "DESC";
export type GetFolderTrashItemsQueryParamsArgSortField = "name" | "date" | "size";
export interface GetFolderTrashItemsQueryParamsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly direction?: GetFolderTrashItemsQueryParamsArgDirectionField;
    readonly sort?: GetFolderTrashItemsQueryParamsArgSortField;
}
export class GetFolderTrashItemsHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFolderTrashItemsHeadersArg) {
        Object.assign(this, fields);
    }
}
export class TrashedItemsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<TrashedItemsManager, "getFolderTrashItems">) {
        Object.assign(this, fields);
    }
    async getFolderTrashItems(queryParams: GetFolderTrashItemsQueryParamsArg = {} satisfies GetFolderTrashItemsQueryParamsArg, headers: GetFolderTrashItemsHeadersArg = new GetFolderTrashItemsHeadersArg({})): Promise<Items> {
        const queryParamsMap: {
            readonly [key: string]: string;
        } = prepareParams({ ["fields"]: toString(queryParams.fields), ["limit"]: toString(queryParams.limit), ["offset"]: toString(queryParams.offset), ["usemarker"]: toString(queryParams.usemarker), ["marker"]: toString(queryParams.marker), ["direction"]: toString(queryParams.direction), ["sort"]: toString(queryParams.sort) });
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/trash/items") as string, { method: "GET", params: queryParamsMap, headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeItems(deserializeJson(response.text));
    }
}
