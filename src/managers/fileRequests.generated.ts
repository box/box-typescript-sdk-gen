import { newSerializeFileRequest } from "../schemas.generated.js";
import { newDeserializeFileRequest } from "../schemas.generated.js";
import { newSerializeClientError } from "../schemas.generated.js";
import { newDeserializeClientError } from "../schemas.generated.js";
import { newSerializeFileRequestUpdateRequest } from "../schemas.generated.js";
import { newDeserializeFileRequestUpdateRequest } from "../schemas.generated.js";
import { newSerializeFileRequestCopyRequest } from "../schemas.generated.js";
import { newDeserializeFileRequestCopyRequest } from "../schemas.generated.js";
import { FileRequest } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { FileRequestUpdateRequest } from "../schemas.generated.js";
import { FileRequestCopyRequest } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { toMap } from "../utils.js";
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
        return newDeserializeFileRequest(deserializeJson(response.text));
    }
    async updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, headers: undefined | UpdateFileRequestByIdHeadersArg = {} satisfies UpdateFileRequestByIdHeadersArg): Promise<FileRequest> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "PUT", headers: toMap(headers), body: serializeJson(newSerializeFileRequestUpdateRequest(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileRequest(deserializeJson(response.text));
    }
    async deleteFileRequestById(fileRequestId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest): Promise<FileRequest> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId, "/copy") as string, { method: "POST", body: serializeJson(newSerializeFileRequestCopyRequest(requestBody)), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return newDeserializeFileRequest(deserializeJson(response.text));
    }
}
export function newSerializeUpdateFileRequestByIdHeadersArg(val: UpdateFileRequestByIdHeadersArg): Json {
    return { ["ifMatch"]: val.ifMatch };
}
export function newDeserializeUpdateFileRequestByIdHeadersArg(val: any): UpdateFileRequestByIdHeadersArg {
    const ifMatch: undefined | string = isJson(val.ifMatch, "string") ? val.ifMatch : void 0;
    return { ifMatch: ifMatch } satisfies UpdateFileRequestByIdHeadersArg;
}
