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
export class GetClassificationOnFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetClassificationOnFolderHeaders, 'extraHeaders'>
      | Partial<Pick<GetClassificationOnFolderHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface AddClassificationToFolderRequestBody {
  readonly boxSecurityClassificationKey?: string;
}
export class AddClassificationToFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<AddClassificationToFolderHeaders, 'extraHeaders'>
      | Partial<Pick<AddClassificationToFolderHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateClassificationOnFolderRequestBodyOpField = 'replace';
export type UpdateClassificationOnFolderRequestBodyPathField =
  '/Box__Security__Classification__Key';
export interface UpdateClassificationOnFolderRequestBody {
  readonly op: UpdateClassificationOnFolderRequestBodyOpField;
  readonly path: UpdateClassificationOnFolderRequestBodyPathField;
  readonly value: string;
}
export class UpdateClassificationOnFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateClassificationOnFolderHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateClassificationOnFolderHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteClassificationFromFolderHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteClassificationFromFolderHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteClassificationFromFolderHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FolderClassificationsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          FolderClassificationsManager,
          | 'networkSession'
          | 'getClassificationOnFolder'
          | 'addClassificationToFolder'
          | 'updateClassificationOnFolder'
          | 'deleteClassificationFromFolder'
        >
      | Partial<Pick<FolderClassificationsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getClassificationOnFolder(
    folderId: string,
    headers: GetClassificationOnFolderHeaders = new GetClassificationOnFolderHeaders(
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
    requestBody: AddClassificationToFolderRequestBody = {} satisfies AddClassificationToFolderRequestBody,
    headers: AddClassificationToFolderHeaders = new AddClassificationToFolderHeaders(
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
    headers: UpdateClassificationOnFolderHeaders = new UpdateClassificationOnFolderHeaders(
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
    headers: DeleteClassificationFromFolderHeaders = new DeleteClassificationFromFolderHeaders(
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
export function serializeAddClassificationToFolderRequestBody(
  val: any
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
  val: any
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
  val: any
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
  val: any
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
