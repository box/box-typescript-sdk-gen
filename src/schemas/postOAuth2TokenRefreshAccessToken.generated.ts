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
  readonly grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField =
    'refresh_token' as PostOAuth2TokenRefreshAccessTokenGrantTypeField;
  readonly clientId!: string;
  readonly clientSecret!: string;
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
  readonly grantType?: PostOAuth2TokenRefreshAccessTokenGrantTypeField;
  readonly clientId: string;
  readonly clientSecret: string;
  readonly refreshToken: string;
}
export function serializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
  val: PostOAuth2TokenRefreshAccessTokenGrantTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
  val: any
): PostOAuth2TokenRefreshAccessTokenGrantTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "PostOAuth2TokenRefreshAccessTokenGrantTypeField"',
    });
  }
  if (val == 'refresh_token') {
    return 'refresh_token';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
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
  val: any
): PostOAuth2TokenRefreshAccessToken {
  const grantType: PostOAuth2TokenRefreshAccessTokenGrantTypeField =
    deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(val.grant_type);
  const clientId: string = val.client_id;
  const clientSecret: string = val.client_secret;
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
  val: any
): PostOAuth2TokenRefreshAccessTokenInput {
  const grantType: undefined | PostOAuth2TokenRefreshAccessTokenGrantTypeField =
    val.grantType == void 0
      ? void 0
      : deserializePostOAuth2TokenRefreshAccessTokenGrantTypeField(
          val.grantType
        );
  const clientId: string = val.client_id;
  const clientSecret: string = val.client_secret;
  const refreshToken: string = val.refresh_token;
  return {
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
    refreshToken: refreshToken,
  } satisfies PostOAuth2TokenRefreshAccessTokenInput;
}
