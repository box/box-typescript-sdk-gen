import { serializeMetadataTemplates } from '../schemas.generated.js';
import { deserializeMetadataTemplates } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { MetadataTemplates } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export interface GetMetadataTemplatesQueryParamsArg {
  readonly metadataInstanceId: string;
}
export class GetMetadataTemplatesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplatesHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetMetadataTemplatesHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetMetadataTemplateSchemaScopeArg = 'global' | 'enterprise';
export class GetMetadataTemplateSchemaHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplateSchemaHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetMetadataTemplateSchemaHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateMetadataTemplateSchemaScopeArg = 'global' | 'enterprise';
export type UpdateMetadataTemplateSchemaRequestBodyArgOpField =
  | 'editTemplate'
  | 'addField'
  | 'reorderFields'
  | 'addEnumOption'
  | 'reorderEnumOptions'
  | 'reorderMultiSelectOptions'
  | 'addMultiSelectOption'
  | 'editField'
  | 'removeField'
  | 'editEnumOption'
  | 'removeEnumOption'
  | 'editMultiSelectOption'
  | 'removeMultiSelectOption';
export interface UpdateMetadataTemplateSchemaRequestBodyArg {
  readonly op: UpdateMetadataTemplateSchemaRequestBodyArgOpField;
  readonly data?: {
    readonly [key: string]: string;
  };
  readonly fieldKey?: string;
  readonly fieldKeys?: readonly string[];
  readonly enumOptionKey?: string;
  readonly enumOptionKeys?: readonly string[];
  readonly multiSelectOptionKey?: string;
  readonly multiSelectOptionKeys?: readonly string[];
}
export class UpdateMetadataTemplateSchemaHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateMetadataTemplateSchemaHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateMetadataTemplateSchemaHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type DeleteMetadataTemplateSchemaScopeArg = 'global' | 'enterprise';
export class DeleteMetadataTemplateSchemaHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteMetadataTemplateSchemaHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteMetadataTemplateSchemaHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetMetadataTemplateByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplateByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetMetadataTemplateByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetMetadataTemplateGlobalQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetMetadataTemplateGlobalHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplateGlobalHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetMetadataTemplateGlobalHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetMetadataTemplateEnterpriseQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetMetadataTemplateEnterpriseHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplateEnterpriseHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetMetadataTemplateEnterpriseHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField =
  | 'string'
  | 'float'
  | 'date'
  | 'enum'
  | 'multiSelect';
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
export class CreateMetadataTemplateSchemaHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateMetadataTemplateSchemaHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateMetadataTemplateSchemaHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class MetadataTemplatesManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      MetadataTemplatesManager,
      | 'getMetadataTemplates'
      | 'getMetadataTemplateSchema'
      | 'updateMetadataTemplateSchema'
      | 'deleteMetadataTemplateSchema'
      | 'getMetadataTemplateById'
      | 'getMetadataTemplateGlobal'
      | 'getMetadataTemplateEnterprise'
      | 'createMetadataTemplateSchema'
    >
  ) {
    Object.assign(this, fields);
  }
  async getMetadataTemplates(
    queryParams: GetMetadataTemplatesQueryParamsArg,
    headers: GetMetadataTemplatesHeadersArg = new GetMetadataTemplatesHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplates> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['metadata_instance_id']: toString(
        queryParams.metadataInstanceId
      ) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/metadata_templates') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataTemplates(deserializeJson(response.text));
  }
  async getMetadataTemplateSchema(
    scope: GetMetadataTemplateSchemaScopeArg,
    templateKey: string,
    headers: GetMetadataTemplateSchemaHeadersArg = new GetMetadataTemplateSchemaHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string,
        '/schema'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataTemplate(deserializeJson(response.text));
  }
  async updateMetadataTemplateSchema(
    scope: UpdateMetadataTemplateSchemaScopeArg,
    templateKey: string,
    requestBody: readonly UpdateMetadataTemplateSchemaRequestBodyArg[],
    headers: UpdateMetadataTemplateSchemaHeadersArg = new UpdateMetadataTemplateSchemaHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string,
        '/schema'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        body: serializeJson(
          requestBody?.map(
            serializeUpdateMetadataTemplateSchemaRequestBodyArg
          ) as readonly any[]
        ),
        contentType: 'application/json-patch+json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataTemplate(deserializeJson(response.text));
  }
  async deleteMetadataTemplateSchema(
    scope: DeleteMetadataTemplateSchemaScopeArg,
    templateKey: string,
    headers: DeleteMetadataTemplateSchemaHeadersArg = new DeleteMetadataTemplateSchemaHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string,
        '/schema'
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getMetadataTemplateById(
    templateId: string,
    headers: GetMetadataTemplateByIdHeadersArg = new GetMetadataTemplateByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/',
        toString(templateId) as string
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataTemplate(deserializeJson(response.text));
  }
  async getMetadataTemplateGlobal(
    queryParams: GetMetadataTemplateGlobalQueryParamsArg = {} satisfies GetMetadataTemplateGlobalQueryParamsArg,
    headers: GetMetadataTemplateGlobalHeadersArg = new GetMetadataTemplateGlobalHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplates> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/metadata_templates/global') as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataTemplates(deserializeJson(response.text));
  }
  async getMetadataTemplateEnterprise(
    queryParams: GetMetadataTemplateEnterpriseQueryParamsArg = {} satisfies GetMetadataTemplateEnterpriseQueryParamsArg,
    headers: GetMetadataTemplateEnterpriseHeadersArg = new GetMetadataTemplateEnterpriseHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplates> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['marker']: toString(queryParams.marker) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/enterprise'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataTemplates(deserializeJson(response.text));
  }
  async createMetadataTemplateSchema(
    requestBody: CreateMetadataTemplateSchemaRequestBodyArg,
    headers: CreateMetadataTemplateSchemaHeadersArg = new CreateMetadataTemplateSchemaHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat('https://api.box.com/2.0/metadata_templates/schema') as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateMetadataTemplateSchemaRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataTemplate(deserializeJson(response.text));
  }
}
export function serializeGetMetadataTemplateSchemaScopeArg(
  val: GetMetadataTemplateSchemaScopeArg
): Json {
  return val;
}
export function deserializeGetMetadataTemplateSchemaScopeArg(
  val: any
): GetMetadataTemplateSchemaScopeArg {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "GetMetadataTemplateSchemaScopeArg"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateSchemaScopeArg(
  val: UpdateMetadataTemplateSchemaScopeArg
): Json {
  return val;
}
export function deserializeUpdateMetadataTemplateSchemaScopeArg(
  val: any
): UpdateMetadataTemplateSchemaScopeArg {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateMetadataTemplateSchemaScopeArg"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateSchemaRequestBodyArgOpField(
  val: UpdateMetadataTemplateSchemaRequestBodyArgOpField
): Json {
  return val;
}
export function deserializeUpdateMetadataTemplateSchemaRequestBodyArgOpField(
  val: any
): UpdateMetadataTemplateSchemaRequestBodyArgOpField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateMetadataTemplateSchemaRequestBodyArgOpField"';
  }
  if (val == 'editTemplate') {
    return 'editTemplate';
  }
  if (val == 'addField') {
    return 'addField';
  }
  if (val == 'reorderFields') {
    return 'reorderFields';
  }
  if (val == 'addEnumOption') {
    return 'addEnumOption';
  }
  if (val == 'reorderEnumOptions') {
    return 'reorderEnumOptions';
  }
  if (val == 'reorderMultiSelectOptions') {
    return 'reorderMultiSelectOptions';
  }
  if (val == 'addMultiSelectOption') {
    return 'addMultiSelectOption';
  }
  if (val == 'editField') {
    return 'editField';
  }
  if (val == 'removeField') {
    return 'removeField';
  }
  if (val == 'editEnumOption') {
    return 'editEnumOption';
  }
  if (val == 'removeEnumOption') {
    return 'removeEnumOption';
  }
  if (val == 'editMultiSelectOption') {
    return 'editMultiSelectOption';
  }
  if (val == 'removeMultiSelectOption') {
    return 'removeMultiSelectOption';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateSchemaRequestBodyArg(
  val: UpdateMetadataTemplateSchemaRequestBodyArg
): Json {
  return {
    ['op']: serializeUpdateMetadataTemplateSchemaRequestBodyArgOpField(val.op),
    ['data']: val.data == void 0 ? void 0 : val.data,
    ['fieldKey']: val.fieldKey == void 0 ? void 0 : val.fieldKey,
    ['fieldKeys']:
      val.fieldKeys == void 0
        ? void 0
        : (val.fieldKeys?.map(function (item: string): any {
            return item;
          }) as readonly any[]),
    ['enumOptionKey']: val.enumOptionKey == void 0 ? void 0 : val.enumOptionKey,
    ['enumOptionKeys']:
      val.enumOptionKeys == void 0
        ? void 0
        : (val.enumOptionKeys?.map(function (item: string): any {
            return item;
          }) as readonly any[]),
    ['multiSelectOptionKey']:
      val.multiSelectOptionKey == void 0 ? void 0 : val.multiSelectOptionKey,
    ['multiSelectOptionKeys']:
      val.multiSelectOptionKeys == void 0
        ? void 0
        : (val.multiSelectOptionKeys?.map(function (item: string): any {
            return item;
          }) as readonly any[]),
  };
}
export function deserializeUpdateMetadataTemplateSchemaRequestBodyArg(
  val: any
): UpdateMetadataTemplateSchemaRequestBodyArg {
  const op: UpdateMetadataTemplateSchemaRequestBodyArgOpField =
    deserializeUpdateMetadataTemplateSchemaRequestBodyArgOpField(val.op);
  const data:
    | undefined
    | {
        readonly [key: string]: string;
      } = val.data == void 0 ? void 0 : val.data;
  const fieldKey: undefined | string =
    val.fieldKey == void 0 ? void 0 : val.fieldKey;
  const fieldKeys: undefined | readonly string[] =
    val.fieldKeys == void 0
      ? void 0
      : isJson(val.fieldKeys, 'array')
      ? (val.fieldKeys?.map(function (itm: Json): any {
          return itm;
        }) as readonly any[])
      : [];
  const enumOptionKey: undefined | string =
    val.enumOptionKey == void 0 ? void 0 : val.enumOptionKey;
  const enumOptionKeys: undefined | readonly string[] =
    val.enumOptionKeys == void 0
      ? void 0
      : isJson(val.enumOptionKeys, 'array')
      ? (val.enumOptionKeys?.map(function (itm: Json): any {
          return itm;
        }) as readonly any[])
      : [];
  const multiSelectOptionKey: undefined | string =
    val.multiSelectOptionKey == void 0 ? void 0 : val.multiSelectOptionKey;
  const multiSelectOptionKeys: undefined | readonly string[] =
    val.multiSelectOptionKeys == void 0
      ? void 0
      : isJson(val.multiSelectOptionKeys, 'array')
      ? (val.multiSelectOptionKeys?.map(function (itm: Json): any {
          return itm;
        }) as readonly any[])
      : [];
  return {
    op: op,
    data: data,
    fieldKey: fieldKey,
    fieldKeys: fieldKeys,
    enumOptionKey: enumOptionKey,
    enumOptionKeys: enumOptionKeys,
    multiSelectOptionKey: multiSelectOptionKey,
    multiSelectOptionKeys: multiSelectOptionKeys,
  } satisfies UpdateMetadataTemplateSchemaRequestBodyArg;
}
export function serializeDeleteMetadataTemplateSchemaScopeArg(
  val: DeleteMetadataTemplateSchemaScopeArg
): Json {
  return val;
}
export function deserializeDeleteMetadataTemplateSchemaScopeArg(
  val: any
): DeleteMetadataTemplateSchemaScopeArg {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "DeleteMetadataTemplateSchemaScopeArg"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(
  val: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField
): Json {
  return val;
}
export function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(
  val: any
): CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField"';
  }
  if (val == 'string') {
    return 'string';
  }
  if (val == 'float') {
    return 'float';
  }
  if (val == 'date') {
    return 'date';
  }
  if (val == 'enum') {
    return 'enum';
  }
  if (val == 'multiSelect') {
    return 'multiSelect';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(
  val: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField
): Json {
  return { ['key']: val.key };
}
export function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(
  val: any
): CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField {
  const key: string = val.key;
  return {
    key: key,
  } satisfies CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField;
}
export function serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(
  val: CreateMetadataTemplateSchemaRequestBodyArgFieldsField
): Json {
  return {
    ['type']:
      serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(
        val.type
      ),
    ['key']: val.key,
    ['displayName']: val.displayName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']:
      val.options == void 0
        ? void 0
        : (val.options?.map(function (
            item: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField
          ): any {
            return serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(
              item
            );
          }) as readonly any[]),
  };
}
export function deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(
  val: any
): CreateMetadataTemplateSchemaRequestBodyArgFieldsField {
  const type: CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField =
    deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldTypeField(
      val.type
    );
  const key: string = val.key;
  const displayName: string = val.displayName;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const options:
    | undefined
    | readonly CreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField[] =
    val.options == void 0
      ? void 0
      : isJson(val.options, 'array')
      ? (val.options?.map(function (itm: Json): any {
          return deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsFieldOptionsField(
            itm
          );
        }) as readonly any[])
      : [];
  return {
    type: type,
    key: key,
    displayName: displayName,
    description: description,
    hidden: hidden,
    options: options,
  } satisfies CreateMetadataTemplateSchemaRequestBodyArgFieldsField;
}
export function serializeCreateMetadataTemplateSchemaRequestBodyArg(
  val: CreateMetadataTemplateSchemaRequestBodyArg
): Json {
  return {
    ['scope']: val.scope,
    ['templateKey']: val.templateKey == void 0 ? void 0 : val.templateKey,
    ['displayName']: val.displayName,
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields?.map(function (
            item: CreateMetadataTemplateSchemaRequestBodyArgFieldsField
          ): any {
            return serializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(
              item
            );
          }) as readonly any[]),
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
  };
}
export function deserializeCreateMetadataTemplateSchemaRequestBodyArg(
  val: any
): CreateMetadataTemplateSchemaRequestBodyArg {
  const scope: string = val.scope;
  const templateKey: undefined | string =
    val.templateKey == void 0 ? void 0 : val.templateKey;
  const displayName: string = val.displayName;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const fields:
    | undefined
    | readonly CreateMetadataTemplateSchemaRequestBodyArgFieldsField[] =
    val.fields == void 0
      ? void 0
      : isJson(val.fields, 'array')
      ? (val.fields?.map(function (itm: Json): any {
          return deserializeCreateMetadataTemplateSchemaRequestBodyArgFieldsField(
            itm
          );
        }) as readonly any[])
      : [];
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  return {
    scope: scope,
    templateKey: templateKey,
    displayName: displayName,
    hidden: hidden,
    fields: fields,
    copyInstanceOnItemCopy: copyInstanceOnItemCopy,
  } satisfies CreateMetadataTemplateSchemaRequestBodyArg;
}
