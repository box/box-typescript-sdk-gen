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
  val: SerializedData
): PostOAuth2TokenGrantTypeField {
  if (val == 'authorization_code') {
    return val;
  }
  if (val == 'refresh_token') {
    return val;
  }
  if (val == 'client_credentials') {
    return val;
  }
  if (val == 'urn:ietf:params:oauth:grant-type:jwt-bearer') {
    return val;
  }
  if (val == 'urn:ietf:params:oauth:grant-type:token-exchange') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize PostOAuth2TokenGrantTypeField",
  });
}
export function serializePostOAuth2TokenSubjectTokenTypeField(
  val: PostOAuth2TokenSubjectTokenTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenSubjectTokenTypeField(
  val: SerializedData
): PostOAuth2TokenSubjectTokenTypeField {
  if (val == 'urn:ietf:params:oauth:token-type:access_token') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize PostOAuth2TokenSubjectTokenTypeField",
  });
}
export function serializePostOAuth2TokenActorTokenTypeField(
  val: PostOAuth2TokenActorTokenTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenActorTokenTypeField(
  val: SerializedData
): PostOAuth2TokenActorTokenTypeField {
  if (val == 'urn:ietf:params:oauth:token-type:id_token') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize PostOAuth2TokenActorTokenTypeField",
  });
}
export function serializePostOAuth2TokenBoxSubjectTypeField(
  val: PostOAuth2TokenBoxSubjectTypeField
): SerializedData {
  return val;
}
export function deserializePostOAuth2TokenBoxSubjectTypeField(
  val: SerializedData
): PostOAuth2TokenBoxSubjectTypeField {
  if (val == 'enterprise') {
    return val;
  }
  if (val == 'user') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize PostOAuth2TokenBoxSubjectTypeField",
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
export function deserializePostOAuth2Token(
  val: SerializedData
): PostOAuth2Token {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "PostOAuth2Token"' });
  }
  if (val.grant_type == void 0) {
    throw new BoxSdkError({
      message: 'Expecting "grant_type" of type "PostOAuth2Token" to be defined',
    });
  }
  const grantType: PostOAuth2TokenGrantTypeField =
    deserializePostOAuth2TokenGrantTypeField(val.grant_type);
  if (!(val.client_id == void 0) && !sdIsString(val.client_id)) {
    throw new BoxSdkError({
      message: 'Expecting string for "client_id" of type "PostOAuth2Token"',
    });
  }
  const clientId: undefined | string =
    val.client_id == void 0 ? void 0 : val.client_id;
  if (!(val.client_secret == void 0) && !sdIsString(val.client_secret)) {
    throw new BoxSdkError({
      message: 'Expecting string for "client_secret" of type "PostOAuth2Token"',
    });
  }
  const clientSecret: undefined | string =
    val.client_secret == void 0 ? void 0 : val.client_secret;
  if (!(val.code == void 0) && !sdIsString(val.code)) {
    throw new BoxSdkError({
      message: 'Expecting string for "code" of type "PostOAuth2Token"',
    });
  }
  const code: undefined | string = val.code == void 0 ? void 0 : val.code;
  if (!(val.refresh_token == void 0) && !sdIsString(val.refresh_token)) {
    throw new BoxSdkError({
      message: 'Expecting string for "refresh_token" of type "PostOAuth2Token"',
    });
  }
  const refreshToken: undefined | string =
    val.refresh_token == void 0 ? void 0 : val.refresh_token;
  if (!(val.assertion == void 0) && !sdIsString(val.assertion)) {
    throw new BoxSdkError({
      message: 'Expecting string for "assertion" of type "PostOAuth2Token"',
    });
  }
  const assertion: undefined | string =
    val.assertion == void 0 ? void 0 : val.assertion;
  if (!(val.subject_token == void 0) && !sdIsString(val.subject_token)) {
    throw new BoxSdkError({
      message: 'Expecting string for "subject_token" of type "PostOAuth2Token"',
    });
  }
  const subjectToken: undefined | string =
    val.subject_token == void 0 ? void 0 : val.subject_token;
  const subjectTokenType: undefined | PostOAuth2TokenSubjectTokenTypeField =
    val.subject_token_type == void 0
      ? void 0
      : deserializePostOAuth2TokenSubjectTokenTypeField(val.subject_token_type);
  if (!(val.actor_token == void 0) && !sdIsString(val.actor_token)) {
    throw new BoxSdkError({
      message: 'Expecting string for "actor_token" of type "PostOAuth2Token"',
    });
  }
  const actorToken: undefined | string =
    val.actor_token == void 0 ? void 0 : val.actor_token;
  const actorTokenType: undefined | PostOAuth2TokenActorTokenTypeField =
    val.actor_token_type == void 0
      ? void 0
      : deserializePostOAuth2TokenActorTokenTypeField(val.actor_token_type);
  if (!(val.scope == void 0) && !sdIsString(val.scope)) {
    throw new BoxSdkError({
      message: 'Expecting string for "scope" of type "PostOAuth2Token"',
    });
  }
  const scope: undefined | string = val.scope == void 0 ? void 0 : val.scope;
  if (!(val.resource == void 0) && !sdIsString(val.resource)) {
    throw new BoxSdkError({
      message: 'Expecting string for "resource" of type "PostOAuth2Token"',
    });
  }
  const resource: undefined | string =
    val.resource == void 0 ? void 0 : val.resource;
  const boxSubjectType: undefined | PostOAuth2TokenBoxSubjectTypeField =
    val.box_subject_type == void 0
      ? void 0
      : deserializePostOAuth2TokenBoxSubjectTypeField(val.box_subject_type);
  if (!(val.box_subject_id == void 0) && !sdIsString(val.box_subject_id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "box_subject_id" of type "PostOAuth2Token"',
    });
  }
  const boxSubjectId: undefined | string =
    val.box_subject_id == void 0 ? void 0 : val.box_subject_id;
  if (!(val.box_shared_link == void 0) && !sdIsString(val.box_shared_link)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "box_shared_link" of type "PostOAuth2Token"',
    });
  }
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
