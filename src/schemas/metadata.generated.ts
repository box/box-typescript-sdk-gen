import { serializeMetadataBase } from './metadataBase.generated.js';
import { deserializeMetadataBase } from './metadataBase.generated.js';
import { MetadataBase } from './metadataBase.generated.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type Metadata = MetadataBase;
export function serializeMetadata(val: Metadata): SerializedData {
  return serializeMetadataBase(val);
}
export function deserializeMetadata(val: any): Metadata {
  return deserializeMetadataBase(val);
}
