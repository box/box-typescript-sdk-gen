import { serializeStoragePolicyMiniTypeField } from './storagePolicyMini.generated.js';
import { deserializeStoragePolicyMiniTypeField } from './storagePolicyMini.generated.js';
import { serializeStoragePolicyMini } from './storagePolicyMini.generated.js';
import { deserializeStoragePolicyMini } from './storagePolicyMini.generated.js';
import { StoragePolicyMiniTypeField } from './storagePolicyMini.generated.js';
import { StoragePolicyMini } from './storagePolicyMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class StoragePolicy extends StoragePolicyMini {
  readonly name?: string;
  constructor(fields: StoragePolicy) {
    super(fields);
  }
}
export function serializeStoragePolicy(val: StoragePolicy): SerializedData {
  const base: any = serializeStoragePolicyMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "StoragePolicy"' });
  }
  return { ...base, ...{ ['name']: val.name == void 0 ? void 0 : val.name } };
}
export function deserializeStoragePolicy(val: any): StoragePolicy {
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const id: string = val.id;
  const type: StoragePolicyMiniTypeField =
    deserializeStoragePolicyMiniTypeField(val.type);
  return { name: name, id: id, type: type } satisfies StoragePolicy;
}
