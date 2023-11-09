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
export class GetFileMetadataGlobalBoxSkillsCardsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileMetadataGlobalBoxSkillsCardsHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<GetFileMetadataGlobalBoxSkillsCardsHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg {
  readonly cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export class CreateFileMetadataGlobalBoxSkillsCardHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileMetadataGlobalBoxSkillsCardHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<CreateFileMetadataGlobalBoxSkillsCardHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField =
  'replace';
export interface UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArg {
  readonly op?: UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField;
  readonly path?: string;
  readonly value?: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard;
}
export class UpdateFileMetadataGlobalBoxSkillsCardHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateFileMetadataGlobalBoxSkillsCardHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<UpdateFileMetadataGlobalBoxSkillsCardHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileMetadataGlobalBoxSkillsCardHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileMetadataGlobalBoxSkillsCardHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<DeleteFileMetadataGlobalBoxSkillsCardHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export type UpdateSkillInvocationByIdRequestBodyArgStatusField =
  | 'invoked'
  | 'processing'
  | 'success'
  | 'transient_failure'
  | 'permanent_failure';
export interface UpdateSkillInvocationByIdRequestBodyArgMetadataField {
  readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export type UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField = 'file';
export interface UpdateSkillInvocationByIdRequestBodyArgFileField {
  readonly type?: UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField;
  readonly id?: string;
}
export type UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField =
  'file_version';
export interface UpdateSkillInvocationByIdRequestBodyArgFileVersionField {
  readonly type?: UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField;
  readonly id?: string;
}
export interface UpdateSkillInvocationByIdRequestBodyArgUsageField {
  readonly unit?: string;
  readonly value?: number;
}
export interface UpdateSkillInvocationByIdRequestBodyArg {
  readonly status: UpdateSkillInvocationByIdRequestBodyArgStatusField;
  readonly metadata: UpdateSkillInvocationByIdRequestBodyArgMetadataField;
  readonly file: UpdateSkillInvocationByIdRequestBodyArgFileField;
  readonly fileVersion?: UpdateSkillInvocationByIdRequestBodyArgFileVersionField;
  readonly usage?: UpdateSkillInvocationByIdRequestBodyArgUsageField;
}
export class UpdateSkillInvocationByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UpdateSkillInvocationByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<UpdateSkillInvocationByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class SkillsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      SkillsManager,
      | 'getFileMetadataGlobalBoxSkillsCards'
      | 'createFileMetadataGlobalBoxSkillsCard'
      | 'updateFileMetadataGlobalBoxSkillsCard'
      | 'deleteFileMetadataGlobalBoxSkillsCard'
      | 'updateSkillInvocationById'
    >
  ) {
    Object.assign(this, fields);
  }
  async getFileMetadataGlobalBoxSkillsCards(
    fileId: string,
    headers: GetFileMetadataGlobalBoxSkillsCardsHeadersArg = new GetFileMetadataGlobalBoxSkillsCardsHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SkillCardsMetadata> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
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
    requestBody: CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg,
    headers: CreateFileMetadataGlobalBoxSkillsCardHeadersArg = new CreateFileMetadataGlobalBoxSkillsCardHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SkillCardsMetadata> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '/metadata/global/boxSkillsCards'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(
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
    requestBody: readonly UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArg[],
    headers: UpdateFileMetadataGlobalBoxSkillsCardHeadersArg = new UpdateFileMetadataGlobalBoxSkillsCardHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<SkillCardsMetadata> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/files/',
        toString(fileId) as string,
        '/metadata/global/boxSkillsCards'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyArg
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
    headers: DeleteFileMetadataGlobalBoxSkillsCardHeadersArg = new DeleteFileMetadataGlobalBoxSkillsCardHeadersArg(
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
    requestBody: UpdateSkillInvocationByIdRequestBodyArg,
    headers: UpdateSkillInvocationByIdHeadersArg = new UpdateSkillInvocationByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://api.box.com/2.0/skill_invocations/',
        toString(skillId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateSkillInvocationByIdRequestBodyArg(requestBody),
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
export function serializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(
  val: CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg
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
export function deserializeCreateFileMetadataGlobalBoxSkillsCardRequestBodyArg(
  val: any
): CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg {
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
  } satisfies CreateFileMetadataGlobalBoxSkillsCardRequestBodyArg;
}
export function serializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField(
  val: UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField
): SerializedData {
  return val;
}
export function deserializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField(
  val: any
): UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField"';
  }
  if (val == 'replace') {
    return 'replace';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyArg(
  val: UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArg
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField(
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
export function deserializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyArg(
  val: any
): UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArg {
  const op:
    | undefined
    | UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateFileMetadataGlobalBoxSkillsCardRequestBodyArgOpField(
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
  } satisfies UpdateFileMetadataGlobalBoxSkillsCardRequestBodyArg;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgStatusField(
  val: UpdateSkillInvocationByIdRequestBodyArgStatusField
): SerializedData {
  return val;
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgStatusField(
  val: any
): UpdateSkillInvocationByIdRequestBodyArgStatusField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateSkillInvocationByIdRequestBodyArgStatusField"';
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
export function serializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(
  val: UpdateSkillInvocationByIdRequestBodyArgMetadataField
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
export function deserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(
  val: any
): UpdateSkillInvocationByIdRequestBodyArgMetadataField {
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
  } satisfies UpdateSkillInvocationByIdRequestBodyArgMetadataField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(
  val: UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField
): SerializedData {
  return val;
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(
  val: any
): UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField"';
  }
  if (val == 'file') {
    return 'file';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgFileField(
  val: UpdateSkillInvocationByIdRequestBodyArgFileField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(
            val.type
          ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgFileField(
  val: any
): UpdateSkillInvocationByIdRequestBodyArgFileField {
  const type:
    | undefined
    | UpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField =
    val.type == void 0
      ? void 0
      : deserializeUpdateSkillInvocationByIdRequestBodyArgFileFieldTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies UpdateSkillInvocationByIdRequestBodyArgFileField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(
  val: UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField
): SerializedData {
  return val;
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(
  val: any
): UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField {
  if (!sdIsString(val)) {
    throw 'Expecting a string for "UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField"';
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  throw ''.concat('Invalid value: ', val) as string;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(
  val: UpdateSkillInvocationByIdRequestBodyArgFileVersionField
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(
            val.type
          ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(
  val: any
): UpdateSkillInvocationByIdRequestBodyArgFileVersionField {
  const type:
    | undefined
    | UpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField =
    val.type == void 0
      ? void 0
      : deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionFieldTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies UpdateSkillInvocationByIdRequestBodyArgFileVersionField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArgUsageField(
  val: UpdateSkillInvocationByIdRequestBodyArgUsageField
): SerializedData {
  return {
    ['unit']: val.unit == void 0 ? void 0 : val.unit,
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArgUsageField(
  val: any
): UpdateSkillInvocationByIdRequestBodyArgUsageField {
  const unit: undefined | string = val.unit == void 0 ? void 0 : val.unit;
  const value: undefined | number = val.value == void 0 ? void 0 : val.value;
  return {
    unit: unit,
    value: value,
  } satisfies UpdateSkillInvocationByIdRequestBodyArgUsageField;
}
export function serializeUpdateSkillInvocationByIdRequestBodyArg(
  val: UpdateSkillInvocationByIdRequestBodyArg
): SerializedData {
  return {
    ['status']: serializeUpdateSkillInvocationByIdRequestBodyArgStatusField(
      val.status
    ),
    ['metadata']: serializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(
      val.metadata
    ),
    ['file']: serializeUpdateSkillInvocationByIdRequestBodyArgFileField(
      val.file
    ),
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(
            val.fileVersion
          ),
    ['usage']:
      val.usage == void 0
        ? void 0
        : serializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val.usage),
  };
}
export function deserializeUpdateSkillInvocationByIdRequestBodyArg(
  val: any
): UpdateSkillInvocationByIdRequestBodyArg {
  const status: UpdateSkillInvocationByIdRequestBodyArgStatusField =
    deserializeUpdateSkillInvocationByIdRequestBodyArgStatusField(val.status);
  const metadata: UpdateSkillInvocationByIdRequestBodyArgMetadataField =
    deserializeUpdateSkillInvocationByIdRequestBodyArgMetadataField(
      val.metadata
    );
  const file: UpdateSkillInvocationByIdRequestBodyArgFileField =
    deserializeUpdateSkillInvocationByIdRequestBodyArgFileField(val.file);
  const fileVersion:
    | undefined
    | UpdateSkillInvocationByIdRequestBodyArgFileVersionField =
    val.file_version == void 0
      ? void 0
      : deserializeUpdateSkillInvocationByIdRequestBodyArgFileVersionField(
          val.file_version
        );
  const usage: undefined | UpdateSkillInvocationByIdRequestBodyArgUsageField =
    val.usage == void 0
      ? void 0
      : deserializeUpdateSkillInvocationByIdRequestBodyArgUsageField(val.usage);
  return {
    status: status,
    metadata: metadata,
    file: file,
    fileVersion: fileVersion,
    usage: usage,
  } satisfies UpdateSkillInvocationByIdRequestBodyArg;
}
