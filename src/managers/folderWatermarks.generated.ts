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
export class GetFolderWatermarkOptionals {
  readonly headers: GetFolderWatermarkHeaders = new GetFolderWatermarkHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<GetFolderWatermarkOptionals, 'headers' | 'cancellationToken'> &
      Partial<
        Pick<GetFolderWatermarkOptionals, 'headers' | 'cancellationToken'>
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
export interface GetFolderWatermarkOptionalsInput {
  readonly headers?: GetFolderWatermarkHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateFolderWatermarkOptionals {
  readonly headers: UpdateFolderWatermarkHeaders =
    new UpdateFolderWatermarkHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateFolderWatermarkOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<UpdateFolderWatermarkOptionals, 'headers' | 'cancellationToken'>
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
export interface UpdateFolderWatermarkOptionalsInput {
  readonly headers?: UpdateFolderWatermarkHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteFolderWatermarkOptionals {
  readonly headers: DeleteFolderWatermarkHeaders =
    new DeleteFolderWatermarkHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteFolderWatermarkOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteFolderWatermarkOptionals, 'headers' | 'cancellationToken'>
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
export interface DeleteFolderWatermarkOptionalsInput {
  readonly headers?: DeleteFolderWatermarkHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetFolderWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetFolderWatermarkHeaders, 'extraHeaders'> &
      Partial<Pick<GetFolderWatermarkHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetFolderWatermarkHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateFolderWatermarkRequestBodyWatermarkImprintField = 'default';
export class UpdateFolderWatermarkRequestBodyWatermarkField {
  readonly imprint: UpdateFolderWatermarkRequestBodyWatermarkImprintField =
    'default' as UpdateFolderWatermarkRequestBodyWatermarkImprintField;
  constructor(
    fields: Omit<UpdateFolderWatermarkRequestBodyWatermarkField, 'imprint'> &
      Partial<Pick<UpdateFolderWatermarkRequestBodyWatermarkField, 'imprint'>>
  ) {
    if (fields.imprint) {
      this.imprint = fields.imprint;
    }
  }
}
export interface UpdateFolderWatermarkRequestBodyWatermarkFieldInput {
  readonly imprint?: UpdateFolderWatermarkRequestBodyWatermarkImprintField;
}
export interface UpdateFolderWatermarkRequestBody {
  readonly watermark: UpdateFolderWatermarkRequestBodyWatermarkField;
}
export class UpdateFolderWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateFolderWatermarkHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateFolderWatermarkHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateFolderWatermarkHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteFolderWatermarkHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteFolderWatermarkHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteFolderWatermarkHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteFolderWatermarkHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FolderWatermarksManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FolderWatermarksManager,
      | 'networkSession'
      | 'getFolderWatermark'
      | 'updateFolderWatermark'
      | 'deleteFolderWatermark'
    > &
      Partial<Pick<FolderWatermarksManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getFolderWatermark(
    folderId: string,
    optionalsInput: GetFolderWatermarkOptionalsInput = {}
  ): Promise<Watermark> {
    const optionals: GetFolderWatermarkOptionals =
      new GetFolderWatermarkOptionals({
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
    optionalsInput: UpdateFolderWatermarkOptionalsInput = {}
  ): Promise<Watermark> {
    const optionals: UpdateFolderWatermarkOptionals =
      new UpdateFolderWatermarkOptionals({
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
    optionalsInput: DeleteFolderWatermarkOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteFolderWatermarkOptionals =
      new DeleteFolderWatermarkOptionals({
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
export interface FolderWatermarksManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
  val: UpdateFolderWatermarkRequestBodyWatermarkImprintField
): SerializedData {
  return val;
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
  val: SerializedData
): UpdateFolderWatermarkRequestBodyWatermarkImprintField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateFolderWatermarkRequestBodyWatermarkImprintField"',
    });
  }
  if (val == 'default') {
    return 'default';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
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
  val: SerializedData
): UpdateFolderWatermarkRequestBodyWatermarkField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFolderWatermarkRequestBodyWatermarkField"',
    });
  }
  if (val.imprint == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "imprint" of type "UpdateFolderWatermarkRequestBodyWatermarkField" to be defined',
    });
  }
  const imprint: UpdateFolderWatermarkRequestBodyWatermarkImprintField =
    deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
      val.imprint
    );
  return {
    imprint: imprint,
  } satisfies UpdateFolderWatermarkRequestBodyWatermarkField;
}
export function serializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(
  val: UpdateFolderWatermarkRequestBodyWatermarkFieldInput
): SerializedData {
  return {
    ['imprint']:
      val.imprint == void 0
        ? void 0
        : serializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
            val.imprint
          ),
  };
}
export function deserializeUpdateFolderWatermarkRequestBodyWatermarkFieldInput(
  val: SerializedData
): UpdateFolderWatermarkRequestBodyWatermarkFieldInput {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "UpdateFolderWatermarkRequestBodyWatermarkFieldInput"',
    });
  }
  const imprint:
    | undefined
    | UpdateFolderWatermarkRequestBodyWatermarkImprintField =
    val.imprint == void 0
      ? void 0
      : deserializeUpdateFolderWatermarkRequestBodyWatermarkImprintField(
          val.imprint
        );
  return {
    imprint: imprint,
  } satisfies UpdateFolderWatermarkRequestBodyWatermarkFieldInput;
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
  val: SerializedData
): UpdateFolderWatermarkRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "UpdateFolderWatermarkRequestBody"',
    });
  }
  if (val.watermark == void 0) {
    throw new BoxSdkError({
      message:
        'Expecting "watermark" of type "UpdateFolderWatermarkRequestBody" to be defined',
    });
  }
  const watermark: UpdateFolderWatermarkRequestBodyWatermarkField =
    deserializeUpdateFolderWatermarkRequestBodyWatermarkField(val.watermark);
  return { watermark: watermark } satisfies UpdateFolderWatermarkRequestBody;
}
