import { FileRequest } from "../schemas.generated.js";
import { deserializeFileRequest } from "../schemas.generated.js";
import { serializeFileRequest } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { FileRequestUpdateRequest } from "../schemas.generated.js";
import { deserializeFileRequestUpdateRequest } from "../schemas.generated.js";
import { serializeFileRequestUpdateRequest } from "../schemas.generated.js";
import { FileRequestCopyRequest } from "../schemas.generated.js";
import { deserializeFileRequestCopyRequest } from "../schemas.generated.js";
import { serializeFileRequestCopyRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
export interface UpdateFileRequestByIdOptionsArg {
    readonly ifMatch?: string;
}
export class FileRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileRequestsManager, "getFileRequestById" | "updateFileRequestById" | "deleteFileRequestById" | "createFileRequestCopy">) {
        Object.assign(this, fields);
    }
    async getFileRequestById(fileRequestId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileRequest(deserializeJson(response.text));
    }
    async updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, options: UpdateFileRequestByIdOptionsArg = {} satisfies UpdateFileRequestByIdOptionsArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "PUT", headers: { ["if-match"]: options.ifMatch }, body: serializeJson(serializeFileRequestUpdateRequest(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileRequest(deserializeJson(response.text));
    }
    async deleteFileRequestById(fileRequestId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId, "/copy") as string, { method: "POST", body: serializeJson(serializeFileRequestCopyRequest(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileRequest(deserializeJson(response.text));
    }
}
