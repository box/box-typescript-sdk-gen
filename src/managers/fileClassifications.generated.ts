import { serializeClassification } from "../schemas.generated.js";
import { deserializeClassification } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { Classification } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
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
import { isJson } from "../json.js";
export class GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export class CreateFileMetadataEnterpriseSecurityClassificationHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateFileMetadataEnterpriseSecurityClassificationHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg) {
        Object.assign(this, fields);
    }
}
export class FileClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileClassificationsManager, "getFileMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFileMetadataEnterpriseSecurityClassification" | "deleteFileMetadataEnterpriseSecurityClassification">) {
        Object.assign(this, fields);
    }
    async getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string, headers: GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg = new GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg({})): Promise<Classification> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJson(response.text));
    }
    async createFileMetadataEnterpriseSecurityClassification(fileId: string, requestBody: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = {} satisfies CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg, headers: CreateFileMetadataEnterpriseSecurityClassificationHeadersArg = new CreateFileMetadataEnterpriseSecurityClassificationHeadersArg({})): Promise<Classification> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJson(response.text));
    }
    async deleteFileMetadataEnterpriseSecurityClassification(fileId: string, headers: DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg = new DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg): Json {
    return { ["Box__Security__Classification__Key"]: val.boxSecurityClassificationKey };
}
export function deserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(val: any): CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
    const boxSecurityClassificationKey: undefined | string = isJson(val.Box__Security__Classification__Key, "string") ? val.Box__Security__Classification__Key : void 0;
    return { boxSecurityClassificationKey: boxSecurityClassificationKey } satisfies CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg;
}
