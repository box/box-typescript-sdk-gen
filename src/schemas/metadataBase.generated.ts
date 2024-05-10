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
export function deserializeMetadataBase(val: any): MetadataBase {
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  const template: undefined | string =
    val.$template == void 0 ? void 0 : val.$template;
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  return {
    parent: parent,
    template: template,
    scope: scope,
    version: version,
  } satisfies MetadataBase;
}
