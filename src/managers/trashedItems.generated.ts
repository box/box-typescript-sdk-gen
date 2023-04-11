import { Items } from "../schemas.generated.js";
import { deserializeItems } from "../schemas.generated.js";
import { serializeItems } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type TrashedItemsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export type GetFolderTrashItemsOptionsArgDirectionField = "ASC" | "DESC";
export type GetFolderTrashItemsOptionsArgSortField = "id" | "name" | "date" | "size";
export interface GetFolderTrashItemsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly direction?: GetFolderTrashItemsOptionsArgDirectionField;
    readonly sort?: GetFolderTrashItemsOptionsArgSortField;
}
export class TrashedItemsManager {
    readonly auth!: TrashedItemsManagerAuthField;
    constructor(fields: Omit<TrashedItemsManager, "getFolderTrashItems">) {
        Object.assign(this, fields);
    }
    async getFolderTrashItems(options: GetFolderTrashItemsOptionsArg = {} satisfies GetFolderTrashItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/trash/items") as string, { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset, ["usemarker"]: options.usemarker, ["marker"]: options.marker, ["direction"]: options.direction, ["sort"]: options.sort }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return deserializeItems(deserializeJSON(response.text) as JSON);
    }
}
