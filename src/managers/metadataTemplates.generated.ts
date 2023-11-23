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
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface GetMetadataTemplatesByInstanceIdQueryParamsArg {
  readonly metadataInstanceId: string;
}
export class GetMetadataTemplatesByInstanceIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplatesByInstanceIdHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetMetadataTemplatesByInstanceIdHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export type GetMetadataTemplateScopeArg = 'global' | 'enterprise';
export class GetMetadataTemplateHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplateHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetMetadataTemplateHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateMetadataTemplateScopeArg = 'global' | 'enterprise';
export type UpdateMetadataTemplateRequestBodyArgOpField =
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
export interface UpdateMetadataTemplateRequestBodyArg {
  readonly op: UpdateMetadataTemplateRequestBodyArgOpField;
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
export class UpdateMetadataTemplateHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateMetadataTemplateHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateMetadataTemplateHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type DeleteMetadataTemplateScopeArg = 'global' | 'enterprise';
export class DeleteMetadataTemplateHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteMetadataTemplateHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteMetadataTemplateHeadersArg, 'extraHeaders'>>
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
export interface GetGlobalMetadataTemplatesQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetGlobalMetadataTemplatesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetGlobalMetadataTemplatesHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetGlobalMetadataTemplatesHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetEnterpriseMetadataTemplatesQueryParamsArg {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetEnterpriseMetadataTemplatesHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetEnterpriseMetadataTemplatesHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetEnterpriseMetadataTemplatesHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField =
  | 'string'
  | 'float'
  | 'date'
  | 'enum'
  | 'multiSelect';
export interface CreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField {
  readonly key: string;
}
export interface CreateMetadataTemplateRequestBodyArgFieldsField {
  readonly type: CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField;
  readonly key: string;
  readonly displayName: string;
  readonly description?: string;
  readonly hidden?: boolean;
  readonly options?: readonly CreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField[];
}
export interface CreateMetadataTemplateRequestBodyArg {
  readonly scope: string;
  readonly templateKey?: string;
  readonly displayName: string;
  readonly hidden?: boolean;
  readonly fields?: readonly CreateMetadataTemplateRequestBodyArgFieldsField[];
  readonly copyInstanceOnItemCopy?: boolean;
}
export class CreateMetadataTemplateHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateMetadataTemplateHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateMetadataTemplateHeadersArg, 'extraHeaders'>>
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
      | 'getMetadataTemplatesByInstanceId'
      | 'getMetadataTemplate'
      | 'updateMetadataTemplate'
      | 'deleteMetadataTemplate'
      | 'getMetadataTemplateById'
      | 'getGlobalMetadataTemplates'
      | 'getEnterpriseMetadataTemplates'
      | 'createMetadataTemplate'
    >
  ) {
    Object.assign(this, fields);
  }
  async getMetadataTemplatesByInstanceId(
    queryParams: GetMetadataTemplatesByInstanceIdQueryParamsArg,
    headers: GetMetadataTemplatesByInstanceIdHeadersArg = new GetMetadataTemplatesByInstanceIdHeadersArg(
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
    return deserializeMetadataTemplates(response.data);
  }
  async getMetadataTemplate(
    scope: GetMetadataTemplateScopeArg,
    templateKey: string,
    headers: GetMetadataTemplateHeadersArg = new GetMetadataTemplateHeadersArg(
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
    return deserializeMetadataTemplate(response.data);
  }
  async updateMetadataTemplate(
    scope: UpdateMetadataTemplateScopeArg,
    templateKey: string,
    requestBody: readonly UpdateMetadataTemplateRequestBodyArg[],
    headers: UpdateMetadataTemplateHeadersArg = new UpdateMetadataTemplateHeadersArg(
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
        data: requestBody.map(
          serializeUpdateMetadataTemplateRequestBodyArg
        ) as readonly any[],
        contentType: 'application/json-patch+json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataTemplate(response.data);
  }
  async deleteMetadataTemplate(
    scope: DeleteMetadataTemplateScopeArg,
    templateKey: string,
    headers: DeleteMetadataTemplateHeadersArg = new DeleteMetadataTemplateHeadersArg(
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
    return deserializeMetadataTemplate(response.data);
  }
  async getGlobalMetadataTemplates(
    queryParams: GetGlobalMetadataTemplatesQueryParamsArg = {} satisfies GetGlobalMetadataTemplatesQueryParamsArg,
    headers: GetGlobalMetadataTemplatesHeadersArg = new GetGlobalMetadataTemplatesHeadersArg(
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
    return deserializeMetadataTemplates(response.data);
  }
  async getEnterpriseMetadataTemplates(
    queryParams: GetEnterpriseMetadataTemplatesQueryParamsArg = {} satisfies GetEnterpriseMetadataTemplatesQueryParamsArg,
    headers: GetEnterpriseMetadataTemplatesHeadersArg = new GetEnterpriseMetadataTemplatesHeadersArg(
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
    return deserializeMetadataTemplates(response.data);
  }
  async createMetadataTemplate(
    requestBody: CreateMetadataTemplateRequestBodyArg,
    headers: CreateMetadataTemplateHeadersArg = new CreateMetadataTemplateHeadersArg(
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
        data: serializeCreateMetadataTemplateRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeMetadataTemplate(response.data);
  }
}
export function serializeGetMetadataTemplateScopeArg(
  val: GetMetadataTemplateScopeArg
): SerializedData {
  return val;
}
export function deserializeGetMetadataTemplateScopeArg(
  val: any
): GetMetadataTemplateScopeArg {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "GetMetadataTemplateScopeArg"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateScopeArg(
  val: UpdateMetadataTemplateScopeArg
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateScopeArg(
  val: any
): UpdateMetadataTemplateScopeArg {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateMetadataTemplateScopeArg"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateRequestBodyArgOpField(
  val: UpdateMetadataTemplateRequestBodyArgOpField
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateRequestBodyArgOpField(
  val: any
): UpdateMetadataTemplateRequestBodyArgOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateMetadataTemplateRequestBodyArgOpField"';
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
export function serializeUpdateMetadataTemplateRequestBodyArg(
  val: UpdateMetadataTemplateRequestBodyArg
): SerializedData {
  return {
    ['op']: serializeUpdateMetadataTemplateRequestBodyArgOpField(val.op),
    ['data']: val.data == void 0 ? void 0 : val.data,
    ['fieldKey']: val.fieldKey == void 0 ? void 0 : val.fieldKey,
    ['fieldKeys']:
      val.fieldKeys == void 0
        ? void 0
        : (val.fieldKeys.map(function (item: string): any {
            return item;
          }) as readonly any[]),
    ['enumOptionKey']: val.enumOptionKey == void 0 ? void 0 : val.enumOptionKey,
    ['enumOptionKeys']:
      val.enumOptionKeys == void 0
        ? void 0
        : (val.enumOptionKeys.map(function (item: string): any {
            return item;
          }) as readonly any[]),
    ['multiSelectOptionKey']:
      val.multiSelectOptionKey == void 0 ? void 0 : val.multiSelectOptionKey,
    ['multiSelectOptionKeys']:
      val.multiSelectOptionKeys == void 0
        ? void 0
        : (val.multiSelectOptionKeys.map(function (item: string): any {
            return item;
          }) as readonly any[]),
  };
}
export function deserializeUpdateMetadataTemplateRequestBodyArg(
  val: any
): UpdateMetadataTemplateRequestBodyArg {
  const op: UpdateMetadataTemplateRequestBodyArgOpField =
    deserializeUpdateMetadataTemplateRequestBodyArgOpField(val.op);
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
      : sdIsList(val.fieldKeys)
      ? (val.fieldKeys.map(function (itm: SerializedData): any {
          return itm;
        }) as readonly any[])
      : [];
  const enumOptionKey: undefined | string =
    val.enumOptionKey == void 0 ? void 0 : val.enumOptionKey;
  const enumOptionKeys: undefined | readonly string[] =
    val.enumOptionKeys == void 0
      ? void 0
      : sdIsList(val.enumOptionKeys)
      ? (val.enumOptionKeys.map(function (itm: SerializedData): any {
          return itm;
        }) as readonly any[])
      : [];
  const multiSelectOptionKey: undefined | string =
    val.multiSelectOptionKey == void 0 ? void 0 : val.multiSelectOptionKey;
  const multiSelectOptionKeys: undefined | readonly string[] =
    val.multiSelectOptionKeys == void 0
      ? void 0
      : sdIsList(val.multiSelectOptionKeys)
      ? (val.multiSelectOptionKeys.map(function (itm: SerializedData): any {
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
  } satisfies UpdateMetadataTemplateRequestBodyArg;
}
export function serializeDeleteMetadataTemplateScopeArg(
  val: DeleteMetadataTemplateScopeArg
): SerializedData {
  return val;
}
export function deserializeDeleteMetadataTemplateScopeArg(
  val: any
): DeleteMetadataTemplateScopeArg {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "DeleteMetadataTemplateScopeArg"';
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataTemplateRequestBodyArgFieldsFieldTypeField(
  val: CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataTemplateRequestBodyArgFieldsFieldTypeField(
  val: any
): CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField"';
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
export function serializeCreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField(
  val: CreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField
): SerializedData {
  return { ['key']: val.key };
}
export function deserializeCreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField(
  val: any
): CreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField {
  const key: string = val.key;
  return {
    key: key,
  } satisfies CreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField;
}
export function serializeCreateMetadataTemplateRequestBodyArgFieldsField(
  val: CreateMetadataTemplateRequestBodyArgFieldsField
): SerializedData {
  return {
    ['type']: serializeCreateMetadataTemplateRequestBodyArgFieldsFieldTypeField(
      val.type
    ),
    ['key']: val.key,
    ['displayName']: val.displayName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']:
      val.options == void 0
        ? void 0
        : (val.options.map(function (
            item: CreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField
          ): any {
            return serializeCreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField(
              item
            );
          }) as readonly any[]),
  };
}
export function deserializeCreateMetadataTemplateRequestBodyArgFieldsField(
  val: any
): CreateMetadataTemplateRequestBodyArgFieldsField {
  const type: CreateMetadataTemplateRequestBodyArgFieldsFieldTypeField =
    deserializeCreateMetadataTemplateRequestBodyArgFieldsFieldTypeField(
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
    | readonly CreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField[] =
    val.options == void 0
      ? void 0
      : sdIsList(val.options)
      ? (val.options.map(function (itm: SerializedData): any {
          return deserializeCreateMetadataTemplateRequestBodyArgFieldsFieldOptionsField(
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
  } satisfies CreateMetadataTemplateRequestBodyArgFieldsField;
}
export function serializeCreateMetadataTemplateRequestBodyArg(
  val: CreateMetadataTemplateRequestBodyArg
): SerializedData {
  return {
    ['scope']: val.scope,
    ['templateKey']: val.templateKey == void 0 ? void 0 : val.templateKey,
    ['displayName']: val.displayName,
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields.map(function (
            item: CreateMetadataTemplateRequestBodyArgFieldsField
          ): any {
            return serializeCreateMetadataTemplateRequestBodyArgFieldsField(
              item
            );
          }) as readonly any[]),
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
  };
}
export function deserializeCreateMetadataTemplateRequestBodyArg(
  val: any
): CreateMetadataTemplateRequestBodyArg {
  const scope: string = val.scope;
  const templateKey: undefined | string =
    val.templateKey == void 0 ? void 0 : val.templateKey;
  const displayName: string = val.displayName;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const fields:
    | undefined
    | readonly CreateMetadataTemplateRequestBodyArgFieldsField[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): any {
          return deserializeCreateMetadataTemplateRequestBodyArgFieldsField(
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
  } satisfies CreateMetadataTemplateRequestBodyArg;
}
