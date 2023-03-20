import { SkillCardsMetadata } from "../schemas.generated.js";
import { deserializeSkillCardsMetadata } from "../schemas.generated.js";
import { serializeSkillCardsMetadata } from "../schemas.generated.js";
import { ClientError } from "../schemas.generated.js";
import { deserializeClientError } from "../schemas.generated.js";
import { serializeClientError } from "../schemas.generated.js";
import { SkillCard } from "../schemas.generated.js";
import { deserializeSkillCard } from "../schemas.generated.js";
import { serializeSkillCard } from "../schemas.generated.js";
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
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { fetch } from "../fetch.js";
import { FetchOptions } from "../fetch.js";
import { FetchResponse } from "../fetch.js";
import { deserializeJson } from "../json.js";
import { JSON } from "../json.js";
export type SkillsManagerAuthField = DeveloperTokenAuth | CCGAuth;
export type PostFilesIdMetadataGlobalBoxSkillsCardsRequestBodyArgCardsField = SkillCard | KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard;
export interface PostFilesIdMetadataGlobalBoxSkillsCardsRequestBodyArg {
    readonly cards: readonly PostFilesIdMetadataGlobalBoxSkillsCardsRequestBodyArgCardsField[];
}
export type PutSkillInvocationsIdRequestBodyArgStatusField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export type PutSkillInvocationsIdRequestBodyArgMetadataFieldCardsField = SkillCard | KeywordSkillCard | TimelineSkillCard | TranscriptSkillCard | StatusSkillCard;
export interface PutSkillInvocationsIdRequestBodyArgMetadataField {
    readonly cards?: readonly PutSkillInvocationsIdRequestBodyArgMetadataFieldCardsField[];
}
export type PutSkillInvocationsIdRequestBodyArgFileFieldTypeField = "file";
export interface PutSkillInvocationsIdRequestBodyArgFileField {
    readonly type?: PutSkillInvocationsIdRequestBodyArgFileFieldTypeField;
    readonly id?: string;
}
export type PutSkillInvocationsIdRequestBodyArgFileVersionFieldTypeField = "file_version";
export interface PutSkillInvocationsIdRequestBodyArgFileVersionField {
    readonly type?: PutSkillInvocationsIdRequestBodyArgFileVersionFieldTypeField;
    readonly id?: string;
}
export interface PutSkillInvocationsIdRequestBodyArgUsageField {
    readonly unit?: string;
    readonly value?: number;
}
export interface PutSkillInvocationsIdRequestBodyArg {
    readonly status: PutSkillInvocationsIdRequestBodyArgStatusField;
    readonly metadata: PutSkillInvocationsIdRequestBodyArgMetadataField;
    readonly file: PutSkillInvocationsIdRequestBodyArgFileField;
    readonly fileVersion?: PutSkillInvocationsIdRequestBodyArgFileVersionField;
    readonly usage?: PutSkillInvocationsIdRequestBodyArgUsageField;
}
export class SkillsManager {
    readonly auth!: SkillsManagerAuthField;
    constructor(fields: Omit<SkillsManager, "getFilesIdMetadataGlobalBoxSkillsCards" | "postFilesIdMetadataGlobalBoxSkillsCards" | "deleteFilesIdMetadataGlobalBoxSkillsCards" | "putSkillInvocationsId">) {
        Object.assign(this, fields);
    }
    async getFilesIdMetadataGlobalBoxSkillsCards(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards") as string, { method: "GET", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeSkillCardsMetadata(deserializeJSON(response.text) as JSON);
    }
    async postFilesIdMetadataGlobalBoxSkillsCards(fileId: string, requestBody: PostFilesIdMetadataGlobalBoxSkillsCardsRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards") as string, { method: "POST", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return await deserializeSkillCardsMetadata(deserializeJSON(response.text) as JSON);
    }
    async deleteFilesIdMetadataGlobalBoxSkillsCards(fileId: string): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/files/", fileId, "/metadata/global/boxSkillsCards") as string, { method: "DELETE", auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
    async putSkillInvocationsId(skillId: string, requestBody: PutSkillInvocationsIdRequestBodyArg): Promise<any> {
        const response: FetchResponse = await fetch("".concat("https://api.box.com/2.0/skill_invocations/", skillId) as string, { method: "PUT", body: JSON.stringify(requestBody), auth: this.auth } satisfies FetchOptions) as FetchResponse;
        return response.content;
    }
}
