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
export class GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
  readonly boxSecurityClassificationKey?: string;
}
export class CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField =
  'replace';
export type UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField =
  '/Box__Security__Classification__Key';
export interface UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
  readonly op?: UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField;
  readonly path?: UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField;
  readonly value?: string;
}
export class UpdateFolderMetadataEnterpriseSecurityClassificationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          UpdateFolderMetadataEnterpriseSecurityClassificationHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            UpdateFolderMetadataEnterpriseSecurityClassificationHeadersArg,
            'extraHeaders'
          >
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<
          DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg,
          'extraHeaders'
        >
      | Partial<
          Pick<
            DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg,
            'extraHeaders'
          >
        >
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
      | 'getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo'
      | 'createFolderMetadataEnterpriseSecurityClassification'
      | 'updateFolderMetadataEnterpriseSecurityClassification'
      | 'deleteFolderMetadataEnterpriseSecurityClassification'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFolderMetadataEnterpriseSecurityClassification6VmVochwUWo(
    folderId: string,
    headers: GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg = new GetFolderMetadataEnterpriseSecurityClassification6VmVochwUWoHeadersArg(
      {}
    )
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeClassification(deserializeJson(response.text));
  }
  async createFolderMetadataEnterpriseSecurityClassification(
    folderId: string,
    requestBody: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg = {} satisfies CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg,
    headers: CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg = new CreateFolderMetadataEnterpriseSecurityClassificationHeadersArg(
      {}
    )
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
        body: serializeJson(
          serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(
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
  async updateFolderMetadataEnterpriseSecurityClassification(
    folderId: string,
    requestBody: readonly UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg[],
    headers: UpdateFolderMetadataEnterpriseSecurityClassificationHeadersArg = new UpdateFolderMetadataEnterpriseSecurityClassificationHeadersArg(
      {}
    )
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
        body: serializeJson(
          requestBody?.map(
            serializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg
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
  async deleteFolderMetadataEnterpriseSecurityClassification(
    folderId: string,
    headers: DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg = new DeleteFolderMetadataEnterpriseSecurityClassificationHeadersArg(
      {}
    )
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(
  val: CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg
): Json {
  return {
    ['Box__Security__Classification__Key']:
      val.boxSecurityClassificationKey == void 0
        ? void 0
        : val.boxSecurityClassificationKey,
  };
}
export function deserializeCreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(
  val: any
): CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
  const boxSecurityClassificationKey: undefined | string =
    val.Box__Security__Classification__Key == void 0
      ? void 0
      : val.Box__Security__Classification__Key;
  return {
    boxSecurityClassificationKey: boxSecurityClassificationKey,
  } satisfies CreateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg;
}
export function serializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField(
  val: UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField
): Json {
  return val;
}
export function deserializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField(
  val: any
): UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField"';
  }
  if (val == 'replace') {
    return 'replace';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField(
  val: UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField
): Json {
  return val;
}
export function deserializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField(
  val: any
): UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField {
  if (!isJson(val, 'string')) {
    throw 'Expecting a string for "UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField"';
  }
  if (val == '/Box__Security__Classification__Key') {
    return '/Box__Security__Classification__Key';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(
  val: UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg
): Json {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField(
            val.op
          ),
    ['path']:
      val.path == void 0
        ? void 0
        : serializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField(
            val.path
          ),
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg(
  val: any
): UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg {
  const op:
    | undefined
    | UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgOpField(
          val.op
        );
  const path:
    | undefined
    | UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField =
    val.path == void 0
      ? void 0
      : deserializeUpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArgPathField(
          val.path
        );
  const value: undefined | string = val.value == void 0 ? void 0 : val.value;
  return {
    op: op,
    path: path,
    value: value,
  } satisfies UpdateFolderMetadataEnterpriseSecurityClassificationRequestBodyArg;
}
