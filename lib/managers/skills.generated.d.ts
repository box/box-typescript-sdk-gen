import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export interface CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg {
    readonly cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export type UpdateSkillInvocationByIdRequestBodyArgStatusField = "invoked" | "processing" | "success" | "transient_failure" | "permanent_failure";
export interface UpdateSkillInvocationByIdRequestBodyArgMetadataField {
    readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
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
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<SkillsManager, "getFileMetadataGlobalBoxSkillsCards" | "createFileMetadataGlobalBoxSkillsCard" | "deleteFileMetadataGlobalBoxSkillsCard" | "updateSkillInvocationById">);
    getFileMetadataGlobalBoxSkillsCards(fileId: string): Promise<any>;
    createFileMetadataGlobalBoxSkillsCard(fileId: string, requestBody: CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg): Promise<any>;
    deleteFileMetadataGlobalBoxSkillsCard(fileId: string): Promise<any>;
    updateSkillInvocationById(skillId: string, requestBody: UpdateSkillInvocationByIdRequestBodyArg): Promise<any>;
}
