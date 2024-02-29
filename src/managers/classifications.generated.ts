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
export class GetClassificationTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetClassificationTemplateHeaders, 'extraHeaders'>
      | Partial<Pick<GetClassificationTemplateHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
export interface AddClassificationRequestBody {
  readonly op: AddClassificationRequestBodyOpField;
  readonly fieldKey: AddClassificationRequestBodyFieldKeyField;
  readonly data: AddClassificationRequestBodyDataField;
}
export class AddClassificationHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<AddClassificationHeaders, 'extraHeaders'>
      | Partial<Pick<AddClassificationHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
export interface UpdateClassificationRequestBody {
  readonly op: UpdateClassificationRequestBodyOpField;
  readonly fieldKey: UpdateClassificationRequestBodyFieldKeyField;
  readonly enumOptionKey: string;
  readonly data: UpdateClassificationRequestBodyDataField;
}
export class UpdateClassificationHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateClassificationHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateClassificationHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
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
export interface CreateClassificationTemplateRequestBodyFieldsField {
  readonly type: CreateClassificationTemplateRequestBodyFieldsTypeField;
  readonly key: CreateClassificationTemplateRequestBodyFieldsKeyField;
  readonly displayName: CreateClassificationTemplateRequestBodyFieldsDisplayNameField;
  readonly hidden?: boolean;
  readonly options: readonly CreateClassificationTemplateRequestBodyFieldsOptionsField[];
}
export interface CreateClassificationTemplateRequestBody {
  readonly scope: CreateClassificationTemplateRequestBodyScopeField;
  readonly templateKey: CreateClassificationTemplateRequestBodyTemplateKeyField;
  readonly displayName: CreateClassificationTemplateRequestBodyDisplayNameField;
  readonly hidden?: boolean;
  readonly copyInstanceOnItemCopy?: boolean;
  readonly fields: readonly CreateClassificationTemplateRequestBodyFieldsField[];
}
export class CreateClassificationTemplateHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateClassificationTemplateHeaders, 'extraHeaders'>
      | Partial<Pick<CreateClassificationTemplateHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class ClassificationsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          ClassificationsManager,
          | 'networkSession'
          | 'getClassificationTemplate'
          | 'addClassification'
          | 'updateClassification'
          | 'createClassificationTemplate'
        >
      | Partial<Pick<ClassificationsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getClassificationTemplate(
    headers: GetClassificationTemplateHeaders = new GetClassificationTemplateHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
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
    headers: AddClassificationHeaders = new AddClassificationHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
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
    headers: UpdateClassificationHeaders = new UpdateClassificationHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
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
    requestBody: CreateClassificationTemplateRequestBody,
    headers: CreateClassificationTemplateHeaders = new CreateClassificationTemplateHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
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
export function serializeAddClassificationRequestBodyOpField(
  val: AddClassificationRequestBodyOpField
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
  val: AddClassificationRequestBodyFieldKeyField
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
export function serializeUpdateClassificationRequestBodyOpField(
  val: UpdateClassificationRequestBodyOpField
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
  val: UpdateClassificationRequestBodyFieldKeyField
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
export function serializeCreateClassificationTemplateRequestBodyScopeField(
  val: CreateClassificationTemplateRequestBodyScopeField
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
  val: CreateClassificationTemplateRequestBodyTemplateKeyField
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
  val: CreateClassificationTemplateRequestBodyDisplayNameField
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
  val: CreateClassificationTemplateRequestBodyFieldsTypeField
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
  val: CreateClassificationTemplateRequestBodyFieldsKeyField
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
  val: CreateClassificationTemplateRequestBodyFieldsDisplayNameField
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
