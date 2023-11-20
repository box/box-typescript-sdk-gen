import { serializeClassificationTemplate } from '../schemas.generated.js';
import { deserializeClassificationTemplate } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { ClassificationTemplate } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
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
export class GetClassificationTemplateHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetClassificationTemplateHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetClassificationTemplateHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          DeleteMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            DeleteMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export type AddClassificationRequestBodyArgOpField = 'addEnumOption';
export type AddClassificationRequestBodyArgFieldKeyField =
  'Box__Security__Classification__Key';
export interface AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface AddClassificationRequestBodyArgDataFieldStaticConfigField {
  readonly classification?: AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField;
}
export interface AddClassificationRequestBodyArgDataField {
  readonly key: string;
  readonly staticConfig?: AddClassificationRequestBodyArgDataFieldStaticConfigField;
}
export interface AddClassificationRequestBodyArg {
  readonly op: AddClassificationRequestBodyArgOpField;
  readonly fieldKey: AddClassificationRequestBodyArgFieldKeyField;
  readonly data: AddClassificationRequestBodyArgDataField;
}
export class AddClassificationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<AddClassificationHeadersArg, 'extraHeaders'>
      | Partial<Pick<AddClassificationHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateClassificationRequestBodyArgOpField = 'editEnumOption';
export type UpdateClassificationRequestBodyArgFieldKeyField =
  'Box__Security__Classification__Key';
export interface UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface UpdateClassificationRequestBodyArgDataFieldStaticConfigField {
  readonly classification?: UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField;
}
export interface UpdateClassificationRequestBodyArgDataField {
  readonly key: string;
  readonly staticConfig?: UpdateClassificationRequestBodyArgDataFieldStaticConfigField;
}
export interface UpdateClassificationRequestBodyArg {
  readonly op: UpdateClassificationRequestBodyArgOpField;
  readonly fieldKey: UpdateClassificationRequestBodyArgFieldKeyField;
  readonly enumOptionKey: string;
  readonly data: UpdateClassificationRequestBodyArgDataField;
}
export class UpdateClassificationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateClassificationHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateClassificationHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField =
  'removeEnumOption';
export type UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField =
  'Box__Security__Classification__Key';
export interface UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArg {
  readonly op: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField;
  readonly fieldKey: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField;
  readonly enumOptionKey: string;
}
export class UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export type CreateClassificationTemplateRequestBodyArgScopeField = 'enterprise';
export type CreateClassificationTemplateRequestBodyArgTemplateKeyField =
  'securityClassification-6VMVochwUWo';
export type CreateClassificationTemplateRequestBodyArgDisplayNameField =
  'Classification';
export type CreateClassificationTemplateRequestBodyArgFieldsFieldTypeField =
  'enum';
export type CreateClassificationTemplateRequestBodyArgFieldsFieldKeyField =
  'Box__Security__Classification__Key';
export type CreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField =
  'Classification';
