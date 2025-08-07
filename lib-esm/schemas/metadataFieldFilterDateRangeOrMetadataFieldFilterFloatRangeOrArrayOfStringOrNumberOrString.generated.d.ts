import { MetadataFieldFilterDateRange } from './metadataFieldFilterDateRange.generated.js';
import { MetadataFieldFilterFloatRange } from './metadataFieldFilterFloatRange.generated.js';
import { SerializedData } from '../serialization/json.js';
export type MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString = MetadataFieldFilterDateRange | MetadataFieldFilterFloatRange | readonly string[] | number | string;
export declare function serializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString(val: any): SerializedData;
export declare function deserializeMetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString(val: SerializedData): MetadataFieldFilterDateRangeOrMetadataFieldFilterFloatRangeOrArrayOfStringOrNumberOrString;
