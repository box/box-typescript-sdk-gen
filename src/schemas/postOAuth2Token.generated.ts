import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type PostOAuth2TokenGrantTypeField =
  | 'authorization_code'
  | 'refresh_token'
  | 'client_credentials'
  | 'urn:ietf:params:oauth:grant-type:jwt-bearer'
  | 'urn:ietf:params:oauth:grant-type:token-exchange';
export type PostOAuth2TokenSubjectTokenTypeField =
  'urn:ietf:params:oauth:token-type:access_token';
export type PostOAuth2TokenActorTokenTypeField =
  'urn:ietf:params:oauth:token-type:id_token';
export type PostOAuth2TokenBoxSubjectTypeField = 'enterprise' | 'user';
export interface PostOAuth2Token {
  readonly grantType: PostOAuth2TokenGrantTypeField;
  readonly clientId?: string;
  readonly clientSecret?: string;
  readonly code?: string;
  readonly refreshToken?: string;
  readonly assertion?: string;
  readonly subjectToken?: string;
  readonly subjectTokenType?: PostOAuth2TokenSubjectTokenTypeField;
  readonly actorToken?: string;
  readonly actorTokenType?: PostOAuth2TokenActorTokenTypeField;
  readonly scope?: string;
  readonly resource?: string;
  readonly boxSubjectType?: PostOAuth2TokenBoxSubjectTypeField;
  readonly boxSubjectId?: string;
  readonly boxSharedLink?: string;
}
export function serializePostOAuth2TokenGrantTypeField(
  val: PostOAuth2TokenGrantTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenGrantTypeField(
  val: any
): PostOAuth2TokenGrantTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "PostOAuth2TokenGrantTypeField"',
    });
  }
  if (val == 'authorization_code') {
    return 'authorization_code';
  }
  if (val == 'refresh_token') {
    return 'refresh_token';
  }
  if (val == 'client_credentials') {
    return 'client_credentials';
  }
  if (val == 'urn:ietf:params:oauth:grant-type:jwt-bearer') {
    return 'urn:ietf:params:oauth:grant-type:jwt-bearer';
  }
  if (val == 'urn:ietf:params:oauth:grant-type:token-exchange') {
    return 'urn:ietf:params:oauth:grant-type:token-exchange';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializePostOAuth2TokenSubjectTokenTypeField(
  val: PostOAuth2TokenSubjectTokenTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenSubjectTokenTypeField(
  val: any
): PostOAuth2TokenSubjectTokenTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "PostOAuth2TokenSubjectTokenTypeField"',
    });
  }
  if (val == 'urn:ietf:params:oauth:token-type:access_token') {
    return 'urn:ietf:params:oauth:token-type:access_token';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializePostOAuth2TokenActorTokenTypeField(
  val: PostOAuth2TokenActorTokenTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenActorTokenTypeField(
  val: any
): PostOAuth2TokenActorTokenTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "PostOAuth2TokenActorTokenTypeField"',
    });
  }
  if (val == 'urn:ietf:params:oauth:token-type:id_token') {
    return 'urn:ietf:params:oauth:token-type:id_token';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializePostOAuth2TokenBoxSubjectTypeField(
  val: PostOAuth2TokenBoxSubjectTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenBoxSubjectTypeField(
  val: any
): PostOAuth2TokenBoxSubjectTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message: 'Expecting a string for "PostOAuth2TokenBoxSubjectTypeField"',
    });
  }
  if (val == 'enterprise') {
    return 'enterprise';
  }
  if (val == 'user') {
    return 'user';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializePostOAuth2Token(val: PostOAuth2Token): SerializedData {
  return {
    ['grant_type']: serializePostOAuth2TokenGrantTypeField(val.grantType),
    ['client_id']: val.clientId == void 0 ? void 0 : val.clientId,
    ['client_secret']: val.clientSecret == void 0 ? void 0 : val.clientSecret,
    ['code']: val.code == void 0 ? void 0 : val.code,
    ['refresh_token']: val.refreshToken == void 0 ? void 0 : val.refreshToken,
    ['assertion']: val.assertion == void 0 ? void 0 : val.assertion,
    ['subject_token']: val.subjectToken == void 0 ? void 0 : val.subjectToken,
    ['subject_token_type']:
      val.subjectTokenType == void 0
        ? void 0
        : serializePostOAuth2TokenSubjectTokenTypeField(val.subjectTokenType),
    ['actor_token']: val.actorToken == void 0 ? void 0 : val.actorToken,
    ['actor_token_type']:
      val.actorTokenType == void 0
        ? void 0
        : serializePostOAuth2TokenActorTokenTypeField(val.actorTokenType),
    ['scope']: val.scope == void 0 ? void 0 : val.scope,
    ['resource']: val.resource == void 0 ? void 0 : val.resource,
    ['box_subject_type']:
      val.boxSubjectType == void 0
        ? void 0
        : serializePostOAuth2TokenBoxSubjectTypeField(val.boxSubjectType),
    ['box_subject_id']: val.boxSubjectId == void 0 ? void 0 : val.boxSubjectId,
    ['box_shared_link']:
      val.boxSharedLink == void 0 ? void 0 : val.boxSharedLink,
  };
}
export function deserializePostOAuth2Token(val: any): PostOAuth2Token {
  const grantType: PostOAuth2TokenGrantTypeField =
    deserializePostOAuth2TokenGrantTypeField(val.grant_type);
  const clientId: undefined | string =
    val.client_id == void 0 ? void 0 : val.client_id;
  const clientSecret: undefined | string =
    val.client_secret == void 0 ? void 0 : val.client_secret;
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  const refreshToken: undefined | string =
    val.refresh_token == void 0 ? void 0 : val.refresh_token;
  const assertion: undefined | string =
    val.assertion == void 0 ? void 0 : val.assertion;
  const subjectToken: undefined | string =
    val.subject_token == void 0 ? void 0 : val.subject_token;
  const subjectTokenType: undefined | PostOAuth2TokenSubjectTokenTypeField =
    val.subject_token_type == void 0
      ? void 0
      : deserializePostOAuth2TokenSubjectTokenTypeField(val.subject_token_type);
  const actorToken: undefined | string =
    val.actor_token == void 0 ? void 0 : val.actor_token;
  const actorTokenType: undefined | PostOAuth2TokenActorTokenTypeField =
    val.actor_token_type == void 0
      ? void 0
      : deserializePostOAuth2TokenActorTokenTypeField(val.actor_token_type);
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  const resource: undefined | string =
    val.resource == void 0 ? void 0 : val.resource;
  const boxSubjectType: undefined | PostOAuth2TokenBoxSubjectTypeField =
    val.box_subject_type == void 0
      ? void 0
      : deserializePostOAuth2TokenBoxSubjectTypeField(val.box_subject_type);
  const boxSubjectId: undefined | string =
    val.box_subject_id == void 0 ? void 0 : val.box_subject_id;
  const boxSharedLink: undefined | string =
    val.box_shared_link == void 0 ? void 0 : val.box_shared_link;
  return {
    grantType: grantType,
    clientId: clientId,
    clientSecret: clientSecret,
    code: code,
    refreshToken: refreshToken,
    assertion: assertion,
    subjectToken: subjectToken,
    subjectTokenType: subjectTokenType,
    actorToken: actorToken,
    actorTokenType: actorTokenType,
    scope: scope,
    resource: resource,
    boxSubjectType: boxSubjectType,
    boxSubjectId: boxSubjectId,
    boxSharedLink: boxSharedLink,
  } satisfies PostOAuth2Token;
}
