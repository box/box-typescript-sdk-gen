import { FileOrFolderScope } from './fileOrFolderScope.generated.js';
import { SerializedData } from '../serialization/json.js';
export type AccessTokenTokenTypeField = 'bearer' | string;
export type AccessTokenIssuedTokenTypeField = 'urn:ietf:params:oauth:token-type:access_token' | string;
export interface AccessToken {
    /**
     * The requested access token. */
    readonly accessToken?: string;
    /**
     * The time in seconds by which this token will expire. */
    readonly expiresIn?: number;
    /**
     * The type of access token returned. */
    readonly tokenType?: AccessTokenTokenTypeField;
    /**
     * The permissions that this access token permits,
     * providing a list of resources (files, folders, etc)
     * and the scopes permitted for each of those resources. */
    readonly restrictedTo?: readonly FileOrFolderScope[];
    /**
     * The refresh token for this access token, which can be used
     * to request a new access token when the current one expires. */
    readonly refreshToken?: string;
    /**
     * The type of downscoped access token returned. This is only
     * returned if an access token has been downscoped. */
    readonly issuedTokenType?: AccessTokenIssuedTokenTypeField;
    readonly rawData?: SerializedData;
}
export declare function serializeAccessTokenTokenTypeField(val: AccessTokenTokenTypeField): SerializedData;
export declare function deserializeAccessTokenTokenTypeField(val: SerializedData): AccessTokenTokenTypeField;
export declare function serializeAccessTokenIssuedTokenTypeField(val: AccessTokenIssuedTokenTypeField): SerializedData;
export declare function deserializeAccessTokenIssuedTokenTypeField(val: SerializedData): AccessTokenIssuedTokenTypeField;
export declare function serializeAccessToken(val: AccessToken): SerializedData;
export declare function deserializeAccessToken(val: SerializedData): AccessToken;
