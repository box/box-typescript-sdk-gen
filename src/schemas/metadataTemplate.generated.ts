import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type MetadataTemplateTypeField = 'metadata_template';
export type MetadataTemplateFieldsTypeField =
  | 'string'
  | 'float'
  | 'date'
  | 'enum'
  | 'multiSelect'
  | 'integer';
export interface MetadataTemplateFieldsOptionsField {
  readonly key: string;
  readonly id?: string;
}
export interface MetadataTemplateFieldsField {
  readonly type: MetadataTemplateFieldsTypeField;
  readonly key: string;
  readonly displayName: string;
  readonly description?: string;
  readonly hidden?: boolean;
  readonly options?: readonly MetadataTemplateFieldsOptionsField[];
  readonly id?: string;
}
export class MetadataTemplate {
  readonly id!: string;
  readonly type: MetadataTemplateTypeField =
    'metadata_template' as MetadataTemplateTypeField;
  readonly scope?: string;
  readonly templateKey?: string;
  readonly displayName?: string;
  readonly hidden?: boolean;
  readonly fields?: readonly MetadataTemplateFieldsField[];
  readonly copyInstanceOnItemCopy?: boolean;
  constructor(
    fields: Omit<MetadataTemplate, 'type'> &
      Partial<Pick<MetadataTemplate, 'type'>>
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
    if (fields.fields) {
      this.fields = fields.fields;
    }
    if (fields.copyInstanceOnItemCopy) {
      this.copyInstanceOnItemCopy = fields.copyInstanceOnItemCopy;
    }
  }
}
export interface MetadataTemplateInput {
  readonly id: string;
  readonly type?: MetadataTemplateTypeField;
  readonly scope?: string;
  readonly templateKey?: string;
  readonly displayName?: string;
  readonly hidden?: boolean;
  readonly fields?: readonly MetadataTemplateFieldsField[];
  readonly copyInstanceOnItemCopy?: boolean;
}
export function serializeMetadataTemplateTypeField(
  val: MetadataTemplateTypeField
): SerializedData {
  return val;
}
export function deserializeMetadataTemplateTypeField(
  val: any
): MetadataTemplateTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "MetadataTemplateTypeField"',
    });
  }
  if (val == 'metadata_template') {
    return 'metadata_template';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeMetadataTemplateFieldsTypeField(
  val: MetadataTemplateFieldsTypeField
): SerializedData {
  return val;
}
export function deserializeMetadataTemplateFieldsTypeField(
  val: any
): MetadataTemplateFieldsTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "MetadataTemplateFieldsTypeField"',
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
  if (val == 'integer') {
    return 'integer';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeMetadataTemplateFieldsOptionsField(
  val: MetadataTemplateFieldsOptionsField
): SerializedData {
  return { ['key']: val.key, ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeMetadataTemplateFieldsOptionsField(
  val: any
): MetadataTemplateFieldsOptionsField {
  const key: string = val.key;
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { key: key, id: id } satisfies MetadataTemplateFieldsOptionsField;
}
export function serializeMetadataTemplateFieldsField(
  val: MetadataTemplateFieldsField
): SerializedData {
  return {
    ['type']: serializeMetadataTemplateFieldsTypeField(val.type),
    ['key']: val.key,
    ['displayName']: val.displayName,
    ['description']: val.description == void 0 ? void 0 : val.description,
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['options']:
      val.options == void 0
        ? void 0
        : (val.options.map(function (
            item: MetadataTemplateFieldsOptionsField
          ): SerializedData {
            return serializeMetadataTemplateFieldsOptionsField(item);
          }) as readonly any[]),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeMetadataTemplateFieldsField(
  val: any
): MetadataTemplateFieldsField {
  const type: MetadataTemplateFieldsTypeField =
    deserializeMetadataTemplateFieldsTypeField(val.type);
  const key: string = val.key;
  const displayName: string = val.displayName;
  const description: undefined | string =
    val.description == void 0 ? void 0 : val.description;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const options: undefined | readonly MetadataTemplateFieldsOptionsField[] =
    val.options == void 0
      ? void 0
      : sdIsList(val.options)
      ? (val.options.map(function (
          itm: SerializedData
        ): MetadataTemplateFieldsOptionsField {
          return deserializeMetadataTemplateFieldsOptionsField(itm);
        }) as readonly any[])
      : [];
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    key: key,
    displayName: displayName,
    description: description,
    hidden: hidden,
    options: options,
    id: id,
  } satisfies MetadataTemplateFieldsField;
}
export function serializeMetadataTemplate(
  val: MetadataTemplate
): SerializedData {
  return {
    ['id']: val.id,
    ['type']: serializeMetadataTemplateTypeField(val.type),
    ['scope']: val.scope == void 0 ? void 0 : val.scope,
    ['templateKey']: val.templateKey == void 0 ? void 0 : val.templateKey,
    ['displayName']: val.displayName == void 0 ? void 0 : val.displayName,
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields.map(function (
            item: MetadataTemplateFieldsField
          ): SerializedData {
            return serializeMetadataTemplateFieldsField(item);
          }) as readonly any[]),
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
  };
}
export function deserializeMetadataTemplate(val: any): MetadataTemplate {
  const id: string = val.id;
  const type: MetadataTemplateTypeField = deserializeMetadataTemplateTypeField(
    val.type
  );
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  const templateKey: undefined | string =
    val.templateKey == void 0 ? void 0 : val.templateKey;
  const displayName: undefined | string =
    val.displayName == void 0 ? void 0 : val.displayName;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const fields: undefined | readonly MetadataTemplateFieldsField[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (
          itm: SerializedData
        ): MetadataTemplateFieldsField {
          return deserializeMetadataTemplateFieldsField(itm);
        }) as readonly any[])
      : [];
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  return {
    id: id,
    type: type,
    scope: scope,
    templateKey: templateKey,
    displayName: displayName,
    hidden: hidden,
    fields: fields,
    copyInstanceOnItemCopy: copyInstanceOnItemCopy,
  } satisfies MetadataTemplate;
}
export function serializeMetadataTemplateInput(
  val: MetadataTemplateInput
): SerializedData {
  return {
    ['id']: val.id,
    ['type']:
      val.type == void 0
        ? void 0
        : serializeMetadataTemplateTypeField(val.type),
    ['scope']: val.scope == void 0 ? void 0 : val.scope,
    ['templateKey']: val.templateKey == void 0 ? void 0 : val.templateKey,
    ['displayName']: val.displayName == void 0 ? void 0 : val.displayName,
    ['hidden']: val.hidden == void 0 ? void 0 : val.hidden,
    ['fields']:
      val.fields == void 0
        ? void 0
        : (val.fields.map(function (
            item: MetadataTemplateFieldsField
          ): SerializedData {
            return serializeMetadataTemplateFieldsField(item);
          }) as readonly any[]),
    ['copyInstanceOnItemCopy']:
      val.copyInstanceOnItemCopy == void 0
        ? void 0
        : val.copyInstanceOnItemCopy,
  };
}
export function deserializeMetadataTemplateInput(
  val: any
): MetadataTemplateInput {
  const id: string = val.id;
  const type: undefined | MetadataTemplateTypeField =
    val.type == void 0
      ? void 0
      : deserializeMetadataTemplateTypeField(val.type);
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  const templateKey: undefined | string =
    val.templateKey == void 0 ? void 0 : val.templateKey;
  const displayName: undefined | string =
    val.displayName == void 0 ? void 0 : val.displayName;
  const hidden: undefined | boolean =
    val.hidden == void 0 ? void 0 : val.hidden;
  const fields: undefined | readonly MetadataTemplateFieldsField[] =
    val.fields == void 0
      ? void 0
      : sdIsList(val.fields)
      ? (val.fields.map(function (
          itm: SerializedData
        ): MetadataTemplateFieldsField {
          return deserializeMetadataTemplateFieldsField(itm);
        }) as readonly any[])
      : [];
  const copyInstanceOnItemCopy: undefined | boolean =
    val.copyInstanceOnItemCopy == void 0 ? void 0 : val.copyInstanceOnItemCopy;
  return {
    id: id,
    type: type,
    scope: scope,
    templateKey: templateKey,
    displayName: displayName,
    hidden: hidden,
    fields: fields,
    copyInstanceOnItemCopy: copyInstanceOnItemCopy,
  } satisfies MetadataTemplateInput;
}