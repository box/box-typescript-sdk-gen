import { SkillCardsMetadata } from "../schemas.generated.js";
import { deserializeSkillCardsMetadata } from "../schemas.generated.js";
import { serializeSkillCardsMetadata } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { KeywordSkillCard } from "../schemas.generated.js";
import { deserializeKeywordSkillCard } from "../schemas.generated.js";
import { serializeKeywordSkillCard } from "../schemas.generated.js";
import { TimelineSkillCard } from "../schemas.generated.js";
import { deserializeTimelineSkillCard } from "../schemas.generated.js";
import { serializeTimelineSkillCard } from "../schemas.generated.js";
import { TranscriptSkillCard } from "../schemas.generated.js";
import { deserializeTranscriptSkillCard } from "../schemas.generated.js";
import { serializeTranscriptSkillCard } from "../schemas.generated.js";
import { StatusSkillCard } from "../schemas.generated.js";
import { deserializeStatusSkillCard } from "../schemas.generated.js";
import { serializeStatusSkillCard } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { Json } from "../json.js";
export type CreateFileMetadataGlobalBoxSkillsCardRequestBodyArgCardsField = KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard;
export interface CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg {
    readonly cards: readonly CreateFileMetadataGlobalBoxSkillsCardRequestBodyArgCardsField[];
}
export type UpdateSkillInvocationByIdRequestBodyArgStatusField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export type UpdateSkillInvocationByIdRequestBodyArgMetadataFieldCardsField = KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard;
export interface UpdateSkillInvocationByIdRequestBodyArgMetadataField {
    readonly cards?: readonly UpdateSkillInvocationByIdRequestBodyArgMetadataFieldCardsField[];
}
export type UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = "file";
export interface UpdateSkillInvocationByIdRequestBodyArgFileField {
    readonly type?: UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField;
    readonly id?: string;
}
export type UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField = "file_version";
export interface UpdateSkillInvocationByIdRequestBodyArgFileVersionField {
    readonly type?: UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField;
    readonly id?: string;
}
export interface UpdateSkillInvocationByIdRequestBodyArgUsageField {
    readonly unit?: string;
    readonly value?: number;
}
export interface UpdateSkillInvocationByIdRequestBodyArg {
    readonly status: UpdateSkillInvocationByIdRequestBodyArgStatusField;
    readonly metadata: UpdateSkillInvocationByIdRequestBodyArgMetadataField;
    readonly file: UpdateSkillInvocationByIdRequestBodyArgFileField;
    readonly fileVersion?: UpdateSkillInvocationByIdRequestBodyArgFileVersionField;
    readonly usage?: UpdateSkillInvocationByIdRequestBodyArgUsageField;
}
export class SkillsManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SkillsManager, "getFileMetadataGlobalBoxSkillsCards" | "createFileMetadataGlobalBoxSkillsCard" | "deleteFileMetadataGlobalBoxSkillsCard" | "updateSkillInvocationById">) {
        Object.assign(this, fields);
    }
    async getFileMetadataGlobalBoxSkillsCards(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards") as string, { method: "GET", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSkillCardsMetadata(deserializeJson(response.text));
    }
    async createFileMetadataGlobalBoxSkillsCard(fileId: string, requestBody: CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards") as string, { method: "POST", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return deserializeSkillCardsMetadata(deserializeJson(response.text));
    }
    async deleteFileMetadataGlobalBoxSkillsCard(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards") as string, { method: "DELETE", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async updateSkillInvocationById(skillId: string, requestBody: UpdateSkillInvocationByIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/skill_invocations/", skillId) as string, { method: "PUT", body: JSON.stringify(requestBody), contentType: "application/json", auth: this.auth, networkSession: this.networkSession } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
