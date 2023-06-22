import { FolderLocks } from "../schemas.generated.js";
import { deserializeFolderLocks } from "../schemas.generated.js";
import { serializeFolderLocks } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { FolderLock } from "../schemas.generated.js";
import { deserializeFolderLock } from "../schemas.generated.js";
import { serializeFolderLock } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface CreateFolderLockRequestBodyArgLockedOperationsField {
    readonly move: boolean;
    readonly delete: boolean;
}
export interface CreateFolderLockRequestBodyArgFolderField {
    readonly type: string;
    readonly id: string;
}
export interface CreateFolderLockRequestBodyArg {
    readonly lockedOperations?: CreateFolderLockRequestBodyArgLockedOperationsField;
    readonly folder: CreateFolderLockRequestBodyArgFolderField;
}
export class FolderLocksManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderLocksManager, "getFolderLocks" | "createFolderLock" | "deleteFolderLockById">) {
        Object.assign(this, fields);
    }
    async getFolderLocks(folderId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folder_locks") as string, { method: "GET", params: { ["folder_id"]: folderId }, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderLocks(deserializeJson(response.text));
    }
    async createFolderLock(requestBody: CreateFolderLockRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folder_locks") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFolderLock(deserializeJson(response.text));
    }
    async deleteFolderLockById(folderLockId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folder_locks/", folderLockId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
