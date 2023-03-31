import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type TrashedWebLinksManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
export interface GetWebLinkTrashOptionsArg {
    readonly fields?: string;
}
export declare class TrashedWebLinksManager {
    readonly auth: TrashedWebLinksManagerAuthField;
    constructor(fields: Omit<TrashedWebLinksManager, "getWebLinkTrash" | "deleteWebLinkTrash">);
    getWebLinkTrash(webLinkId: string, options?: GetWebLinkTrashOptionsArg): Promise<any>;
    deleteWebLinkTrash(webLinkId: string): Promise<any>;
}
