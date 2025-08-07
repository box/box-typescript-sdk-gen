import { SerializedData } from '../serialization/json.js';
export interface PostOAuth2Revoke {
    /**
     * The Client ID of the application requesting to revoke the
     * access token. */
    readonly clientId?: string;
    /**
     * The client secret of the application requesting to revoke
     * an access token. */
    readonly clientSecret?: string;
    /**
     * The access token to revoke. */
    readonly token?: string;
    readonly rawData?: SerializedData;
}
export declare function serializePostOAuth2Revoke(val: PostOAuth2Revoke): SerializedData;
export declare function deserializePostOAuth2Revoke(val: SerializedData): PostOAuth2Revoke;
