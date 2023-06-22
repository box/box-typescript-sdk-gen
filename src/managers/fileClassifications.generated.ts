import { Classification } from "../schemas.generated.js";
import { deserializeClassification } from "../schemas.generated.js";
import { serializeClassification } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export interface CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
    readonly boxSecurityClassificationKey?: string;
}
export class FileClassificationsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<FileClassificationsManager, "getFileMetadataEnterpriseSecurityClassification6VmVochwUWo" | "createFileMetadataEnterpriseSecurityClassification" | "deleteFileMetadataEnterpriseSecurityClassification">) {
        Object.assign(this, fields);
    }
    async getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJson(response.text));
    }
    async createFileMetadataEnterpriseSecurityClassification(fileId: string, requestBody: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeClassification(deserializeJson(response.text));
    }
    async deleteFileMetadataEnterpriseSecurityClassification(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/enterprise/securityClassification-6VMVochwUWo") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
