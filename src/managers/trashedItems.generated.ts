import { Items } from "../schemas.generated.js";
import { deserializeItems } from "../schemas.generated.js";
import { serializeItems } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type TrashedItemsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type GetFoldersTrashItemsOptionsArgDirectionField = "ASC" | "DESC";
export type GetFoldersTrashItemsOptionsArgSortField = "id" | "name" | "date" | "size";
export interface GetFoldersTrashItemsOptionsArg {
    readonly fields?: string;
    readonly limit?: number;
    readonly offset?: number;
    readonly usemarker?: boolean;
    readonly marker?: string;
    readonly direction?: GetFoldersTrashItemsOptionsArgDirectionField;
    readonly sort?: GetFoldersTrashItemsOptionsArgSortField;
}
export class TrashedItemsManager {
    readonly auth!: TrashedItemsManagerAuthField;
    constructor(fields: Omit<TrashedItemsManager, "getFoldersTrashItems">) {
        Object.assign(this, fields);
    }
    async getFoldersTrashItems(options: GetFoldersTrashItemsOptionsArg = {} satisfies GetFoldersTrashItemsOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/trash/items") as string, { method: "GET", params: { ["fields"]: options.fields, ["limit"]: options.limit, ["offset"]: options.offset, ["usemarker"]: options.usemarker, ["marker"]: options.marker, ["direction"]: options.direction, ["sort"]: options.sort }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeItems(deserializeJSON(response.text) as JSON);
    }
}
