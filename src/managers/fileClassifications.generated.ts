import { serializeClassification } from '../schemas.generated.js';
import { deserializeClassification } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Classification } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { Authentication } from '../networking/auth.js';
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
export type UpdateClassificationOnFileRequestBodyOpField = 'replace';
export type UpdateClassificationOnFileRequestBodyPathField =
  '/Box__Security__Classification__Key';
export interface UpdateClassificationOnFileRequestBody {
  readonly op: UpdateClassificationOnFileRequestBodyOpField;
  readonly path: UpdateClassificationOnFileRequestBodyPathField;
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
    headers: GetClassificationOnFileHeaders = new GetClassificationOnFileHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
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
    headers: AddClassificationToFileHeaders = new AddClassificationToFileHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
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
    headers: UpdateClassificationOnFileHeaders = new UpdateClassificationOnFileHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
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
    headers: DeleteClassificationFromFileHeaders = new DeleteClassificationFromFileHeaders(
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
