import { serializeClassification } from '../schemas.generated.js';
import { deserializeClassification } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Classification } from '../schemas.generated.js';
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
export class GetClassificationOnFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetClassificationOnFileHeaders, 'extraHeaders'>
      | Partial<Pick<GetClassificationOnFileHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetClassificationOnFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface AddClassificationToFileRequestBody {
  readonly boxSecurityClassificationKey?: string;
}
export class AddClassificationToFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<AddClassificationToFileHeaders, 'extraHeaders'>
      | Partial<Pick<AddClassificationToFileHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface AddClassificationToFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateClassificationOnFileRequestBodyOpField = 'replace';
export type UpdateClassificationOnFileRequestBodyPathField =
  '/Box__Security__Classification__Key';
export class UpdateClassificationOnFileRequestBody {
  readonly op: UpdateClassificationOnFileRequestBodyOpField =
    'replace' as UpdateClassificationOnFileRequestBodyOpField;
  readonly path: UpdateClassificationOnFileRequestBodyPathField =
    '/Box__Security__Classification__Key' as UpdateClassificationOnFileRequestBodyPathField;
  readonly value!: string;
  constructor(
    fields:
      | Omit<UpdateClassificationOnFileRequestBody, 'op' | 'path'>
      | Partial<Pick<UpdateClassificationOnFileRequestBody, 'op' | 'path'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateClassificationOnFileRequestBodyInput {
  readonly op?: UpdateClassificationOnFileRequestBodyOpField;
  readonly path?: UpdateClassificationOnFileRequestBodyPathField;
  readonly value: string;
}
export class UpdateClassificationOnFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateClassificationOnFileHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateClassificationOnFileHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface UpdateClassificationOnFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteClassificationFromFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteClassificationFromFileHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteClassificationFromFileHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface DeleteClassificationFromFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FileClassificationsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FileClassificationsManager,
          | 'networkSession'
          | 'getClassificationOnFile'
          | 'addClassificationToFile'
          | 'updateClassificationOnFile'
          | 'deleteClassificationFromFile'
        >
      | Partial<Pick<FileClassificationsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getClassificationOnFile(
    fileId: string,
    headersInput: GetClassificationOnFileHeadersInput = new GetClassificationOnFileHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
    const headers: any = new GetClassificationOnFileHeaders({
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
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
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
    return deserializeClassification(response.data);
  }
  async addClassificationToFile(
    fileId: string,
    requestBody: AddClassificationToFileRequestBody = {} satisfies AddClassificationToFileRequestBody,
    headersInput: AddClassificationToFileHeadersInput = new AddClassificationToFileHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
    const headers: any = new AddClassificationToFileHeaders({
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
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeAddClassificationToFileRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassification(response.data);
  }
  async updateClassificationOnFile(
    fileId: string,
    requestBody: readonly UpdateClassificationOnFileRequestBody[],
    headersInput: UpdateClassificationOnFileHeadersInput = new UpdateClassificationOnFileHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
    const headers: any = new UpdateClassificationOnFileHeaders({
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
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateClassificationOnFileRequestBody
        ) as readonly any[],
        contentType: 'application/json-patch+json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassification(response.data);
  }
  async deleteClassificationFromFile(
    fileId: string,
    headersInput: DeleteClassificationFromFileHeadersInput = new DeleteClassificationFromFileHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headers: any = new DeleteClassificationFromFileHeaders({
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
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
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
export interface FileClassificationsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeAddClassificationToFileRequestBody(
  val: any
): SerializedData {
  return {
    ['Box__Security__Classification__Key']:
      val.boxSecurityClassificationKey == void 0
        ? void 0
        : val.boxSecurityClassificationKey,
  };
}
export function deserializeAddClassificationToFileRequestBody(
  val: any
): AddClassificationToFileRequestBody {
  const boxSecurityClassificationKey: undefined | string =
    val.Box__Security__Classification__Key == void 0
      ? void 0
      : val.Box__Security__Classification__Key;
  return {
    boxSecurityClassificationKey: boxSecurityClassificationKey,
  } satisfies AddClassificationToFileRequestBody;
}
export function serializeUpdateClassificationOnFileRequestBodyOpField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationOnFileRequestBodyOpField(
  val: any
): UpdateClassificationOnFileRequestBodyOpField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateClassificationOnFileRequestBodyOpField"',
    });
  }
  if (val == 'replace') {
    return 'replace';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateClassificationOnFileRequestBodyPathField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationOnFileRequestBodyPathField(
  val: any
): UpdateClassificationOnFileRequestBodyPathField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateClassificationOnFileRequestBodyPathField"',
    });
  }
  if (val == '/Box__Security__Classification__Key') {
    return '/Box__Security__Classification__Key';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateClassificationOnFileRequestBody(
  val: any
): SerializedData {
  return {
    ['op']: serializeUpdateClassificationOnFileRequestBodyOpField(val.op),
    ['path']: serializeUpdateClassificationOnFileRequestBodyPathField(val.path),
    ['value']: val.value,
  };
}
export function deserializeUpdateClassificationOnFileRequestBody(
  val: any
): UpdateClassificationOnFileRequestBody {
  const op: UpdateClassificationOnFileRequestBodyOpField =
    deserializeUpdateClassificationOnFileRequestBodyOpField(val.op);
  const path: UpdateClassificationOnFileRequestBodyPathField =
    deserializeUpdateClassificationOnFileRequestBodyPathField(val.path);
  const value: string = val.value;
  return {
    op: op,
    path: path,
    value: value,
  } satisfies UpdateClassificationOnFileRequestBody;
}
export function serializeUpdateClassificationOnFileRequestBodyInput(
  val: any
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateClassificationOnFileRequestBodyOpField(val.op),
    ['path']:
      val.path == void 0
        ? void 0
        : serializeUpdateClassificationOnFileRequestBodyPathField(val.path),
    ['value']: val.value,
  };
}
export function deserializeUpdateClassificationOnFileRequestBodyInput(
  val: any
): UpdateClassificationOnFileRequestBodyInput {
  const op: undefined | UpdateClassificationOnFileRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateClassificationOnFileRequestBodyOpField(val.op);
  const path: undefined | UpdateClassificationOnFileRequestBodyPathField =
    val.path == void 0
      ? void 0
      : deserializeUpdateClassificationOnFileRequestBodyPathField(val.path);
  const value: string = val.value;
  return {
    op: op,
    path: path,
    value: value,
  } satisfies UpdateClassificationOnFileRequestBodyInput;
}
