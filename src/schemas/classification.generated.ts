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
  val: any
): ClassificationTemplateField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "ClassificationTemplateField"',
    });
  }
  if (val == 'securityClassification-6VMVochwUWo') {
    return 'securityClassification-6VMVochwUWo';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
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
export function deserializeClassification(val: any): Classification {
  const boxSecurityClassificationKey: undefined | string =
    val.Box__Security__Classification__Key == void 0
      ? void 0
      : val.Box__Security__Classification__Key;
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  const template: undefined | ClassificationTemplateField =
    val.$template == void 0
      ? void 0
      : deserializeClassificationTemplateField(val.$template);
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  const type: undefined | string = val.$type == void 0 ? void 0 : val.$type;
  const typeVersion: undefined | number =
    val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
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
