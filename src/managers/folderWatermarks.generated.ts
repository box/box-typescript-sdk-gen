import { serializeWatermark } from '../schemas.generated.js';
import { deserializeWatermark } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Watermark } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { sdToJson } from '../json.js';
import { SerializedData } from '../json.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export class GetFolderWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFolderWatermarkHeaders, 'extraHeaders'>
      | Partial<Pick<GetFolderWatermarkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderWatermarkRequestBodyWatermarkImprintField = 'default';
export interface UpdateFolderWatermarkRequestBodyWatermarkField {
  readonly imprint: UpdateFolderWatermarkRequestBodyWatermarkImprintField;
}
export interface UpdateFolderWatermarkRequestBody {
  readonly watermark: UpdateFolderWatermarkRequestBodyWatermarkField;
}
export class UpdateFolderWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFolderWatermarkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFolderWatermarkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFolderWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFolderWatermarkHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFolderWatermarkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FolderWatermarksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FolderWatermarksManager,
          | 'networkSession'
          | 'getFolderWatermark'
          | 'updateFolderWatermark'
          | 'deleteFolderWatermark'
        >
      | Partial<Pick<FolderWatermarksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFolderWatermark(
    folderId: string,
    headers: GetFolderWatermarkHeaders = new GetFolderWatermarkHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '/watermark'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWatermark(response.data);
  }
  async updateFolderWatermark(
    folderId: string,
    requestBody: UpdateFolderWatermarkRequestBody,
    headers: UpdateFolderWatermarkHeaders = new UpdateFolderWatermarkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '/watermark'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateFolderWatermarkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWatermark(response.data);
  }
  async deleteFolderWatermark(
    folderId: string,
    headers: DeleteFolderWatermarkHeaders = new DeleteFolderWatermarkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/folders/',
        toString(folderId) as string,
        '/watermark'
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
  val: UpdateFolderWatermarkRequestBodyWatermarkImprintField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
  val: any
): UpdateFolderWatermarkRequestBodyWatermarkImprintField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFolderWatermarkRequestBodyWatermarkImprintField"';
  }
  if (val == 'default') {
    return 'default';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkField(
  val: UpdateFolderWatermarkRequestBodyWatermarkField
): SerializedData {
  return {
    ['imprint']: serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
      val.imprint
    ),
  };
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkField(
  val: any
): UpdateFolderWatermarkRequestBodyWatermarkField {
  const imprint: UpdateFolderWatermarkRequestBodyWatermarkImprintField =
    deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
      val.imprint
    );
  return {
    imprint: imprint,
  } satisfies UpdateFolderWatermarkRequestBodyWatermarkField;
}
export function serializeUpdateFolderWatermarkRequestBody(
  val: UpdateFolderWatermarkRequestBody
): SerializedData {
  return {
    ['watermark']: serializeUpdateFolderWatermarkRequestBodyWatermarkField(
      val.watermark
    ),
  };
}
export function deserializeUpdateFolderWatermarkRequestBody(
  val: any
): UpdateFolderWatermarkRequestBody {
  const watermark: UpdateFolderWatermarkRequestBodyWatermarkField =
    deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val.watermark);
  return { watermark: watermark } satisfies UpdateFolderWatermarkRequestBody;
}
