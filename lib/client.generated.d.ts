import { FilesManager } from "./managers/files.generated.js";
import { DeveloperTokenAuth } from "./developerTokenAuth.js";
import { CCGAuth } from "./ccgAuth.js";
export type ClientAuthField = DeveloperTokenAuth | CCGAuth;
export declare class Client {
    readonly auth: ClientAuthField;
    readonly files: FilesManager;
    constructor(fields: Omit<Client, "files">);
}