export interface CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField {
  readonly classification?: CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export interface CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField {
  readonly key: string;
  readonly staticConfig?: CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
}
export interface CreateClassificationTemplateRequestBodyArgFieldsField {
  readonly type: CreateClassificationTemplateRequestBodyArgFieldsFieldTypeField;
  readonly key: CreateClassificationTemplateRequestBodyArgFieldsFieldKeyField;
  readonly displayName: CreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField;
  readonly hidden?: boolean;
  readonly options: readonly CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField[];
}
export interface CreateClassificationTemplateRequestBodyArg {
  readonly scope: CreateClassificationTemplateRequestBodyArgScopeField;
  readonly templateKey: CreateClassificationTemplateRequestBodyArgTemplateKeyField;
  readonly displayName: CreateClassificationTemplateRequestBodyArgDisplayNameField;
  readonly hidden?: boolean;
  readonly copyInstanceOnItemCopy?: boolean;
  readonly fields: readonly CreateClassificationTemplateRequestBodyArgFieldsField[];
}
export class CreateClassificationTemplateHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateClassificationTemplateHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateClassificationTemplateHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class ClassificationsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      ClassificationsManager,
      | 'getClassificationTemplate'
      | 'deleteMetadataTemplateEnterpriseSecurityClassificationSchema'
      | 'addClassification'
      | 'updateClassification'
      | 'updateMetadataTemplateEnterpriseSecurityClassificationSchemaDelete'
      | 'createClassificationTemplate'
    >
  ) {
    Object.assign(this, fields);
  }
  async getClassificationTemplate(
    headers: GetClassificationTemplateHeadersArg = new GetClassificationTemplateHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema'
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
  async deleteMetadataTemplateEnterpriseSecurityClassificationSchema(
    headers: DeleteMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg = new DeleteMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema'
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
  async addClassification(
    requestBody: readonly AddClassificationRequestBodyArg[],
    headers: AddClassificationHeadersArg = new AddClassificationHeadersArg({}),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#add'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeAddClassificationRequestBodyArg
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
    requestBody: readonly UpdateClassificationRequestBodyArg[],
    headers: UpdateClassificationHeadersArg = new UpdateClassificationHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#update'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateClassificationRequestBodyArg
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
  async updateMetadataTemplateEnterpriseSecurityClassificationSchemaDelete(
    requestBody: readonly UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArg[],
    headers: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteHeadersArg = new UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/enterprise/securityClassification-6VMVochwUWo/schema#delete'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArg
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
    requestBody: CreateClassificationTemplateRequestBodyArg,
    headers: CreateClassificationTemplateHeadersArg = new CreateClassificationTemplateHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<ClassificationTemplate> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/metadata_templates/schema#classifications'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateClassificationTemplateRequestBodyArg(requestBody),
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
export function serializeAddClassificationRequestBodyArgOpField(
  val: AddClassificationRequestBodyArgOpField
): SerializedData {
  return val;
}
export function deserializeAddClassificationRequestBodyArgOpField(
  val: any
): AddClassificationRequestBodyArgOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "AddClassificationRequestBodyArgOpField"';
  }
  if (val == 'addEnumOption') {
    return 'addEnumOption';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeAddClassificationRequestBodyArgFieldKeyField(
  val: AddClassificationRequestBodyArgFieldKeyField
): SerializedData {
  return val;
}
export function deserializeAddClassificationRequestBodyArgFieldKeyField(
  val: any
): AddClassificationRequestBodyArgFieldKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "AddClassificationRequestBodyArgFieldKeyField"';
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeAddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField(
  val: AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeAddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField(
  val: any
): AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField;
}
export function serializeAddClassificationRequestBodyArgDataFieldStaticConfigField(
  val: AddClassificationRequestBodyArgDataFieldStaticConfigField
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeAddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField(
            val.classification
          ),
  };
}
export function deserializeAddClassificationRequestBodyArgDataFieldStaticConfigField(
  val: any
): AddClassificationRequestBodyArgDataFieldStaticConfigField {
  const classification:
    | undefined
    | AddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeAddClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies AddClassificationRequestBodyArgDataFieldStaticConfigField;
}
export function serializeAddClassificationRequestBodyArgDataField(
  val: AddClassificationRequestBodyArgDataField
): SerializedData {
  return {
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeAddClassificationRequestBodyArgDataFieldStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeAddClassificationRequestBodyArgDataField(
  val: any
): AddClassificationRequestBodyArgDataField {
  const key: string = val.key;
  const staticConfig:
    | undefined
    | AddClassificationRequestBodyArgDataFieldStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeAddClassificationRequestBodyArgDataFieldStaticConfigField(
          val.staticConfig
        );
  return {
    key: key,
    staticConfig: staticConfig,
  } satisfies AddClassificationRequestBodyArgDataField;
}
export function serializeAddClassificationRequestBodyArg(
  val: AddClassificationRequestBodyArg
): SerializedData {
  return {
    ['op']: serializeAddClassificationRequestBodyArgOpField(val.op),
    ['fieldKey']: serializeAddClassificationRequestBodyArgFieldKeyField(
      val.fieldKey
    ),
    ['data']: serializeAddClassificationRequestBodyArgDataField(val.data),
  };
}
export function deserializeAddClassificationRequestBodyArg(
  val: any
): AddClassificationRequestBodyArg {
  const op: AddClassificationRequestBodyArgOpField =
    deserializeAddClassificationRequestBodyArgOpField(val.op);
  const fieldKey: AddClassificationRequestBodyArgFieldKeyField =
    deserializeAddClassificationRequestBodyArgFieldKeyField(val.fieldKey);
  const data: AddClassificationRequestBodyArgDataField =
    deserializeAddClassificationRequestBodyArgDataField(val.data);
  return {
    op: op,
    fieldKey: fieldKey,
    data: data,
  } satisfies AddClassificationRequestBodyArg;
}
export function serializeUpdateClassificationRequestBodyArgOpField(
  val: UpdateClassificationRequestBodyArgOpField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationRequestBodyArgOpField(
  val: any
): UpdateClassificationRequestBodyArgOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateClassificationRequestBodyArgOpField"';
  }
  if (val == 'editEnumOption') {
    return 'editEnumOption';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateClassificationRequestBodyArgFieldKeyField(
  val: UpdateClassificationRequestBodyArgFieldKeyField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationRequestBodyArgFieldKeyField(
  val: any
): UpdateClassificationRequestBodyArgFieldKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateClassificationRequestBodyArgFieldKeyField"';
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField(
  val: UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeUpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField(
  val: any
): UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField;
}
export function serializeUpdateClassificationRequestBodyArgDataFieldStaticConfigField(
  val: UpdateClassificationRequestBodyArgDataFieldStaticConfigField
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeUpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField(
            val.classification
          ),
  };
}
export function deserializeUpdateClassificationRequestBodyArgDataFieldStaticConfigField(
  val: any
): UpdateClassificationRequestBodyArgDataFieldStaticConfigField {
  const classification:
    | undefined
    | UpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeUpdateClassificationRequestBodyArgDataFieldStaticConfigFieldClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies UpdateClassificationRequestBodyArgDataFieldStaticConfigField;
}
export function serializeUpdateClassificationRequestBodyArgDataField(
  val: UpdateClassificationRequestBodyArgDataField
): SerializedData {
  return {
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeUpdateClassificationRequestBodyArgDataFieldStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeUpdateClassificationRequestBodyArgDataField(
  val: any
): UpdateClassificationRequestBodyArgDataField {
  const key: string = val.key;
  const staticConfig:
    | undefined
    | UpdateClassificationRequestBodyArgDataFieldStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeUpdateClassificationRequestBodyArgDataFieldStaticConfigField(
          val.staticConfig
        );
  return {
    key: key,
    staticConfig: staticConfig,
  } satisfies UpdateClassificationRequestBodyArgDataField;
}
export function serializeUpdateClassificationRequestBodyArg(
  val: UpdateClassificationRequestBodyArg
): SerializedData {
  return {
    ['op']: serializeUpdateClassificationRequestBodyArgOpField(val.op),
    ['fieldKey']: serializeUpdateClassificationRequestBodyArgFieldKeyField(
      val.fieldKey
    ),
    ['enumOptionKey']: val.enumOptionKey,
    ['data']: serializeUpdateClassificationRequestBodyArgDataField(val.data),
  };
}
export function deserializeUpdateClassificationRequestBodyArg(
  val: any
): UpdateClassificationRequestBodyArg {
  const op: UpdateClassificationRequestBodyArgOpField =
    deserializeUpdateClassificationRequestBodyArgOpField(val.op);
  const fieldKey: UpdateClassificationRequestBodyArgFieldKeyField =
    deserializeUpdateClassificationRequestBodyArgFieldKeyField(val.fieldKey);
  const enumOptionKey: string = val.enumOptionKey;
  const data: UpdateClassificationRequestBodyArgDataField =
    deserializeUpdateClassificationRequestBodyArgDataField(val.data);
  return {
    op: op,
    fieldKey: fieldKey,
    enumOptionKey: enumOptionKey,
    data: data,
  } satisfies UpdateClassificationRequestBodyArg;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField"';
  }
  if (val == 'removeEnumOption') {
    return 'removeEnumOption';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField"';
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArg(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArg
): SerializedData {
  return {
    ['op']:
      serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField(
        val.op
      ),
    ['fieldKey']:
      serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField(
        val.fieldKey
      ),
    ['enumOptionKey']: val.enumOptionKey,
  };
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArg(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArg {
  const op: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField =
    deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgOpField(
      val.op
    );
  const fieldKey: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField =
    deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArgFieldKeyField(
      val.fieldKey
    );
  const enumOptionKey: string = val.enumOptionKey;
  return {
    op: op,
    fieldKey: fieldKey,
    enumOptionKey: enumOptionKey,
  } satisfies UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaDeleteRequestBodyArg;
}
export function serializeCreateClassificationTemplateRequestBodyArgScopeField(
  val: CreateClassificationTemplateRequestBodyArgScopeField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyArgScopeField(
  val: any
): CreateClassificationTemplateRequestBodyArgScopeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateClassificationTemplateRequestBodyArgScopeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateClassificationTemplateRequestBodyArgTemplateKeyField(
  val: CreateClassificationTemplateRequestBodyArgTemplateKeyField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyArgTemplateKeyField(
  val: any
): CreateClassificationTemplateRequestBodyArgTemplateKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateClassificationTemplateRequestBodyArgTemplateKeyField"';
  }
  if (val == 'securityClassification-6VMVochwUWo') {
    return 'securityClassification-6VMVochwUWo';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateClassificationTemplateRequestBodyArgDisplayNameField(
  val: CreateClassificationTemplateRequestBodyArgDisplayNameField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyArgDisplayNameField(
  val: any
): CreateClassificationTemplateRequestBodyArgDisplayNameField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateClassificationTemplateRequestBodyArgDisplayNameField"';
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateClassificationTemplateRequestBodyArgFieldsFieldTypeField(
  val: CreateClassificationTemplateRequestBodyArgFieldsFieldTypeField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldTypeField(
  val: any
): CreateClassificationTemplateRequestBodyArgFieldsFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateClassificationTemplateRequestBodyArgFieldsFieldTypeField"';
  }
  if (val == 'enum') {
    return 'enum';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateClassificationTemplateRequestBodyArgFieldsFieldKeyField(
  val: CreateClassificationTemplateRequestBodyArgFieldsFieldKeyField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldKeyField(
  val: any
): CreateClassificationTemplateRequestBodyArgFieldsFieldKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateClassificationTemplateRequestBodyArgFieldsFieldKeyField"';
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField(
  val: CreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField
): SerializedData {
  return val;
}
export function deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField(
  val: any
): CreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField"';
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(
  val: CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(
  val: any
): CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export function serializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(
  val: CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(
            val.classification
          ),
  };
}
export function deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(
  val: any
): CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField {
  const classification:
    | undefined
    | CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
}
export function serializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField(
  val: CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField
): SerializedData {
  return {
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField(
  val: any
): CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField {
  const key: string = val.key;
  const staticConfig:
    | undefined
    | CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(
          val.staticConfig
        );
  return {
    key: key,
    staticConfig: staticConfig,
  } satisfies CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField;
}
export function serializeCreateClassificationTemplateRequestBodyArgFieldsField(
  val: CreateClassificationTemplateRequestBodyArgFieldsField
): SerializedData {
  return {
    ['type']:
      serializeCreateClassificationTemplateRequestBodyArgFieldsFieldTypeField(
        val.type
      ),
    ['key']:
      serializeCreateClassificationTemplateRequestBodyArgFieldsFieldKeyField(
        val.key
      ),
    ['displayName']:
      serializeCreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField(
        val.displayName
      ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']: val.options.map(function (
      item: CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField
    ): any {
      return serializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField(
        item
      );
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBodyArgFieldsField(
  val: any
): CreateClassificationTemplateRequestBodyArgFieldsField {
  const type: CreateClassificationTemplateRequestBodyArgFieldsFieldTypeField =
    deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldTypeField(
      val.type
    );
  const key: CreateClassificationTemplateRequestBodyArgFieldsFieldKeyField =
    deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldKeyField(
      val.key
    );
  const displayName: CreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField =
    deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldDisplayNameField(
      val.displayName
    );
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const options: readonly CreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField[] =
    sdIsList(val.options)
      ? (val.options.map(function (itm: SerializedData): any {
          return deserializeCreateClassificationTemplateRequestBodyArgFieldsFieldOptionsField(
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
  } satisfies CreateClassificationTemplateRequestBodyArgFieldsField;
}
export function serializeCreateClassificationTemplateRequestBodyArg(
  val: CreateClassificationTemplateRequestBodyArg
): SerializedData {
  return {
    ['scope']: serializeCreateClassificationTemplateRequestBodyArgScopeField(
      val.scope
    ),
    ['templateKey']:
      serializeCreateClassificationTemplateRequestBodyArgTemplateKeyField(
        val.templateKey
      ),
    ['displayName']:
      serializeCreateClassificationTemplateRequestBodyArgDisplayNameField(
        val.displayName
      ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
    ['fields']: val.fields.map(function (
      item: CreateClassificationTemplateRequestBodyArgFieldsField
    ): any {
      return serializeCreateClassificationTemplateRequestBodyArgFieldsField(
        item
      );
    }) as readonly any[],
  };
}
export function deserializeCreateClassificationTemplateRequestBodyArg(
  val: any
): CreateClassificationTemplateRequestBodyArg {
  const scope: CreateClassificationTemplateRequestBodyArgScopeField =
    deserializeCreateClassificationTemplateRequestBodyArgScopeField(val.scope);
  const templateKey: CreateClassificationTemplateRequestBodyArgTemplateKeyField =
    deserializeCreateClassificationTemplateRequestBodyArgTemplateKeyField(
      val.templateKey
    );
  const displayName: CreateClassificationTemplateRequestBodyArgDisplayNameField =
    deserializeCreateClassificationTemplateRequestBodyArgDisplayNameField(
      val.displayName
    );
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  const fields: readonly CreateClassificationTemplateRequestBodyArgFieldsField[] =
    sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): any {
          return deserializeCreateClassificationTemplateRequestBodyArgFieldsField(
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
  } satisfies CreateClassificationTemplateRequestBodyArg;
}
