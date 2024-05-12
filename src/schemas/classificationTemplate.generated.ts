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
  val: any
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
  val: any
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
  val: any
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
  val: any
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
  val: any
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
  val: any
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
  val: any
): ClassificationTemplateFieldsOptionsStaticConfigClassificationField {
  const classificationDefinition: undefined | string =
    val.classificationDefinition == void 0
      ? void 0
      : val.classificationDefinition;
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
  val: any
): ClassificationTemplateFieldsOptionsStaticConfigField {
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
  val: any
): ClassificationTemplateFieldsOptionsField {
  const id: string = val.id;
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
  val: any
): ClassificationTemplateFieldsField {
  const id: string = val.id;
  const type: ClassificationTemplateFieldsTypeField =
    deserializeClassificationTemplateFieldsTypeField(val.type);
  const key: ClassificationTemplateFieldsKeyField =
    deserializeClassificationTemplateFieldsKeyField(val.key);
  const displayName: ClassificationTemplateFieldsDisplayNameField =
    deserializeClassificationTemplateFieldsDisplayNameField(val.displayName);
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
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
  val: any
): ClassificationTemplateFieldsFieldInput {
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
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
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
  val: any
): ClassificationTemplate {
  const id: string = val.id;
  const type: ClassificationTemplateTypeField =
    deserializeClassificationTemplateTypeField(val.type);
  const scope: string = val.scope;
  const templateKey: ClassificationTemplateTemplateKeyField =
    deserializeClassificationTemplateTemplateKeyField(val.templateKey);
  const displayName: ClassificationTemplateDisplayNameField =
    deserializeClassificationTemplateDisplayNameField(val.displayName);
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
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
  val: any
): ClassificationTemplateInput {
  const id: string = val.id;
  const type: undefined | ClassificationTemplateTypeField =
    val.type == void 0
      ? void 0
      : deserializeClassificationTemplateTypeField(val.type);
  const scope: string = val.scope;
  const templateKey: undefined | ClassificationTemplateTemplateKeyField =
    val.templateKey == void 0
      ? void 0
      : deserializeClassificationTemplateTemplateKeyField(val.templateKey);
  const displayName: undefined | ClassificationTemplateDisplayNameField =
    val.displayName == void 0
      ? void 0
      : deserializeClassificationTemplateDisplayNameField(val.displayName);
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
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
