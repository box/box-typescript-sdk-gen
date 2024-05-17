import { serializeClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
import { deserializeClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { ClassificationTemplate } from '../schemas/classificationTemplate.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
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
    const headers: GetClassificationTemplateHeaders =
      new GetClassificationTemplateHeaders({
        extraHeaders: headersInput.extraHeaders,
      });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema'
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
    const optionals: AddClassificationOptionals =
      new AddClassificationOptionals({
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
        '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add'
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
    const optionals: UpdateClassificationOptionals =
      new UpdateClassificationOptionals({
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
        '/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update'
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
    const requestBody: CreateClassificationTemplateRequestBody =
      new CreateClassificationTemplateRequestBody({
        scope: requestBodyInput.scope,
        templateKey: requestBodyInput.templateKey,
        displayName: requestBodyInput.displayName,
        hidden: requestBodyInput.hidden,
        copyInstanceOnItemCopy: requestBodyInput.copyInstanceOnItemCopy,
        fields: requestBodyInput.fields,
      });
    const optionals: CreateClassificationTemplateOptionals =
      new CreateClassificationTemplateOptionals({
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
        '/2.0/metadata_templates/schema#classifications'
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
  val: AddClassificationRequestBodyOpField
): SerializedData {
  return val;
}
export function deserializeAddClassificationRequestBodyOpField(
  val: SerializedData
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
  val: AddClassificationRequestBodyFieldKeyField
): SerializedData {
  return val;
}
export function deserializeAddClassificationRequestBodyFieldKeyField(
  val: SerializedData
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
  val: AddClassificationRequestBodyDataStaticConfigClassificationField
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
  val: SerializedData
): AddClassificationRequestBodyDataStaticConfigClassificationField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AddClassificationRequestBodyDataStaticConfigClassificationField"',
    });
  }
  if (
    !(val.classificationDefinition == void 0) &&
    !sdIsString(val.classificationDefinition)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "classificationDefinition" of type "AddClassificationRequestBodyDataStaticConfigClassificationField"',
    });
  }
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  if (!(val.colorID == void 0) && !sdIsNumber(val.colorID)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "colorID" of type "AddClassificationRequestBodyDataStaticConfigClassificationField"',
    });
  }
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies AddClassificationRequestBodyDataStaticConfigClassificationField;
}
export function serializeAddClassificationRequestBodyDataStaticConfigField(
  val: AddClassificationRequestBodyDataStaticConfigField
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
  val: SerializedData
): AddClassificationRequestBodyDataStaticConfigField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "AddClassificationRequestBodyDataStaticConfigField"',
    });
  }
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
  val: AddClassificationRequestBodyDataField
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
  val: SerializedData
): AddClassificationRequestBodyDataField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AddClassificationRequestBodyDataField"',
    });
  }
  if (val.key == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "key" of type "AddClassificationRequestBodyDataField" to be defined',
    });
  }
  if (!sdIsString(val.key)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "key" of type "AddClassificationRequestBodyDataField"',
    });
  }
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
  val: AddClassificationRequestBody
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
  val: SerializedData
): AddClassificationRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AddClassificationRequestBody"',
    });
  }
  if (val.op == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "op" of type "AddClassificationRequestBody" to be defined',
    });
  }
  const op: AddClassificationRequestBodyOpField =
    deserializeAddClassificationRequestBodyOpField(val.op);
  if (val.fieldKey == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "fieldKey" of type "AddClassificationRequestBody" to be defined',
    });
  }
  const fieldKey: AddClassificationRequestBodyFieldKeyField =
    deserializeAddClassificationRequestBodyFieldKeyField(val.fieldKey);
  if (val.data == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "data" of type "AddClassificationRequestBody" to be defined',
    });
  }
  const data: AddClassificationRequestBodyDataField =
    deserializeAddClassificationRequestBodyDataField(val.data);
  return {
    op: op,
    fieldKey: fieldKey,
    data: data,
  } satisfies AddClassificationRequestBody;
}
export function serializeAddClassificationRequestBodyInput(
  val: AddClassificationRequestBodyInput
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
  val: SerializedData
): AddClassificationRequestBodyInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "AddClassificationRequestBodyInput"',
    });
  }
  const op: undefined | AddClassificationRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeAddClassificationRequestBodyOpField(val.op);
  const fieldKey: undefined | AddClassificationRequestBodyFieldKeyField =
    val.fieldKey == void 0
      ? void 0
      : deserializeAddClassificationRequestBodyFieldKeyField(val.fieldKey);
  if (val.data == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "data" of type "AddClassificationRequestBodyInput" to be defined',
    });
  }
  const data: AddClassificationRequestBodyDataField =
    deserializeAddClassificationRequestBodyDataField(val.data);
  return {
    op: op,
    fieldKey: fieldKey,
    data: data,
  } satisfies AddClassificationRequestBodyInput;
}
export function serializeUpdateClassificationRequestBodyOpField(
  val: UpdateClassificationRequestBodyOpField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationRequestBodyOpField(
  val: SerializedData
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
  val: UpdateClassificationRequestBodyFieldKeyField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationRequestBodyFieldKeyField(
  val: SerializedData
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
  val: UpdateClassificationRequestBodyDataStaticConfigClassificationField
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
  val: SerializedData
): UpdateClassificationRequestBodyDataStaticConfigClassificationField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
    });
  }
  if (
    !(val.classificationDefinition == void 0) &&
    !sdIsString(val.classificationDefinition)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "classificationDefinition" of type "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
    });
  }
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  if (!(val.colorID == void 0) && !sdIsNumber(val.colorID)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "colorID" of type "UpdateClassificationRequestBodyDataStaticConfigClassificationField"',
    });
  }
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies UpdateClassificationRequestBodyDataStaticConfigClassificationField;
}
export function serializeUpdateClassificationRequestBodyDataStaticConfigField(
  val: UpdateClassificationRequestBodyDataStaticConfigField
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
  val: SerializedData
): UpdateClassificationRequestBodyDataStaticConfigField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateClassificationRequestBodyDataStaticConfigField"',
    });
  }
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
  val: UpdateClassificationRequestBodyDataField
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
  val: SerializedData
): UpdateClassificationRequestBodyDataField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateClassificationRequestBodyDataField"',
    });
  }
  if (val.key == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "key" of type "UpdateClassificationRequestBodyDataField" to be defined',
    });
  }
  if (!sdIsString(val.key)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "key" of type "UpdateClassificationRequestBodyDataField"',
    });
  }
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
  val: UpdateClassificationRequestBody
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
  val: SerializedData
): UpdateClassificationRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateClassificationRequestBody"',
    });
  }
  if (val.op == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "op" of type "UpdateClassificationRequestBody" to be defined',
    });
  }
  const op: UpdateClassificationRequestBodyOpField =
    deserializeUpdateClassificationRequestBodyOpField(val.op);
  if (val.fieldKey == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "fieldKey" of type "UpdateClassificationRequestBody" to be defined',
    });
  }
  const fieldKey: UpdateClassificationRequestBodyFieldKeyField =
    deserializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey);
  if (val.enumOptionKey == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "enumOptionKey" of type "UpdateClassificationRequestBody" to be defined',
    });
  }
  if (!sdIsString(val.enumOptionKey)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "enumOptionKey" of type "UpdateClassificationRequestBody"',
    });
  }
  const enumOptionKey: string = val.enumOptionKey;
  if (val.data == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "data" of type "UpdateClassificationRequestBody" to be defined',
    });
  }
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
  val: UpdateClassificationRequestBodyInput
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
  val: SerializedData
): UpdateClassificationRequestBodyInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateClassificationRequestBodyInput"',
    });
  }
  const op: undefined | UpdateClassificationRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateClassificationRequestBodyOpField(val.op);
  const fieldKey: undefined | UpdateClassificationRequestBodyFieldKeyField =
    val.fieldKey == void 0
      ? void 0
      : deserializeUpdateClassificationRequestBodyFieldKeyField(val.fieldKey);
  if (val.enumOptionKey == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "enumOptionKey" of type "UpdateClassificationRequestBodyInput" to be defined',
    });
  }
  if (!sdIsString(val.enumOptionKey)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "enumOptionKey" of type "UpdateClassificationRequestBodyInput"',
    });
  }
  const enumOptionKey: string = val.enumOptionKey;
  if (val.data == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "data" of type "UpdateClassificationRequestBodyInput" to be defined',
    });
  }
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
  val: CreateClassificationTemplateRequestBodyScopeField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyScopeField(
  val: SerializedData
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
  val: CreateClassificationTemplateRequestBodyTemplateKeyField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(
  val: SerializedData
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
  val: CreateClassificationTemplateRequestBodyDisplayNameField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyDisplayNameField(
  val: SerializedData
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
  val: CreateClassificationTemplateRequestBodyFieldsTypeField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(
  val: SerializedData
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
  val: CreateClassificationTemplateRequestBodyFieldsKeyField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(
  val: SerializedData
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
  val: CreateClassificationTemplateRequestBodyFieldsDisplayNameField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(
  val: SerializedData
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
  val: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField
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
  val: SerializedData
): CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
    });
  }
  if (
    !(val.classificationDefinition == void 0) &&
    !sdIsString(val.classificationDefinition)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "classificationDefinition" of type "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
    });
  }
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  if (!(val.colorID == void 0) && !sdIsNumber(val.colorID)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "colorID" of type "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField"',
    });
  }
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigClassificationField;
}
export function serializeCreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField(
  val: CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField
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
  val: SerializedData
): CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsStaticConfigField"',
    });
  }
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
  val: CreateClassificationTemplateRequestBodyFieldsOptionsField
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
  val: SerializedData
): CreateClassificationTemplateRequestBodyFieldsOptionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsOptionsField"',
    });
  }
  if (val.key == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "key" of type "CreateClassificationTemplateRequestBodyFieldsOptionsField" to be defined',
    });
  }
  if (!sdIsString(val.key)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "key" of type "CreateClassificationTemplateRequestBodyFieldsOptionsField"',
    });
  }
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
  val: CreateClassificationTemplateRequestBodyFieldsField
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
    ): SerializedData {
      return serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(
        item
      );
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsField(
  val: SerializedData
): CreateClassificationTemplateRequestBodyFieldsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsField"',
    });
  }
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
    });
  }
  const type: CreateClassificationTemplateRequestBodyFieldsTypeField =
    deserializeCreateClassificationTemplateRequestBodyFieldsTypeField(val.type);
  if (val.key == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "key" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
    });
  }
  const key: CreateClassificationTemplateRequestBodyFieldsKeyField =
    deserializeCreateClassificationTemplateRequestBodyFieldsKeyField(val.key);
  if (val.displayName == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "displayName" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
    });
  }
  const displayName: CreateClassificationTemplateRequestBodyFieldsDisplayNameField =
    deserializeCreateClassificationTemplateRequestBodyFieldsDisplayNameField(
      val.displayName
    );
  if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyFieldsField"',
    });
  }
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  if (val.options == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "options" of type "CreateClassificationTemplateRequestBodyFieldsField" to be defined',
    });
  }
  if (!sdIsList(val.options)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "options" of type "CreateClassificationTemplateRequestBodyFieldsField"',
    });
  }
  const options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[] =
    sdIsList(val.options)
      ? (val.options.map(function (
          itm: SerializedData
        ): CreateClassificationTemplateRequestBodyFieldsOptionsField {
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
  val: CreateClassificationTemplateRequestBodyFieldsFieldInput
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
    ): SerializedData {
      return serializeCreateClassificationTemplateRequestBodyFieldsOptionsField(
        item
      );
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBodyFieldsFieldInput(
  val: SerializedData
): CreateClassificationTemplateRequestBodyFieldsFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
    });
  }
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
  if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
    });
  }
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  if (val.options == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "options" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput" to be defined',
    });
  }
  if (!sdIsList(val.options)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "options" of type "CreateClassificationTemplateRequestBodyFieldsFieldInput"',
    });
  }
  const options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[] =
    sdIsList(val.options)
      ? (val.options.map(function (
          itm: SerializedData
        ): CreateClassificationTemplateRequestBodyFieldsOptionsField {
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
  val: CreateClassificationTemplateRequestBody
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
    ): SerializedData {
      return serializeCreateClassificationTemplateRequestBodyFieldsField(item);
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBody(
  val: SerializedData
): CreateClassificationTemplateRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "CreateClassificationTemplateRequestBody"',
    });
  }
  if (val.scope == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "scope" of type "CreateClassificationTemplateRequestBody" to be defined',
    });
  }
  const scope: CreateClassificationTemplateRequestBodyScopeField =
    deserializeCreateClassificationTemplateRequestBodyScopeField(val.scope);
  if (val.templateKey == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "templateKey" of type "CreateClassificationTemplateRequestBody" to be defined',
    });
  }
  const templateKey: CreateClassificationTemplateRequestBodyTemplateKeyField =
    deserializeCreateClassificationTemplateRequestBodyTemplateKeyField(
      val.templateKey
    );
  if (val.displayName == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "displayName" of type "CreateClassificationTemplateRequestBody" to be defined',
    });
  }
  const displayName: CreateClassificationTemplateRequestBodyDisplayNameField =
    deserializeCreateClassificationTemplateRequestBodyDisplayNameField(
      val.displayName
    );
  if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBody"',
    });
  }
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  if (
    !(val.copyInstanceOnItemCopy == void 0) &&
    !sdIsBoolean(val.copyInstanceOnItemCopy)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "copyInstanceOnItemCopy" of type "CreateClassificationTemplateRequestBody"',
    });
  }
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  if (val.fields == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "fields" of type "CreateClassificationTemplateRequestBody" to be defined',
    });
  }
  if (!sdIsList(val.fields)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "fields" of type "CreateClassificationTemplateRequestBody"',
    });
  }
  const fields: readonly CreateClassificationTemplateRequestBodyFieldsField[] =
    sdIsList(val.fields)
      ? (val.fields.map(function (
          itm: SerializedData
        ): CreateClassificationTemplateRequestBodyFieldsField {
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
  val: CreateClassificationTemplateRequestBodyInput
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
    ): SerializedData {
      return serializeCreateClassificationTemplateRequestBodyFieldsField(item);
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBodyInput(
  val: SerializedData
): CreateClassificationTemplateRequestBodyInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "CreateClassificationTemplateRequestBodyInput"',
    });
  }
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
  if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "hidden" of type "CreateClassificationTemplateRequestBodyInput"',
    });
  }
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  if (
    !(val.copyInstanceOnItemCopy == void 0) &&
    !sdIsBoolean(val.copyInstanceOnItemCopy)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "copyInstanceOnItemCopy" of type "CreateClassificationTemplateRequestBodyInput"',
    });
  }
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  if (val.fields == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "fields" of type "CreateClassificationTemplateRequestBodyInput" to be defined',
    });
  }
  if (!sdIsList(val.fields)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "fields" of type "CreateClassificationTemplateRequestBodyInput"',
    });
  }
  const fields: readonly CreateClassificationTemplateRequestBodyFieldsField[] =
    sdIsList(val.fields)
      ? (val.fields.map(function (
          itm: SerializedData
        ): CreateClassificationTemplateRequestBodyFieldsField {
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
