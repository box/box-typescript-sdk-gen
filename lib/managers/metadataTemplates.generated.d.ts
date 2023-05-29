import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
export type GetMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export type DeleteMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export interface GetMetadataTemplateGlobalOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetMetadataTemplateEnterpriseOptionsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export type CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField = "string" | "float" | "date" | "enum" | "multiSelect";
export interface CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField {
    readonly key: string;
}
export interface CreateMetadataTemplateSchemaRequestBodyArgFieldsField {
    readonly type: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField;
    readonly key: string;
    readonly displayName: string;
    readonly description?: string;
    readonly hidden?: boolean;
    readonly options?: readonly CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField[];
}
export interface CreateMetadataTemplateSchemaRequestBodyArg {
    readonly scope: string;
    readonly templateKey?: string;
    readonly displayName: string;
    readonly hidden?: boolean;
    readonly fields?: readonly CreateMetadataTemplateSchemaRequestBodyArgFieldsField[];
    readonly copyInstanceOnItemCopy?: boolean;
}
export declare class MetadataTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MetadataTemplatesManager, "getMetadataTemplates" | "getMetadataTemplateSchema" | "deleteMetadataTemplateSchema" | "getMetadataTemplateById" | "getMetadataTemplateGlobal" | "getMetadataTemplateEnterprise" | "createMetadataTemplateSchema">);
    getMetadataTemplates(metadataInstanceId: string): Promise<any>;
    getMetadataTemplateSchema(scope: GetMetadataTemplateSchemaScopeArg, templateKey: string): Promise<any>;
    deleteMetadataTemplateSchema(scope: DeleteMetadataTemplateSchemaScopeArg, templateKey: string): Promise<any>;
    getMetadataTemplateById(templateId: string): Promise<any>;
    getMetadataTemplateGlobal(options?: GetMetadataTemplateGlobalOptionsArg): Promise<any>;
    getMetadataTemplateEnterprise(options?: GetMetadataTemplateEnterpriseOptionsArg): Promise<any>;
    createMetadataTemplateSchema(requestBody: CreateMetadataTemplateSchemaRequestBodyArg): Promise<any>;
}
