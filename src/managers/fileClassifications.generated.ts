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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { serializeJson } from '../json.js';
import { isJson } from '../json.js';
export class GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
  readonly boxSecurityClassificationKey?: string;
}
export class CreateFileMetadataEnterpriseSecurityClassificationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: CreateFileMetadataEnterpriseSecurityClassificationHeadersArg
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField =
  'replace';
export type UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField =
  '/Box__Security__Classification__Key';
export interface UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
  readonly op?: UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField;
  readonly path?: UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField;
  readonly value?: string;
}
export class UpdateFileMetadataEnterpriseSecurityClassificationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: UpdateFileMetadataEnterpriseSecurityClassificationHeadersArg
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg
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
      | 'getFileMetadataEnterpriseSecurityClassification6VmVochwUWo'
      | 'createFileMetadataEnterpriseSecurityClassification'
      | 'updateFileMetadataEnterpriseSecurityClassification'
      | 'deleteFileMetadataEnterpriseSecurityClassification'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFileMetadataEnterpriseSecurityClassification6VmVochwUWo(
    fileId: string,
    headers: GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg = new GetFileMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg(
      {}
    )
  ): Promise<Classification> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        fileId,
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'GET',
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassification(deserializeJson(response.text));
  }
  async createFileMetadataEnterpriseSecurityClassification(
    fileId: string,
    requestBody: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg = {} satisfies CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg,
    headers: CreateFileMetadataEnterpriseSecurityClassificationHeadersArg = new CreateFileMetadataEnterpriseSecurityClassificationHeadersArg(
      {}
    )
  ): Promise<Classification> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        fileId,
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(
            requestBody
          )
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassification(deserializeJson(response.text));
  }
  async updateFileMetadataEnterpriseSecurityClassification(
    fileId: string,
    requestBody: readonly UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArg[],
    headers: UpdateFileMetadataEnterpriseSecurityClassificationHeadersArg = new UpdateFileMetadataEnterpriseSecurityClassificationHeadersArg(
      {}
    )
  ): Promise<Classification> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        fileId,
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        body: serializeJson(
          requestBody.map(
            serializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArg
          ) as readonly any[]
        ),
        contentType: 'application/json-patch+json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassification(deserializeJson(response.text));
  }
  async deleteFileMetadataEnterpriseSecurityClassification(
    fileId: string,
    headers: DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg = new DeleteFileMetadataEnterpriseSecurityClassificationHeadersArg(
      {}
    )
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        fileId,
        '/metadata/enterprise/securityClassification-6VMVochwUWo'
      ) as string,
      {
        method: 'DELETE',
        headers: headersMap,
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(
  val: CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg
): Json {
  return {
    ['Box__Security__Classification__Key']:
      val.boxSecurityClassificationKey == void 0
        ? void 0
        : val.boxSecurityClassificationKey,
  };
}
export function deserializeCreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(
  val: any
): CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
  const boxSecurityClassificationKey: undefined | string =
    val.Box__Security__Classification__Key == void 0
      ? void 0
      : val.Box__Security__Classification__Key;
  return {
    boxSecurityClassificationKey: boxSecurityClassificationKey,
  } satisfies CreateFileMetadataEnterpriseSecurityClassificationRequestBodyArg;
}
export function serializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField(
  val: UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField
): Json {
  return val;
}
export function deserializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField(
  val: any
): UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField"';
  }
  if (val == 'replace') {
    return 'replace';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField(
  val: UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField
): Json {
  return val;
}
export function deserializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField(
  val: any
): UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField"';
  }
  if (val == '/Box__Security__Classification__Key') {
    return '/Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(
  val: UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArg
): Json {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField(
            val.op
          ),
    ['path']:
      val.path == void 0
        ? void 0
        : serializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField(
            val.path
          ),
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArg(
  val: any
): UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArg {
  const op:
    | undefined
    | UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgOpField(
          val.op
        );
  const path:
    | undefined
    | UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField =
    val.path == void 0
      ? void 0
      : deserializeUpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArgPathField(
          val.path
        );
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  return {
    op: op,
    path: path,
    value: value,
  } satisfies UpdateFileMetadataEnterpriseSecurityClassificationRequestBodyArg;
}
