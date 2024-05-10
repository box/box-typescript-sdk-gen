import { serializeMetadataBase } from './metadataBase.generated.js';
import { deserializeMetadataBase } from './metadataBase.generated.js';
import { serializeMetadata } from './metadata.generated.js';
import { deserializeMetadata } from './metadata.generated.js';
import { MetadataBase } from './metadataBase.generated.js';
import { Metadata } from './metadata.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type MetadataFull = Metadata & {
  readonly canEdit?: boolean;
  readonly id?: string;
  readonly type?: string;
  readonly typeVersion?: number;
  readonly extraData?: {
    readonly [key: string]: any;
  };
};
export function serializeMetadataFull(val: MetadataFull): SerializedData {
  const base: any = serializeMetadata(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "MetadataFull"' });
  }
  return {
    ...base,
    ...{
      ...{
        ['$canEdit']: val.canEdit == void 0 ? void 0 : val.canEdit,
        ['$id']: val.id == void 0 ? void 0 : val.id,
        ['$type']: val.type == void 0 ? void 0 : val.type,
        ['$typeVersion']: val.typeVersion == void 0 ? void 0 : val.typeVersion,
      },
      ...val.extraData,
    },
  };
}
export function deserializeMetadataFull(val: any): MetadataFull {
  const canEdit: undefined | boolean =
    val.$canEdit == void 0 ? void 0 : val.$canEdit;
  const id: undefined | string = val.$id == void 0 ? void 0 : val.$id;
  const type: undefined | string = val.$type == void 0 ? void 0 : val.$type;
  const typeVersion: undefined | number =
    val.$typeVersion == void 0 ? void 0 : val.$typeVersion;
  const extraData:
    | undefined
    | {
        readonly [key: string]: any;
      } = val == void 0 ? void 0 : val;
  const parent: undefined | string =
    val.$parent == void 0 ? void 0 : val.$parent;
  const template: undefined | string =
    val.$template == void 0 ? void 0 : val.$template;
  const scope: undefined | string = val.$scope == void 0 ? void 0 : val.$scope;
  const version: undefined | number =
    val.$version == void 0 ? void 0 : val.$version;
  return {
    canEdit: canEdit,
    id: id,
    type: type,
    typeVersion: typeVersion,
    extraData: extraData,
    parent: parent,
    template: template,
    scope: scope,
    version: version,
  } satisfies MetadataFull;
}
