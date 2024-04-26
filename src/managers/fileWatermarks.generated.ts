import { serializeWatermark } from '../schemas.generated.js';
import { deserializeWatermark } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Watermark } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { sdToJson } from '../serialization/json.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
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
export interface GetFileWatermarkHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateFileWatermarkRequestBodyWatermarkImprintField = 'default';
export class UpdateFileWatermarkRequestBodyWatermarkField {
  readonly imprint: UpdateFileWatermarkRequestBodyWatermarkImprintField =
    'default' as UpdateFileWatermarkRequestBodyWatermarkImprintField;
  constructor(
    fields:
      | Omit<UpdateFileWatermarkRequestBodyWatermarkField, 'imprint'>
      | Partial<Pick<UpdateFileWatermarkRequestBodyWatermarkField, 'imprint'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateFileWatermarkRequestBodyWatermarkFieldInput {
  readonly imprint?: UpdateFileWatermarkRequestBodyWatermarkImprintField;
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
export interface UpdateFileWatermarkHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
export interface DeleteFileWatermarkHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
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
    headersInput: GetFileWatermarkHeadersInput = new GetFileWatermarkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headers: any = new GetFileWatermarkHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: UpdateFileWatermarkHeadersInput = new UpdateFileWatermarkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Watermark> {
    const headers: any = new UpdateFileWatermarkHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
    headersInput: DeleteFileWatermarkHeadersInput = new DeleteFileWatermarkHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any = new DeleteFileWatermarkHeaders({
      extraHeaders: headersInput.extraHeaders,
    });
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
export interface FileWatermarksManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(
  val: any
): UpdateFileWatermarkRequestBodyWatermarkImprintField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFileWatermarkRequestBodyWatermarkImprintField"',
    });
  }
  if (val == 'default') {
    return 'default';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateFileWatermarkRequestBodyWatermarkField(
  val: any
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
export function serializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(
  val: any
): SerializedData {
  return {
    ['imprint']:
      val.imprint == void 0
        ? void 0
        : serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(
            val.imprint
          ),
  };
}
export function deserializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(
  val: any
): UpdateFileWatermarkRequestBodyWatermarkFieldInput {
  const imprint:
    | undefined
    | UpdateFileWatermarkRequestBodyWatermarkImprintField =
    val.imprint == void 0
      ? void 0
      : deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(
          val.imprint
        );
  return {
    imprint: imprint,
  } satisfies UpdateFileWatermarkRequestBodyWatermarkFieldInput;
}
export function serializeUpdateFileWatermarkRequestBody(
  val: any
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
