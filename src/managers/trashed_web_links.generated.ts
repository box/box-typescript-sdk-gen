import { TrashWebLink } from "../schemas.generated.js";
import { deserializeTrashWebLink } from "../schemas.generated.js";
import { serializeTrashWebLink } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "../fetch.js";
import { deserializeJSON, JSON } from "../json.js";
export type TrashedWebLinksManagerAuthField = DeveloperTokenAuth | CCGAuth;
export interface GetWebLinksIdTrashOptionsArg {
    readonly fields?: string;
}
export class TrashedWebLinksManager {
    readonly auth!: TrashedWebLinksManagerAuthField;
    constructor(fields: Omit<TrashedWebLinksManager, "getWebLinksIdTrash" | "deleteWebLinksIdTrash">) {
        Object.assign(this, fields);
    }
    async getWebLinksIdTrash(webLinkId: string, options: GetWebLinksIdTrashOptionsArg = {} satisfies GetWebLinksIdTrashOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash") as string, { method: "GET", params: { ["fields"]: options.fields }, auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeTrashWebLink(deserializeJSON(response.text) as JSON);
    }
    async deleteWebLinksIdTrash(webLinkId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/web_links/", webLinkId, "/trash") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
