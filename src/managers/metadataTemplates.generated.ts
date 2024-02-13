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
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { BoxSdkError } from '../errors.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface GetMetadataTemplatesByInstanceIdQueryParams {
  readonly metadataInstanceId: string;
}
export class GetMetadataTemplatesByInstanceIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplatesByInstanceIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetMetadataTemplatesByInstanceIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type GetMetadataTemplateScope = 'global' | 'enterprise';
export class GetMetadataTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplateHeaders, 'extraHeaders'>
      | Partial<Pick<GetMetadataTemplateHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateMetadataTemplateScope = 'global' | 'enterprise';
export type UpdateMetadataTemplateRequestBodyOpField =
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
export interface UpdateMetadataTemplateRequestBody {
  readonly op: UpdateMetadataTemplateRequestBodyOpField;
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
export class UpdateMetadataTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateMetadataTemplateHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateMetadataTemplateHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type DeleteMetadataTemplateScope = 'global' | 'enterprise';
export class DeleteMetadataTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteMetadataTemplateHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteMetadataTemplateHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class GetMetadataTemplateByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetMetadataTemplateByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetMetadataTemplateByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetGlobalMetadataTemplatesQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetGlobalMetadataTemplatesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetGlobalMetadataTemplatesHeaders, 'extraHeaders'>
      | Partial<Pick<GetGlobalMetadataTemplatesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetEnterpriseMetadataTemplatesQueryParams {
  readonly marker?: string;
  readonly limit?: number;
}
export class GetEnterpriseMetadataTemplatesHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetEnterpriseMetadataTemplatesHeaders, 'extraHeaders'>
      | Partial<Pick<GetEnterpriseMetadataTemplatesHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type CreateMetadataTemplateRequestBodyFieldsTypeField =
  | 'string'
  | 'float'
  | 'date'
  | 'enum'
  | 'multiSelect';
export interface CreateMetadataTemplateRequestBodyFieldsOptionsField {
  readonly key: string;
}
export interface CreateMetadataTemplateRequestBodyFieldsField {
  readonly type: CreateMetadataTemplateRequestBodyFieldsTypeField;
  readonly key: string;
  readonly displayName: string;
  readonly description?: string;
  readonly hidden?: boolean;
  readonly options?: readonly CreateMetadataTemplateRequestBodyFieldsOptionsField[];
}
export interface CreateMetadataTemplateRequestBody {
  readonly scope: string;
  readonly templateKey?: string;
  readonly displayName: string;
  readonly hidden?: boolean;
  readonly fields?: readonly CreateMetadataTemplateRequestBodyFieldsField[];
  readonly copyInstanceOnItemCopy?: boolean;
}
export class CreateMetadataTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateMetadataTemplateHeaders, 'extraHeaders'>
      | Partial<Pick<CreateMetadataTemplateHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class MetadataTemplatesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          MetadataTemplatesManager,
          | 'networkSession'
          | 'getMetadataTemplatesByInstanceId'
          | 'getMetadataTemplate'
          | 'updateMetadataTemplate'
          | 'deleteMetadataTemplate'
          | 'getMetadataTemplateById'
          | 'getGlobalMetadataTemplates'
          | 'getEnterpriseMetadataTemplates'
          | 'createMetadataTemplate'
        >
      | Partial<Pick<MetadataTemplatesManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getMetadataTemplatesByInstanceId(
    queryParams: GetMetadataTemplatesByInstanceIdQueryParams,
    headers: GetMetadataTemplatesByInstanceIdHeaders = new GetMetadataTemplatesByInstanceIdHeaders(
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
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_templates'
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
  async getMetadataTemplate(
    scope: GetMetadataTemplateScope,
    templateKey: string,
    headers: GetMetadataTemplateHeaders = new GetMetadataTemplateHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_templates/',
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
    scope: UpdateMetadataTemplateScope,
    templateKey: string,
    requestBody: readonly UpdateMetadataTemplateRequestBody[],
    headers: UpdateMetadataTemplateHeaders = new UpdateMetadataTemplateHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_templates/',
        toString(scope) as string,
        '/',
        toString(templateKey) as string,
        '/schema'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateMetadataTemplateRequestBody
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
    scope: DeleteMetadataTemplateScope,
    templateKey: string,
    headers: DeleteMetadataTemplateHeaders = new DeleteMetadataTemplateHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_templates/',
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
    headers: GetMetadataTemplateByIdHeaders = new GetMetadataTemplateByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_templates/',
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
    queryParams: GetGlobalMetadataTemplatesQueryParams = {} satisfies GetGlobalMetadataTemplatesQueryParams,
    headers: GetGlobalMetadataTemplatesHeaders = new GetGlobalMetadataTemplatesHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/metadata_templates/global'
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
  async getEnterpriseMetadataTemplates(
    queryParams: GetEnterpriseMetadataTemplatesQueryParams = {} satisfies GetEnterpriseMetadataTemplatesQueryParams,
    headers: GetEnterpriseMetadataTemplatesHeaders = new GetEnterpriseMetadataTemplatesHeaders(
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
        this.networkSession.baseUrls.baseUrl,
        '/metadata_templates/enterprise'
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
    requestBody: CreateMetadataTemplateRequestBody,
    headers: CreateMetadataTemplateHeaders = new CreateMetadataTemplateHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_templates/schema'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateMetadataTemplateRequestBody(requestBody),
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
export function serializeGetMetadataTemplateScope(
  val: GetMetadataTemplateScope
): SerializedData {
  return val;
}
export function deserializeGetMetadataTemplateScope(
  val: any
): GetMetadataTemplateScope {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "GetMetadataTemplateScope"',
    });
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateMetadataTemplateScope(
  val: UpdateMetadataTemplateScope
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateScope(
  val: any
): UpdateMetadataTemplateScope {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "UpdateMetadataTemplateScope"',
    });
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateMetadataTemplateRequestBodyOpField(
  val: UpdateMetadataTemplateRequestBodyOpField
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateRequestBodyOpField(
  val: any
): UpdateMetadataTemplateRequestBodyOpField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateMetadataTemplateRequestBodyOpField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateMetadataTemplateRequestBody(
  val: UpdateMetadataTemplateRequestBody
): SerializedData {
  return {
    ['op']: serializeUpdateMetadataTemplateRequestBodyOpField(val.op),
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
export function deserializeUpdateMetadataTemplateRequestBody(
  val: any
): UpdateMetadataTemplateRequestBody {
  const op: UpdateMetadataTemplateRequestBodyOpField =
    deserializeUpdateMetadataTemplateRequestBodyOpField(val.op);
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
  } satisfies UpdateMetadataTemplateRequestBody;
}
export function serializeDeleteMetadataTemplateScope(
  val: DeleteMetadataTemplateScope
): SerializedData {
  return val;
}
export function deserializeDeleteMetadataTemplateScope(
  val: any
): DeleteMetadataTemplateScope {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "DeleteMetadataTemplateScope"',
    });
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateMetadataTemplateRequestBodyFieldsTypeField(
  val: CreateMetadataTemplateRequestBodyFieldsTypeField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataTemplateRequestBodyFieldsTypeField(
  val: any
): CreateMetadataTemplateRequestBodyFieldsTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateMetadataTemplateRequestBodyFieldsTypeField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateMetadataTemplateRequestBodyFieldsOptionsField(
  val: CreateMetadataTemplateRequestBodyFieldsOptionsField
): SerializedData {
  return { ['key']: val.key };
}
export function deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField(
  val: any
): CreateMetadataTemplateRequestBodyFieldsOptionsField {
  const key: string = val.key;
  return {
    key: key,
  } satisfies CreateMetadataTemplateRequestBodyFieldsOptionsField;
}
export function serializeCreateMetadataTemplateRequestBodyFieldsField(
  val: CreateMetadataTemplateRequestBodyFieldsField
): SerializedData {
  return {
    ['type']: serializeCreateMetadataTemplateRequestBodyFieldsTypeField(
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
            item: CreateMetadataTemplateRequestBodyFieldsOptionsField
          ): any {
            return serializeCreateMetadataTemplateRequestBodyFieldsOptionsField(
              item
            );
          }) as readonly any[]),
  };
}
export function deserializeCreateMetadataTemplateRequestBodyFieldsField(
  val: any
): CreateMetadataTemplateRequestBodyFieldsField {
  const type: CreateMetadataTemplateRequestBodyFieldsTypeField =
    deserializeCreateMetadataTemplateRequestBodyFieldsTypeField(val.type);
  const key: string = val.key;
  const displayName: string = val.displayName;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const options:
    | undefined
    | readonly CreateMetadataTemplateRequestBodyFieldsOptionsField[] =
    val.options == void 0
      ? void 0
      : sdIsList(val.options)
      ? (val.options.map(function (itm: SerializedData): any {
          return deserializeCreateMetadataTemplateRequestBodyFieldsOptionsField(
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
  } satisfies CreateMetadataTemplateRequestBodyFieldsField;
}
export function serializeCreateMetadataTemplateRequestBody(
  val: CreateMetadataTemplateRequestBody
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
            item: CreateMetadataTemplateRequestBodyFieldsField
          ): any {
            return serializeCreateMetadataTemplateRequestBodyFieldsField(item);
          }) as readonly any[]),
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
  };
}
export function deserializeCreateMetadataTemplateRequestBody(
  val: any
): CreateMetadataTemplateRequestBody {
  const scope: string = val.scope;
  const templateKey: undefined | string =
    val.templateKey == void 0 ? void 0 : val.templateKey;
  const displayName: string = val.displayName;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const fields:
    | undefined
    | readonly CreateMetadataTemplateRequestBodyFieldsField[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): any {
          return deserializeCreateMetadataTemplateRequestBodyFieldsField(itm);
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
  } satisfies CreateMetadataTemplateRequestBody;
}
