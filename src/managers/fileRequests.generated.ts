import { serializeFileRequest } from "../schemas.generated.js";
import { deserializeFileRequest } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeFileRequestUpdateRequest } from "../schemas.generated.js";
import { deserializeFileRequestUpdateRequest } from "../schemas.generated.js";
import { serializeFileRequestCopyRequest } from "../schemas.generated.js";
import { deserializeFileRequestCopyRequest } from "../schemas.generated.js";
import { FileRequest } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FileRequestUpdateRequest } from "../schemas.generated.js";
import { FileRequestCopyRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { prepareParams } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
import { isJson } from "../json.js";
export interface UpdateFileRequestByIdHeadersArg {
    readonly ifMatch?: string;
}
export class FileRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileRequestsManager, "getFileRequestById" | "updateFileRequestById" | "deleteFileRequestById" | "createFileRequestCopy">) {
        Object.assign(this, fields);
    }
    async getFileRequestById(fileRequestId: string): Promise<FileRequest> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileRequest(deserializeJson(response.text));
    }
    async updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, headers: undefined | UpdateFileRequestByIdHeadersArg = {} satisfies UpdateFileRequestByIdHeadersArg): Promise<FileRequest> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "PUT", headers: prepareParams(serializeUpdateFileRequestByIdHeadersArg(headers)), body: serializeJson(serializeFileRequestUpdateRequest(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileRequest(deserializeJson(response.text));
    }
    async deleteFileRequestById(fileRequestId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest): Promise<FileRequest> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId, "/copy") as string, { method: "POST", body: serializeJson(serializeFileRequestCopyRequest(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileRequest(deserializeJson(response.text));
    }
}
export function serializeUpdateFileRequestByIdHeadersArg(val: UpdateFileRequestByIdHeadersArg): Json {
    return { ["if-match"]: val.ifMatch };
}
export function deserializeUpdateFileRequestByIdHeadersArg(val: any): UpdateFileRequestByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val["if-match"], "string") ? val["if-match"] : void 0;
    return { ifMatch: ifMatch } satisfies UpdateFileRequestByIdHeadersArg;
}
