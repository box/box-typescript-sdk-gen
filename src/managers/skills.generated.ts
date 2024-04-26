import { serializeSkillCardsMetadata } from '../schemas.generated.js';
import { deserializeSkillCardsMetadata } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas.generated.js';
import { deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas.generated.js';
import { SkillCardsMetadata } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard } from '../schemas.generated.js';
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
export class GetBoxSkillCardsOnFileOptionals {
  readonly headers: GetBoxSkillCardsOnFileHeaders =
    new GetBoxSkillCardsOnFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      GetBoxSkillCardsOnFileOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<GetBoxSkillCardsOnFileOptionals, 'headers' | 'cancellationToken'>
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
export interface GetBoxSkillCardsOnFileOptionalsInput {
  readonly headers?: GetBoxSkillCardsOnFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class CreateBoxSkillCardsOnFileOptionals {
  readonly headers: CreateBoxSkillCardsOnFileHeaders =
    new CreateBoxSkillCardsOnFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      CreateBoxSkillCardsOnFileOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          CreateBoxSkillCardsOnFileOptionals,
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
export interface CreateBoxSkillCardsOnFileOptionalsInput {
  readonly headers?: CreateBoxSkillCardsOnFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateBoxSkillCardsOnFileOptionals {
  readonly headers: UpdateBoxSkillCardsOnFileHeaders =
    new UpdateBoxSkillCardsOnFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateBoxSkillCardsOnFileOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateBoxSkillCardsOnFileOptionals,
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
export interface UpdateBoxSkillCardsOnFileOptionalsInput {
  readonly headers?: UpdateBoxSkillCardsOnFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class DeleteBoxSkillCardsFromFileOptionals {
  readonly headers: DeleteBoxSkillCardsFromFileHeaders =
    new DeleteBoxSkillCardsFromFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      DeleteBoxSkillCardsFromFileOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          DeleteBoxSkillCardsFromFileOptionals,
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
export interface DeleteBoxSkillCardsFromFileOptionalsInput {
  readonly headers?: DeleteBoxSkillCardsFromFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class UpdateAllSkillCardsOnFileOptionals {
  readonly headers: UpdateAllSkillCardsOnFileHeaders =
    new UpdateAllSkillCardsOnFileHeaders({});
  readonly cancellationToken?: CancellationToken = void 0;
  constructor(
    fields: Omit<
      UpdateAllSkillCardsOnFileOptionals,
      'headers' | 'cancellationToken'
    > &
      Partial<
        Pick<
          UpdateAllSkillCardsOnFileOptionals,
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
export interface UpdateAllSkillCardsOnFileOptionalsInput {
  readonly headers?: UpdateAllSkillCardsOnFileHeaders;
  readonly cancellationToken?: undefined | CancellationToken;
}
export class GetBoxSkillCardsOnFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<GetBoxSkillCardsOnFileHeaders, 'extraHeaders'> &
      Partial<Pick<GetBoxSkillCardsOnFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface GetBoxSkillCardsOnFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export interface CreateBoxSkillCardsOnFileRequestBody {
  readonly cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export class CreateBoxSkillCardsOnFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<CreateBoxSkillCardsOnFileHeaders, 'extraHeaders'> &
      Partial<Pick<CreateBoxSkillCardsOnFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface CreateBoxSkillCardsOnFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateBoxSkillCardsOnFileRequestBodyOpField = 'replace';
export interface UpdateBoxSkillCardsOnFileRequestBody {
  readonly op?: UpdateBoxSkillCardsOnFileRequestBodyOpField;
  readonly path?: string;
  readonly value?: KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard;
}
export class UpdateBoxSkillCardsOnFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateBoxSkillCardsOnFileHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateBoxSkillCardsOnFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateBoxSkillCardsOnFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class DeleteBoxSkillCardsFromFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<DeleteBoxSkillCardsFromFileHeaders, 'extraHeaders'> &
      Partial<Pick<DeleteBoxSkillCardsFromFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface DeleteBoxSkillCardsFromFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export type UpdateAllSkillCardsOnFileRequestBodyStatusField =
  | 'invoked'
  | 'processing'
  | 'success'
  | 'transient_failure'
  | 'permanent_failure';
export interface UpdateAllSkillCardsOnFileRequestBodyMetadataField {
  readonly cards?: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[];
}
export type UpdateAllSkillCardsOnFileRequestBodyFileTypeField = 'file';
export interface UpdateAllSkillCardsOnFileRequestBodyFileField {
  readonly type?: UpdateAllSkillCardsOnFileRequestBodyFileTypeField;
  readonly id?: string;
}
export type UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField =
  'file_version';
export interface UpdateAllSkillCardsOnFileRequestBodyFileVersionField {
  readonly type?: UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField;
  readonly id?: string;
}
export interface UpdateAllSkillCardsOnFileRequestBodyUsageField {
  readonly unit?: string;
  readonly value?: number;
}
export interface UpdateAllSkillCardsOnFileRequestBody {
  readonly status: UpdateAllSkillCardsOnFileRequestBodyStatusField;
  readonly metadata: UpdateAllSkillCardsOnFileRequestBodyMetadataField;
  readonly file: UpdateAllSkillCardsOnFileRequestBodyFileField;
  readonly fileVersion?: UpdateAllSkillCardsOnFileRequestBodyFileVersionField;
  readonly usage?: UpdateAllSkillCardsOnFileRequestBodyUsageField;
}
export class UpdateAllSkillCardsOnFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields: Omit<UpdateAllSkillCardsOnFileHeaders, 'extraHeaders'> &
      Partial<Pick<UpdateAllSkillCardsOnFileHeaders, 'extraHeaders'>>
  ) {
    if (fields.extraHeaders) {
      this.extraHeaders = fields.extraHeaders;
    }
  }
}
export interface UpdateAllSkillCardsOnFileHeadersInput {
  readonly extraHeaders?:
    | undefined
    | {
        readonly [key: string]: undefined | string;
      };
}
export class SkillsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields: Omit<
      SkillsManager,
      | 'networkSession'
      | 'getBoxSkillCardsOnFile'
      | 'createBoxSkillCardsOnFile'
      | 'updateBoxSkillCardsOnFile'
      | 'deleteBoxSkillCardsFromFile'
      | 'updateAllSkillCardsOnFile'
    > &
      Partial<Pick<SkillsManager, 'networkSession'>>
  ) {
    if (fields.auth) {
      this.auth = fields.auth;
    }
    if (fields.networkSession) {
      this.networkSession = fields.networkSession;
    }
  }
  async getBoxSkillCardsOnFile(
    fileId: string,
    optionalsInput: GetBoxSkillCardsOnFileOptionalsInput = {}
  ): Promise<SkillCardsMetadata> {
    const optionals: any = new GetBoxSkillCardsOnFileOptionals({
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
  async createBoxSkillCardsOnFile(
    fileId: string,
    requestBody: CreateBoxSkillCardsOnFileRequestBody,
    optionalsInput: CreateBoxSkillCardsOnFileOptionalsInput = {}
  ): Promise<SkillCardsMetadata> {
    const optionals: any = new CreateBoxSkillCardsOnFileOptionals({
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
        '/metadata/global/boxSkillsCards'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateBoxSkillCardsOnFileRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeSkillCardsMetadata(response.data);
  }
  async updateBoxSkillCardsOnFile(
    fileId: string,
    requestBody: readonly UpdateBoxSkillCardsOnFileRequestBody[],
    optionalsInput: UpdateBoxSkillCardsOnFileOptionalsInput = {}
  ): Promise<SkillCardsMetadata> {
    const optionals: any = new UpdateBoxSkillCardsOnFileOptionals({
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
        '/metadata/global/boxSkillsCards'
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: requestBody.map(
          serializeUpdateBoxSkillCardsOnFileRequestBody
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
  async deleteBoxSkillCardsFromFile(
    fileId: string,
    optionalsInput: DeleteBoxSkillCardsFromFileOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: any = new DeleteBoxSkillCardsFromFileOptionals({
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
  async updateAllSkillCardsOnFile(
    skillId: string,
    requestBody: UpdateAllSkillCardsOnFileRequestBody,
    optionalsInput: UpdateAllSkillCardsOnFileOptionalsInput = {}
  ): Promise<undefined> {
    const optionals: any = new UpdateAllSkillCardsOnFileOptionals({
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
        '/skill_invocations/',
        toString(skillId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        data: serializeUpdateAllSkillCardsOnFileRequestBody(requestBody),
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
export interface SkillsManagerInput {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
}
export function serializeCreateBoxSkillCardsOnFileRequestBody(
  val: any
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
export function deserializeCreateBoxSkillCardsOnFileRequestBody(
  val: any
): CreateBoxSkillCardsOnFileRequestBody {
  const cards: readonly KeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard[] =
    sdIsList(val.cards)
      ? (val.cards.map(function (itm: SerializedData): any {
          return deserializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
            itm
          );
        }) as readonly any[])
      : [];
  return { cards: cards } satisfies CreateBoxSkillCardsOnFileRequestBody;
}
export function serializeUpdateBoxSkillCardsOnFileRequestBodyOpField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField(
  val: any
): UpdateBoxSkillCardsOnFileRequestBodyOpField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateBoxSkillCardsOnFileRequestBodyOpField"',
    });
  }
  if (val == 'replace') {
    return 'replace';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateBoxSkillCardsOnFileRequestBody(
  val: any
): SerializedData {
  return {
    ['op']:
      val.op == void 0
        ? void 0
        : serializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val.op),
    ['path']: val.path == void 0 ? void 0 : val.path,
    ['value']:
      val.value == void 0
        ? void 0
        : serializeKeywordSkillCardOrStatusSkillCardOrTimelineSkillCardOrTranscriptSkillCard(
            val.value
          ),
  };
}
export function deserializeUpdateBoxSkillCardsOnFileRequestBody(
  val: any
): UpdateBoxSkillCardsOnFileRequestBody {
  const op: undefined | UpdateBoxSkillCardsOnFileRequestBodyOpField =
    val.op == void 0
      ? void 0
      : deserializeUpdateBoxSkillCardsOnFileRequestBodyOpField(val.op);
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
  } satisfies UpdateBoxSkillCardsOnFileRequestBody;
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyStatusField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField(
  val: any
): UpdateAllSkillCardsOnFileRequestBodyStatusField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateAllSkillCardsOnFileRequestBodyStatusField"',
    });
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
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(
  val: any
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
export function deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(
  val: any
): UpdateAllSkillCardsOnFileRequestBodyMetadataField {
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
  } satisfies UpdateAllSkillCardsOnFileRequestBodyMetadataField;
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(
  val: any
): UpdateAllSkillCardsOnFileRequestBodyFileTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateAllSkillCardsOnFileRequestBodyFileTypeField"',
    });
  }
  if (val == 'file') {
    return 'file';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyFileField(
  val: any
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val.type),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyFileField(
  val: any
): UpdateAllSkillCardsOnFileRequestBodyFileField {
  const type: undefined | UpdateAllSkillCardsOnFileRequestBodyFileTypeField =
    val.type == void 0
      ? void 0
      : deserializeUpdateAllSkillCardsOnFileRequestBodyFileTypeField(val.type);
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies UpdateAllSkillCardsOnFileRequestBodyFileField;
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(
  val: any
): SerializedData {
  return val;
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(
  val: any
): UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField {
  if (!sdIsString(val)) {
    throw new BoxSdkError({
      message:
        'Expecting a string for "UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField"',
    });
  }
  if (val == 'file_version') {
    return 'file_version';
  }
  throw new BoxSdkError({
    message: ''.concat('Invalid value: ', val) as string,
  });
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(
  val: any
): SerializedData {
  return {
    ['type']:
      val.type == void 0
        ? void 0
        : serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(
            val.type
          ),
    ['id']: val.id == void 0 ? void 0 : val.id,
  };
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(
  val: any
): UpdateAllSkillCardsOnFileRequestBodyFileVersionField {
  const type:
    | undefined
    | UpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField =
    val.type == void 0
      ? void 0
      : deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionTypeField(
          val.type
        );
  const id: undefined | string = val.id == void 0 ? void 0 : val.id;
  return {
    type: type,
    id: id,
  } satisfies UpdateAllSkillCardsOnFileRequestBodyFileVersionField;
}
export function serializeUpdateAllSkillCardsOnFileRequestBodyUsageField(
  val: any
): SerializedData {
  return {
    ['unit']: val.unit == void 0 ? void 0 : val.unit,
    ['value']: val.value == void 0 ? void 0 : val.value,
  };
}
export function deserializeUpdateAllSkillCardsOnFileRequestBodyUsageField(
  val: any
): UpdateAllSkillCardsOnFileRequestBodyUsageField {
  const unit: undefined | string = val.unit == void 0 ? void 0 : val.unit;
  const value: undefined | number = val.value == void 0 ? void 0 : val.value;
  return {
    unit: unit,
    value: value,
  } satisfies UpdateAllSkillCardsOnFileRequestBodyUsageField;
}
export function serializeUpdateAllSkillCardsOnFileRequestBody(
  val: any
): SerializedData {
  return {
    ['status']: serializeUpdateAllSkillCardsOnFileRequestBodyStatusField(
      val.status
    ),
    ['metadata']: serializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(
      val.metadata
    ),
    ['file']: serializeUpdateAllSkillCardsOnFileRequestBodyFileField(val.file),
    ['file_version']:
      val.fileVersion == void 0
        ? void 0
        : serializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(
            val.fileVersion
          ),
    ['usage']:
      val.usage == void 0
        ? void 0
        : serializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val.usage),
  };
}
export function deserializeUpdateAllSkillCardsOnFileRequestBody(
  val: any
): UpdateAllSkillCardsOnFileRequestBody {
  const status: UpdateAllSkillCardsOnFileRequestBodyStatusField =
    deserializeUpdateAllSkillCardsOnFileRequestBodyStatusField(val.status);
  const metadata: UpdateAllSkillCardsOnFileRequestBodyMetadataField =
    deserializeUpdateAllSkillCardsOnFileRequestBodyMetadataField(val.metadata);
  const file: UpdateAllSkillCardsOnFileRequestBodyFileField =
    deserializeUpdateAllSkillCardsOnFileRequestBodyFileField(val.file);
  const fileVersion:
    | undefined
    | UpdateAllSkillCardsOnFileRequestBodyFileVersionField =
    val.file_version == void 0
      ? void 0
      : deserializeUpdateAllSkillCardsOnFileRequestBodyFileVersionField(
          val.file_version
        );
  const usage: undefined | UpdateAllSkillCardsOnFileRequestBodyUsageField =
    val.usage == void 0
      ? void 0
      : deserializeUpdateAllSkillCardsOnFileRequestBodyUsageField(val.usage);
  return {
    status: status,
    metadata: metadata,
    file: file,
    fileVersion: fileVersion,
    usage: usage,
  } satisfies UpdateAllSkillCardsOnFileRequestBody;
}
