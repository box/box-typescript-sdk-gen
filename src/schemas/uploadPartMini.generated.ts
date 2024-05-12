import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface UploadPartMini {
  readonly partId?: string;
  readonly offset?: number;
  readonly size?: number;
}
export function serializeUploadPartMini(val: UploadPartMini): SerializedData {
  return {
    ['part_id']: val.partId == void 0 ? void 0 : val.partId,
    ['offset']: val.offset == void 0 ? void 0 : val.offset,
    ['size']: val.size == void 0 ? void 0 : val.size,
  };
}
export function deserializeUploadPartMini(val: any): UploadPartMini {
  const partId: undefined | string =
    val.part_id == void 0 ? void 0 : val.part_id;
  const offset: undefined | number = val.offset == void 0 ? void 0 : val.offset;
  const size: undefined | number = val.size == void 0 ? void 0 : val.size;
  return {
    partId: partId,
    offset: offset,
    size: size,
  } satisfies UploadPartMini;
}
