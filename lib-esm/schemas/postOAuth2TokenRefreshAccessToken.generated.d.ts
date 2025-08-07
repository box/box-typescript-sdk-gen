import { SerializedData } from '../serialization/json.js';
export type PostOAuth2TokenRefreshAccessTokenGrantTypeField = 'refresh_token' | string;
export declare class PostOAuth2TokenRefreshAccessToken {
    /**
     * The type of request being made, in this case a refresh request. */
    readonly grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField;
    /**
     * The client ID of the application requesting to refresh the token. */
    readonly clientId: string;
    /**
     * The client secret of the application requesting to refresh the token. */
    readonly clientSecret: string;
    /**
     * The refresh token to refresh. */
    readonly refreshToken: string;
    readonly rawData?: SerializedData;
    constructor(fields: Omit<PostOAuth2TokenRefreshAccessToken, 'grantType'> & Partial<Pick<PostOAuth2TokenRefreshAccessToken, 'grantType'>>);
}
export interface PostOAuth2TokenRefreshAccessTokenInput {
    /**
     * The type of request being made, in this case a refresh request. */
    readonly grantType?: PostOAuth2TokenRefreshAccessTokenGrantTypeField;
    /**
     * The client ID of the application requesting to refresh the token. */
    readonly clientId: string;
    /**
     * The client secret of the application requesting to refresh the token. */
    readonly clientSecret: string;
    /**
     * The refresh token to refresh. */
    readonly refreshToken: string;
    readonly rawData?: SerializedData;
}
export declare function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: PostOAuth2TokenRefreshAccessTokenGrantTypeField): SerializedData;
export declare function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val: SerializedData): PostOAuth2TokenRefreshAccessTokenGrantTypeField;
export declare function serializePostOAuth2TokenRefreshAccessToken(val: PostOAuth2TokenRefreshAccessToken): SerializedData;
export declare function deserializePostOAuth2TokenRefreshAccessToken(val: SerializedData): PostOAuth2TokenRefreshAccessToken;
export declare function serializePostOAuth2TokenRefreshAccessTokenInput(val: PostOAuth2TokenRefreshAccessTokenInput): SerializedData;
export declare function deserializePostOAuth2TokenRefreshAccessTokenInput(val: SerializedData): PostOAuth2TokenRefreshAccessTokenInput;
