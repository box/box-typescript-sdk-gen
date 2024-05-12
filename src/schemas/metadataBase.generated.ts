import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface MetadataBase {
  readonly parent?: string;
  readonly template?: string;
  readonly scope?: string;
  readonly version?: number;
}
export function serializeMetadataBase(val: MetadataBase): SerializedData {
  return {
    ['$parent']: val.parent == void 0 ? void 0 : val.parent,
    ['$template']: val.template == void 0 ? void 0 : val.template,
    ['$scope']: val.scope == void 0 ? void 0 : val.scope,
    ['$version']: val.version == void 0 ? void 0 : val.version,
  };
}
export function deserializeMetadataBase(val: SerializedData): MetadataBase {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "MetadataBase"' });
  }
  if (!(val.$parent == void 0) && !sdIsString(val.$parent)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$parent" of type "MetadataBase"',
    });
  }
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  if (!(val.$template == void 0) && !sdIsString(val.$template)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$template" of type "MetadataBase"',
    });
  }
  const template: undefined | string =
    val.$template == void 0 ? void 0 : val.$template;
  if (!(val.$scope == void 0) && !sdIsString(val.$scope)) {
    throw new BoxSdkError({
      message: 'Expecting string for "$scope" of type "MetadataBase"',
    });
  }
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  if (!(val.$version == void 0) && !sdIsNumber(val.$version)) {
    throw new BoxSdkError({
      message: 'Expecting number for "$version" of type "MetadataBase"',
    });
  }
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  return {
    parent: parent,
    template: template,
    scope: scope,
    version: version,
  } satisfies MetadataBase;
}
