import { serializeClassification } from '../schemas.generated.js';
import { deserializeClassification } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { Classification } from '../schemas.generated.js';
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
export class GetClassificationOnFolderHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetClassificationOnFolderHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetClassificationOnFolderHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface AddClassificationToFolderRequestBodyArg {
  readonly boxSecurityClassificationKey?: string;
}
export class AddClassificationToFolderHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<AddClassificationToFolderHeadersArg, 'extraHeaders'>
      | Partial<Pick<AddClassificationToFolderHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateClassificationOnFolderRequestBodyArgOpField = 'replace';
export type UpdateClassificationOnFolderRequestBodyArgPathField =
  '/Box__Security__Classification__Key';
export interface UpdateClassificationOnFolderRequestBodyArg {
  readonly op: UpdateClassificationOnFolderRequestBodyArgOpField;
  readonly path: UpdateClassificationOnFolderRequestBodyArgPathField;
  readonly value: string;
}
export class UpdateClassificationOnFolderHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateClassificationOnFolderHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateClassificationOnFolderHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteClassificationFromFolderHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteClassificationFromFolderHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteClassificationFromFolderHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FolderClassificationsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      FolderClassificationsManager,
      | 'getClassificationOnFolder'
      | 'addClassificationToFolder'
      | 'updateClassificationOnFolder'
      | 'deleteClassificationFromFolder'
    >
  ) {
    Object.assign(this, fields);
  }
  async getClassificationOnFolder(
    folderId: string,
    headers: GetClassificationOnFolderHeadersArg = new GetClassificationOnFolderHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
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
    requestBody: AddClassificationToFolderRequestBodyArg = {} satisfies AddClassificationToFolderRequestBodyArg,
    headers: AddClassificationToFolderHeadersArg = new AddClassificationToFolderHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeAddClassificationToFolderRequestBodyArg(requestBody),
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
    requestBody: readonly UpdateClassificationOnFolderRequestBodyArg[],
    headers: UpdateClassificationOnFolderHeadersArg = new UpdateClassificationOnFolderHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
        toString(folderId) as string,
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateClassificationOnFolderRequestBodyArg
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
    headers: DeleteClassificationFromFolderHeadersArg = new DeleteClassificationFromFolderHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/folders/',
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
export function serializeAddClassificationToFolderRequestBodyArg(
  val: AddClassificationToFolderRequestBodyArg
): SerializedData {
  return {
    ['Box__Security__Classification__Key']:
      val.boxSecurityClassificationKey == void 0
        ? void 0
        : val.boxSecurityClassificationKey,
  };
}
export function deserializeAddClassificationToFolderRequestBodyArg(
  val: any
): AddClassificationToFolderRequestBodyArg {
  const boxSecurityClassificationKey: undefined | string =
    val.Box__Security__Classification__Key == void 0
      ? void 0
      : val.Box__Security__Classification__Key;
  return {
    boxSecurityClassificationKey: boxSecurityClassificationKey,
  } satisfies AddClassificationToFolderRequestBodyArg;
}
export function serializeUpdateClassificationOnFolderRequestBodyArgOpField(
  val: UpdateClassificationOnFolderRequestBodyArgOpField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationOnFolderRequestBodyArgOpField(
  val: any
): UpdateClassificationOnFolderRequestBodyArgOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateClassificationOnFolderRequestBodyArgOpField"';
  }
  if (val == 'replace') {
    return 'replace';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateClassificationOnFolderRequestBodyArgPathField(
  val: UpdateClassificationOnFolderRequestBodyArgPathField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationOnFolderRequestBodyArgPathField(
  val: any
): UpdateClassificationOnFolderRequestBodyArgPathField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateClassificationOnFolderRequestBodyArgPathField"';
  }
  if (val == '/Box__Security__Classification__Key') {
    return '/Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateClassificationOnFolderRequestBodyArg(
  val: UpdateClassificationOnFolderRequestBodyArg
): SerializedData {
  return {
    ['op']: serializeUpdateClassificationOnFolderRequestBodyArgOpField(val.op),
    ['path']: serializeUpdateClassificationOnFolderRequestBodyArgPathField(
      val.path
    ),
    ['value']: val.value,
  };
}
export function deserializeUpdateClassificationOnFolderRequestBodyArg(
  val: any
): UpdateClassificationOnFolderRequestBodyArg {
  const op: UpdateClassificationOnFolderRequestBodyArgOpField =
    deserializeUpdateClassificationOnFolderRequestBodyArgOpField(val.op);
  const path: UpdateClassificationOnFolderRequestBodyArgPathField =
    deserializeUpdateClassificationOnFolderRequestBodyArgPathField(val.path);
  const value: string = val.value;
  return {
    op: op,
    path: path,
    value: value,
  } satisfies UpdateClassificationOnFolderRequestBodyArg;
}
