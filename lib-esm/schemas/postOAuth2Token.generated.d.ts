import { SerializedData } from '../serialization/json.js';
export type PostOAuth2TokenGrantTypeField = 'authorization_code' | 'refresh_token' | 'client_credentials' | 'urn:ietf:params:oauth:grant-type:jwt-bearer' | 'urn:ietf:params:oauth:grant-type:token-exchange' | string;
export type PostOAuth2TokenSubjectTokenTypeField = 'urn:ietf:params:oauth:token-type:access_token' | string;
export type PostOAuth2TokenActorTokenTypeField = 'urn:ietf:params:oauth:token-type:id_token' | string;
export type PostOAuth2TokenBoxSubjectTypeField = 'enterprise' | 'user' | string;
export interface PostOAuth2Token {
    /**
     * The type of request being made, either using a client-side obtained
     * authorization code, a refresh token, a JWT assertion, client credentials
     * grant or another access token for the purpose of downscoping a token. */
    readonly grantType: PostOAuth2TokenGrantTypeField;
    /**
     * The Client ID of the application requesting an access token.
     *
     * Used in combination with `authorization_code`, `client_credentials`, or
     * `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`. */
    readonly clientId?: string;
    /**
     * The client secret of the application requesting an access token.
     *
     * Used in combination with `authorization_code`, `client_credentials`, or
     * `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`. */
    readonly clientSecret?: string;
    /**
     * The client-side authorization code passed to your application by
     * Box in the browser redirect after the user has successfully
     * granted your application permission to make API calls on their
     * behalf.
     *
     * Used in combination with `authorization_code` as the `grant_type`. */
    readonly code?: string;
    /**
     * A refresh token used to get a new access token with.
     *
     * Used in combination with `refresh_token` as the `grant_type`. */
    readonly refreshToken?: string;
    /**
     * A JWT assertion for which to request a new access token.
     *
     * Used in combination with `urn:ietf:params:oauth:grant-type:jwt-bearer`
     * as the `grant_type`. */
    readonly assertion?: string;
    /**
     * The token to exchange for a downscoped token. This can be a regular
     * access token, a JWT assertion, or an app token.
     *
     * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange`
     * as the `grant_type`. */
    readonly subjectToken?: string;
    /**
     * The type of `subject_token` passed in.
     *
     * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange`
     * as the `grant_type`. */
    readonly subjectTokenType?: PostOAuth2TokenSubjectTokenTypeField;
    /**
     * The token used to create an annotator token.
     * This is a JWT assertion.
     *
     * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange`
     * as the `grant_type`. */
    readonly actorToken?: string;
    /**
     * The type of `actor_token` passed in.
     *
     * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange`
     * as the `grant_type`. */
    readonly actorTokenType?: PostOAuth2TokenActorTokenTypeField;
    /**
     * The space-delimited list of scopes that you want apply to the
     * new access token.
     *
     * The `subject_token` will need to have all of these scopes or
     * the call will error with **401 Unauthorized**.. */
    readonly scope?: string;
    /**
     * Full URL for the file that the token should be generated for. */
    readonly resource?: string;
    /**
     * Used in combination with `client_credentials` as the `grant_type`. */
    readonly boxSubjectType?: PostOAuth2TokenBoxSubjectTypeField;
    /**
     * Used in combination with `client_credentials` as the `grant_type`.
     * Value is determined by `box_subject_type`. If `user` use user ID and if
     * `enterprise` use enterprise ID. */
    readonly boxSubjectId?: string;
    /**
     * Full URL of the shared link on the file or folder
     * that the token should be generated for. */
    readonly boxSharedLink?: string;
    readonly rawData?: SerializedData;
}
export declare function serializePostOAuth2TokenGrantTypeField(val: PostOAuth2TokenGrantTypeField): SerializedData;
export declare function deserializePostOAuth2TokenGrantTypeField(val: SerializedData): PostOAuth2TokenGrantTypeField;
export declare function serializePostOAuth2TokenSubjectTokenTypeField(val: PostOAuth2TokenSubjectTokenTypeField): SerializedData;
export declare function deserializePostOAuth2TokenSubjectTokenTypeField(val: SerializedData): PostOAuth2TokenSubjectTokenTypeField;
export declare function serializePostOAuth2TokenActorTokenTypeField(val: PostOAuth2TokenActorTokenTypeField): SerializedData;
export declare function deserializePostOAuth2TokenActorTokenTypeField(val: SerializedData): PostOAuth2TokenActorTokenTypeField;
export declare function serializePostOAuth2TokenBoxSubjectTypeField(val: PostOAuth2TokenBoxSubjectTypeField): SerializedData;
export declare function deserializePostOAuth2TokenBoxSubjectTypeField(val: SerializedData): PostOAuth2TokenBoxSubjectTypeField;
export declare function serializePostOAuth2Token(val: PostOAuth2Token): SerializedData;
export declare function deserializePostOAuth2Token(val: SerializedData): PostOAuth2Token;
