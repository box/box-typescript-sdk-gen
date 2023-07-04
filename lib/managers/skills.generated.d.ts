import { SkillCardsMetadata } from "../schemas.generated.js";
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
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
    getFileMetadataGlobalBoxSkillsCards(fileId: string): Promise<SkillCardsMetadata>;
    createFileMetadataGlobalBoxSkillsCard(fileId: string, requestBody: CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg): Promise<SkillCardsMetadata>;
    deleteFileMetadataGlobalBoxSkillsCard(fileId: string): Promise<any>;
    updateSkillInvocationById(skillId: string, requestBody: UpdateSkillInvocationByIdRequestBodyArg): Promise<any>;
}
export declare function newSerializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(val: CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg): Json;
export declare function newDeserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(val: any): CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg;
export declare function newSerializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val: UpdateSkillInvocationByIdRequestBodyArgStatusField): Json;
export declare function newDeserializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val: any): UpdateSkillInvocationByIdRequestBodyArgStatusField;
export declare function newSerializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val: UpdateSkillInvocationByIdRequestBodyArgMetadataField): Json;
export declare function newDeserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(val: any): UpdateSkillInvocationByIdRequestBodyArgMetadataField;
export declare function newSerializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val: UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField): Json;
export declare function newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(val: any): UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField;
export declare function newSerializeUpdateSkillInvocationByIdRequestBodyArgFileField(val: UpdateSkillInvocationByIdRequestBodyArgFileField): Json;
export declare function newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileField(val: any): UpdateSkillInvocationByIdRequestBodyArgFileField;
export declare function newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val: UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField): Json;
export declare function newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(val: any): UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField;
export declare function newSerializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val: UpdateSkillInvocationByIdRequestBodyArgFileVersionField): Json;
export declare function newDeserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(val: any): UpdateSkillInvocationByIdRequestBodyArgFileVersionField;
export declare function newSerializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val: UpdateSkillInvocationByIdRequestBodyArgUsageField): Json;
export declare function newDeserializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val: any): UpdateSkillInvocationByIdRequestBodyArgUsageField;
export declare function newSerializeUpdateSkillInvocationByIdRequestBodyArg(val: UpdateSkillInvocationByIdRequestBodyArg): Json;
export declare function newDeserializeUpdateSkillInvocationByIdRequestBodyArg(val: any): UpdateSkillInvocationByIdRequestBodyArg;
