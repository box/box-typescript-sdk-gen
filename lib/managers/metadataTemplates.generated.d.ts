import { MetadataTemplates } from "../schemas.generated.js";
import { MetadataTemplate } from "../schemas.generated.js";
import { Authentication } from "../auth.js";
import { NetworkSession } from "../network.js";
import { Json } from "../json.js";
export interface GetMetadataTemplatesQueryParamsArg {
    readonly metadataInstanceId: string;
}
export declare class GetMetadataTemplatesHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetMetadataTemplatesHeadersArg);
}
export type GetMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export declare class GetMetadataTemplateSchemaHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetMetadataTemplateSchemaHeadersArg);
}
export type DeleteMetadataTemplateSchemaScopeArg = "global" | "enterprise";
export declare class DeleteMetadataTemplateSchemaHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: DeleteMetadataTemplateSchemaHeadersArg);
}
export declare class GetMetadataTemplateByIdHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetMetadataTemplateByIdHeadersArg);
}
export interface GetMetadataTemplateGlobalQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetMetadataTemplateGlobalHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetMetadataTemplateGlobalHeadersArg);
}
export interface GetMetadataTemplateEnterpriseQueryParamsArg {
    readonly marker?: string;
    readonly limit?: number;
}
export declare class GetMetadataTemplateEnterpriseHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: GetMetadataTemplateEnterpriseHeadersArg);
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
export declare class CreateMetadataTemplateSchemaHeadersArg {
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: CreateMetadataTemplateSchemaHeadersArg);
}
export declare class MetadataTemplatesManager {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
    constructor(fields: Omit<MetadataTemplatesManager, "getMetadataTemplates" | "getMetadataTemplateSchema" | "deleteMetadataTemplateSchema" | "getMetadataTemplateById" | "getMetadataTemplateGlobal" | "getMetadataTemplateEnterprise" | "createMetadataTemplateSchema">);
    getMetadataTemplates(queryParams: GetMetadataTemplatesQueryParamsArg, headers?: GetMetadataTemplatesHeadersArg): Promise<MetadataTemplates>;
    getMetadataTemplateSchema(scope: GetMetadataTemplateSchemaScopeArg, templateKey: string, headers?: GetMetadataTemplateSchemaHeadersArg): Promise<MetadataTemplate>;
    deleteMetadataTemplateSchema(scope: DeleteMetadataTemplateSchemaScopeArg, templateKey: string, headers?: DeleteMetadataTemplateSchemaHeadersArg): Promise<undefined>;
    getMetadataTemplateById(templateId: string, headers?: GetMetadataTemplateByIdHeadersArg): Promise<MetadataTemplate>;
    getMetadataTemplateGlobal(queryParams?: GetMetadataTemplateGlobalQueryParamsArg, headers?: GetMetadataTemplateGlobalHeadersArg): Promise<MetadataTemplates>;
    getMetadataTemplateEnterprise(queryParams?: GetMetadataTemplateEnterpriseQueryParamsArg, headers?: GetMetadataTemplateEnterpriseHeadersArg): Promise<MetadataTemplates>;
    createMetadataTemplateSchema(requestBody: CreateMetadataTemplateSchemaRequestBodyArg, headers?: CreateMetadataTemplateSchemaHeadersArg): Promise<MetadataTemplate>;
}
export declare function serializeGetMetadataTemplateSchemaScopeArg(val: GetMetadataTemplateSchemaScopeArg): Json;
export declare function deserializeGetMetadataTemplateSchemaScopeArg(val: any): GetMetadataTemplateSchemaScopeArg;
export declare function serializeDeleteMetadataTemplateSchemaScopeArg(val: DeleteMetadataTemplateSchemaScopeArg): Json;
export declare function deserializeDeleteMetadataTemplateSchemaScopeArg(val: any): DeleteMetadataTemplateSchemaScopeArg;
export declare function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField): Json;
export declare function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(val: any): CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField;
export declare function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(val: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField): Json;
export declare function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(val: any): CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField;
export declare function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(val: CreateMetadataTemplateSchemaRequestBodyArgFieldsField): Json;
export declare function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(val: any): CreateMetadataTemplateSchemaRequestBodyArgFieldsField;
export declare function serializeCreateMetadataTemplateSchemaRequestBodyArg(val: CreateMetadataTemplateSchemaRequestBodyArg): Json;
export declare function deserializeCreateMetadataTemplateSchemaRequestBodyArg(val: any): CreateMetadataTemplateSchemaRequestBodyArg;
