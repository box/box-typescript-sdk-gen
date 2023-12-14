import { serializeSkillCardsMetadata } from '../schemas.generated.js';
import { deserializeSkillCardsMetadata } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas.generated.js';
import { deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas.generated.js';
import { SkillCardsMetadata } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas.generated.js';
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
export class GetFileMetadataGlobalBoxSkillsCardsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileMetadataGlobalBoxSkillsCardsHeaders, 'extraHeaders'>
      | Partial<
          Pick<GetFileMetadataGlobalBoxSkillsCardsHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFileMetadataGlobalBoxSkillsCardRequestBody {
  readonly cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export class CreateFileMetadataGlobalBoxSkillsCardHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileMetadataGlobalBoxSkillsCardHeaders, 'extraHeaders'>
      | Partial<
          Pick<CreateFileMetadataGlobalBoxSkillsCardHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField = 'replace';
export interface UpdateFileMetadataGlobalBoxSkillsCardRequestBody {
  readonly op?: UpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField;
  readonly path?: string;
  readonly value?: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard;
}
export class UpdateFileMetadataGlobalBoxSkillsCardHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileMetadataGlobalBoxSkillsCardHeaders, 'extraHeaders'>
      | Partial<
          Pick<UpdateFileMetadataGlobalBoxSkillsCardHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileMetadataGlobalBoxSkillsCardHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileMetadataGlobalBoxSkillsCardHeaders, 'extraHeaders'>
      | Partial<
          Pick<DeleteFileMetadataGlobalBoxSkillsCardHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateSkillInvocationByIdRequestBodyStatusField =
  | 'invoked'
  | 'processing'
  | 'success'
  | 'transient_failure'
  | 'permanent_failure';
export interface UpdateSkillInvocationByIdRequestBodyMetadataField {
  readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export type UpdateSkillInvocationByIdRequestBodyFileTypeField = 'file';
export interface UpdateSkillInvocationByIdRequestBodyFileField {
  readonly type?: UpdateSkillInvocationByIdRequestBodyFileTypeField;
  readonly id?: string;
}
export type UpdateSkillInvocationByIdRequestBodyFileVersionTypeField =
  'file_version';
export interface UpdateSkillInvocationByIdRequestBodyFileVersionField {
  readonly type?: UpdateSkillInvocationByIdRequestBodyFileVersionTypeField;
  readonly id?: string;
}
export interface UpdateSkillInvocationByIdRequestBodyUsageField {
  readonly unit?: string;
  readonly value?: number;
}
export interface UpdateSkillInvocationByIdRequestBody {
  readonly status: UpdateSkillInvocationByIdRequestBodyStatusField;
  readonly metadata: UpdateSkillInvocationByIdRequestBodyMetadataField;
  readonly file: UpdateSkillInvocationByIdRequestBodyFileField;
  readonly fileVersion?: UpdateSkillInvocationByIdRequestBodyFileVersionField;
  readonly usage?: UpdateSkillInvocationByIdRequestBodyUsageField;
}
export class UpdateSkillInvocationByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateSkillInvocationByIdHeaders, 'extraHeaders'>
      | Partial<Pick<UpdateSkillInvocationByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SkillsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          SkillsManager,
          | 'networkSession'
          | 'getFileMetadataGlobalBoxSkillsCards'
          | 'createFileMetadataGlobalBoxSkillsCard'
          | 'updateFileMetadataGlobalBoxSkillsCard'
          | 'deleteFileMetadataGlobalBoxSkillsCard'
          | 'updateSkillInvocationById'
        >
      | Partial<Pick<SkillsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async getFileMetadataGlobalBoxSkillsCards(
    fileId: string,
    headers: GetFileMetadataGlobalBoxSkillsCardsHeaders = new GetFileMetadataGlobalBoxSkillsCardsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SkillCardsMetadata> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/metadata/global/boxSkillsCards'
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
    return deserializeSkillCardsMetadata(response.data);
  }
  async createFileMetadataGlobalBoxSkillsCard(
    fileId: string,
    requestBody: CreateFileMetadataGlobalBoxSkillsCardRequestBody,
    headers: CreateFileMetadataGlobalBoxSkillsCardHeaders = new CreateFileMetadataGlobalBoxSkillsCardHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SkillCardsMetadata> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/metadata/global/boxSkillsCards'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileMetadataGlobalBoxSkillsCardRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSkillCardsMetadata(response.data);
  }
  async updateFileMetadataGlobalBoxSkillsCard(
    fileId: string,
    requestBody: readonly UpdateFileMetadataGlobalBoxSkillsCardRequestBody[],
    headers: UpdateFileMetadataGlobalBoxSkillsCardHeaders = new UpdateFileMetadataGlobalBoxSkillsCardHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SkillCardsMetadata> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.baseUrl,
        '/files/',
        toString(fileId) as string,
        '/metadata/global/boxSkillsCards'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateFileMetadataGlobalBoxSkillsCardRequestBody
        ) as readonly any[],
        contentType: 'application/json-patch+json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSkillCardsMetadata(response.data);
  }
  async deleteFileMetadataGlobalBoxSkillsCard(
    fileId: string,
    headers: DeleteFileMetadataGlobalBoxSkillsCardHeaders = new DeleteFileMetadataGlobalBoxSkillsCardHeaders(
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
        '/metadata/global/boxSkillsCards'
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
  async updateSkillInvocationById(
    skillId: string,
    requestBody: UpdateSkillInvocationByIdRequestBody,
    headers: UpdateSkillInvocationByIdHeaders = new UpdateSkillInvocationByIdHeaders(
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
        '/skill_invocations/',
        toString(skillId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateSkillInvocationByIdRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: void 0,
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
}
export function serializeCreateFileMetadataGlobalBoxSkillsCardRequestBody(
  val: CreateFileMetadataGlobalBoxSkillsCardRequestBody
): SerializedData {
  return {
    ['cards']: val.cards.map(function (
      item: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard
    ): any {
      return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
        item
      );
    }) as readonly any[],
  };
}
export function deserializeCreateFileMetadataGlobalBoxSkillsCardRequestBody(
  val: any
): CreateFileMetadataGlobalBoxSkillsCardRequestBody {
  const cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] =
    sdIsList(val.cards)
      ? (val.cards.map(function (itm: SerializedData): any {
          return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
            itm
          );
        }) as readonly any[])
      : [];
  return {
    cards: cards,
  } satisfies CreateFileMetadataGlobalBoxSkillsCardRequestBody;
}
export function serializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField(
  val: UpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField
): SerializedData {
  return val;
}
export function deserializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField(
  val: any
): UpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField"';
  }
  if (val == 'replace') {
    return 'replace';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFileMetadataGlobalBoxSkillsCardRequestBody(
  val: UpdateFileMetadataGlobalBoxSkillsCardRequestBody
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField(
            val.op
          ),
    ['path']: val.path == void 0 ? void 0 : val.path,
    ['value']:
      val.value == void 0
        ? void 0
        : serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
            val.value
          ),
  };
}
export function deserializeUpdateFileMetadataGlobalBoxSkillsCardRequestBody(
  val: any
): UpdateFileMetadataGlobalBoxSkillsCardRequestBody {
  const op:
    | undefined
    | UpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyOpField(
          val.op
        );
  const path: undefined | string = val.path == void 0 ? void 0 : val.path;
  const value:
    | undefined
    | KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard =
    val.value == void 0
      ? void 0
      : deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
          val.value
        );
  return {
    op: op,
    path: path,
    value: value,
  } satisfies UpdateFileMetadataGlobalBoxSkillsCardRequestBody;
}
export function serializeUpdateSkillInvocationByIdRequestBodyStatusField(
  val: UpdateSkillInvocationByIdRequestBodyStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateSkillInvocationByIdRequestBodyStatusField(
  val: any
): UpdateSkillInvocationByIdRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateSkillInvocationByIdRequestBodyStatusField"';
  }
  if (val == 'invoked') {
    return 'invoked';
  }
  if (val == 'processing') {
    return 'processing';
  }
  if (val == 'success') {
    return 'success';
  }
  if (val == 'transient_failure') {
    return 'transient_failure';
  }
  if (val == 'permanent_failure') {
    return 'permanent_failure';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateSkillInvocationByIdRequestBodyMetadataField(
  val: UpdateSkillInvocationByIdRequestBodyMetadataField
): SerializedData {
  return {
    ['cards']:
      val.cards == void 0
        ? void 0
        : (val.cards.map(function (
            item: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard
          ): any {
            return serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
              item
            );
          }) as readonly any[]),
  };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyMetadataField(
  val: any
): UpdateSkillInvocationByIdRequestBodyMetadataField {
  const cards:
    | undefined
    | readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] =
    val.cards == void 0
      ? void 0
      : sdIsList(val.cards)
      ? (val.cards.map(function (itm: SerializedData): any {
          return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
            itm
          );
        }) as readonly any[])
      : [];
  return {
    cards: cards,
  } satisfies UpdateSkillInvocationByIdRequestBodyMetadataField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyFileTypeField(
  val: UpdateSkillInvocationByIdRequestBodyFileTypeField
): SerializedData {
  return val;
}
export function deserializeUpdateSkillInvocationByIdRequestBodyFileTypeField(
  val: any
): UpdateSkillInvocationByIdRequestBodyFileTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateSkillInvocationByIdRequestBodyFileTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateSkillInvocationByIdRequestBodyFileField(
  val: UpdateSkillInvocationByIdRequestBodyFileField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUpdateSkillInvocationByIdRequestBodyFileTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyFileField(
  val: any
): UpdateSkillInvocationByIdRequestBodyFileField {
  const type: undefined | UpdateSkillInvocationByIdRequestBodyFileTypeField =
    val.type == void 0
      ? void 0
      : deserializeUpdateSkillInvocationByIdRequestBodyFileTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies UpdateSkillInvocationByIdRequestBodyFileField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyFileVersionTypeField(
  val: UpdateSkillInvocationByIdRequestBodyFileVersionTypeField
): SerializedData {
  return val;
}
export function deserializeUpdateSkillInvocationByIdRequestBodyFileVersionTypeField(
  val: any
): UpdateSkillInvocationByIdRequestBodyFileVersionTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateSkillInvocationByIdRequestBodyFileVersionTypeField"';
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateSkillInvocationByIdRequestBodyFileVersionField(
  val: UpdateSkillInvocationByIdRequestBodyFileVersionField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUpdateSkillInvocationByIdRequestBodyFileVersionTypeField(
            val.type
          ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyFileVersionField(
  val: any
): UpdateSkillInvocationByIdRequestBodyFileVersionField {
  const type:
    | undefined
    | UpdateSkillInvocationByIdRequestBodyFileVersionTypeField =
    val.type == void 0
      ? void 0
      : deserializeUpdateSkillInvocationByIdRequestBodyFileVersionTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies UpdateSkillInvocationByIdRequestBodyFileVersionField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyUsageField(
  val: UpdateSkillInvocationByIdRequestBodyUsageField
): SerializedData {
  return {
    ['unit']: val.unit == void 0 ? void 0 : val.unit,
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyUsageField(
  val: any
): UpdateSkillInvocationByIdRequestBodyUsageField {
  const unit: undefined | string = val.unit == void 0 ? void 0 : val.unit;
  const value: undefined | number = val.value == void 0 ? void 0 : val.value;
  return {
    unit: unit,
    value: value,
  } satisfies UpdateSkillInvocationByIdRequestBodyUsageField;
}
export function serializeUpdateSkillInvocationByIdRequestBody(
  val: UpdateSkillInvocationByIdRequestBody
): SerializedData {
  return {
    ['status']: serializeUpdateSkillInvocationByIdRequestBodyStatusField(
      val.status
    ),
    ['metadata']: serializeUpdateSkillInvocationByIdRequestBodyMetadataField(
      val.metadata
    ),
    ['file']: serializeUpdateSkillInvocationByIdRequestBodyFileField(val.file),
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeUpdateSkillInvocationByIdRequestBodyFileVersionField(
            val.fileVersion
          ),
    ['usage']:
      val.usage == void 0
        ? void 0
        : serializeUpdateSkillInvocationByIdRequestBodyUsageField(val.usage),
  };
}
export function deserializeUpdateSkillInvocationByIdRequestBody(
  val: any
): UpdateSkillInvocationByIdRequestBody {
  const status: UpdateSkillInvocationByIdRequestBodyStatusField =
    deserializeUpdateSkillInvocationByIdRequestBodyStatusField(val.status);
  const metadata: UpdateSkillInvocationByIdRequestBodyMetadataField =
    deserializeUpdateSkillInvocationByIdRequestBodyMetadataField(val.metadata);
  const file: UpdateSkillInvocationByIdRequestBodyFileField =
    deserializeUpdateSkillInvocationByIdRequestBodyFileField(val.file);
  const fileVersion:
    | undefined
    | UpdateSkillInvocationByIdRequestBodyFileVersionField =
    val.file_version == void 0
      ? void 0
      : deserializeUpdateSkillInvocationByIdRequestBodyFileVersionField(
          val.file_version
        );
  const usage: undefined | UpdateSkillInvocationByIdRequestBodyUsageField =
    val.usage == void 0
      ? void 0
      : deserializeUpdateSkillInvocationByIdRequestBodyUsageField(val.usage);
  return {
    status: status,
    metadata: metadata,
    file: file,
    fileVersion: fileVersion,
    usage: usage,
  } satisfies UpdateSkillInvocationByIdRequestBody;
}
