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
import { CancellationToken } from '../utils.js';
import { sdToJson } from '../json.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
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
  constructor(
    fields:
      | Omit<TransferOwnedFolderHeadersArg, 'extraHeaders'>
      | Partial<Pick<TransferOwnedFolderHeadersArg, 'extraHeaders'>>
  ) {
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
    ),
    cancellationToken?: CancellationToken
  ): Promise<FolderFull> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
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
        data: serializeTransferOwnedFolderRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFolderFull(response.data);
  }
}
export function serializeTransferOwnedFolderRequestBodyArgOwnedByField(
  val: TransferOwnedFolderRequestBodyArgOwnedByField
): SerializedData {
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
): SerializedData {
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
