import { serializeFileOrFolderScope } from './fileOrFolderScope.generated.js';
import { deserializeFileOrFolderScope } from './fileOrFolderScope.generated.js';
import { FileOrFolderScope } from './fileOrFolderScope.generated.js';
import { BoxSdkError } from '../box/errors.js';
import { SerializedData } from '../serialization/json.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export type AccessTokenTokenTypeField = 'bearer';
export type AccessTokenIssuedTokenTypeField =
  'urn:ietf:params:oauth:token-type:access_token';
export interface AccessToken {
  readonly accessToken?: string;
  readonly expiresIn?: number;
  readonly tokenType?: AccessTokenTokenTypeField;
  readonly restrictedTo?: readonly FileOrFolderScope[];
  readonly refreshToken?: string;
  readonly issuedTokenType?: AccessTokenIssuedTokenTypeField;
}
export function serializeAccessTokenTokenTypeField(
  val: AccessTokenTokenTypeField
): SerializedData {
  return val;
}
export function deserializeAccessTokenTokenTypeField(
  val: SerializedData
): AccessTokenTokenTypeField {
  if (val == 'bearer') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize AccessTokenTokenTypeField",
  });
}
export function serializeAccessTokenIssuedTokenTypeField(
  val: AccessTokenIssuedTokenTypeField
): SerializedData {
  return val;
}
export function deserializeAccessTokenIssuedTokenTypeField(
  val: SerializedData
): AccessTokenIssuedTokenTypeField {
  if (val == 'urn:ietf:params:oauth:token-type:access_token') {
    return val;
  }
  throw new BoxSdkError({
    message: "Can't deserialize AccessTokenIssuedTokenTypeField",
  });
}
export function serializeAccessToken(val: AccessToken): SerializedData {
  return {
    ['access_token']: val.accessToken == void 0 ? void 0 : val.accessToken,
    ['expires_in']: val.expiresIn == void 0 ? void 0 : val.expiresIn,
    ['token_type']:
      val.tokenType == void 0
        ? void 0
        : serializeAccessTokenTokenTypeField(val.tokenType),
    ['restricted_to']:
      val.restrictedTo == void 0
        ? void 0
        : (val.restrictedTo.map(function (
            item: FileOrFolderScope
          ): SerializedData {
            return serializeFileOrFolderScope(item);
          }) as readonly any[]),
    ['refresh_token']: val.refreshToken == void 0 ? void 0 : val.refreshToken,
    ['issued_token_type']:
      val.issuedTokenType == void 0
        ? void 0
        : serializeAccessTokenIssuedTokenTypeField(val.issuedTokenType),
  };
}
export function deserializeAccessToken(val: SerializedData): AccessToken {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({ message: 'Expecting a map for "AccessToken"' });
  }
  if (!(val.access_token == void 0) && !sdIsString(val.access_token)) {
    throw new BoxSdkError({
      message: 'Expecting string for "access_token" of type "AccessToken"',
    });
  }
  const accessToken: undefined | string =
    val.access_token == void 0 ? void 0 : val.access_token;
  if (!(val.expires_in == void 0) && !sdIsNumber(val.expires_in)) {
    throw new BoxSdkError({
      message: 'Expecting number for "expires_in" of type "AccessToken"',
    });
  }
  const expiresIn: undefined | number =
    val.expires_in == void 0 ? void 0 : val.expires_in;
  const tokenType: undefined | AccessTokenTokenTypeField =
    val.token_type == void 0
      ? void 0
      : deserializeAccessTokenTokenTypeField(val.token_type);
  if (!(val.restricted_to == void 0) && !sdIsList(val.restricted_to)) {
    throw new BoxSdkError({
      message: 'Expecting array for "restricted_to" of type "AccessToken"',
    });
  }
  const restrictedTo: undefined | readonly FileOrFolderScope[] =
    val.restricted_to == void 0
      ? void 0
      : sdIsList(val.restricted_to)
      ? (val.restricted_to.map(function (
          itm: SerializedData
        ): FileOrFolderScope {
          return deserializeFileOrFolderScope(itm);
        }) as readonly any[])
      : [];
  if (!(val.refresh_token == void 0) && !sdIsString(val.refresh_token)) {
    throw new BoxSdkError({
      message: 'Expecting string for "refresh_token" of type "AccessToken"',
    });
  }
  const refreshToken: undefined | string =
    val.refresh_token == void 0 ? void 0 : val.refresh_token;
  const issuedTokenType: undefined | AccessTokenIssuedTokenTypeField =
    val.issued_token_type == void 0
      ? void 0
      : deserializeAccessTokenIssuedTokenTypeField(val.issued_token_type);
  return {
    accessToken: accessToken,
    expiresIn: expiresIn,
    tokenType: tokenType,
    restrictedTo: restrictedTo,
    refreshToken: refreshToken,
    issuedTokenType: issuedTokenType,
  } satisfies AccessToken;
}
