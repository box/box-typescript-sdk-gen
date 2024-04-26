import { serializeClassificationTemplate } from '../schemas.generated.js';
import { deserializeClassificationTemplate } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { ClassificationTemplate } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
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
export class AddClassificationOptionals {
  readonly headers: AddClassificationHeaders = new AddClassificationHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<AddClassificationOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<AddClassificationOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface AddClassificationOptionalsInput {
  readonly headers?: AddClassificationHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateClassificationOptionals {
  readonly headers: UpdateClassificationHeaders =
    new UpdateClassificationHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateClassificationOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<UpdateClassificationOptionals, 'headers' | 'cancellationToken'>
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
export interface UpdateClassificationOptionalsInput {
  readonly headers?: UpdateClassificationHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateClassificationTemplateOptionals {
  readonly headers: CreateClassificationTemplateHeaders =
    new CreateClassificationTemplateHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateClassificationTemplateOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateClassificationTemplateOptionals,
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
export interface CreateClassificationTemplateOptionalsInput {
  readonly headers?: CreateClassificationTemplateHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetClassificationTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetClassificationTemplateHeaders, 'extraHeaders'> &
      Partial<Pick<GetClassificationTemplateHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetClassificationTemplateHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type AddClassificationRequestBodyOpField = 'addEnumOption';
export type AddClassificationRequestBodyFieldKeyField =
  'Box__Security__Classification__Key';
export interface AddClassificationRequestBodyDataStaticConfigClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface AddClassificationRequestBodyDataStaticConfigField {
  readonly classification?: AddClassificationRequestBodyDataStaticConfigClassificationField;
}
export interface AddClassificationRequestBodyDataField {
  readonly key: string;
  readonly staticConfig?: AddClassificationRequestBodyDataStaticConfigField;
}
export class AddClassificationRequestBody {
  readonly op: AddClassificationRequestBodyOpField =
    'addEnumOption' as AddClassificationRequestBodyOpField;
  readonly fieldKey: AddClassificationRequestBodyFieldKeyField =
    'Box__Security__Classification__Key' as AddClassificationRequestBodyFieldKeyField;
  readonly data!: AddClassificationRequestBodyDataField;
  constructor(
    fields: Omit<AddClassificationRequestBody, 'op' | 'fieldKey'> &
      Partial<Pick<AddClassificationRequestBody, 'op' | 'fieldKey'>>
  ) {
    if (fields.op) {
      this.op = fields.op;
    }
    if (fields.fieldKey) {
      this.fieldKey = fields.fieldKey;
    }
    if (fields.data) {
      this.data = fields.data;
    }
  }
}
export interface AddClassificationRequestBodyInput {
  readonly op?: AddClassificationRequestBodyOpField;
  readonly fieldKey?: AddClassificationRequestBodyFieldKeyField;
  readonly data: AddClassificationRequestBodyDataField;
}
export class AddClassificationHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<AddClassificationHeaders, 'extraHeaders'> &
      Partial<Pick<AddClassificationHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface AddClassificationHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateClassificationRequestBodyOpField = 'editEnumOption';
export type UpdateClassificationRequestBodyFieldKeyField =
  'Box__Security__Classification__Key';
export interface UpdateClassificationRequestBodyDataStaticConfigClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface UpdateClassificationRequestBodyDataStaticConfigField {
  readonly classification?: UpdateClassificationRequestBodyDataStaticConfigClassificationField;
}
export interface UpdateClassificationRequestBodyDataField {
  readonly key: string;
  readonly staticConfig?: UpdateClassificationRequestBodyDataStaticConfigField;
}
export class UpdateClassificationRequestBody {
  readonly op: UpdateClassificationRequestBodyOpField =
    'editEnumOption' as UpdateClassificationRequestBodyOpField;
  readonly fieldKey: UpdateClassificationRequestBodyFieldKeyField =
    'Box__Security__Classification__Key' as UpdateClassificationRequestBodyFieldKeyField;
  readonly enumOptionKey!: string;
  readonly data!: UpdateClassificationRequestBodyDataField;
  constructor(
    fields: Omit<UpdateClassificationRequestBody, 'op' | 'fieldKey'> &
      Partial<Pick<UpdateClassificationRequestBody, 'op' | 'fieldKey'>>
  ) {
    if (fields.op) {
      this.op = fields.op;
    }
    if (fields.fieldKey) {
      this.fieldKey = fields.fieldKey;
    }
    if (fields.enumOptionKey) {
      this.enumOptionKey = fields.enumOptionKey;
    }
    if (fields.data) {
      this.data = fields.data;
    }
  }
}
export interface UpdateClassificationRequestBodyInput {
  readonly op?: UpdateClassificationRequestBodyOpField;
  readonly fieldKey?: UpdateClassificationRequestBodyFieldKeyField;
  readonly enumOptionKey: string;
  readonly data: UpdateClassificationRequestBodyDataField;
}
export class UpdateClassificationHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateClassificationHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateClassificationHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateClassificationHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type CreateClassificationTemplateRequestBodyScopeField = 'enterprise';
export type CreateClassificationTemplateRequestBodyTemplateKeyField =
  'securityClassification-6VMVochwUWo';
export type CreateClassificationTemplateRequestBodyDisplayNameField =
  'Classification';
export type CreateClassificationTemplateRequestBodyFieldsTypeField = 'enum';
export type CreateClassificationTemplateRequestBodyFieldsKeyField =
  'Box__Security__Classification__Key';
export type CreateClassificationTemplateRequestBodyFieldsDisplayNameField =
  'Classification';
export interface CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField {
  readonly classification?: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
}
export interface CreateClassificationTemplateRequestBodyFieldsOptionsField {
  readonly key: string;
  readonly staticConfig?: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
}
export class CreateClassificationTemplateRequestBodyFieldsField {
  readonly type: CreateClassificationTemplateRequestBodyFieldsTypeField =
    'enum' as CreateClassificationTemplateRequestBodyFieldsTypeField;
  readonly key: CreateClassificationTemplateRequestBodyFieldsKeyField =
    'Box__Security__Classification__Key' as CreateClassificationTemplateRequestBodyFieldsKeyField;
  readonly displayName: CreateClassificationTemplateRequestBodyFieldsDisplayNameField =
    'Classification' as CreateClassificationTemplateRequestBodyFieldsDisplayNameField;
  readonly hidden?: boolean;
  readonly options!: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[];
  constructor(
    fields: Omit<
      CreateClassificationTemplateRequestBodyFieldsField,
      'type' | 'key' | 'displayName'
    > &
      Partial<
        Pick<
          CreateClassificationTemplateRequestBodyFieldsField,
          'type' | 'key' | 'displayName'
        >
      >
  ) {
    if (fields.type) {
      this.type = fields.type;
    }
    if (fields.key) {
      this.key = fields.key;
    }
    if (fields.displayName) {
      this.displayName = fields.displayName;
    }
    if (fields.hidden) {
      this.hidden = fields.hidden;
    }
    if (fields.options) {
      this.options = fields.options;
    }
  }
}
export interface CreateClassificationTemplateRequestBodyFieldsFieldInput {
  readonly type?: CreateClassificationTemplateRequestBodyFieldsTypeField;
  readonly key?: CreateClassificationTemplateRequestBodyFieldsKeyField;
  readonly displayName?: CreateClassificationTemplateRequestBodyFieldsDisplayNameField;
  readonly hidden?: boolean;
  readonly options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[];
}
export class CreateClassificationTemplateRequestBody {
  readonly scope: CreateClassificationTemplateRequestBodyScopeField =
    'enterprise' as CreateClassificationTemplateRequestBodyScopeField;
  readonly templateKey: CreateClassificationTemplateRequestBodyTemplateKeyField =
    'securityClassification-6VMVochwUWo' as CreateClassificationTemplateRequestBodyTemplateKeyField;
  readonly displayName: CreateClassificationTemplateRequestBodyDisplayNameField =
    'Classification' as CreateClassificationTemplateRequestBodyDisplayNameField;
  readonly hidden?: boolean;
  readonly copyInstanceOnItemCopy?: boolean;
  readonly fields!: readonly CreateClassificationTemplateRequestBodyFieldsField[];
  constructor(
    fields: Omit<
      CreateClassificationTemplateRequestBody,
      'scope' | 'templateKey' | 'displayName'
    > &
      Partial<
        Pick<
          CreateClassificationTemplateRequestBody,
          'scope' | 'templateKey' | 'displayName'
        >
      >
  ) {
    if (fields.scope) {
      this.scope = fields.scope;
    }
    if (fields.templateKey) {
      this.templateKey = fields.templateKey;
    }
    if (fields.displayName) {
      this.displayName = fields.displayName;
    }
    if (fields.hidden) {
      this.hidden = fields.hidden;
    }
    if (fields.copyInstanceOnItemCopy) {
      this.copyInstanceOnItemCopy = fields.copyInstanceOnItemCopy;
    }
    if (fields.fields) {
      this.fields = fields.fields;
    }
  }
}
export interface CreateClassificationTemplateRequestBodyInput {
  readonly scope?: CreateClassificationTemplateRequestBodyScopeField;
  readonly templateKey?: CreateClassificationTemplateRequestBodyTemplateKeyField;
  readonly displayName?: CreateClassificationTemplateRequestBodyDisplayNameField;
  readonly hidden?: boolean;
  readonly copyInstanceOnItemCopy?: boolean;
  readonly fields: readonly CreateClassificationTemplateRequestBodyFieldsField[];
}
export class CreateClassificationTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateClassificationTemplateHeaders, 'extraHeaders'> &
      Partial<Pick<CreateClassificationTemplateHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateClassificationTemplateHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class ClassificationsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      ClassificationsManager,
      | 'networkSession'
      | 'getClassificationTemplate'
      | 'addClassification'
      | 'updateClassification'
      | 'createClassificationTemplate'
    > &
      Partial<Pick<ClassificationsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getClassificationTemplate(
    headersInput: GetClassificationTemplateHeadersInput = new GetClassificationTemplateHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
    const headers: any = new GetClassificationTemplateHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema'
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
    return deserializeClassificationTemplate(response.data);
  }
  async addClassification(
    requestBody: readonly AddClassificationRequestBody[],
    optionalsInput: AddClassificationOptionalsInput = {}
  ): Promise<ClassificationTemplate> {
    const optionals: any = new AddClassificationOptionals({
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
        '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeAddClassificationRequestBody
        ) as readonly any[],
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassificationTemplate(response.data);
  }
  async updateClassification(
    requestBody: readonly UpdateClassificationRequestBody[],
    optionalsInput: UpdateClassificationOptionalsInput = {}
  ): Promise<ClassificationTemplate> {
    const optionals: any = new UpdateClassificationOptionals({
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
        '/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateClassificationRequestBody
        ) as readonly any[],
        contentType: 'application/json-patch+json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassificationTemplate(response.data);
  }
  async createClassificationTemplate(
    requestBodyInput: CreateClassificationTemplateRequestBodyInput,
    optionalsInput: CreateClassificationTemplateOptionalsInput = {}
  ): Promise<ClassificationTemplate> {
    const requestBody: any = new CreateClassificationTemplateRequestBody({
      scope: requestBodyInput.scope,
      templateKey: requestBodyInput.templateKey,
      displayName: requestBodyInput.displayName,
      hidden: requestBodyInput.hidden,
      copyInstanceOnItemCopy: requestBodyInput.copyInstanceOnItemCopy,
      fields: requestBodyInput.fields,
    });
    const optionals: any = new CreateClassificationTemplateOptionals({
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
        '/metadata_templates/schema#classifications'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateClassificationTemplateRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassificationTemplate(response.data);
  }
}
export interface ClassificationsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeAddClassificationRequestBodyOpField(
  val: any
): SerializedData {
  return val;
}
export function deserializeAddClassificationRequestBodyOpField(
  val: any
): AddClassificationRequestBodyOpField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "AddClassificationRequestBodyOpField"',
    });
  }
  if (val == 'addEnumOption') {
    return 'addEnumOption';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeAddClassificationRequestBodyFieldKeyField(
  val: any
): SerializedData {
  return val;
}
export function deserializeAddClassificationRequestBodyFieldKeyField(
  val: any
): AddClassificationRequestBodyFieldKeyField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "AddClassificationRequestBodyFieldKeyField"',
    });
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeAddClassificationRequestBodyDataStaticConfigClassificationField(
  val: any
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeAddClassificationRequestBodyDataStaticConfigClassificationField(
  val: any
): AddClassificationRequestBodyDataStaticConfigClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies AddClassificationRequestBodyDataStaticConfigClassificationField;
}
export function serializeAddClassificationRequestBodyDataStaticConfigField(
  val: any
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeAddClassificationRequestBodyDataStaticConfigClassificationField(
            val.classification
          ),
  };
}
export function deserializeAddClassificationRequestBodyDataStaticConfigField(
  val: any
): AddClassificationRequestBodyDataStaticConfigField {
  const classification:
    | undefined
    | AddClassificationRequestBodyDataStaticConfigClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeAddClassificationRequestBodyDataStaticConfigClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies AddClassificationRequestBodyDataStaticConfigField;
}
export function serializeAddClassificationRequestBodyDataField(
  val: any
): SerializedData {
  return {
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeAddClassificationRequestBodyDataStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeAddClassificationRequestBodyDataField(
  val: any
): AddClassificationRequestBodyDataField {
  const key: string = val.key;
  const staticConfig:
    | undefined
    | AddClassificationRequestBodyDataStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeAddClassificationRequestBodyDataStaticConfigField(
          val.staticConfig
        );
  return {
    key: key,
    staticConfig: staticConfig,
  } satisfies AddClassificationRequestBodyDataField;
}
export function serializeAddClassificationRequestBody(
  val: any
): SerializedData {
  return {
    ['op']: serializeAddClassificationRequestBodyOpField(val.op),
    ['fieldKey']: serializeAddClassificationRequestBodyFieldKeyField(
      val.fieldKey
    ),
    ['data']: serializeAddClassificationRequestBodyDataField(val.data),
  };
}
export function deserializeAddClassificationRequestBody(
  val: any
): AddClassificationRequestBody {
  const op: AddClassificationRequestBodyOpField =
    deserializeAddClassificationRequestBodyOpField(val.op);
  const fieldKey: AddClassificationRequestBodyFieldKeyField =
    deserializeAddClassificationRequestBodyFieldKeyField(val.fieldKey);
  const data: AddClassificationRequestBodyDataField =
    deserializeAddClassificationRequestBodyDataField(val.data);
  return {
    op: op,
    fieldKey: fieldKey,
    data: data,
  } satisfies AddClassificationRequestBody;
}
export function serializeAddClassificationRequestBodyInput(
  val: any
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeAddClassificationRequestBodyOpField(val.op),
    ['fieldKey']:
      val.fieldKey == void 0
        ? void 0
        : serializeAddClassificationRequestBodyFieldKeyField(val.fieldKey),
    ['data']: serializeAddClassificationRequestBodyDataField(val.data),
  };
}
export function deserializeAddClassificationRequestBodyInput(
  val: any
): AddClassificationRequestBodyInput {
  const op: undefined | AddClassificationRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeAddClassificationRequestBodyOpField(val.op);
  const fieldKey: undefined | AddClassificationRequestBodyFieldKeyField =
    val.fieldKey == void 0
      ? void 0
      : deserializeAddClassificationRequestBodyFieldKeyField(val.fieldKey);
  const data: AddClassificationRequestBodyDataField =
    deserializeAddClassificationRequestBodyDataField(val.data);
  return {
    op: op,
    fieldKey: fieldKey,
    data: data,
  } satisfies AddClassificationRequestBodyInput;
}
export function serializeUpdateClassificationRequestBodyOpField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationRequestBodyOpField(
  val: any
): UpdateClassificationRequestBodyOpField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateClassificationRequestBodyOpField"',
    });
  }
  if (val == 'editEnumOption') {
    return 'editEnumOption';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateClassificationRequestBodyFieldKeyField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationRequestBodyFieldKeyField(
  val: any
): UpdateClassificationRequestBodyFieldKeyField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateClassificationRequestBodyFieldKeyField"',
    });
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(
  val: any
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(
  val: any
): UpdateClassificationRequestBodyDataStaticConfigClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies UpdateClassificationRequestBodyDataStaticConfigClassificationField;
}
export function serializeUpdateClassificationRequestBodyDataStaticConfigField(
  val: any
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(
            val.classification
          ),
  };
}
export function deserializeUpdateClassificationRequestBodyDataStaticConfigField(
  val: any
): UpdateClassificationRequestBodyDataStaticConfigField {
  const classification:
    | undefined
    | UpdateClassificationRequestBodyDataStaticConfigClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeUpdateClassificationRequestBodyDataStaticConfigClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies UpdateClassificationRequestBodyDataStaticConfigField;
}
export function serializeUpdateClassificationRequestBodyDataField(
  val: any
): SerializedData {
  return {
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeUpdateClassificationRequestBodyDataStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeUpdateClassificationRequestBodyDataField(
  val: any
): UpdateClassificationRequestBodyDataField {
  const key: string = val.key;
  const staticConfig:
    | undefined
    | UpdateClassificationRequestBodyDataStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeUpdateClassificationRequestBodyDataStaticConfigField(
          val.staticConfig
        );
  return {
    key: key,
    staticConfig: staticConfig,
  } satisfies UpdateClassificationRequestBodyDataField;
}
export function serializeUpdateClassificationRequestBody(
  val: any
): SerializedData {
  return {
    ['op']: serializeUpdateClassificationRequestBodyOpField(val.op),
    ['fieldKey']: serializeUpdateClassificationRequestBodyFieldKeyField(
      val.fieldKey
    ),
    ['enumOptionKey']: val.enumOptionKey,
    ['data']: serializeUpdateClassificationRequestBodyDataField(val.data),
  };
}
export function deserializeUpdateClassificationRequestBody(
  val: any
): UpdateClassificationRequestBody {
  const op: UpdateClassificationRequestBodyOpField =
    deserializeUpdateClassificationRequestBodyOpField(val.op);
  const fieldKey: UpdateClassificationRequestBodyFieldKeyField =
    deserializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey);
  const enumOptionKey: string = val.enumOptionKey;
  const data: UpdateClassificationRequestBodyDataField =
    deserializeUpdateClassificationRequestBodyDataField(val.data);
  return {
    op: op,
    fieldKey: fieldKey,
    enumOptionKey: enumOptionKey,
    data: data,
  } satisfies UpdateClassificationRequestBody;
}
export function serializeUpdateClassificationRequestBodyInput(
  val: any
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateClassificationRequestBodyOpField(val.op),
    ['fieldKey']:
      val.fieldKey == void 0
        ? void 0
        : serializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey),
    ['enumOptionKey']: val.enumOptionKey,
    ['data']: serializeUpdateClassificationRequestBodyDataField(val.data),
  };
}
export function deserializeUpdateClassificationRequestBodyInput(
  val: any
): UpdateClassificationRequestBodyInput {
  const op: undefined | UpdateClassificationRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateClassificationRequestBodyOpField(val.op);
  const fieldKey: undefined | UpdateClassificationRequestBodyFieldKeyField =
    val.fieldKey == void 0
      ? void 0
      : deserializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey);
  const enumOptionKey: string = val.enumOptionKey;
  const data: UpdateClassificationRequestBodyDataField =
    deserializeUpdateClassificationRequestBodyDataField(val.data);
  return {
    op: op,
    fieldKey: fieldKey,
    enumOptionKey: enumOptionKey,
    data: data,
  } satisfies UpdateClassificationRequestBodyInput;
}
export function serializeCreateClassificationTemplateRequestBodyScopeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyScopeField(
  val: any
): CreateClassificationTemplateRequestBodyScopeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateClassificationTemplateRequestBodyScopeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateClassificationTemplateRequestBodyTemplateKeyField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(
  val: any
): CreateClassificationTemplateRequestBodyTemplateKeyField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateClassificationTemplateRequestBodyTemplateKeyField"',
    });
  }
  if (val == 'securityClassification-6VMVochwUWo') {
    return 'securityClassification-6VMVochwUWo';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateClassificationTemplateRequestBodyDisplayNameField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyDisplayNameField(
  val: any
): CreateClassificationTemplateRequestBodyDisplayNameField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateClassificationTemplateRequestBodyDisplayNameField"',
    });
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateClassificationTemplateRequestBodyFieldsTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(
  val: any
): CreateClassificationTemplateRequestBodyFieldsTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateClassificationTemplateRequestBodyFieldsTypeField"',
    });
  }
  if (val == 'enum') {
    return 'enum';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateClassificationTemplateRequestBodyFieldsKeyField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(
  val: any
): CreateClassificationTemplateRequestBodyFieldsKeyField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateClassificationTemplateRequestBodyFieldsKeyField"',
    });
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(
  val: any
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(
  val: any
): CreateClassificationTemplateRequestBodyFieldsDisplayNameField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "CreateClassificationTemplateRequestBodyFieldsDisplayNameField"',
    });
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(
  val: any
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(
  val: any
): CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
}
export function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(
  val: any
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(
            val.classification
          ),
  };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(
  val: any
): CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField {
  const classification:
    | undefined
    | CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField;
}
export function serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(
  val: any
): SerializedData {
  return {
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(
  val: any
): CreateClassificationTemplateRequestBodyFieldsOptionsField {
  const key: string = val.key;
  const staticConfig:
    | undefined
    | CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(
          val.staticConfig
        );
  return {
    key: key,
    staticConfig: staticConfig,
  } satisfies CreateClassificationTemplateRequestBodyFieldsOptionsField;
}
export function serializeCreateClassificationTemplateRequestBodyFieldsField(
  val: any
): SerializedData {
  return {
    ['type']: serializeCreateClassificationTemplateRequestBodyFieldsTypeField(
      val.type
    ),
    ['key']: serializeCreateClassificationTemplateRequestBodyFieldsKeyField(
      val.key
    ),
    ['displayName']:
      serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(
        val.displayName
      ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']: val.options.map(function (
      item: CreateClassificationTemplateRequestBodyFieldsOptionsField
    ): any {
      return serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(
        item
      );
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsField(
  val: any
): CreateClassificationTemplateRequestBodyFieldsField {
  const type: CreateClassificationTemplateRequestBodyFieldsTypeField =
    deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type);
  const key: CreateClassificationTemplateRequestBodyFieldsKeyField =
    deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key);
  const displayName: CreateClassificationTemplateRequestBodyFieldsDisplayNameField =
    deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(
      val.displayName
    );
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[] =
    sdIsList(val.options)
      ? (val.options.map(function (itm: SerializedData): any {
          return deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(
            itm
          );
        }) as readonly any[])
      : [];
  return {
    type: type,
    key: key,
    displayName: displayName,
    hidden: hidden,
    options: options,
  } satisfies CreateClassificationTemplateRequestBodyFieldsField;
}
export function serializeCreateClassificationTemplateRequestBodyFieldsFieldInput(
  val: any
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyFieldsTypeField(
            val.type
          ),
    ['key']:
      val.key == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyFieldsKeyField(
            val.key
          ),
    ['displayName']:
      val.displayName == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(
            val.displayName
          ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']: val.options.map(function (
      item: CreateClassificationTemplateRequestBodyFieldsOptionsField
    ): any {
      return serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(
        item
      );
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput(
  val: any
): CreateClassificationTemplateRequestBodyFieldsFieldInput {
  const type:
    | undefined
    | CreateClassificationTemplateRequestBodyFieldsTypeField =
    val.type == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(
          val.type
        );
  const key: undefined | CreateClassificationTemplateRequestBodyFieldsKeyField =
    val.key == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(
          val.key
        );
  const displayName:
    | undefined
    | CreateClassificationTemplateRequestBodyFieldsDisplayNameField =
    val.displayName == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(
          val.displayName
        );
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[] =
    sdIsList(val.options)
      ? (val.options.map(function (itm: SerializedData): any {
          return deserializeCreateClassificationTemplateRequestBodyFieldsOptionsField(
            itm
          );
        }) as readonly any[])
      : [];
  return {
    type: type,
    key: key,
    displayName: displayName,
    hidden: hidden,
    options: options,
  } satisfies CreateClassificationTemplateRequestBodyFieldsFieldInput;
}
export function serializeCreateClassificationTemplateRequestBody(
  val: any
): SerializedData {
  return {
    ['scope']: serializeCreateClassificationTemplateRequestBodyScopeField(
      val.scope
    ),
    ['templateKey']:
      serializeCreateClassificationTemplateRequestBodyTemplateKeyField(
        val.templateKey
      ),
    ['displayName']:
      serializeCreateClassificationTemplateRequestBodyDisplayNameField(
        val.displayName
      ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
    ['fields']: val.fields.map(function (
      item: CreateClassificationTemplateRequestBodyFieldsField
    ): any {
      return serializeCreateClassificationTemplateRequestBodyFieldsField(item);
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBody(
  val: any
): CreateClassificationTemplateRequestBody {
  const scope: CreateClassificationTemplateRequestBodyScopeField =
    deserializeCreateClassificationTemplateRequestBodyScopeField(val.scope);
  const templateKey: CreateClassificationTemplateRequestBodyTemplateKeyField =
    deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(
      val.templateKey
    );
  const displayName: CreateClassificationTemplateRequestBodyDisplayNameField =
    deserializeCreateClassificationTemplateRequestBodyDisplayNameField(
      val.displayName
    );
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  const fields: readonly CreateClassificationTemplateRequestBodyFieldsField[] =
    sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): any {
          return deserializeCreateClassificationTemplateRequestBodyFieldsField(
            itm
          );
        }) as readonly any[])
      : [];
  return {
    scope: scope,
    templateKey: templateKey,
    displayName: displayName,
    hidden: hidden,
    copyInstanceOnItemCopy: copyInstanceOnItemCopy,
    fields: fields,
  } satisfies CreateClassificationTemplateRequestBody;
}
export function serializeCreateClassificationTemplateRequestBodyInput(
  val: any
): SerializedData {
  return {
    ['scope']:
      val.scope == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyScopeField(val.scope),
    ['templateKey']:
      val.templateKey == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyTemplateKeyField(
            val.templateKey
          ),
    ['displayName']:
      val.displayName == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyDisplayNameField(
            val.displayName
          ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
    ['fields']: val.fields.map(function (
      item: CreateClassificationTemplateRequestBodyFieldsField
    ): any {
      return serializeCreateClassificationTemplateRequestBodyFieldsField(item);
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBodyInput(
  val: any
): CreateClassificationTemplateRequestBodyInput {
  const scope: undefined | CreateClassificationTemplateRequestBodyScopeField =
    val.scope == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyScopeField(val.scope);
  const templateKey:
    | undefined
    | CreateClassificationTemplateRequestBodyTemplateKeyField =
    val.templateKey == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(
          val.templateKey
        );
  const displayName:
    | undefined
    | CreateClassificationTemplateRequestBodyDisplayNameField =
    val.displayName == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyDisplayNameField(
          val.displayName
        );
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  const fields: readonly CreateClassificationTemplateRequestBodyFieldsField[] =
    sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): any {
          return deserializeCreateClassificationTemplateRequestBodyFieldsField(
            itm
          );
        }) as readonly any[])
      : [];
  return {
    scope: scope,
    templateKey: templateKey,
    displayName: displayName,
    hidden: hidden,
    copyInstanceOnItemCopy: copyInstanceOnItemCopy,
    fields: fields,
  } satisfies CreateClassificationTemplateRequestBodyInput;
}
