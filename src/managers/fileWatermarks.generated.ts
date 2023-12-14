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
export class GetFileWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileWatermarkHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileWatermarkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFileWatermarkRequestBodyWatermarkImprintField = 'default';
export interface UpdateFileWatermarkRequestBodyWatermarkField {
  readonly imprint: UpdateFileWatermarkRequestBodyWatermarkImprintField;
}
export interface UpdateFileWatermarkRequestBody {
  readonly watermark: UpdateFileWatermarkRequestBodyWatermarkField;
}
export class UpdateFileWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileWatermarkHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateFileWatermarkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileWatermarkHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFileWatermarkHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FileWatermarksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FileWatermarksManager,
          | 'networkSession'
          | 'getFileWatermark'
          | 'updateFileWatermark'
          | 'deleteFileWatermark'
        >
      | Partial<Pick<FileWatermarksManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileWatermark(
    fileId: string,
    headers: GetFileWatermarkHeaders = new GetFileWatermarkHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
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
  async updateFileWatermark(
    fileId: string,
    requestBody: UpdateFileWatermarkRequestBody,
    headers: UpdateFileWatermarkHeaders = new UpdateFileWatermarkHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/watermark'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateFileWatermarkRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeWatermark(response.data);
  }
  async deleteFileWatermark(
    fileId: string,
    headers: DeleteFileWatermarkHeaders = new DeleteFileWatermarkHeaders({}),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
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
export function serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(
  val: UpdateFileWatermarkRequestBodyWatermarkImprintField
): SerializedData {
  return val;
}
export function deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(
  val: any
): UpdateFileWatermarkRequestBodyWatermarkImprintField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileWatermarkRequestBodyWatermarkImprintField"';
  }
  if (val == 'default') {
    return 'default';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFileWatermarkRequestBodyWatermarkField(
  val: UpdateFileWatermarkRequestBodyWatermarkField
): SerializedData {
  return {
    ['imprint']: serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(
      val.imprint
    ),
  };
}
export function deserializeUpdateFileWatermarkRequestBodyWatermarkField(
  val: any
): UpdateFileWatermarkRequestBodyWatermarkField {
  const imprint: UpdateFileWatermarkRequestBodyWatermarkImprintField =
    deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint);
  return {
    imprint: imprint,
  } satisfies UpdateFileWatermarkRequestBodyWatermarkField;
}
export function serializeUpdateFileWatermarkRequestBody(
  val: UpdateFileWatermarkRequestBody
): SerializedData {
  return {
    ['watermark']: serializeUpdateFileWatermarkRequestBodyWatermarkField(
      val.watermark
    ),
  };
}
export function deserializeUpdateFileWatermarkRequestBody(
  val: any
): UpdateFileWatermarkRequestBody {
  const watermark: UpdateFileWatermarkRequestBodyWatermarkField =
    deserializeUpdateFileWatermarkRequestBodyWatermarkField(val.watermark);
  return { watermark: watermark } satisfies UpdateFileWatermarkRequestBody;
}
