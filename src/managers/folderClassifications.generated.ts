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
export class GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg) {
        Object.assign(this, fields);
    }
}
export interface CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export class CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg) {
        Object.assign(this, fields);
    }
}
export class DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    } = {};
    constructor(fields: DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg) {
        Object.assign(this, fields);
    }
}
export class FolderClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FolderClassificationsManager, "getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFolderMetadataEnterpriseSecurityClassification" | "deleteFolderMetadataEnterpriseSecurityClassification">) {
        Object.assign(this, fields);
    }
    async getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(folderId: string, headers: GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg = new GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg({})): Promise<Classification> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "GET", headers: headersMap, responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJson(response.text));
    }
    async createFolderMetadataEnterpriseSecurityClassification(folderId: string, requestBody: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg = {} satisfies CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg, headers: CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg = new CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg({})): Promise<Classification> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "POST", headers: headersMap, body: serializeJson(serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(requestBody)), contentType: "application/json", responseFormat: "json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJson(response.text));
    }
    async deleteFolderMetadataEnterpriseSecurityClassification(folderId: string, headers: DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg = new DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg({})): Promise<undefined> {
        const headersMap: {
            readonly [key: string]: string;
        } = prepareParams({ ...{}, ...headers.extraHeaders });
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/folders/", folderId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "DELETE", headers: headersMap, responseFormat: void 0, auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return void 0;
    }
}
export function serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(val: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg): Json {
    return { ["Box__Security__Classification__Key"]: val.boxSecurityClassificationKey };
}
export function deserializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(val: any): CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
    const boxSecurityClassificationKey: undefined | string = isJson(val.Box__Security__Classification__Key, "string") ? val.Box__Security__Classification__Key : void 0;
    return { boxSecurityClassificationKey: boxSecurityClassificationKey } satisfies CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg;
}
