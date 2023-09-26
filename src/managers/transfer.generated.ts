import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { serializeJson } from '../json.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
export interface TransferOwnedFolderRequestBodyArgOwnedByField {
  readonly id: string;
}
export interface TransferOwnedFolderRequestBodyArg {
  readonly ownedBy: TransferOwnedFolderRequestBodyArgOwnedByField;
}
export interface TransferOwnedFolderQueryParamsArg {
  readonly fields?: readonly string[];
  readonly notify?: boolean;
}
export class TransferOwnedFolderHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: TransferOwnedFolderHeadersArg) {
    Object.assign(this, fields);
  }
}
export class TransferManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(fields: Omit<TransferManager, 'transferOwnedFolder'>) {
    Object.assign(this, fields);
  }
  async transferOwnedFolder(
    userId: string,
    requestBody: TransferOwnedFolderRequestBodyArg,
    queryParams: TransferOwnedFolderQueryParamsArg = {} satisfies TransferOwnedFolderQueryParamsArg,
    headers: TransferOwnedFolderHeadersArg = new TransferOwnedFolderHeadersArg(
      {}
    )
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields?.map(toString).join(',') as string,
      ['notify']: toString(queryParams.notify) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/users/',
        toString(userId) as string,
        '/folders/0'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        body: serializeJson(
          serializeTransferOwnedFolderRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(deserializeJson(response.text));
  }
}
export function serializeTransferOwnedFolderRequestBodyArgOwnedByField(
  val: TransferOwnedFolderRequestBodyArgOwnedByField
): Json {
  return { ['id']: val.id };
}
export function deserializeTransferOwnedFolderRequestBodyArgOwnedByField(
  val: any
): TransferOwnedFolderRequestBodyArgOwnedByField {
  const id: string = val.id;
  return { id: id } satisfies TransferOwnedFolderRequestBodyArgOwnedByField;
}
export function serializeTransferOwnedFolderRequestBodyArg(
  val: TransferOwnedFolderRequestBodyArg
): Json {
  return {
    ['owned_by']: serializeTransferOwnedFolderRequestBodyArgOwnedByField(
      val.ownedBy
    ),
  };
}
export function deserializeTransferOwnedFolderRequestBodyArg(
  val: any
): TransferOwnedFolderRequestBodyArg {
  const ownedBy: TransferOwnedFolderRequestBodyArgOwnedByField =
    deserializeTransferOwnedFolderRequestBodyArgOwnedByField(val.owned_by);
  return { ownedBy: ownedBy } satisfies TransferOwnedFolderRequestBodyArg;
}
