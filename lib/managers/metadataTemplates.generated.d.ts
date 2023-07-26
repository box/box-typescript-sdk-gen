import { MetadataTemplates } from "../schemas.generated.js";
import { MetadataTemplate } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetMetadataTemplatesQueryParamsArg {
    readonly metadataInstanceId: string;
}
export type GetMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export type DeleteMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export interface GetMetadataTemplateGlobalQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export interface GetMetadataTemplateEnterpriseQueryParamsArg {
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
    getMetadataTemplates(queryParams: GetMetadataTemplatesQueryParamsArg): Promise<MetadataTemplates>;
    getMetadataTemplateSchema(scope: GetMetadataTemplateSchemaScopeArg, templateKey: string): Promise<MetadataTemplate>;
    deleteMetadataTemplateSchema(scope: DeleteMetadataTemplateSchemaScopeArg, templateKey: string): Promise<any>;
    getMetadataTemplateById(templateId: string): Promise<MetadataTemplate>;
    getMetadataTemplateGlobal(queryParams?: undefined | GetMetadataTemplateGlobalQueryParamsArg): Promise<MetadataTemplates>;
    getMetadataTemplateEnterprise(queryParams?: undefined | GetMetadataTemplateEnterpriseQueryParamsArg): Promise<MetadataTemplates>;
    createMetadataTemplateSchema(requestBody: CreateMetadataTemplateSchemaRequestBodyArg): Promise<MetadataTemplate>;
}
export declare function serializeGetMetadataTemplatesQueryParamsArg(val: GetMetadataTemplatesQueryParamsArg): Json;
export declare function deserializeGetMetadataTemplatesQueryParamsArg(val: any): GetMetadataTemplatesQueryParamsArg;
export declare function serializeGetMetadataTemplateSchemaScopeArg(val: GetMetadataTemplateSchemaScopeArg): Json;
export declare function deserializeGetMetadataTemplateSchemaScopeArg(val: any): GetMetadataTemplateSchemaScopeArg;
export declare function serializeDeleteMetadataTemplateSchemaScopeArg(val: DeleteMetadataTemplateSchemaScopeArg): Json;
export declare function deserializeDeleteMetadataTemplateSchemaScopeArg(val: any): DeleteMetadataTemplateSchemaScopeArg;
export declare function serializeGetMetadataTemplateGlobalQueryParamsArg(val: GetMetadataTemplateGlobalQueryParamsArg): Json;
export declare function deserializeGetMetadataTemplateGlobalQueryParamsArg(val: any): GetMetadataTemplateGlobalQueryParamsArg;
export declare function serializeGetMetadataTemplateEnterpriseQueryParamsArg(val: GetMetadataTemplateEnterpriseQueryParamsArg): Json;
export declare function deserializeGetMetadataTemplateEnterpriseQueryParamsArg(val: any): GetMetadataTemplateEnterpriseQueryParamsArg;
export declare function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField): Json;
export declare function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val: any): CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField;
export declare function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(val: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField): Json;
export declare function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(val: any): CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField;
export declare function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(val: CreateMetadataTemplateSchemaRequestBodyArgFieldsField): Json;
export declare function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(val: any): CreateMetadataTemplateSchemaRequestBodyArgFieldsField;
export declare function serializeCreateMetadataTemplateSchemaRequestBodyArg(val: CreateMetadataTemplateSchemaRequestBodyArg): Json;
export declare function deserializeCreateMetadataTemplateSchemaRequestBodyArg(val: any): CreateMetadataTemplateSchemaRequestBodyArg;
