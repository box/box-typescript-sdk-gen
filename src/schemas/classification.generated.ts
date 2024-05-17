import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type ClassificationTemplateField = 'securityClassification-6VMVochwUWo';
export interface Classification {
  readonly boxSecurityClassificationKey?: string;
  readonly parent?: string;
  readonly template?: ClassificationTemplateField;
  readonly scope?: string;
  readonly version?: number;
  readonly type?: string;
  readonly typeVersion?: number;
  readonly canEdit?: boolean;
}
export function serializeClassificationTemplateField(
  val: ClassificationTemplateField
): SerializedData {
  return val;
}
export function deserializeClassificationTemplateField(
  val: SerializedData
): ClassificationTemplateField {
  if (val == 'securityClassification-6VMVochwUWo') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize ClassificationTemplateField",
  });
}
export function serializeClassification(val: Classification): SerializedData {
  return {
    ['Box__Security__Classification__Key']:
      val.boxSecurityClassificationKey == void 0
        ? void 0
        : val.boxSecurityClassificationKey,
    ['$parent']: val.parent == void 0 ? void 0 : val.parent,
    ['$template']:
      val.template == void 0
        ? void 0
        : serializeClassificationTemplateField(val.template),
    ['$scope']: val.scope == void 0 ? void 0 : val.scope,
    ['$version']: val.version == void 0 ? void 0 : val.version,
    ['$type']: val.type == void 0 ? void 0 : val.type,
    ['$typeVersion']: val.typeVersion == void 0 ? void 0 : val.typeVersion,
    ['$canEdit']: val.canEdit == void 0 ? void 0 : val.canEdit,
  };
}
export function deserializeClassification(val: SerializedData): Classification {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "Classification"' });
  }
  if (
    !(val.Box__Security__Classification__Key == void 0) &&
    !sdIsString(val.Box__Security__Classification__Key)
  ) {
    throw new BoxSdkError({
      message:
        'Expecting string for "Box__Security__Classification__Key" of type "Classification"',
    });
  }
  const boxSecurityClassificationKey: undefined | string =
    val.Box__Security__Classification__Key == void 0
      ? void 0
      : val.Box__Security__Classification__Key;
  if (!(val.$parent == void 0) && !sdIsString(val.$parent)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$parent" of type "Classification"',
    });
  }
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  const template: undefined | ClassificationTemplateField =
    val.$template == void 0
      ? void 0
      : deserializeClassificationTemplateField(val.$template);
  if (!(val.$scope == void 0) && !sdIsString(val.$scope)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$scope" of type "Classification"',
    });
  }
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  if (!(val.$version == void 0) && !sdIsNumber(val.$version)) {
    throw new BoxSdkError({
      message: 'Expecting number for "$version" of type "Classification"',
    });
  }
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  if (!(val.$type == void 0) && !sdIsString(val.$type)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$type" of type "Classification"',
    });
  }
  const type: undefined | string = val.$type == void 0 ? void 0 : val.$type;
  if (!(val.$typeVersion == void 0) && !sdIsNumber(val.$typeVersion)) {
    throw new BoxSdkError({
      message: 'Expecting number for "$typeVersion" of type "Classification"',
    });
  }
  const typeVersion: undefined | number =
    val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
  if (!(val.$canEdit == void 0) && !sdIsBoolean(val.$canEdit)) {
    throw new BoxSdkError({
      message: 'Expecting boolean for "$canEdit" of type "Classification"',
    });
  }
  const canEdit: undefined | boolean =
    val.$canEdit == void 0 ? void 0 : val.$canEdit;
  return {
    boxSecurityClassificationKey: boxSecurityClassificationKey,
    parent: parent,
    template: template,
    scope: scope,
    version: version,
    type: type,
    typeVersion: typeVersion,
    canEdit: canEdit,
  } satisfies Classification;
}
