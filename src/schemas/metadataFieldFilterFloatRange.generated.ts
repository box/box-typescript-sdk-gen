import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface MetadataFieldFilterFloatRange {
  readonly lt?: number;
  readonly gt?: number;
}
export function serializeMetadataFieldFilterFloatRange(
  val: MetadataFieldFilterFloatRange
): SerializedData {
  return {
    ['lt']: val.lt == void 0 ? void 0 : val.lt,
    ['gt']: val.gt == void 0 ? void 0 : val.gt,
  };
}
export function deserializeMetadataFieldFilterFloatRange(
  val: SerializedData
): MetadataFieldFilterFloatRange {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "MetadataFieldFilterFloatRange"',
    });
  }
  if (!(val.lt == void 0) && !sdIsNumber(val.lt)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "lt" of type "MetadataFieldFilterFloatRange"',
    });
  }
  const lt: undefined | number = val.lt == void 0 ? void 0 : val.lt;
  if (!(val.gt == void 0) && !sdIsNumber(val.gt)) {
    throw new BoxSdkError({
      message:
        'Expecting number for "gt" of type "MetadataFieldFilterFloatRange"',
    });
  }
  const gt: undefined | number = val.gt == void 0 ? void 0 : val.gt;
  return { lt: lt, gt: gt } satisfies MetadataFieldFilterFloatRange;
}
