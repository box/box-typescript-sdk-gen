import { serializeClassification } from '../schemas/classification.generated.js';
import { deserializeClassification } from '../schemas/classification.generated.js';
import { serializeClientError } from '../schemas/clientError.generated.js';
import { deserializeClientError } from '../schemas/clientError.generated.js';
import { Classification } from '../schemas/classification.generated.js';
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
export class GetClassificationOnFileOptionals {
  readonly headers: GetClassificationOnFileHeaders =
    new GetClassificationOnFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetClassificationOnFileOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetClassificationOnFileOptionals, 'headers' | 'cancellationToken'>
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
export interface GetClassificationOnFileOptionalsInput {
  readonly headers?: GetClassificationOnFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class AddClassificationToFileOptionals {
  readonly requestBody: AddClassificationToFileRequestBody =
    {} satisfies AddClassificationToFileRequestBody;
  readonly headers: AddClassificationToFileHeaders =
    new AddClassificationToFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      AddClassificationToFileOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          AddClassificationToFileOptionals,
          'requestBody' | 'headers' | 'cancellationToken'
        >
      >
  ) {
    if (fields.requestBody) {
      this.requestBody = fields.requestBody;
    }
    if (fields.headers) {
      this.headers = fields.headers;
    }
    if (fields.cancellationToken) {
      this.cancellationToken = fields.cancellationToken;
    }
  }
}
export interface AddClassificationToFileOptionalsInput {
  readonly requestBody?: AddClassificationToFileRequestBody;
  readonly headers?: AddClassificationToFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateClassificationOnFileOptionals {
  readonly headers: UpdateClassificationOnFileHeaders =
    new UpdateClassificationOnFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateClassificationOnFileOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateClassificationOnFileOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface UpdateClassificationOnFileOptionalsInput {
  readonly headers?: UpdateClassificationOnFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteClassificationFromFileOptionals {
  readonly headers: DeleteClassificationFromFileHeaders =
    new DeleteClassificationFromFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteClassificationFromFileOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteClassificationFromFileOptionals,
          'headers' | 'cancellationToken'
        >
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
export interface DeleteClassificationFromFileOptionalsInput {
  readonly headers?: DeleteClassificationFromFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetClassificationOnFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetClassificationOnFileHeaders, 'extraHeaders'> &
      Partial<Pick<GetClassificationOnFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<AddClassificationToFileHeaders, 'extraHeaders'> &
      Partial<Pick<AddClassificationToFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<UpdateClassificationOnFileRequestBody, 'op' | 'path'> &
      Partial<Pick<UpdateClassificationOnFileRequestBody, 'op' | 'path'>>
  ) {
    if (fields.op) {
      this.op = fields.op;
    }
    if (fields.path) {
      this.path = fields.path;
    }
    if (fields.value) {
      this.value = fields.value;
    }
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
    fields: Omit<UpdateClassificationOnFileHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateClassificationOnFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<DeleteClassificationFromFileHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteClassificationFromFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
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
    fields: Omit<
      FileClassificationsManager,
      | 'networkSession'
      | 'getClassificationOnFile'
      | 'addClassificationToFile'
      | 'updateClassificationOnFile'
      | 'deleteClassificationFromFile'
    > &
      Partial<Pick<FileClassificationsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getClassificationOnFile(
    fileId: string,
    optionalsInput: GetClassificationOnFileOptionalsInput = {}
  ): Promise<Classification> {
    const optionals: GetClassificationOnFileOptionals =
      new GetClassificationOnFileOptionals({
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
    optionalsInput: AddClassificationToFileOptionalsInput = {}
  ): Promise<Classification> {
    const optionals: AddClassificationToFileOptionals =
      new AddClassificationToFileOptionals({
        requestBody: optionalsInput.requestBody,
        headers: optionalsInput.headers,
        cancellationToken: optionalsInput.cancellationToken,
      });
    const requestBody: any = optionals.requestBody;
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
    optionalsInput: UpdateClassificationOnFileOptionalsInput = {}
  ): Promise<Classification> {
    const optionals: UpdateClassificationOnFileOptionals =
      new UpdateClassificationOnFileOptionals({
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
    optionalsInput: DeleteClassificationFromFileOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteClassificationFromFileOptionals =
      new DeleteClassificationFromFileOptionals({
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
  val: AddClassificationToFileRequestBody
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
  val: UpdateClassificationOnFileRequestBodyOpField
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
  val: UpdateClassificationOnFileRequestBodyPathField
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
  val: UpdateClassificationOnFileRequestBody
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
  val: UpdateClassificationOnFileRequestBodyInput
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
