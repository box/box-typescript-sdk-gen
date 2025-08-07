import { SerializedData } from '../serialization/json.js';
export interface OAuth2Error {
    /**
     * The type of the error returned. */
    readonly error?: string;
    /**
     * The type of the error returned. */
    readonly errorDescription?: string;
    readonly rawData?: SerializedData;
}
export declare function serializeOAuth2Error(val: OAuth2Error): SerializedData;
export declare function deserializeOAuth2Error(val: SerializedData): OAuth2Error;
//# sourceMappingURL=oAuth2Error.generated.d.ts.map