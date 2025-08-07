import { UploadPart } from './uploadPart.generated.js';
import { SerializedData } from '../serialization/json.js';
export interface UploadedPart {
    readonly part?: UploadPart;
    readonly rawData?: SerializedData;
}
export declare function serializeUploadedPart(val: UploadedPart): SerializedData;
export declare function deserializeUploadedPart(val: SerializedData): UploadedPart;
