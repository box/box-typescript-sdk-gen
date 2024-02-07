import { serializeFolderFull } from '../schemas.generated.js';
import { deserializeFolderFull } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { FolderFull } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
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
export interface TransferOwnedFolderRequestBodyOwnedByField {
  readonly id: string;
}
export interface TransferOwnedFolderRequestBody {
  readonly ownedBy: TransferOwnedFolderRequestBodyOwnedByField;
}
export interface TransferOwnedFolderQueryParams {
  readonly fields?: readonly string[];
  readonly notify?: boolean;
}
export class TransferOwnedFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<TransferOwnedFolderHeaders, 'extraHeaders'>
      | Partial<Pick<TransferOwnedFolderHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class TransferManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<TransferManager, 'networkSession' | 'transferOwnedFolder'>
      | Partial<Pick<TransferManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async transferOwnedFolder(
    userId: string,
    requestBody: TransferOwnedFolderRequestBody,
    queryParams: TransferOwnedFolderQueryParams = {} satisfies TransferOwnedFolderQueryParams,
    headers: TransferOwnedFolderHeaders = new TransferOwnedFolderHeaders({}),
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
        this.networkSession.baseUrls.baseUrl,
        '/users/',
        toString(userId) as string,
        '/folders/0'
      ) as string,
      {
        method: 'PUT',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeTransferOwnedFolderRequestBody(requestBody),
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
export function serializeTransferOwnedFolderRequestBodyOwnedByField(
  val: TransferOwnedFolderRequestBodyOwnedByField
): SerializedData {
  return { ['id']: val.id };
}
export function deserializeTransferOwnedFolderRequestBodyOwnedByField(
  val: any
): TransferOwnedFolderRequestBodyOwnedByField {
  const id: string = val.id;
  return { id: id } satisfies TransferOwnedFolderRequestBodyOwnedByField;
}
export function serializeTransferOwnedFolderRequestBody(
  val: TransferOwnedFolderRequestBody
): SerializedData {
  return {
    ['owned_by']: serializeTransferOwnedFolderRequestBodyOwnedByField(
      val.ownedBy
    ),
  };
}
export function deserializeTransferOwnedFolderRequestBody(
  val: any
): TransferOwnedFolderRequestBody {
  const ownedBy: TransferOwnedFolderRequestBodyOwnedByField =
    deserializeTransferOwnedFolderRequestBodyOwnedByField(val.owned_by);
  return { ownedBy: ownedBy } satisfies TransferOwnedFolderRequestBody;
}
