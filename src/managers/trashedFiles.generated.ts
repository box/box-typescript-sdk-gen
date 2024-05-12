import { serializeTrashFileRestored } from '../schemas/trashFileRestored.generated.js';
import { deserializeTrashFileRestored } from '../schemas/trashFileRestored.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { serializeTrashFile } from '../schemas/trashFile.generated.js';
import { deserializeTrashFile } from '../schemas/trashFile.generated.js';
import { TrashFileRestored } from '../schemas/trashFileRestored.generated.js';
import { ClientError } from '../schemas/clientError.generated.js';
import { TrashFile } from '../schemas/trashFile.generated.js';
import { Authentication } from '../networking/auth.generated.js';
import { NetworkSession } from '../networking/network.generated.js';
import { prepareParams } from '../internal/utils.js';
import { toString } from '../internal/utils.js';
import { ByteStream } from '../internal/utils.js';
import { CancellationToken } from '../internal/utils.js';
import { sdToJson } from '../serialization/json.js';
import { FetchOptions } from '../networking/fetch.js';
import { FetchResponse } from '../networking/fetch.js';
import { fetch } from '../networking/fetch.js';
import { SerializedData } from '../serialization/json.js';
import { BoxSdkError } from '../box/errors.js';
import { sdIsEmpty } from '../serialization/json.js';
import { sdIsBoolean } from '../serialization/json.js';
import { sdIsNumber } from '../serialization/json.js';
import { sdIsString } from '../serialization/json.js';
import { sdIsList } from '../serialization/json.js';
import { sdIsMap } from '../serialization/json.js';
export class RestoreFileFromTrashOptionals {
  readonly requestBody: RestoreFileFromTrashRequestBody =
    {} satisfies RestoreFileFromTrashRequestBody;
  readonly queryParams: RestoreFileFromTrashQueryParams =
    {} satisfies RestoreFileFromTrashQueryParams;
  readonly headers: RestoreFileFromTrashHeaders =
    new RestoreFileFromTrashHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      RestoreFileFromTrashOptionals,
      'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          RestoreFileFromTrashOptionals,
          'requestBody' | 'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface RestoreFileFromTrashOptionalsInput {
  readonly requestBody?: RestoreFileFromTrashRequestBody;
  readonly queryParams?: RestoreFileFromTrashQueryParams;
  readonly headers?: RestoreFileFromTrashHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetTrashedFileByIdOptionals {
  readonly queryParams: GetTrashedFileByIdQueryParams =
    {} satisfies GetTrashedFileByIdQueryParams;
  readonly headers: GetTrashedFileByIdHeaders = new GetTrashedFileByIdHeaders(
    {}
  );
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetTrashedFileByIdOptionals,
      'queryParams' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetTrashedFileByIdOptionals,
          'queryParams' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.queryParams) {
      this.queryParams = fields.queryParams;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface GetTrashedFileByIdOptionalsInput {
  readonly queryParams?: GetTrashedFileByIdQueryParams;
  readonly headers?: GetTrashedFileByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteTrashedFileByIdOptionals {
  readonly headers: DeleteTrashedFileByIdHeaders =
    new DeleteTrashedFileByIdHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteTrashedFileByIdOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<DeleteTrashedFileByIdOptionals, 'headers' | 'cancellationToken'>
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
export interface DeleteTrashedFileByIdOptionalsInput {
  readonly headers?: DeleteTrashedFileByIdHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export interface RestoreFileFromTrashRequestBodyParentField {
  readonly id?: string;
}
export interface RestoreFileFromTrashRequestBody {
  readonly name?: string;
  readonly parent?: RestoreFileFromTrashRequestBodyParentField;
}
export interface RestoreFileFromTrashQueryParams {
  readonly fields?: readonly string[];
}
export class RestoreFileFromTrashHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<RestoreFileFromTrashHeaders, 'extraHeaders'> &
      Partial<Pick<RestoreFileFromTrashHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface RestoreFileFromTrashHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface GetTrashedFileByIdQueryParams {
  readonly fields?: readonly string[];
}
export class GetTrashedFileByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetTrashedFileByIdHeaders, 'extraHeaders'> &
      Partial<Pick<GetTrashedFileByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetTrashedFileByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteTrashedFileByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteTrashedFileByIdHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteTrashedFileByIdHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteTrashedFileByIdHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class TrashedFilesManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      TrashedFilesManager,
      | 'networkSession'
      | 'restoreFileFromTrash'
      | 'getTrashedFileById'
      | 'deleteTrashedFileById'
    > &
      Partial<Pick<TrashedFilesManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async restoreFileFromTrash(
    fileId: string,
    optionalsInput: RestoreFileFromTrashOptionalsInput = {}
  ): Promise<TrashFileRestored> {
    const optionals: RestoreFileFromTrashOptionals =
      new RestoreFileFromTrashOptionals({
        requestBody: optionalsInput.requestBody,
        queryParams: optionalsInput.queryParams,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const requestBody: any = optionals.requestBody;
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string
      ) as string,
      {
        method: 'POST',
        params: queryParamsMap,
        headers: headersMap,
        data: serializeRestoreFileFromTrashRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashFileRestored(response.data);
  }
  async getTrashedFileById(
    fileId: string,
    optionalsInput: GetTrashedFileByIdOptionalsInput = {}
  ): Promise<TrashFile> {
    const optionals: GetTrashedFileByIdOptionals =
      new GetTrashedFileByIdOptionals({
        queryParams: optionalsInput.queryParams,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const queryParams: any = optionals.queryParams;
    const headers: any = optionals.headers;
    const cancellationToken: any = optionals.cancellationToken;
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['fields']: queryParams.fields
        ? queryParams.fields.map(toString).join(',')
        : undefined,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/trash'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeTrashFile(response.data);
  }
  async deleteTrashedFileById(
    fileId: string,
    optionalsInput: DeleteTrashedFileByIdOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteTrashedFileByIdOptionals =
      new DeleteTrashedFileByIdOptionals({
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
        '/files/',
        toString(fileId) as string,
        '/trash'
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
export interface TrashedFilesManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeRestoreFileFromTrashRequestBodyParentField(
  val: RestoreFileFromTrashRequestBodyParentField
): SerializedData {
  return { ['id']: val.id == void 0 ? void 0 : val.id };
}
export function deserializeRestoreFileFromTrashRequestBodyParentField(
  val: SerializedData
): RestoreFileFromTrashRequestBodyParentField {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a map for "RestoreFileFromTrashRequestBodyParentField"',
    });
  }
  if (!(val.id == void 0) && !sdIsString(val.id)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "id" of type "RestoreFileFromTrashRequestBodyParentField"',
    });
  }
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return { id: id } satisfies RestoreFileFromTrashRequestBodyParentField;
}
export function serializeRestoreFileFromTrashRequestBody(
  val: RestoreFileFromTrashRequestBody
): SerializedData {
  return {
    ['name']: val.name == void 0 ? void 0 : val.name,
    ['parent']:
      val.parent == void 0
        ? void 0
        : serializeRestoreFileFromTrashRequestBodyParentField(val.parent),
  };
}
export function deserializeRestoreFileFromTrashRequestBody(
  val: SerializedData
): RestoreFileFromTrashRequestBody {
  if (!sdIsMap(val)) {
    throw new BoxSdkError({
      message: 'Expecting a map for "RestoreFileFromTrashRequestBody"',
    });
  }
  if (!(val.name == void 0) && !sdIsString(val.name)) {
    throw new BoxSdkError({
      message:
        'Expecting string for "name" of type "RestoreFileFromTrashRequestBody"',
    });
  }
  const name: undefined | string = val.name == void 0 ? void 0 : val.name;
  const parent: undefined | RestoreFileFromTrashRequestBodyParentField =
    val.parent == void 0
      ? void 0
      : deserializeRestoreFileFromTrashRequestBodyParentField(val.parent);
  return {
    name: name,
    parent: parent,
  } satisfies RestoreFileFromTrashRequestBody;
}
