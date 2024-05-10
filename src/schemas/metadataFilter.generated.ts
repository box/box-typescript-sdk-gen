import { serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString } from './metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated.js';
import { deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString } from './metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated.js';
import { MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString } from './metadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type MetadataFilterScopeField =
  | 'global'
  | 'enterprise'
  | 'enterprise_{enterprise_id}';
export interface MetadataFilter {
  readonly scope?: MetadataFilterScopeField;
  readonly templateKey?: string;
  readonly filters?: {
    readonly [
      key: string
    ]: MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString;
  };
}
export function serializeMetadataFilterScopeField(
  val: MetadataFilterScopeField
): SerializedData {
  return val;
}
export function deserializeMetadataFilterScopeField(
  val: any
): MetadataFilterScopeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "MetadataFilterScopeField"',
    });
  }
  if (val == 'global') {
    return 'global';
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  if (val == 'enterprise_{enterprise_id}') {
    return 'enterprise_{enterprise_id}';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeMetadataFilter(val: MetadataFilter): SerializedData {
  return {
    ['scope']:
      val.scope == void 0
        ? void 0
        : serializeMetadataFilterScopeField(val.scope),
    ['templateKey']: val.templateKey == void 0 ? void 0 : val.templateKey,
    ['filters']:
      val.filters == void 0
        ? void 0
        : (Object.fromEntries(
            Object.entries(val.filters).map(([k, v]: [string, any]) => [
              k,
              serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString(
                v
              ),
            ])
          ) as {
            readonly [key: string]: any;
          }),
  };
}
export function deserializeMetadataFilter(val: any): MetadataFilter {
  const scope: undefined | MetadataFilterScopeField =
    val.scope == void 0
      ? void 0
      : deserializeMetadataFilterScopeField(val.scope);
  const templateKey: undefined | string =
    val.templateKey == void 0 ? void 0 : val.templateKey;
  const filters:
    | undefined
    | {
        readonly [
          key: string
        ]: MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString;
      } = val.filters == void 0 ? void 0 : val.filters;
  return {
    scope: scope,
    templateKey: templateKey,
    filters: filters,
  } satisfies MetadataFilter;
}
