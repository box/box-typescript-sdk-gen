import { serializeDateTime } from '../internal/utils.js';
import { deserializeDateTime } from '../internal/utils.js';
import { DateTime } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export interface MetadataFieldFilterDateRange {
  readonly lt?: DateTime;
  readonly gt?: DateTime;
}
export function serializeMetadataFieldFilterDateRange(
  val: MetadataFieldFilterDateRange
): SerializedData {
  return {
    ['lt']: val.lt == void 0 ? void 0 : serializeDateTime(val.lt),
    ['gt']: val.gt == void 0 ? void 0 : serializeDateTime(val.gt),
  };
}
export function deserializeMetadataFieldFilterDateRange(
  val: any
): MetadataFieldFilterDateRange {
  const lt: undefined | DateTime =
    val.lt == void 0 ? void 0 : deserializeDateTime(val.lt);
  const gt: undefined | DateTime =
    val.gt == void 0 ? void 0 : deserializeDateTime(val.gt);
  return { lt: lt, gt: gt } satisfies MetadataFieldFilterDateRange;
}
