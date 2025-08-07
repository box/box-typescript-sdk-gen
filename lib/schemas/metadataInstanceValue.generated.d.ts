import { SerializedData } from '../serialization/json.js';
export type MetadataInstanceValue = string | number | number | readonly string[];
export declare function serializeMetadataInstanceValue(val: any): SerializedData;
export declare function deserializeMetadataInstanceValue(val: SerializedData): MetadataInstanceValue;
//# sourceMappingURL=metadataInstanceValue.generated.d.ts.map