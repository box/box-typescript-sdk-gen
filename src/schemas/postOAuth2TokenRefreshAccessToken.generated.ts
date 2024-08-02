import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type PostOAuth2TokenRefreshAccessTokenGrantTypeField = 'refresh_token';
export class PostOAuth2TokenRefreshAccessToken {
  /**
   * The type of request being made, in this case a refresh request. */
  readonly grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField =
    'refresh_token' as PostOAuth2TokenRefreshAccessTokenGrantTypeField;
  /**
   * The client ID of the application requesting to refresh the token. */
  readonly clientId!: string;
  /**
   * The client secret of the application requesting to refresh the token. */
  readonly clientSecret!: string;
  /**
   * The refresh token to refresh. */
  readonly refreshToken!: string;
  constructor(
    fields: Omit<PostOAuth2TokenRefreshAccessToken, 'grantType'> &
      Partial<Pick<PostOAuth2TokenRefreshAccessToken, 'grantType'>>
  ) {
    if (fields.grantType) {
      this.grantType = fields.grantType;
    }
    if (fields.clientId) {
      this.clientId = fields.clientId;
    }
    if (fields.clientSecret) {
      this.clientSecret = fields.clientSecret;
    }
    if (fields.refreshToken) {
      this.refreshToken = fields.refreshToken;
    }
  }
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
}
export function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
  val: PostOAuth2TokenRefreshAccessTokenGrantTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
  val: SerializedData
): PostOAuth2TokenRefreshAccessTokenGrantTypeField {
  if (val == 'refresh_token') {
    return val;
  }
  throw new BoxSdkError({
    message:
      "Can't deserialize PostOAuth2TokenRefreshAccessTokenGrantTypeField",
  });
}
export function serializePostOAuth2TokenRefreshAccessToken(
  val: PostOAuth2TokenRefreshAccessToken
): SerializedData {
  return {
    ['grant_type']: serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
      val.grantType
    ),
    ['client_id']: val.clientId,
    ['client_secret']: val.clientSecret,
    ['refresh_token']: val.refreshToken,
  };
}
export function deserializePostOAuth2TokenRefreshAccessToken(
  val: SerializedData
): PostOAuth2TokenRefreshAccessToken {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "PostOAuth2TokenRefreshAccessToken"',
    });
  }
  if (val.grant_type == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "grant_type" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
    });
  }
  const grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField =
    deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grant_type);
  if (val.client_id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "client_id" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
    });
  }
  if (!sdIsString(val.client_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "client_id" of type "PostOAuth2TokenRefreshAccessToken"',
    });
  }
  const clientId: string = val.client_id;
  if (val.client_secret == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "client_secret" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
    });
  }
  if (!sdIsString(val.client_secret)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "client_secret" of type "PostOAuth2TokenRefreshAccessToken"',
    });
  }
  const clientSecret: string = val.client_secret;
  if (val.refresh_token == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "refresh_token" of type "PostOAuth2TokenRefreshAccessToken" to be defined',
    });
  }
  if (!sdIsString(val.refresh_token)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "refresh_token" of type "PostOAuth2TokenRefreshAccessToken"',
    });
  }
  const refreshToken: string = val.refresh_token;
  return {
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  } satisfies PostOAuth2TokenRefreshAccessToken;
}
export function serializePostOAuth2TokenRefreshAccessTokenInput(
  val: PostOAuth2TokenRefreshAccessTokenInput
): SerializedData {
  return {
    ['grantType']:
      val.grantType == void 0
        ? void 0
        : serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
            val.grantType
          ),
    ['client_id']: val.clientId,
    ['client_secret']: val.clientSecret,
    ['refresh_token']: val.refreshToken,
  };
}
export function deserializePostOAuth2TokenRefreshAccessTokenInput(
  val: SerializedData
): PostOAuth2TokenRefreshAccessTokenInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "PostOAuth2TokenRefreshAccessTokenInput"',
    });
  }
  const grantType: undefined | PostOAuth2TokenRefreshAccessTokenGrantTypeField =
    val.grantType == void 0
      ? void 0
      : deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
          val.grantType
        );
  if (val.client_id == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "client_id" of type "PostOAuth2TokenRefreshAccessTokenInput" to be defined',
    });
  }
  if (!sdIsString(val.client_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "client_id" of type "PostOAuth2TokenRefreshAccessTokenInput"',
    });
  }
  const clientId: string = val.client_id;
  if (val.client_secret == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "client_secret" of type "PostOAuth2TokenRefreshAccessTokenInput" to be defined',
    });
  }
  if (!sdIsString(val.client_secret)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "client_secret" of type "PostOAuth2TokenRefreshAccessTokenInput"',
    });
  }
  const clientSecret: string = val.client_secret;
  if (val.refresh_token == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "refresh_token" of type "PostOAuth2TokenRefreshAccessTokenInput" to be defined',
    });
  }
  if (!sdIsString(val.refresh_token)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "refresh_token" of type "PostOAuth2TokenRefreshAccessTokenInput"',
    });
  }
  const refreshToken: string = val.refresh_token;
  return {
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  } satisfies PostOAuth2TokenRefreshAccessTokenInput;
}
