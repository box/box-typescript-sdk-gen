import { FilesManager } from "./managers/files.generated.js";
import { DeveloperTokenAuth } from "./developerTokenAuth.js";
import { CCGAuth } from "./ccgAuth.js";
import { fetch, FetchOptions, FetchResponse } from "./fetch.js";
import { deserializeJSON, JSON } from "./json.js";
export type ClientAuthField = DeveloperTokenAuth | CCGAuth;
export class Client {
    readonly auth!: ClientAuthField;
    readonly files: FilesManager;
    constructor(fields: Omit<Client, "files">) {
        Object.assign(this, fields);
        this.files = new FilesManager({ auth: this.auth });
    }
}
