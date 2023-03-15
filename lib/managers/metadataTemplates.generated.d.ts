import { DeveloperTokenAuth } from "../developerTokenAuth.js";
import { CcgAuth } from "../ccgAuth.js";
export type MetadataTemplatesManagerAuthField = DeveloperTokenAuth | CcgAuth;
export type GetMetadataTemplatesIdIdSchemaScopeArg = "global" | "enterprise";
export type DeleteMetadataTemplatesIdIdSchemaScopeArg = "global" | "enterprise";
export interface GetMetadataTemplatesGlobalOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetMetadataTemplatesEnterpriseOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type PostMetadataTemplatesSchemaRequestBodyArgFieldsFieldTypeField = "string" | "float" | "date" | "enum" | "multiSelect";
export interface PostMetadataTemplatesSchemaRequestBodyArgFieldsFieldOptionsField {
    readonly key: string;
}
export interface PostMetadataTemplatesSchemaRequestBodyArgFieldsField {
    readonly type: PostMetadataTemplatesSchemaRequestBodyArgFieldsFieldTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly PostMetadataTemplatesSchemaRequestBodyArgFieldsFieldOptionsField[];
}
export interface PostMetadataTemplatesSchemaRequestBodyArg {
    readonly scope: string;
    readonly templateKey?: string;
    readonly displayName: string;
    readonly hidden?: boolean;
    readonly fields?: readonly PostMetadataTemplatesSchemaRequestBodyArgFieldsField[];
    readonly copyInstanceOnItemCopy?: boolean;
}
export declare class MetadataTemplatesManager {
    readonly auth: MetadataTemplatesManagerAuthField;
    constructor(fields: Omit<MetadataTemplatesManager, "getMetadataTemplates" | "getMetadataTemplatesIdIdSchema" | "deleteMetadataTemplatesIdIdSchema" | "getMetadataTemplatesId" | "getMetadataTemplatesGlobal" | "getMetadataTemplatesEnterprise" | "postMetadataTemplatesSchema">);
    getMetadataTemplates(metadataInstanceId: string): Promise<any>;
    getMetadataTemplatesIdIdSchema(scope: GetMetadataTemplatesIdIdSchemaScopeArg, templateKey: string): Promise<any>;
    deleteMetadataTemplatesIdIdSchema(scope: DeleteMetadataTemplatesIdIdSchemaScopeArg, templateKey: string): Promise<any>;
    getMetadataTemplatesId(templateId: string): Promise<any>;
    getMetadataTemplatesGlobal(options?: GetMetadataTemplatesGlobalOptionsArg): Promise<any>;
    getMetadataTemplatesEnterprise(options?: GetMetadataTemplatesEnterpriseOptionsArg): Promise<any>;
    postMetadataTemplatesSchema(requestBody: PostMetadataTemplatesSchemaRequestBodyArg): Promise<any>;
}
