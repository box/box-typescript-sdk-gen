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
import { toString } from "../utils.js";
import { ByteStream } from "../utils.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
import { serializeJson } from "../json.js";
export class GetFileRequestByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileRequestByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class UpdateFileRequestByIdHeadersArg {
    readonly ifMatch?: string;
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: UpdateFileRequestByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteFileRequestByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFileRequestByIdHeadersArg) {
        Object.assign(this, fields);
    }
}
export class CreateFileRequestCopyHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateFileRequestCopyHeadersArg) {
        Object.assign(this, fields);
    }
}
export class FileRequestsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileRequestsManager, "getFileRequestById" | "updateFileRequestById" | "deleteFileRequestById" | "createFileRequestCopy">) {
        Object.assign(this, fields);
    }
    async getFileRequestById(fileRequestId: string, headers: GetFileRequestByIdHeadersArg = new GetFileRequestByIdHeadersArg({})): Promise<FileRequest> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileRequest(deserializeJson(response.text));
    }
    async updateFileRequestById(fileRequestId: string, requestBody: FileRequestUpdateRequest, headers: UpdateFileRequestByIdHeadersArg = new UpdateFileRequestByIdHeadersArg({})): Promise<FileRequest> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{ ["if-match"]: toString(headers.ifMatch) }, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "PUT", headers: headersMap, body: serializeJson(serializeFileRequestUpdateRequest(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileRequest(deserializeJson(response.text));
    }
    async deleteFileRequestById(fileRequestId: string, headers: DeleteFileRequestByIdHeadersArg = new DeleteFileRequestByIdHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId) as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
    async createFileRequestCopy(fileRequestId: string, requestBody: FileRequestCopyRequest, headers: CreateFileRequestCopyHeadersArg = new CreateFileRequestCopyHeadersArg({})): Promise<FileRequest> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/file_requests/", fileRequestId, "/copy") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeFileRequestCopyRequest(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeFileRequest(deserializeJson(response.text));
    }
}
