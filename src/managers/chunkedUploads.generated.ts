import { serializeFileFull } from '../schemas.generated.js';
import { deserializeFileFull } from '../schemas.generated.js';
import { serializeUploadSession } from '../schemas.generated.js';
import { deserializeUploadSession } from '../schemas.generated.js';
import { serializeClientError } from '../schemas.generated.js';
import { deserializeClientError } from '../schemas.generated.js';
import { serializeUploadedPart } from '../schemas.generated.js';
import { deserializeUploadedPart } from '../schemas.generated.js';
import { serializeUploadParts } from '../schemas.generated.js';
import { deserializeUploadParts } from '../schemas.generated.js';
import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeUploadPart } from '../schemas.generated.js';
import { deserializeUploadPart } from '../schemas.generated.js';
import { Buffer } from '../utils.js';
import { HashName } from '../utils.js';
import { FileFull } from '../schemas.generated.js';
import { Iterator } from '../utils.js';
import { UploadSession } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { UploadedPart } from '../schemas.generated.js';
import { UploadParts } from '../schemas.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadPart } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.generated.js';
import { prepareParams } from '../utils.js';
import { toString } from '../utils.js';
import { ByteStream } from '../utils.js';
import { CancellationToken } from '../utils.js';
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { SerializedData } from '../json.js';
import { sdToJson } from '../json.js';
import { generateByteStreamFromBuffer } from '../utils.js';
import { hexToBase64 } from '../utils.js';
import { iterateChunks } from '../utils.js';
import { readByteStream } from '../utils.js';
import { reduceIterator } from '../utils.js';
import { Hash } from '../utils.js';
import { bufferLength } from '../utils.js';
import { sdIsEmpty } from '../json.js';
import { sdIsBoolean } from '../json.js';
import { sdIsNumber } from '../json.js';
import { sdIsString } from '../json.js';
import { sdIsList } from '../json.js';
import { sdIsMap } from '../json.js';
export interface PartAccumulator {
  readonly lastIndex: number;
  readonly parts: readonly UploadPart[];
  readonly fileSize: number;
  readonly uploadSessionId: string;
  readonly fileHash: Hash;
}
export interface CreateFileUploadSessionRequestBody {
  readonly folderId: string;
  readonly fileSize: number;
  readonly fileName: string;
}
export class CreateFileUploadSessionHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileUploadSessionHeaders, 'extraHeaders'>
      | Partial<Pick<CreateFileUploadSessionHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFileUploadSessionForExistingFileRequestBody {
  readonly fileSize: number;
  readonly fileName?: string;
}
export class CreateFileUploadSessionForExistingFileHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileUploadSessionForExistingFileHeaders, 'extraHeaders'>
      | Partial<
          Pick<CreateFileUploadSessionForExistingFileHeaders, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class GetFileUploadSessionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileUploadSessionByIdHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileUploadSessionByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class UploadFilePartHeaders {
  readonly digest!: string;
  readonly contentRange!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UploadFilePartHeaders, 'extraHeaders'>
      | Partial<Pick<UploadFilePartHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileUploadSessionByIdHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileUploadSessionByIdHeaders, 'extraHeaders'>
      | Partial<Pick<DeleteFileUploadSessionByIdHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFileUploadSessionPartsQueryParams {
  readonly offset?: number;
  readonly limit?: number;
}
export class GetFileUploadSessionPartsHeaders {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileUploadSessionPartsHeaders, 'extraHeaders'>
      | Partial<Pick<GetFileUploadSessionPartsHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFileUploadSessionCommitRequestBody {
  readonly parts: readonly UploadPart[];
}
export class CreateFileUploadSessionCommitHeaders {
  readonly digest!: string;
  readonly ifMatch?: string;
  readonly ifNoneMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileUploadSessionCommitHeaders, 'extraHeaders'>
      | Partial<Pick<CreateFileUploadSessionCommitHeaders, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class ChunkedUploadsManager {
  readonly auth?: Authentication;
  readonly networkSession: NetworkSession = new NetworkSession({});
  constructor(
    fields:
      | Omit<
          ChunkedUploadsManager,
          | 'networkSession'
          | 'createFileUploadSession'
          | 'createFileUploadSessionForExistingFile'
          | 'getFileUploadSessionById'
          | 'uploadFilePart'
          | 'deleteFileUploadSessionById'
          | 'getFileUploadSessionParts'
          | 'createFileUploadSessionCommit'
          | 'reducer'
          | 'uploadBigFile'
        >
      | Partial<Pick<ChunkedUploadsManager, 'networkSession'>>
  ) {
    Object.assign(this, fields);
  }
  async createFileUploadSession(
    requestBody: CreateFileUploadSessionRequestBody,
    headers: CreateFileUploadSessionHeaders = new CreateFileUploadSessionHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<UploadSession> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/files/upload_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileUploadSessionRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadSession(response.data);
  }
  async createFileUploadSessionForExistingFile(
    fileId: string,
    requestBody: CreateFileUploadSessionForExistingFileRequestBody,
    headers: CreateFileUploadSessionForExistingFileHeaders = new CreateFileUploadSessionForExistingFileHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<UploadSession> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/files/',
        toString(fileId) as string,
        '/upload_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileUploadSessionForExistingFileRequestBody(
          requestBody
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadSession(response.data);
  }
  async getFileUploadSessionById(
    uploadSessionId: string,
    headers: GetFileUploadSessionByIdHeaders = new GetFileUploadSessionByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<UploadSession> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/files/upload_sessions/',
        toString(uploadSessionId) as string
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
    return deserializeUploadSession(response.data);
  }
  async uploadFilePart(
    uploadSessionId: string,
    requestBody: ByteStream,
    headers: UploadFilePartHeaders,
    cancellationToken?: CancellationToken
  ): Promise<UploadedPart> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{
        ['digest']: toString(headers.digest) as string,
        ['content-range']: toString(headers.contentRange) as string,
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/files/upload_sessions/',
        toString(uploadSessionId) as string
      ) as string,
      {
        method: 'PUT',
        headers: headersMap,
        fileStream: requestBody,
        contentType: 'application/octet-stream',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadedPart(response.data);
  }
  async deleteFileUploadSessionById(
    uploadSessionId: string,
    headers: DeleteFileUploadSessionByIdHeaders = new DeleteFileUploadSessionByIdHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/files/upload_sessions/',
        toString(uploadSessionId) as string
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
  async getFileUploadSessionParts(
    uploadSessionId: string,
    queryParams: GetFileUploadSessionPartsQueryParams = {} satisfies GetFileUploadSessionPartsQueryParams,
    headers: GetFileUploadSessionPartsHeaders = new GetFileUploadSessionPartsHeaders(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<UploadParts> {
    const queryParamsMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/files/upload_sessions/',
        toString(uploadSessionId) as string,
        '/parts'
      ) as string,
      {
        method: 'GET',
        params: queryParamsMap,
        headers: headersMap,
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadParts(response.data);
  }
  async createFileUploadSessionCommit(
    uploadSessionId: string,
    requestBody: CreateFileUploadSessionCommitRequestBody,
    headers: CreateFileUploadSessionCommitHeaders,
    cancellationToken?: CancellationToken
  ): Promise<Files> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({
      ...{
        ['digest']: toString(headers.digest) as string,
        ['if-match']: toString(headers.ifMatch) as string,
        ['if-none-match']: toString(headers.ifNoneMatch) as string,
      },
      ...headers.extraHeaders,
    });
    const response: FetchResponse = (await fetch(
      ''.concat(
        this.networkSession.baseUrls.uploadUrl,
        '/files/upload_sessions/',
        toString(uploadSessionId) as string,
        '/commit'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileUploadSessionCommitRequestBody(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFiles(response.data);
  }
  async reducer(
    acc: PartAccumulator,
    chunk: ByteStream
  ): Promise<PartAccumulator> {
    const lastIndex: number = acc.lastIndex;
    const parts: readonly UploadPart[] = acc.parts;
    const chunkBuffer: Buffer = await readByteStream(chunk);
    const hash: Hash = new Hash({ algorithm: 'sha1' as HashName });
    hash.updateHash(chunkBuffer);
    const sha1: string = await hash.digestHash('base64');
    const digest: string = ''.concat('sha=', sha1) as string;
    const chunkSize: number = bufferLength(chunkBuffer);
    const bytesStart: number = lastIndex + 1;
    const bytesEnd: number = lastIndex + chunkSize;
    const contentRange: string = ''.concat(
      'bytes ',
      toString(bytesStart) as string,
      '-',
      toString(bytesEnd) as string,
      '/',
      toString(acc.fileSize) as string
    ) as string;
    const uploadedPart: UploadedPart = await this.uploadFilePart(
      acc.uploadSessionId,
      generateByteStreamFromBuffer(chunkBuffer),
      new UploadFilePartHeaders({ digest: digest, contentRange: contentRange })
    );
    const part: UploadPart = uploadedPart.part!;
    const partSha1: string = hexToBase64(part.sha1!);
    if (!(partSha1 == sha1)) {
      throw new Error(String('Assertion failed'));
    }
    if (!(part.size == chunkSize)) {
      throw new Error(String('Assertion failed'));
    }
    if (!(part.offset == bytesStart)) {
      throw new Error(String('Assertion failed'));
    }
    acc.fileHash.updateHash(chunkBuffer);
    return {
      lastIndex: bytesEnd,
      parts: parts.concat([part]),
      fileSize: acc.fileSize,
      uploadSessionId: acc.uploadSessionId,
      fileHash: acc.fileHash,
    } satisfies PartAccumulator;
  }
  async uploadBigFile(
    file: ByteStream,
    fileName: string,
    fileSize: number,
    parentFolderId: string,
    cancellationToken?: CancellationToken
  ): Promise<FileFull> {
    const uploadSession: UploadSession = await this.createFileUploadSession(
      {
        fileName: fileName,
        fileSize: fileSize,
        folderId: parentFolderId,
      } satisfies CreateFileUploadSessionRequestBody,
      new CreateFileUploadSessionHeaders({}),
      cancellationToken
    );
    const uploadSessionId: string = uploadSession.id!;
    const partSize: number = uploadSession.partSize!;
    const totalParts: number = uploadSession.totalParts!;
    if (!(partSize * totalParts >= fileSize)) {
      throw new Error(String('Assertion failed'));
    }
    if (!(uploadSession.numPartsProcessed == 0)) {
      throw new Error(String('Assertion failed'));
    }
    const fileHash: Hash = new Hash({ algorithm: 'sha1' as HashName });
    const chunksIterator: Iterator = iterateChunks(file, partSize);
    const results: PartAccumulator = await reduceIterator(
      chunksIterator,
      this.reducer.bind(this),
      {
        lastIndex: -1,
        parts: [],
        fileSize: fileSize,
        uploadSessionId: uploadSessionId,
        fileHash: fileHash,
      } satisfies PartAccumulator
    );
    const parts: readonly UploadPart[] = results.parts;
    const processedSessionParts: UploadParts =
      await this.getFileUploadSessionParts(
        uploadSessionId,
        {} satisfies GetFileUploadSessionPartsQueryParams,
        new GetFileUploadSessionPartsHeaders({}),
        cancellationToken
      );
    if (!(processedSessionParts.totalCount! == totalParts)) {
      throw new Error(String('Assertion failed'));
    }
    const processedSession: UploadSession = await this.getFileUploadSessionById(
      uploadSessionId,
      new GetFileUploadSessionByIdHeaders({}),
      cancellationToken
    );
    if (!(processedSession.numPartsProcessed == totalParts)) {
      throw new Error(String('Assertion failed'));
    }
    const sha1: string = await fileHash.digestHash('base64');
    const digest: string = ''.concat('sha=', sha1) as string;
    const committedSession: Files = await this.createFileUploadSessionCommit(
      uploadSessionId,
      { parts: parts } satisfies CreateFileUploadSessionCommitRequestBody,
      new CreateFileUploadSessionCommitHeaders({ digest: digest }),
      cancellationToken
    );
    return committedSession.entries![0];
  }
}
export function serializeCreateFileUploadSessionRequestBody(
  val: CreateFileUploadSessionRequestBody
): SerializedData {
  return {
    ['folder_id']: val.folderId,
    ['file_size']: val.fileSize,
    ['file_name']: val.fileName,
  };
}
export function deserializeCreateFileUploadSessionRequestBody(
  val: any
): CreateFileUploadSessionRequestBody {
  const folderId: string = val.folder_id;
  const fileSize: number = val.file_size;
  const fileName: string = val.file_name;
  return {
    folderId: folderId,
    fileSize: fileSize,
    fileName: fileName,
  } satisfies CreateFileUploadSessionRequestBody;
}
export function serializeCreateFileUploadSessionForExistingFileRequestBody(
  val: CreateFileUploadSessionForExistingFileRequestBody
): SerializedData {
  return {
    ['file_size']: val.fileSize,
    ['file_name']: val.fileName == void 0 ? void 0 : val.fileName,
  };
}
export function deserializeCreateFileUploadSessionForExistingFileRequestBody(
  val: any
): CreateFileUploadSessionForExistingFileRequestBody {
  const fileSize: number = val.file_size;
  const fileName: undefined | string =
    val.file_name == void 0 ? void 0 : val.file_name;
  return {
    fileSize: fileSize,
    fileName: fileName,
  } satisfies CreateFileUploadSessionForExistingFileRequestBody;
}
export function serializeCreateFileUploadSessionCommitRequestBody(
  val: CreateFileUploadSessionCommitRequestBody
): SerializedData {
  return {
    ['parts']: val.parts.map(function (item: UploadPart): any {
      return serializeUploadPart(item);
    }) as readonly any[],
  };
}
export function deserializeCreateFileUploadSessionCommitRequestBody(
  val: any
): CreateFileUploadSessionCommitRequestBody {
  const parts: readonly UploadPart[] = sdIsList(val.parts)
    ? (val.parts.map(function (itm: SerializedData): any {
        return deserializeUploadPart(itm);
      }) as readonly any[])
    : [];
  return { parts: parts } satisfies CreateFileUploadSessionCommitRequestBody;
}
