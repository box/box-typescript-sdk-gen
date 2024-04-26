import { serializeMetadataTemplates } from '../schemas.generated.js';
import { deserializeMetadataTemplates } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeMetadataTemplate } from '../schemas.generated.js';
import { deserializeMetadataTemplate } from '../schemas.generated.js';
import { MetadataTemplates } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { MetadataTemplate } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class GetMetadataTemplatesByInstanceIdOptionals {
  readonly headers: GetMetadataTemplatesByInstanceIdHeaders =
    new GetMetadataTemplatesByInstanceIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetMetadataTemplatesByInstanceIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetMetadataTemplatesByInstanceIdOptionals,
          'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetMetadataTemplatesByInstanceIdOptionalsInput {
  readonly headers?: GetMetadataTemplatesByInstanceIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetMetadataTemplateOptionals {
  readonly headers: GetMetadataTemplateHeaders = new GetMetadataTemplateHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetMetadataTemplateOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetMetadataTemplateOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetMetadataTemplateOptionalsInput {
  readonly headers?: GetMetadataTemplateHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateMetadataTemplateOptionals {
  readonly headers: UpdateMetadataTemplateHeaders =
    new UpdateMetadataTemplateHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateMetadataTemplateOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<UpdateMetadataTemplateOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateMetadataTemplateOptionalsInput {
  readonly headers?: UpdateMetadataTemplateHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteMetadataTemplateOptionals {
  readonly headers: DeleteMetadataTemplateHeaders =
    new DeleteMetadataTemplateHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteMetadataTemplateOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteMetadataTemplateOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteMetadataTemplateOptionalsInput {
  readonly headers?: DeleteMetadataTemplateHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetMetadataTemplateByIdOptionals {
  readonly headers: GetMetadataTemplateByIdHeaders =
    new GetMetadataTemplateByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetMetadataTemplateByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetMetadataTemplateByIdOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetMetadataTemplateByIdOptionalsInput {
  readonly headers?: GetMetadataTemplateByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateMetadataTemplateOptionals {
  readonly headers: CreateMetadataTemplateHeaders =
    new CreateMetadataTemplateHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateMetadataTemplateOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<CreateMetadataTemplateOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface CreateMetadataTemplateOptionalsInput {
  readonly headers?: CreateMetadataTemplateHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface GetMetadataTemplatesByInstanceIdQueryParams {
  readonly metadataInstanceId: string;
}
export class GetMetadataTemplatesByInstanceIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetMetadataTemplatesByInstanceIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetMetadataTemplatesByInstanceIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetMetadataTemplatesByInstanceIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type GetMetadataTemplateScope = 'global' | 'enterprise';
export class GetMetadataTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetMetadataTemplateHeaders, 'extraHeaders'> &
      Partial<Pick<GetMetadataTemplateHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetMetadataTemplateHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    readonly [key: string]: any;
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
    fields: Omit<UpdateMetadataTemplateHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateMetadataTemplateHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateMetadataTemplateHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type DeleteMetadataTemplateScope = 'global' | 'enterprise';
export class DeleteMetadataTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteMetadataTemplateHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteMetadataTemplateHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteMetadataTemplateHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class GetMetadataTemplateByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetMetadataTemplateByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetMetadataTemplateByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetMetadataTemplateByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<GetGlobalMetadataTemplatesHeaders, 'extraHeaders'> &
      Partial<Pick<GetGlobalMetadataTemplatesHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetGlobalMetadataTemplatesHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<GetEnterpriseMetadataTemplatesHeaders, 'extraHeaders'> &
      Partial<Pick<GetEnterpriseMetadataTemplatesHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetEnterpriseMetadataTemplatesHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    fields: Omit<CreateMetadataTemplateHeaders, 'extraHeaders'> &
      Partial<Pick<CreateMetadataTemplateHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateMetadataTemplateHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class MetadataTemplatesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
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
    > &
      Partial<Pick<MetadataTemplatesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getMetadataTemplatesByInstanceId(
    queryParams: GetMetadataTemplatesByInstanceIdQueryParams,
    optionalsInput: GetMetadataTemplatesByInstanceIdOptionalsInput = {}
  ): Promise<MetadataTemplates> {
    const optionals: GetMetadataTemplatesByInstanceIdOptionals =
      new GetMetadataTemplatesByInstanceIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: GetMetadataTemplateOptionalsInput = {}
  ): Promise<MetadataTemplate> {
    const optionals: GetMetadataTemplateOptionals =
      new GetMetadataTemplateOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: UpdateMetadataTemplateOptionalsInput = {}
  ): Promise<MetadataTemplate> {
    const optionals: UpdateMetadataTemplateOptionals =
      new UpdateMetadataTemplateOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: DeleteMetadataTemplateOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteMetadataTemplateOptionals =
      new DeleteMetadataTemplateOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    optionalsInput: GetMetadataTemplateByIdOptionalsInput = {}
  ): Promise<MetadataTemplate> {
    const optionals: GetMetadataTemplateByIdOptionals =
      new GetMetadataTemplateByIdOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
    headersInput: GetGlobalMetadataTemplatesHeadersInput = new GetGlobalMetadataTemplatesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplates> {
    const headers: GetGlobalMetadataTemplatesHeaders =
      new GetGlobalMetadataTemplatesHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
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
    headersInput: GetEnterpriseMetadataTemplatesHeadersInput = new GetEnterpriseMetadataTemplatesHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<MetadataTemplates> {
    const headers: GetEnterpriseMetadataTemplatesHeaders =
      new GetEnterpriseMetadataTemplatesHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
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
    optionalsInput: CreateMetadataTemplateOptionalsInput = {}
  ): Promise<MetadataTemplate> {
    const optionals: CreateMetadataTemplateOptionals =
      new CreateMetadataTemplateOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
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
export interface MetadataTemplatesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
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
    ['data']:
      val.data == void 0
        ? void 0
        : (Object.fromEntries(
            Object.entries(val.data).map(([k, v]: [string, any]) => [
              k,
              (function (v: any): any {
                return v;
              })(v),
            ])
          ) as {
            readonly [key: string]: any;
          }),
    ['fieldKey']: val.fieldKey == void 0 ? void 0 : val.fieldKey,
    ['fieldKeys']:
      val.fieldKeys == void 0
        ? void 0
        : (val.fieldKeys.map(function (item: string): SerializedData {
            return item;
          }) as readonly any[]),
    ['enumOptionKey']: val.enumOptionKey == void 0 ? void 0 : val.enumOptionKey,
    ['enumOptionKeys']:
      val.enumOptionKeys == void 0
        ? void 0
        : (val.enumOptionKeys.map(function (item: string): SerializedData {
            return item;
          }) as readonly any[]),
    ['multiSelectOptionKey']:
      val.multiSelectOptionKey == void 0 ? void 0 : val.multiSelectOptionKey,
    ['multiSelectOptionKeys']:
      val.multiSelectOptionKeys == void 0
        ? void 0
        : (val.multiSelectOptionKeys.map(function (
            item: string
          ): SerializedData {
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
        readonly [key: string]: any;
      } = val.data == void 0 ? void 0 : val.data;
  const fieldKey: undefined | string =
    val.fieldKey == void 0 ? void 0 : val.fieldKey;
  const fieldKeys: undefined | readonly string[] =
    val.fieldKeys == void 0
      ? void 0
      : sdIsList(val.fieldKeys)
      ? val.fieldKeys
      : [];
  const enumOptionKey: undefined | string =
    val.enumOptionKey == void 0 ? void 0 : val.enumOptionKey;
  const enumOptionKeys: undefined | readonly string[] =
    val.enumOptionKeys == void 0
      ? void 0
      : sdIsList(val.enumOptionKeys)
      ? val.enumOptionKeys
      : [];
  const multiSelectOptionKey: undefined | string =
    val.multiSelectOptionKey == void 0 ? void 0 : val.multiSelectOptionKey;
  const multiSelectOptionKeys: undefined | readonly string[] =
    val.multiSelectOptionKeys == void 0
      ? void 0
      : sdIsList(val.multiSelectOptionKeys)
      ? val.multiSelectOptionKeys
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
          ): SerializedData {
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
      ? (val.options.map(function (
          itm: SerializedData
        ): CreateMetadataTemplateRequestBodyFieldsOptionsField {
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
          ): SerializedData {
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
      ? (val.fields.map(function (
          itm: SerializedData
        ): CreateMetadataTemplateRequestBodyFieldsField {
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
