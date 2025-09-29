import { serializeMetadataFieldFilterDateRange } from './metadataFieldFilterDateRange.generated';
import { deserializeMetadataFieldFilterDateRange } from './metadataFieldFilterDateRange.generated';
import { serializeMetadataFieldFilterFloatRange } from './metadataFieldFilterFloatRange.generated';
import { deserializeMetadataFieldFilterFloatRange } from './metadataFieldFilterFloatRange.generated';
import { MetadataFieldFilterDateRange } from './metadataFieldFilterDateRange.generated';
import { MetadataFieldFilterFloatRange } from './metadataFieldFilterFloatRange.generated';
import { BoxSdkError } from '../box/errors';
import { SerializedData } from '../serialization/json';
import { sdIsEmpty } from '../serialization/json';
import { sdIsBoolean } from '../serialization/json';
import { sdIsNumber } from '../serialization/json';
import { sdIsString } from '../serialization/json';
import { sdIsList } from '../serialization/json';
import { sdIsMap } from '../serialization/json';
export type MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString =

    | MetadataFieldFilterDateRange
    | MetadataFieldFilterFloatRange
    | readonly string[]
    | number
    | string;
export function serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString(
  val: any,
): SerializedData {
  if (sdIsString(val)) {
    return val;
  }
  if (sdIsNumber(val)) {
    return val;
  }
  if (sdIsList(val) && val.every(sdIsString)) {
    return val;
  }
  try {
    return serializeMetadataFieldFilterDateRange(val);
  } catch (error) {
    void 0;
  } finally {
  }
  try {
    if (!(val.lt == void 0) && !sdIsNumber(val.lt)) {
      throw new BoxSdkError({
        message:
          'Expecting number for "lt" of type "MetadataFieldFilterFloatRange"',
      });
    }
    if (!(val.gt == void 0) && !sdIsNumber(val.gt)) {
      throw new BoxSdkError({
        message:
          'Expecting number for "gt" of type "MetadataFieldFilterFloatRange"',
      });
    }
    return serializeMetadataFieldFilterFloatRange(val);
  } catch (error) {
    void 0;
  } finally {
  }
  throw new BoxSdkError({
    message:
      "Can't serialize MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString",
  });
}
export function deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString(
  val: SerializedData,
): MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString {
  if (sdIsString(val)) {
    return val;
  }
  if (sdIsNumber(val)) {
    return val;
  }
  if (sdIsList(val) && val.every(sdIsString)) {
    return val;
  }
  try {
    return deserializeMetadataFieldFilterDateRange(val);
  } catch (error) {
    void 0;
  } finally {
  }
  try {
    return deserializeMetadataFieldFilterFloatRange(val);
  } catch (error) {
    void 0;
  } finally {
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString",
  });
}
