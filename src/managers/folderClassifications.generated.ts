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
export class GetClassificationOnFolderOptionals {
  readonly headers: GetClassificationOnFolderHeaders =
    new GetClassificationOnFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetClassificationOnFolderOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          GetClassificationOnFolderOptionals,
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
export interface GetClassificationOnFolderOptionalsInput {
  readonly headers?: GetClassificationOnFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class AddClassificationToFolderOptionals {
  readonly requestBody: AddClassificationToFolderRequestBody =
    {} satisfies AddClassificationToFolderRequestBody;
  readonly headers: AddClassificationToFolderHeaders =
    new AddClassificationToFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      AddClassificationToFolderOptionals,
      'requestBody' | 'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          AddClassificationToFolderOptionals,
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
export interface AddClassificationToFolderOptionalsInput {
  readonly requestBody?: AddClassificationToFolderRequestBody;
  readonly headers?: AddClassificationToFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateClassificationOnFolderOptionals {
  readonly headers: UpdateClassificationOnFolderHeaders =
    new UpdateClassificationOnFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateClassificationOnFolderOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateClassificationOnFolderOptionals,
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
export interface UpdateClassificationOnFolderOptionalsInput {
  readonly headers?: UpdateClassificationOnFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteClassificationFromFolderOptionals {
  readonly headers: DeleteClassificationFromFolderHeaders =
    new DeleteClassificationFromFolderHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteClassificationFromFolderOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteClassificationFromFolderOptionals,
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
export interface DeleteClassificationFromFolderOptionalsInput {
  readonly headers?: DeleteClassificationFromFolderHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetClassificationOnFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetClassificationOnFolderHeaders, 'extraHeaders'> &
      Partial<Pick<GetClassificationOnFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetClassificationOnFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface AddClassificationToFolderRequestBody {
  readonly boxSecurityClassificationKey?: string;
}
export class AddClassificationToFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<AddClassificationToFolderHeaders, 'extraHeaders'> &
      Partial<Pick<AddClassificationToFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface AddClassificationToFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateClassificationOnFolderRequestBodyOpField = 'replace';
export type UpdateClassificationOnFolderRequestBodyPathField =
  '/Box__Security__Classification__Key';
export class UpdateClassificationOnFolderRequestBody {
  readonly op: UpdateClassificationOnFolderRequestBodyOpField =
    'replace' as UpdateClassificationOnFolderRequestBodyOpField;
  readonly path: UpdateClassificationOnFolderRequestBodyPathField =
    '/Box__Security__Classification__Key' as UpdateClassificationOnFolderRequestBodyPathField;
  readonly value!: string;
  constructor(
    fields: Omit<UpdateClassificationOnFolderRequestBody, 'op' | 'path'> &
      Partial<Pick<UpdateClassificationOnFolderRequestBody, 'op' | 'path'>>
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
export interface UpdateClassificationOnFolderRequestBodyInput {
  readonly op?: UpdateClassificationOnFolderRequestBodyOpField;
  readonly path?: UpdateClassificationOnFolderRequestBodyPathField;
  readonly value: string;
}
export class UpdateClassificationOnFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateClassificationOnFolderHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateClassificationOnFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateClassificationOnFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteClassificationFromFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteClassificationFromFolderHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteClassificationFromFolderHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteClassificationFromFolderHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class FolderClassificationsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      FolderClassificationsManager,
      | 'networkSession'
      | 'getClassificationOnFolder'
      | 'addClassificationToFolder'
      | 'updateClassificationOnFolder'
      | 'deleteClassificationFromFolder'
    > &
      Partial<Pick<FolderClassificationsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getClassificationOnFolder(
    folderId: string,
    optionalsInput: GetClassificationOnFolderOptionalsInput = {}
  ): Promise<Classification> {
    const optionals: GetClassificationOnFolderOptionals =
      new GetClassificationOnFolderOptionals({
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
  async addClassificationToFolder(
    folderId: string,
    optionalsInput: AddClassificationToFolderOptionalsInput = {}
  ): Promise<Classification> {
    const optionals: AddClassificationToFolderOptionals =
      new AddClassificationToFolderOptionals({
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
        '/folders/',
        toString(folderId) as string,
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeAddClassificationToFolderRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassification(response.data);
  }
  async updateClassificationOnFolder(
    folderId: string,
    requestBody: readonly UpdateClassificationOnFolderRequestBody[],
    optionalsInput: UpdateClassificationOnFolderOptionalsInput = {}
  ): Promise<Classification> {
    const optionals: UpdateClassificationOnFolderOptionals =
      new UpdateClassificationOnFolderOptionals({
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
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateClassificationOnFolderRequestBody
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
  async deleteClassificationFromFolder(
    folderId: string,
    optionalsInput: DeleteClassificationFromFolderOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: DeleteClassificationFromFolderOptionals =
      new DeleteClassificationFromFolderOptionals({
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
export interface FolderClassificationsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeAddClassificationToFolderRequestBody(
  val: AddClassificationToFolderRequestBody
): SerializedData {
  return {
    ['Box__Security__Classification__Key']:
      val.boxSecurityClassificationKey == void 0
        ? void 0
        : val.boxSecurityClassificationKey,
  };
}
export function deserializeAddClassificationToFolderRequestBody(
  val: any
): AddClassificationToFolderRequestBody {
  const boxSecurityClassificationKey: undefined | string =
    val.Box__Security__Classification__Key == void 0
      ? void 0
      : val.Box__Security__Classification__Key;
  return {
    boxSecurityClassificationKey: boxSecurityClassificationKey,
  } satisfies AddClassificationToFolderRequestBody;
}
export function serializeUpdateClassificationOnFolderRequestBodyOpField(
  val: UpdateClassificationOnFolderRequestBodyOpField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationOnFolderRequestBodyOpField(
  val: any
): UpdateClassificationOnFolderRequestBodyOpField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateClassificationOnFolderRequestBodyOpField"',
    });
  }
  if (val == 'replace') {
    return 'replace';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateClassificationOnFolderRequestBodyPathField(
  val: UpdateClassificationOnFolderRequestBodyPathField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationOnFolderRequestBodyPathField(
  val: any
): UpdateClassificationOnFolderRequestBodyPathField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateClassificationOnFolderRequestBodyPathField"',
    });
  }
  if (val == '/Box__Security__Classification__Key') {
    return '/Box__Security__Classification__Key';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateClassificationOnFolderRequestBody(
  val: UpdateClassificationOnFolderRequestBody
): SerializedData {
  return {
    ['op']: serializeUpdateClassificationOnFolderRequestBodyOpField(val.op),
    ['path']: serializeUpdateClassificationOnFolderRequestBodyPathField(
      val.path
    ),
    ['value']: val.value,
  };
}
export function deserializeUpdateClassificationOnFolderRequestBody(
  val: any
): UpdateClassificationOnFolderRequestBody {
  const op: UpdateClassificationOnFolderRequestBodyOpField =
    deserializeUpdateClassificationOnFolderRequestBodyOpField(val.op);
  const path: UpdateClassificationOnFolderRequestBodyPathField =
    deserializeUpdateClassificationOnFolderRequestBodyPathField(val.path);
  const value: string = val.value;
  return {
    op: op,
    path: path,
    value: value,
  } satisfies UpdateClassificationOnFolderRequestBody;
}
export function serializeUpdateClassificationOnFolderRequestBodyInput(
  val: UpdateClassificationOnFolderRequestBodyInput
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateClassificationOnFolderRequestBodyOpField(val.op),
    ['path']:
      val.path == void 0
        ? void 0
        : serializeUpdateClassificationOnFolderRequestBodyPathField(val.path),
    ['value']: val.value,
  };
}
export function deserializeUpdateClassificationOnFolderRequestBodyInput(
  val: any
): UpdateClassificationOnFolderRequestBodyInput {
  const op: undefined | UpdateClassificationOnFolderRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateClassificationOnFolderRequestBodyOpField(val.op);
  const path: undefined | UpdateClassificationOnFolderRequestBodyPathField =
    val.path == void 0
      ? void 0
      : deserializeUpdateClassificationOnFolderRequestBodyPathField(val.path);
  const value: string = val.value;
  return {
    op: op,
    path: path,
    value: value,
  } satisfies UpdateClassificationOnFolderRequestBodyInput;
}
