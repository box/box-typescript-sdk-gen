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
export class GetMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg,
            'extraHeaders'
          >
        >
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
export type UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField =
  'addEnumOption';
export type UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField =
  'Box__Security__Classification__Key';
export interface UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField {
  readonly classification?: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField;
}
export interface UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField {
  readonly key: string;
  readonly staticConfig?: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField;
}
export interface UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArg {
  readonly op: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField;
  readonly fieldKey: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField;
  readonly data: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField;
}
export class UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField =
  'editEnumOption';
export type UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField =
  'Box__Security__Classification__Key';
export interface UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField {
  readonly classification?: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField;
}
export interface UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField {
  readonly key: string;
  readonly staticConfig?: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField;
}
export interface UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArg {
  readonly op: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField;
  readonly fieldKey: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField;
  readonly enumOptionKey: string;
  readonly data: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField;
}
export class UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateHeadersArg,
            'extraHeaders'
          >
        >
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
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField =
  'enterprise';
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField =
  'securityClassification-6VMVochwUWo';
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField =
  'Classification';
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField =
  'enum';
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField =
  'Box__Security__Classification__Key';
export type CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField =
  'Classification';
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField {
  readonly classification?: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField {
  readonly key: string;
  readonly staticConfig?: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
}
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField {
  readonly type: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField;
  readonly key: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField;
  readonly displayName: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField;
  readonly hidden?: boolean;
  readonly options: readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField[];
}
export interface CreateMetadataTemplateSchemaClassificationRequestBodyArg {
  readonly scope: CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField;
  readonly templateKey: CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField;
  readonly displayName: CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField;
  readonly hidden?: boolean;
  readonly copyInstanceOnItemCopy?: boolean;
  readonly fields: readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField[];
}
export class CreateMetadataTemplateSchemaClassificationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          CreateMetadataTemplateSchemaClassificationHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            CreateMetadataTemplateSchemaClassificationHeadersArg,
            'extraHeaders'
          >
        >
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
      | 'getMetadataTemplateEnterpriseSecurityClassificationSchema'
      | 'deleteMetadataTemplateEnterpriseSecurityClassificationSchema'
      | 'updateMetadataTemplateEnterpriseSecurityClassificationSchemaAdd'
      | 'updateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdate'
      | 'updateMetadataTemplateEnterpriseSecurityClassificationSchemaDelete'
      | 'createMetadataTemplateSchemaClassification'
    >
  ) {
    Object.assign(this, fields);
  }
  async getMetadataTemplateEnterpriseSecurityClassificationSchema(
    headers: GetMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg = new GetMetadataTemplateEnterpriseSecurityClassificationSchemaHeadersArg(
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
  async updateMetadataTemplateEnterpriseSecurityClassificationSchemaAdd(
    requestBody: readonly UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArg[],
    headers: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddHeadersArg = new UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddHeadersArg(
      {}
    ),
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
          serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArg
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
  async updateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdate(
    requestBody: readonly UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArg[],
    headers: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateHeadersArg = new UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateHeadersArg(
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
          serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArg
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
  async createMetadataTemplateSchemaClassification(
    requestBody: CreateMetadataTemplateSchemaClassificationRequestBodyArg,
    headers: CreateMetadataTemplateSchemaClassificationHeadersArg = new CreateMetadataTemplateSchemaClassificationHeadersArg(
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
        data: serializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(
          requestBody
        ),
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
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField"';
  }
  if (val == 'addEnumOption') {
    return 'addEnumOption';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField"';
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField(
            val.classification
          ),
  };
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField {
  const classification:
    | undefined
    | UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigFieldClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField
): SerializedData {
  return {
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField {
  const key: string = val.key;
  const staticConfig:
    | undefined
    | UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataFieldStaticConfigField(
          val.staticConfig
        );
  return {
    key: key,
    staticConfig: staticConfig,
  } satisfies UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArg(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArg
): SerializedData {
  return {
    ['op']:
      serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField(
        val.op
      ),
    ['fieldKey']:
      serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField(
        val.fieldKey
      ),
    ['data']:
      serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField(
        val.data
      ),
  };
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArg(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArg {
  const op: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField =
    deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgOpField(
      val.op
    );
  const fieldKey: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField =
    deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgFieldKeyField(
      val.fieldKey
    );
  const data: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField =
    deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArgDataField(
      val.data
    );
  return {
    op: op,
    fieldKey: fieldKey,
    data: data,
  } satisfies UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaAddRequestBodyArg;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField"';
  }
  if (val == 'editEnumOption') {
    return 'editEnumOption';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField
): SerializedData {
  return val;
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField"';
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField(
            val.classification
          ),
  };
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField {
  const classification:
    | undefined
    | UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigFieldClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField
): SerializedData {
  return {
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField {
  const key: string = val.key;
  const staticConfig:
    | undefined
    | UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataFieldStaticConfigField(
          val.staticConfig
        );
  return {
    key: key,
    staticConfig: staticConfig,
  } satisfies UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField;
}
export function serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArg(
  val: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArg
): SerializedData {
  return {
    ['op']:
      serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField(
        val.op
      ),
    ['fieldKey']:
      serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField(
        val.fieldKey
      ),
    ['enumOptionKey']: val.enumOptionKey,
    ['data']:
      serializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField(
        val.data
      ),
  };
}
export function deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArg(
  val: any
): UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArg {
  const op: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField =
    deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgOpField(
      val.op
    );
  const fieldKey: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField =
    deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgFieldKeyField(
      val.fieldKey
    );
  const enumOptionKey: string = val.enumOptionKey;
  const data: UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField =
    deserializeUpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArgDataField(
      val.data
    );
  return {
    op: op,
    fieldKey: fieldKey,
    enumOptionKey: enumOptionKey,
    data: data,
  } satisfies UpdateMetadataTemplateEnterpriseSecurityClassificationSchemaUpdateRequestBodyArg;
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
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField"';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField"';
  }
  if (val == 'securityClassification-6VMVochwUWo') {
    return 'securityClassification-6VMVochwUWo';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField"';
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField"';
  }
  if (val == 'enum') {
    return 'enum';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField"';
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField
): SerializedData {
  return val;
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField"';
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(
            val.classification
          ),
  };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField {
  const classification:
    | undefined
    | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigFieldClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField
): SerializedData {
  return {
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField {
  const key: string = val.key;
  const staticConfig:
    | undefined
    | CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsFieldStaticConfigField(
          val.staticConfig
        );
  return {
    key: key,
    staticConfig: staticConfig,
  } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField
): SerializedData {
  return {
    ['type']:
      serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(
        val.type
      ),
    ['key']:
      serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(
        val.key
      ),
    ['displayName']:
      serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(
        val.displayName
      ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']: val.options.map(function (
      item: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField
    ): any {
      return serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(
        item
      );
    }) as readonly any[],
  };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField {
  const type: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField =
    deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldTypeField(
      val.type
    );
  const key: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField =
    deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldKeyField(
      val.key
    );
  const displayName: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField =
    deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldDisplayNameField(
      val.displayName
    );
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const options: readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField[] =
    sdIsList(val.options)
      ? (val.options.map(function (itm: SerializedData): any {
          return deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsFieldOptionsField(
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
  } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField;
}
export function serializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(
  val: CreateMetadataTemplateSchemaClassificationRequestBodyArg
): SerializedData {
  return {
    ['scope']:
      serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(
        val.scope
      ),
    ['templateKey']:
      serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(
        val.templateKey
      ),
    ['displayName']:
      serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(
        val.displayName
      ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
    ['fields']: val.fields.map(function (
      item: CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField
    ): any {
      return serializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(
        item
      );
    }) as readonly any[],
  };
}
export function deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArg(
  val: any
): CreateMetadataTemplateSchemaClassificationRequestBodyArg {
  const scope: CreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField =
    deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgScopeField(
      val.scope
    );
  const templateKey: CreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField =
    deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgTemplateKeyField(
      val.templateKey
    );
  const displayName: CreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField =
    deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgDisplayNameField(
      val.displayName
    );
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  const fields: readonly CreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField[] =
    sdIsList(val.fields)
      ? (val.fields.map(function (itm: SerializedData): any {
          return deserializeCreateMetadataTemplateSchemaClassificationRequestBodyArgFieldsField(
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
  } satisfies CreateMetadataTemplateSchemaClassificationRequestBodyArg;
}
