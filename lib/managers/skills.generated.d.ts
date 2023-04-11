import { KeywordSkillCard } from "../schemas.generated.js";
import { TimelineSkillCard } from "../schemas.generated.js";
import { TranscriptSkillCard } from "../schemas.generated.js";
import { StatusSkillCard } from "../schemas.generated.js";
import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CCGAuth } from "../ccgAuth.js";
import { JWTAuth } from "../jwtAuth.js";
export type SkillsManagerAuthField = DeveloperTokenAuth | CCGAuth | JWTAuth;
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
export declare class SkillsManager {
    readonly auth: SkillsManagerAuthField;
    constructor(fields: Omit<SkillsManager, "getFileMetadataGlobalBoxSkillsCards" | "createFileMetadataGlobalBoxSkillsCard" | "deleteFileMetadataGlobalBoxSkillsCard" | "updateSkillInvocationById">);
    getFileMetadataGlobalBoxSkillsCards(fileId: string): Promise<any>;
    createFileMetadataGlobalBoxSkillsCard(fileId: string, requestBody: CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg): Promise<any>;
    deleteFileMetadataGlobalBoxSkillsCard(fileId: string): Promise<any>;
    updateSkillInvocationById(skillId: string, requestBody: UpdateSkillInvocationByIdRequestBodyArg): Promise<any>;
}
