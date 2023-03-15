export type CcgConfig = {
    clientId: string;
    clientSecret: string;
    enterpriseId?: string;
    userId?: string;
};
export declare class CcgAuth {
    config: CcgConfig;
    token?: string;
    constructor({ config }: Pick<CcgAuth, 'config'>);
    retrieveToken(): Promise<string>;
    refreshToken(): Promise<string | undefined>;
}
export type TokenRequestGrantType = 'authorization_code' | 'refresh_token' | 'client_credentials' | 'urn:ietf:params:oauth:grant-type:jwt-bearer' | 'urn:ietf:params:oauth:grant-type:token-exchange';
export type TokenRequestBoxSubjectType = 'enterprise' | 'user';
export interface TokenRequest {
    /**
     * The type of request being made, either using a client-side obtained
     * authorization code, a refresh token, a JWT assertion, client credentials
     * grant or another access token for the purpose of downscoping a token. */
    readonly grant_type: TokenRequestGrantType;
    /**
     * The Client ID of the application requesting an access token.
     *
     * Used in combination with `authorization_code`, `client_credentials`, or
     * `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`. */
    readonly client_id?: string;
    /**
     * The client secret of the application requesting an access token.
     *
     * Used in combination with `authorization_code`, `client_credentials`, or
     * `urn:ietf:params:oauth:grant-type:jwt-bearer` as the `grant_type`. */
    readonly client_secret?: string;
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
    readonly refresh_token?: string;
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
    readonly subject_token?: string;
    /**
     * The type of `subject_token` passed in.
     *
     * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange`
     * as the `grant_type`. */
    readonly subject_token_type?: 'urn:ietf:params:oauth:token-type:access_token';
    /**
     * The token used to create an annotator token.
     * This is a JWT assertion.
     *
     * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange`
     * as the `grant_type`. */
    readonly actor_token?: string;
    /**
     * The type of `actor_token` passed in.
     *
     * Used in combination with `urn:ietf:params:oauth:grant-type:token-exchange`
     * as the `grant_type`. */
    readonly actor_token_type?: 'urn:ietf:params:oauth:token-type:id_token';
    /**
     * The space-delimited list of scopes that you want apply to the
     * new access token.
     *
     * The `subject_token` will need to have all of these scopes or
     * the call will error with **401 Unauthorized**. */
    readonly scope?: string;
    /**
     * Full URL for the file that the token should be generated for. */
    readonly resource?: string;
    /**
     * Used in combination with `client_credentials` as the `grant_type`. */
    readonly box_subject_type?: TokenRequestBoxSubjectType;
    /**
     * Used in combination with `client_credentials` as the `grant_type`.
     * Value is determined by `box_subject_type`. If `user` use user ID and if
     * `enterprise` use enterprise ID. */
    readonly box_subject_id?: string;
    /**
     * Full URL of the shared link on the file or folder
     * that the token should be generated for. */
    readonly box_shared_link?: string;
}
export type FileScope = 'annotation_edit' | 'annotation_view_all' | 'annotation_view_self' | 'base_explorer' | 'base_picker' | 'base_preview' | 'base_upload' | 'item_delete' | 'item_download' | 'item_preview' | 'item_rename' | 'item_share';
export interface AccessToken {
    /**
     * The requested access token. */
    readonly access_token?: string;
    /**
     * The time in seconds in seconds by which this token will expire. */
    readonly expires_in?: number;
    /**
     * The type of access token returned. */
    readonly token_type?: 'bearer';
    /**
     * The permissions that this access token permits,
     * providing a list of resources (files, folders, etc)
     * and the scopes permitted for each of those resources. */
    readonly restricted_to?: FileScope[];
    /**
     * The refresh token for this access token, which can be used
     * to request a new access token when the current one expires. */
    readonly refresh_token?: string;
    /**
     * The type of downscoped access token returned. This is only
     * returned if an access token has been downscoped. */
    readonly issued_token_type?: 'urn:ietf:params:oauth:token-type:access_token';
}
