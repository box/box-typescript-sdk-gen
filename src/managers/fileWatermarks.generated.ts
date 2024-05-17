import { serializeWatermark } from '../schemas/watermark.generated.js';
import { deserializeWatermark } from '../schemas/watermark.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { Watermark } from '../schemas/watermark.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
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
export class GetFileWatermarkOptionals {
  readonly headers: GetFileWatermarkHeaders = new GetFileWatermarkHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetFileWatermarkOptionals, 'headers' | 'cancellationToken'> &
      Partial<Pick<GetFileWatermarkOptionals, 'headers' | 'cancellationToken'>>
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetFileWatermarkOptionalsInput {
  readonly headers?: GetFileWatermarkHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateFileWatermarkOptionals {
  readonly headers: UpdateFileWatermarkHeaders = new UpdateFileWatermarkHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateFileWatermarkOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<UpdateFileWatermarkOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface UpdateFileWatermarkOptionalsInput {
  readonly headers?: UpdateFileWatermarkHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteFileWatermarkOptionals {
  readonly headers: DeleteFileWatermarkHeaders = new DeleteFileWatermarkHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteFileWatermarkOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteFileWatermarkOptionals, 'headers' | 'cancellationToken'>
      >
  ) {
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface DeleteFileWatermarkOptionalsInput {
  readonly headers?: DeleteFileWatermarkHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFileWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFileWatermarkHeaders, 'extraHeaders'> &
      Partial<Pick<GetFileWatermarkHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<UpdateFileWatermarkRequestBodyWatermarkField, 'imprint'> &
      Partial<Pick<UpdateFileWatermarkRequestBodyWatermarkField, 'imprint'>>
  ) {
    if (fields.imprint) {
      this.imprint = fields.imprint;
    }
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
    fields: Omit<UpdateFileWatermarkHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateFileWatermarkHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<DeleteFileWatermarkHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFileWatermarkHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<
      FileWatermarksManager,
      | 'networkSession'
      | 'getFileWatermark'
      | 'updateFileWatermark'
      | 'deleteFileWatermark'
    > &
      Partial<Pick<FileWatermarksManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFileWatermark(
    fileId: string,
    optionalsInput: GetFileWatermarkOptionalsInput = {}
  ): Promise<Watermark> {
    const optionals: GetFileWatermarkOptionals = new GetFileWatermarkOptionals({
      headers: optionalsInput.headers,
      cancellationToken: optionalsInput.cancellationToken,
    });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/files/',
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
    optionalsInput: UpdateFileWatermarkOptionalsInput = {}
  ): Promise<Watermark> {
    const optionals: UpdateFileWatermarkOptionals =
      new UpdateFileWatermarkOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/files/',
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
    optionalsInput: DeleteFileWatermarkOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteFileWatermarkOptionals =
      new DeleteFileWatermarkOptionals({
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/2.0/files/',
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
  val: UpdateFileWatermarkRequestBodyWatermarkImprintField
): SerializedData {
  return val;
}
export function deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(
  val: SerializedData
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
  val: UpdateFileWatermarkRequestBodyWatermarkField
): SerializedData {
  return {
    ['imprint']: serializeUpdateFileWatermarkRequestBodyWatermarkImprintField(
      val.imprint
    ),
  };
}
export function deserializeUpdateFileWatermarkRequestBodyWatermarkField(
  val: SerializedData
): UpdateFileWatermarkRequestBodyWatermarkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFileWatermarkRequestBodyWatermarkField"',
    });
  }
  if (val.imprint == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "imprint" of type "UpdateFileWatermarkRequestBodyWatermarkField" to be defined',
    });
  }
  const imprint: UpdateFileWatermarkRequestBodyWatermarkImprintField =
    deserializeUpdateFileWatermarkRequestBodyWatermarkImprintField(val.imprint);
  return {
    imprint: imprint,
  } satisfies UpdateFileWatermarkRequestBodyWatermarkField;
}
export function serializeUpdateFileWatermarkRequestBodyWatermarkFieldInput(
  val: UpdateFileWatermarkRequestBodyWatermarkFieldInput
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
  val: SerializedData
): UpdateFileWatermarkRequestBodyWatermarkFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFileWatermarkRequestBodyWatermarkFieldInput"',
    });
  }
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
  val: UpdateFileWatermarkRequestBody
): SerializedData {
  return {
    ['watermark']: serializeUpdateFileWatermarkRequestBodyWatermarkField(
      val.watermark
    ),
  };
}
export function deserializeUpdateFileWatermarkRequestBody(
  val: SerializedData
): UpdateFileWatermarkRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateFileWatermarkRequestBody"',
    });
  }
  if (val.watermark == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "watermark" of type "UpdateFileWatermarkRequestBody" to be defined',
    });
  }
  const watermark: UpdateFileWatermarkRequestBodyWatermarkField =
    deserializeUpdateFileWatermarkRequestBodyWatermarkField(val.watermark);
  return { watermark: watermark } satisfies UpdateFileWatermarkRequestBody;
}
