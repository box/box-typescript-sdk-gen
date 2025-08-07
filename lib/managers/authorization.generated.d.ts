import { PostOAuth2TokenRefreshAccessTokenInput } from '../schemas/postOAuth2TokenRefreshAccessToken.generated.js';
import { AccessToken } from '../schemas/accessToken.generated.js';
import { PostOAuth2Token } from '../schemas/postOAuth2Token.generated.js';
import { PostOAuth2Revoke } from '../schemas/postOAuth2Revoke.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { CancellationToken } from '../internal/utils.js';
import { SerializedData } from '../serialization/json.js';
export declare class AuthorizeUserOptionals {
    readonly headers: AuthorizeUserHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<AuthorizeUserOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<AuthorizeUserOptionals, 'headers' | 'cancellationToken'>>);
}
export interface AuthorizeUserOptionalsInput {
    readonly headers?: AuthorizeUserHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RequestAccessTokenOptionals {
    readonly headers: RequestAccessTokenHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RequestAccessTokenOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RequestAccessTokenOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RequestAccessTokenOptionalsInput {
    readonly headers?: RequestAccessTokenHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RefreshAccessTokenOptionals {
    readonly headers: RefreshAccessTokenHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RefreshAccessTokenOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RefreshAccessTokenOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RefreshAccessTokenOptionalsInput {
    readonly headers?: RefreshAccessTokenHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export declare class RevokeAccessTokenOptionals {
    readonly headers: RevokeAccessTokenHeaders;
    readonly cancellationToken?: CancellationToken;
    constructor(fields: Omit<RevokeAccessTokenOptionals, 'headers' | 'cancellationToken'> & Partial<Pick<RevokeAccessTokenOptionals, 'headers' | 'cancellationToken'>>);
}
export interface RevokeAccessTokenOptionalsInput {
    readonly headers?: RevokeAccessTokenHeaders;
    readonly cancellationToken?: undefined | CancellationToken;
}
export type AuthorizeUserQueryParamsResponseTypeField = 'code' | string;
export interface AuthorizeUserQueryParams {
    /**
     * The type of response we'd like to receive. */
    readonly responseType: AuthorizeUserQueryParamsResponseTypeField;
    /**
     * The Client ID of the application that is requesting to authenticate
     * the user. To get the Client ID for your application, log in to your
     * Box developer console and click the **Edit Application** link for
     * the application you're working with. In the OAuth 2.0 Parameters section
     * of the configuration page, find the item labelled `client_id`. The
     * text of that item is your application's Client ID. */
    readonly clientId: string;
    /**
     * The URI to which Box redirects the browser after the user has granted
     * or denied the application permission. This URI match one of the redirect
     * URIs in the configuration of your application. It must be a
     * valid HTTPS URI and it needs to be able to handle the redirection to
     * complete the next step in the OAuth 2.0 flow.
     * Although this parameter is optional, it must be a part of the
     * authorization URL if you configured multiple redirect URIs
     * for the application in the developer console. A missing parameter causes
     * a `redirect_uri_missing` error after the user grants application access. */
    readonly redirectUri?: string;
    /**
     * A custom string of your choice. Box will pass the same string to
     * the redirect URL when authentication is complete. This parameter
     * can be used to identify a user on redirect, as well as protect
     * against hijacked sessions and other exploits. */
    readonly state?: string;
    /**
     * A space-separated list of application scopes you'd like to
     * authenticate the user for. This defaults to all the scopes configured
     * for the application in its configuration page. */
    readonly scope?: string;
}
export declare class AuthorizeUserHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<AuthorizeUserHeaders, 'extraHeaders'> & Partial<Pick<AuthorizeUserHeaders, 'extraHeaders'>>);
}
export interface AuthorizeUserHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RequestAccessTokenHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RequestAccessTokenHeaders, 'extraHeaders'> & Partial<Pick<RequestAccessTokenHeaders, 'extraHeaders'>>);
}
export interface RequestAccessTokenHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RefreshAccessTokenHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RefreshAccessTokenHeaders, 'extraHeaders'> & Partial<Pick<RefreshAccessTokenHeaders, 'extraHeaders'>>);
}
export interface RefreshAccessTokenHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class RevokeAccessTokenHeaders {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: {
        readonly [key: string]: undefined | string;
    };
    constructor(fields: Omit<RevokeAccessTokenHeaders, 'extraHeaders'> & Partial<Pick<RevokeAccessTokenHeaders, 'extraHeaders'>>);
}
export interface RevokeAccessTokenHeadersInput {
    /**
     * Extra headers that will be included in the HTTP request. */
    readonly extraHeaders?: undefined | {
        readonly [key: string]: undefined | string;
    };
}
export declare class AuthorizationManager {
    readonly auth?: Authentication;
    readonly networkSession: NetworkSession;
    constructor(fields: Omit<AuthorizationManager, 'networkSession' | 'authorizeUser' | 'requestAccessToken' | 'refreshAccessToken' | 'revokeAccessToken'> & Partial<Pick<AuthorizationManager, 'networkSession'>>);
    /**
     * Authorize a user by sending them through the [Box](https://box.com)
     * website and request their permission to act on their behalf.
     *
     * This is the first step when authenticating a user using
     * OAuth 2.0. To request a user's authorization to use the Box APIs
     * on their behalf you will need to send a user to the URL with this
     * format.
     * @param {AuthorizeUserQueryParams} queryParams Query parameters of authorizeUser method
     * @param {AuthorizeUserOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
    authorizeUser(queryParams: AuthorizeUserQueryParams, optionalsInput?: AuthorizeUserOptionalsInput): Promise<undefined>;
    /**
     * Request an Access Token using either a client-side obtained OAuth 2.0
     * authorization code or a server-side JWT assertion.
     *
     * An Access Token is a string that enables Box to verify that a
     * request belongs to an authorized session. In the normal order of
     * operations you will begin by requesting authentication from the
     * [authorize](#get-authorize) endpoint and Box will send you an
     * authorization code.
     *
     * You will then send this code to this endpoint to exchange it for
     * an Access Token. The returned Access Token can then be used to to make
     * Box API calls.
     * @param {PostOAuth2Token} requestBody Request body of requestAccessToken method
     * @param {RequestAccessTokenOptionalsInput} optionalsInput
     * @returns {Promise<AccessToken>}
     */
    requestAccessToken(requestBody: PostOAuth2Token, optionalsInput?: RequestAccessTokenOptionalsInput): Promise<AccessToken>;
    /**
     * Refresh an Access Token using its client ID, secret, and refresh token.
     * @param {PostOAuth2TokenRefreshAccessTokenInput} requestBodyInput Request body of refreshAccessToken method
     * @param {RefreshAccessTokenOptionalsInput} optionalsInput
     * @returns {Promise<AccessToken>}
     */
    refreshAccessToken(requestBodyInput: PostOAuth2TokenRefreshAccessTokenInput, optionalsInput?: RefreshAccessTokenOptionalsInput): Promise<AccessToken>;
    /**
     * Revoke an active Access Token, effectively logging a user out
     * that has been previously authenticated.
     * @param {PostOAuth2Revoke} requestBody Request body of revokeAccessToken method
     * @param {RevokeAccessTokenOptionalsInput} optionalsInput
     * @returns {Promise<undefined>}
     */
    revokeAccessToken(requestBody: PostOAuth2Revoke, optionalsInput?: RevokeAccessTokenOptionalsInput): Promise<undefined>;
}
export interface AuthorizationManagerInput {
    readonly auth?: Authentication;
    readonly networkSession?: NetworkSession;
}
export declare function serializeAuthorizeUserQueryParamsResponseTypeField(val: AuthorizeUserQueryParamsResponseTypeField): SerializedData;
export declare function deserializeAuthorizeUserQueryParamsResponseTypeField(val: SerializedData): AuthorizeUserQueryParamsResponseTypeField;
//# sourceMappingURL=authorization.generated.d.ts.map