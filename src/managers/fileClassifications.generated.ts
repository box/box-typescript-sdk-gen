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
export class GetClassificationOnFileHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetClassificationOnFileHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetClassificationOnFileHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface AddClassificationToFileRequestBodyArg {
  readonly boxSecurityClassificationKey?: string;
}
export class AddClassificationToFileHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<AddClassificationToFileHeadersArg, 'extraHeaders'>
      | Partial<Pick<AddClassificationToFileHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateClassificationOnFileRequestBodyArgOpField = 'replace';
export type UpdateClassificationOnFileRequestBodyArgPathField =
  '/Box__Security__Classification__Key';
export interface UpdateClassificationOnFileRequestBodyArg {
  readonly op: UpdateClassificationOnFileRequestBodyArgOpField;
  readonly path: UpdateClassificationOnFileRequestBodyArgPathField;
  readonly value: string;
}
export class UpdateClassificationOnFileHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateClassificationOnFileHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateClassificationOnFileHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteClassificationFromFileHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteClassificationFromFileHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteClassificationFromFileHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class FileClassificationsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      FileClassificationsManager,
      | 'getClassificationOnFile'
      | 'addClassificationToFile'
      | 'updateClassificationOnFile'
      | 'deleteClassificationFromFile'
    >
  ) {
    Object.assign(this, fields);
  }
  async getClassificationOnFile(
    fileId: string,
    headers: GetClassificationOnFileHeadersArg = new GetClassificationOnFileHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
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
    requestBody: AddClassificationToFileRequestBodyArg = {} satisfies AddClassificationToFileRequestBodyArg,
    headers: AddClassificationToFileHeadersArg = new AddClassificationToFileHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeAddClassificationToFileRequestBodyArg(requestBody),
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
    requestBody: readonly UpdateClassificationOnFileRequestBodyArg[],
    headers: UpdateClassificationOnFileHeadersArg = new UpdateClassificationOnFileHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<Classification> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateClassificationOnFileRequestBodyArg
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
    headers: DeleteClassificationFromFileHeadersArg = new DeleteClassificationFromFileHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
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
export function serializeAddClassificationToFileRequestBodyArg(
  val: AddClassificationToFileRequestBodyArg
): SerializedData {
  return {
    ['Box__Security__Classification__Key']:
      val.boxSecurityClassificationKey == void 0
        ? void 0
        : val.boxSecurityClassificationKey,
  };
}
export function deserializeAddClassificationToFileRequestBodyArg(
  val: any
): AddClassificationToFileRequestBodyArg {
  const boxSecurityClassificationKey: undefined | string =
    val.Box__Security__Classification__Key == void 0
      ? void 0
      : val.Box__Security__Classification__Key;
  return {
    boxSecurityClassificationKey: boxSecurityClassificationKey,
  } satisfies AddClassificationToFileRequestBodyArg;
}
export function serializeUpdateClassificationOnFileRequestBodyArgOpField(
  val: UpdateClassificationOnFileRequestBodyArgOpField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationOnFileRequestBodyArgOpField(
  val: any
): UpdateClassificationOnFileRequestBodyArgOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateClassificationOnFileRequestBodyArgOpField"';
  }
  if (val == 'replace') {
    return 'replace';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateClassificationOnFileRequestBodyArgPathField(
  val: UpdateClassificationOnFileRequestBodyArgPathField
): SerializedData {
  return val;
}
export function deserializeUpdateClassificationOnFileRequestBodyArgPathField(
  val: any
): UpdateClassificationOnFileRequestBodyArgPathField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateClassificationOnFileRequestBodyArgPathField"';
  }
  if (val == '/Box__Security__Classification__Key') {
    return '/Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateClassificationOnFileRequestBodyArg(
  val: UpdateClassificationOnFileRequestBodyArg
): SerializedData {
  return {
    ['op']: serializeUpdateClassificationOnFileRequestBodyArgOpField(val.op),
    ['path']: serializeUpdateClassificationOnFileRequestBodyArgPathField(
      val.path
    ),
    ['value']: val.value,
  };
}
export function deserializeUpdateClassificationOnFileRequestBodyArg(
  val: any
): UpdateClassificationOnFileRequestBodyArg {
  const op: UpdateClassificationOnFileRequestBodyArgOpField =
    deserializeUpdateClassificationOnFileRequestBodyArgOpField(val.op);
  const path: UpdateClassificationOnFileRequestBodyArgPathField =
    deserializeUpdateClassificationOnFileRequestBodyArgPathField(val.path);
  const value: string = val.value;
  return {
    op: op,
    path: path,
    value: value,
  } satisfies UpdateClassificationOnFileRequestBodyArg;
}
