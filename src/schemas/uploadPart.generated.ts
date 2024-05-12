import { serializeUploadPartMini } from './uploadPartMini.generated.js';
import { deserializeUploadPartMini } from './uploadPartMini.generated.js';
import { UploadPartMini } from './uploadPartMini.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type UploadPart = UploadPartMini & {
  readonly sha1?: string;
};
export function serializeUploadPart(val: UploadPart): SerializedData {
  const base: any = serializeUploadPartMini(val);
  if (!sdIsMap(base)) {
    throw new BoxSdkError({ message: 'Expecting a map for "UploadPart"' });
  }
  return { ...base, ...{ ['sha1']: val.sha1 == void 0 ? void 0 : val.sha1 } };
}
export function deserializeUploadPart(val: any): UploadPart {
  const sha1: undefined | string = val.sha1 == void 0 ? void 0 : val.sha1;
  const partId: undefined | string =
    val.part_id == void 0 ? void 0 : val.part_id;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  return {
    sha1: sha1,
    partId: partId,
    offset: offset,
    size: size,
  } satisfies UploadPart;
}
