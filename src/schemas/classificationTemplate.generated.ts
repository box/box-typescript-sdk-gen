import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ClassificationTemplateTypeField = 'metadata_template';
export type ClassificationTemplateTemplateKeyField =
  'securityClassification-6VMVochwUWo';
export type ClassificationTemplateDisplayNameField = 'Classification';
export type ClassificationTemplateFieldsTypeField = 'enum';
export type ClassificationTemplateFieldsKeyField =
  'Box__Security__Classification__Key';
export type ClassificationTemplateFieldsDisplayNameField = 'Classification';
export interface ClassificationTemplateFieldsOptionsStaticConfigClassificationField {
  readonly classificationDefinition?: string;
  readonly colorId?: number;
}
export interface ClassificationTemplateFieldsOptionsStaticConfigField {
  readonly classification?: ClassificationTemplateFieldsOptionsStaticConfigClassificationField;
}
export interface ClassificationTemplateFieldsOptionsField {
  readonly id: string;
  readonly key: string;
  readonly staticConfig?: ClassificationTemplateFieldsOptionsStaticConfigField;
}
export class ClassificationTemplateFieldsField {
  readonly id!: string;
  readonly type: ClassificationTemplateFieldsTypeField =
    'enum' as ClassificationTemplateFieldsTypeField;
  readonly key: ClassificationTemplateFieldsKeyField =
    'Box__Security__Classification__Key' as ClassificationTemplateFieldsKeyField;
  readonly displayName: ClassificationTemplateFieldsDisplayNameField =
    'Classification' as ClassificationTemplateFieldsDisplayNameField;
  readonly hidden?: boolean;
  readonly options!: readonly ClassificationTemplateFieldsOptionsField[];
  constructor(
    fields: Omit<
      ClassificationTemplateFieldsField,
      'type' | 'key' | 'displayName'
    > &
      Partial<
        Pick<ClassificationTemplateFieldsField, 'type' | 'key' | 'displayName'>
      >
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
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
export interface ClassificationTemplateFieldsFieldInput {
  readonly id: string;
  readonly type?: ClassificationTemplateFieldsTypeField;
  readonly key?: ClassificationTemplateFieldsKeyField;
  readonly displayName?: ClassificationTemplateFieldsDisplayNameField;
  readonly hidden?: boolean;
  readonly options: readonly ClassificationTemplateFieldsOptionsField[];
}
export class ClassificationTemplate {
  readonly id!: string;
  readonly type: ClassificationTemplateTypeField =
    'metadata_template' as ClassificationTemplateTypeField;
  readonly scope!: string;
  readonly templateKey: ClassificationTemplateTemplateKeyField =
    'securityClassification-6VMVochwUWo' as ClassificationTemplateTemplateKeyField;
  readonly displayName: ClassificationTemplateDisplayNameField =
    'Classification' as ClassificationTemplateDisplayNameField;
  readonly hidden?: boolean;
  readonly copyInstanceOnItemCopy?: boolean;
  readonly fields!: readonly ClassificationTemplateFieldsField[];
  constructor(
    fields: Omit<
      ClassificationTemplate,
      'type' | 'templateKey' | 'displayName'
    > &
      Partial<
        Pick<ClassificationTemplate, 'type' | 'templateKey' | 'displayName'>
      >
  ) {
    if (fields.id) {
      this.id = fields.id;
    }
    if (fields.type) {
      this.type = fields.type;
    }
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
export interface ClassificationTemplateInput {
  readonly id: string;
  readonly type?: ClassificationTemplateTypeField;
  readonly scope: string;
  readonly templateKey?: ClassificationTemplateTemplateKeyField;
  readonly displayName?: ClassificationTemplateDisplayNameField;
  readonly hidden?: boolean;
  readonly copyInstanceOnItemCopy?: boolean;
  readonly fields: readonly ClassificationTemplateFieldsField[];
}
export function serializeClassificationTemplateTypeField(
  val: ClassificationTemplateTypeField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateTypeField(
  val: SerializedData
): ClassificationTemplateTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ClassificationTemplateTypeField"',
    });
  }
  if (val == 'metadata_template') {
    return 'metadata_template';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeClassificationTemplateTemplateKeyField(
  val: ClassificationTemplateTemplateKeyField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateTemplateKeyField(
  val: SerializedData
): ClassificationTemplateTemplateKeyField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ClassificationTemplateTemplateKeyField"',
    });
  }
  if (val == 'securityClassification-6VMVochwUWo') {
    return 'securityClassification-6VMVochwUWo';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeClassificationTemplateDisplayNameField(
  val: ClassificationTemplateDisplayNameField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateDisplayNameField(
  val: SerializedData
): ClassificationTemplateDisplayNameField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ClassificationTemplateDisplayNameField"',
    });
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeClassificationTemplateFieldsTypeField(
  val: ClassificationTemplateFieldsTypeField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateFieldsTypeField(
  val: SerializedData
): ClassificationTemplateFieldsTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ClassificationTemplateFieldsTypeField"',
    });
  }
  if (val == 'enum') {
    return 'enum';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeClassificationTemplateFieldsKeyField(
  val: ClassificationTemplateFieldsKeyField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateFieldsKeyField(
  val: SerializedData
): ClassificationTemplateFieldsKeyField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ClassificationTemplateFieldsKeyField"',
    });
  }
  if (val == 'Box__Security__Classification__Key') {
    return 'Box__Security__Classification__Key';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeClassificationTemplateFieldsDisplayNameField(
  val: ClassificationTemplateFieldsDisplayNameField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateFieldsDisplayNameField(
  val: SerializedData
): ClassificationTemplateFieldsDisplayNameField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "ClassificationTemplateFieldsDisplayNameField"',
    });
  }
  if (val == 'Classification') {
    return 'Classification';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(
  val: ClassificationTemplateFieldsOptionsStaticConfigClassificationField
): SerializedData {
  return {
    ['classificationDefinition']:
      val.classificationDefinition == void 0
        ? void 0
        : val.classificationDefinition,
    ['colorID']: val.colorId == void 0 ? void 0 : val.colorId,
  };
}
export function deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(
  val: SerializedData
): ClassificationTemplateFieldsOptionsStaticConfigClassificationField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "ClassificationTemplateFieldsOptionsStaticConfigClassificationField"',
    });
  }
  if (
    !(val.classificationDefinition == void 0) &&
    !sdIsString(val.classificationDefinition)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "classificationDefinition" of type "ClassificationTemplateFieldsOptionsStaticConfigClassificationField"',
    });
  }
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
  if (!(val.colorID == void 0) && !sdIsNumber(val.colorID)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "colorID" of type "ClassificationTemplateFieldsOptionsStaticConfigClassificationField"',
    });
  }
  const colorId: undefined | number =
    val.colorID == void 0 ? void 0 : val.colorID;
  return {
    classificationDefinition: classificationDefinition,
    colorId: colorId,
  } satisfies ClassificationTemplateFieldsOptionsStaticConfigClassificationField;
}
export function serializeClassificationTemplateFieldsOptionsStaticConfigField(
  val: ClassificationTemplateFieldsOptionsStaticConfigField
): SerializedData {
  return {
    ['classification']:
      val.classification == void 0
        ? void 0
        : serializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(
            val.classification
          ),
  };
}
export function deserializeClassificationTemplateFieldsOptionsStaticConfigField(
  val: SerializedData
): ClassificationTemplateFieldsOptionsStaticConfigField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "ClassificationTemplateFieldsOptionsStaticConfigField"',
    });
  }
  const classification:
    | undefined
    | ClassificationTemplateFieldsOptionsStaticConfigClassificationField =
    val.classification == void 0
      ? void 0
      : deserializeClassificationTemplateFieldsOptionsStaticConfigClassificationField(
          val.classification
        );
  return {
    classification: classification,
  } satisfies ClassificationTemplateFieldsOptionsStaticConfigField;
}
export function serializeClassificationTemplateFieldsOptionsField(
  val: ClassificationTemplateFieldsOptionsField
): SerializedData {
  return {
    ['id']: val.id,
    ['key']: val.key,
    ['staticConfig']:
      val.staticConfig == void 0
        ? void 0
        : serializeClassificationTemplateFieldsOptionsStaticConfigField(
            val.staticConfig
          ),
  };
}
export function deserializeClassificationTemplateFieldsOptionsField(
  val: SerializedData
): ClassificationTemplateFieldsOptionsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ClassificationTemplateFieldsOptionsField"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "ClassificationTemplateFieldsOptionsField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "ClassificationTemplateFieldsOptionsField"',
    });
  }
  const id: string = val.id;
  if (val.key == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "key" of type "ClassificationTemplateFieldsOptionsField" to be defined',
    });
  }
  if (!sdIsString(val.key)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "key" of type "ClassificationTemplateFieldsOptionsField"',
    });
  }
  const key: string = val.key;
  const staticConfig:
    | undefined
    | ClassificationTemplateFieldsOptionsStaticConfigField =
    val.staticConfig == void 0
      ? void 0
      : deserializeClassificationTemplateFieldsOptionsStaticConfigField(
          val.staticConfig
        );
  return {
    id: id,
    key: key,
    staticConfig: staticConfig,
  } satisfies ClassificationTemplateFieldsOptionsField;
}
export function serializeClassificationTemplateFieldsField(
  val: ClassificationTemplateFieldsField
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeClassificationTemplateFieldsTypeField(val.type),
    ['key']: serializeClassificationTemplateFieldsKeyField(val.key),
    ['displayName']: serializeClassificationTemplateFieldsDisplayNameField(
      val.displayName
    ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']: val.options.map(function (
      item: ClassificationTemplateFieldsOptionsField
    ): SerializedData {
      return serializeClassificationTemplateFieldsOptionsField(item);
    }) as readonly any[],
  };
}
export function deserializeClassificationTemplateFieldsField(
  val: SerializedData
): ClassificationTemplateFieldsField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ClassificationTemplateFieldsField"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "ClassificationTemplateFieldsField" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "ClassificationTemplateFieldsField"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "ClassificationTemplateFieldsField" to be defined',
    });
  }
  const type: ClassificationTemplateFieldsTypeField =
    deserializeClassificationTemplateFieldsTypeField(val.type);
  if (val.key == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "key" of type "ClassificationTemplateFieldsField" to be defined',
    });
  }
  const key: ClassificationTemplateFieldsKeyField =
    deserializeClassificationTemplateFieldsKeyField(val.key);
  if (val.displayName == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "displayName" of type "ClassificationTemplateFieldsField" to be defined',
    });
  }
  const displayName: ClassificationTemplateFieldsDisplayNameField =
    deserializeClassificationTemplateFieldsDisplayNameField(val.displayName);
  if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "hidden" of type "ClassificationTemplateFieldsField"',
    });
  }
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  if (val.options == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "options" of type "ClassificationTemplateFieldsField" to be defined',
    });
  }
  if (!sdIsList(val.options)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "options" of type "ClassificationTemplateFieldsField"',
    });
  }
  const options: readonly ClassificationTemplateFieldsOptionsField[] = sdIsList(
    val.options
  )
    ? (val.options.map(function (
        itm: SerializedData
      ): ClassificationTemplateFieldsOptionsField {
        return deserializeClassificationTemplateFieldsOptionsField(itm);
      }) as readonly any[])
    : [];
  return {
    id: id,
    type: type,
    key: key,
    displayName: displayName,
    hidden: hidden,
    options: options,
  } satisfies ClassificationTemplateFieldsField;
}
export function serializeClassificationTemplateFieldsFieldInput(
  val: ClassificationTemplateFieldsFieldInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeClassificationTemplateFieldsTypeField(val.type),
    ['key']:
      val.key == void 0
        ? void 0
        : serializeClassificationTemplateFieldsKeyField(val.key),
    ['displayName']:
      val.displayName == void 0
        ? void 0
        : serializeClassificationTemplateFieldsDisplayNameField(
            val.displayName
          ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']: val.options.map(function (
      item: ClassificationTemplateFieldsOptionsField
    ): SerializedData {
      return serializeClassificationTemplateFieldsOptionsField(item);
    }) as readonly any[],
  };
}
export function deserializeClassificationTemplateFieldsFieldInput(
  val: SerializedData
): ClassificationTemplateFieldsFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ClassificationTemplateFieldsFieldInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "ClassificationTemplateFieldsFieldInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "ClassificationTemplateFieldsFieldInput"',
    });
  }
  const id: string = val.id;
  const type: undefined | ClassificationTemplateFieldsTypeField =
    val.type == void 0
      ? void 0
      : deserializeClassificationTemplateFieldsTypeField(val.type);
  const key: undefined | ClassificationTemplateFieldsKeyField =
    val.key == void 0
      ? void 0
      : deserializeClassificationTemplateFieldsKeyField(val.key);
  const displayName: undefined | ClassificationTemplateFieldsDisplayNameField =
    val.displayName == void 0
      ? void 0
      : deserializeClassificationTemplateFieldsDisplayNameField(
          val.displayName
        );
  if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "hidden" of type "ClassificationTemplateFieldsFieldInput"',
    });
  }
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  if (val.options == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "options" of type "ClassificationTemplateFieldsFieldInput" to be defined',
    });
  }
  if (!sdIsList(val.options)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "options" of type "ClassificationTemplateFieldsFieldInput"',
    });
  }
  const options: readonly ClassificationTemplateFieldsOptionsField[] = sdIsList(
    val.options
  )
    ? (val.options.map(function (
        itm: SerializedData
      ): ClassificationTemplateFieldsOptionsField {
        return deserializeClassificationTemplateFieldsOptionsField(itm);
      }) as readonly any[])
    : [];
  return {
    id: id,
    type: type,
    key: key,
    displayName: displayName,
    hidden: hidden,
    options: options,
  } satisfies ClassificationTemplateFieldsFieldInput;
}
export function serializeClassificationTemplate(
  val: ClassificationTemplate
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeClassificationTemplateTypeField(val.type),
    ['scope']: val.scope,
    ['templateKey']: serializeClassificationTemplateTemplateKeyField(
      val.templateKey
    ),
    ['displayName']: serializeClassificationTemplateDisplayNameField(
      val.displayName
    ),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
    ['fields']: val.fields.map(function (
      item: ClassificationTemplateFieldsField
    ): SerializedData {
      return serializeClassificationTemplateFieldsField(item);
    }) as readonly any[],
  };
}
export function deserializeClassificationTemplate(
  val: SerializedData
): ClassificationTemplate {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ClassificationTemplate"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "id" of type "ClassificationTemplate" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "id" of type "ClassificationTemplate"',
    });
  }
  const id: string = val.id;
  if (val.type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "type" of type "ClassificationTemplate" to be defined',
    });
  }
  const type: ClassificationTemplateTypeField =
    deserializeClassificationTemplateTypeField(val.type);
  if (val.scope == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "scope" of type "ClassificationTemplate" to be defined',
    });
  }
  if (!sdIsString(val.scope)) {
    throw new BoxSdkError({
      message: 'Expecting string for "scope" of type "ClassificationTemplate"',
    });
  }
  const scope: string = val.scope;
  if (val.templateKey == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "templateKey" of type "ClassificationTemplate" to be defined',
    });
  }
  const templateKey: ClassificationTemplateTemplateKeyField =
    deserializeClassificationTemplateTemplateKeyField(val.templateKey);
  if (val.displayName == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "displayName" of type "ClassificationTemplate" to be defined',
    });
  }
  const displayName: ClassificationTemplateDisplayNameField =
    deserializeClassificationTemplateDisplayNameField(val.displayName);
  if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "hidden" of type "ClassificationTemplate"',
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
        'Expecting boolean for "copyInstanceOnItemCopy" of type "ClassificationTemplate"',
    });
  }
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  if (val.fields == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "fields" of type "ClassificationTemplate" to be defined',
    });
  }
  if (!sdIsList(val.fields)) {
    throw new BoxSdkError({
      message: 'Expecting array for "fields" of type "ClassificationTemplate"',
    });
  }
  const fields: readonly ClassificationTemplateFieldsField[] = sdIsList(
    val.fields
  )
    ? (val.fields.map(function (
        itm: SerializedData
      ): ClassificationTemplateFieldsField {
        return deserializeClassificationTemplateFieldsField(itm);
      }) as readonly any[])
    : [];
  return {
    id: id,
    type: type,
    scope: scope,
    templateKey: templateKey,
    displayName: displayName,
    hidden: hidden,
    copyInstanceOnItemCopy: copyInstanceOnItemCopy,
    fields: fields,
  } satisfies ClassificationTemplate;
}
export function serializeClassificationTemplateInput(
  val: ClassificationTemplateInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeClassificationTemplateTypeField(val.type),
    ['scope']: val.scope,
    ['templateKey']:
      val.templateKey == void 0
        ? void 0
        : serializeClassificationTemplateTemplateKeyField(val.templateKey),
    ['displayName']:
      val.displayName == void 0
        ? void 0
        : serializeClassificationTemplateDisplayNameField(val.displayName),
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
    ['fields']: val.fields.map(function (
      item: ClassificationTemplateFieldsField
    ): SerializedData {
      return serializeClassificationTemplateFieldsField(item);
    }) as readonly any[],
  };
}
export function deserializeClassificationTemplateInput(
  val: SerializedData
): ClassificationTemplateInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "ClassificationTemplateInput"',
    });
  }
  if (val.id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "id" of type "ClassificationTemplateInput" to be defined',
    });
  }
  if (!sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "ClassificationTemplateInput"',
    });
  }
  const id: string = val.id;
  const type: undefined | ClassificationTemplateTypeField =
    val.type == void 0
      ? void 0
      : deserializeClassificationTemplateTypeField(val.type);
  if (val.scope == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "scope" of type "ClassificationTemplateInput" to be defined',
    });
  }
  if (!sdIsString(val.scope)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "scope" of type "ClassificationTemplateInput"',
    });
  }
  const scope: string = val.scope;
  const templateKey: undefined | ClassificationTemplateTemplateKeyField =
    val.templateKey == void 0
      ? void 0
      : deserializeClassificationTemplateTemplateKeyField(val.templateKey);
  const displayName: undefined | ClassificationTemplateDisplayNameField =
    val.displayName == void 0
      ? void 0
      : deserializeClassificationTemplateDisplayNameField(val.displayName);
  if (!(val.hidden == void 0) && !sdIsBoolean(val.hidden)) {
    throw new BoxSdkError({
      message:
        'Expecting boolean for "hidden" of type "ClassificationTemplateInput"',
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
        'Expecting boolean for "copyInstanceOnItemCopy" of type "ClassificationTemplateInput"',
    });
  }
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  if (val.fields == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "fields" of type "ClassificationTemplateInput" to be defined',
    });
  }
  if (!sdIsList(val.fields)) {
    throw new BoxSdkError({
      message:
        'Expecting array for "fields" of type "ClassificationTemplateInput"',
    });
  }
  const fields: readonly ClassificationTemplateFieldsField[] = sdIsList(
    val.fields
  )
    ? (val.fields.map(function (
        itm: SerializedData
      ): ClassificationTemplateFieldsField {
        return deserializeClassificationTemplateFieldsField(itm);
      }) as readonly any[])
    : [];
  return {
    id: id,
    type: type,
    scope: scope,
    templateKey: templateKey,
    displayName: displayName,
    hidden: hidden,
    copyInstanceOnItemCopy: copyInstanceOnItemCopy,
    fields: fields,
  } satisfies ClassificationTemplateInput;
}
