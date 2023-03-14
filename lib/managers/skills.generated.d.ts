import { SkillCard } from "../schemas.generated.js";
import { KeywordSkillCard } from "../schemas.generated.js";
import { TimelineSkillCard } from "../schemas.generated.js";
import { TranscriptSkillCard } from "../schemas.generated.js";
import { StatusSkillCard } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
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
export declare class SkillsManager {
    readonly auth: SkillsManagerAuthField;
    constructor(fields: Omit<SkillsManager, "getFilesIdMetadataGlobalBoxSkillsCards" | "postFilesIdMetadataGlobalBoxSkillsCards" | "deleteFilesIdMetadataGlobalBoxSkillsCards" | "putSkillInvocationsId">);
    getFilesIdMetadataGlobalBoxSkillsCards(fileId: string): Promise<any>;
    postFilesIdMetadataGlobalBoxSkillsCards(fileId: string, requestBody: PostFilesIdMetadataGlobalBoxSkillsCardsRequestBodyArg): Promise<any>;
    deleteFilesIdMetadataGlobalBoxSkillsCards(fileId: string): Promise<any>;
    putSkillInvocationsId(skillId: string, requestBody: PutSkillInvocationsIdRequestBodyArg): Promise<any>;
}
