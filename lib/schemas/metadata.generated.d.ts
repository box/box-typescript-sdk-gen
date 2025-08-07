import { MetadataBase } from './metadataBase.generated.js';
import { SerializedData } from '../serialization/json.js';
export type Metadata = MetadataBase;
export declare function serializeMetadata(val: Metadata): SerializedData;
export declare function deserializeMetadata(val: SerializedData): Metadata;
//# sourceMappingURL=metadata.generated.d.ts.map