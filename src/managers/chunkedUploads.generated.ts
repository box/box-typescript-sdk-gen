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
import { Iterator } from '../utils.js';
import { UploadSession } from '../schemas.generated.js';
import { ClientError } from '../schemas.generated.js';
import { UploadedPart } from '../schemas.generated.js';
import { UploadParts } from '../schemas.generated.js';
import { Files } from '../schemas.generated.js';
import { UploadPart } from '../schemas.generated.js';
import { Authentication } from '../auth.js';
import { NetworkSession } from '../network.js';
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
import { listConcat } from '../utils.js';
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
export interface CreateFileUploadSessionRequestBodyArg {
  readonly folderId: string;
  readonly fileSize: number;
  readonly fileName: string;
}
export class CreateFileUploadSessionHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileUploadSessionHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateFileUploadSessionHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFileUploadSessionForExistingFileRequestBodyArg {
  readonly fileSize: number;
  readonly fileName?: string;
}
export class CreateFileUploadSessionForExistingFileHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileUploadSessionForExistingFileHeadersArg, 'extraHeaders'>
      | Partial<
          Pick<CreateFileUploadSessionForExistingFileHeadersArg, 'extraHeaders'>
        >
  ) {
    Object.assign(this, fields);
  }
}
export class GetFileUploadSessionByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileUploadSessionByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFileUploadSessionByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class UploadFilePartHeadersArg {
  readonly digest!: string;
  readonly contentRange!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<UploadFilePartHeadersArg, 'extraHeaders'>
      | Partial<Pick<UploadFilePartHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class DeleteFileUploadSessionByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<DeleteFileUploadSessionByIdHeadersArg, 'extraHeaders'>
      | Partial<Pick<DeleteFileUploadSessionByIdHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface GetFileUploadSessionPartsQueryParamsArg {
  readonly offset?: number;
  readonly limit?: number;
}
export class GetFileUploadSessionPartsHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<GetFileUploadSessionPartsHeadersArg, 'extraHeaders'>
      | Partial<Pick<GetFileUploadSessionPartsHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export interface CreateFileUploadSessionCommitRequestBodyArg {
  readonly parts: readonly UploadPart[];
}
export class CreateFileUploadSessionCommitHeadersArg {
  readonly digest!: string;
  readonly ifMatch?: string;
  readonly ifNoneMatch?: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(
    fields:
      | Omit<CreateFileUploadSessionCommitHeadersArg, 'extraHeaders'>
      | Partial<Pick<CreateFileUploadSessionCommitHeadersArg, 'extraHeaders'>>
  ) {
    Object.assign(this, fields);
  }
}
export class ChunkedUploadsManager {
  readonly auth?: Authentication;
  readonly networkSession?: NetworkSession;
  constructor(
    fields: Omit<
      ChunkedUploadsManager,
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
  ) {
    Object.assign(this, fields);
  }
  async createFileUploadSession(
    requestBody: CreateFileUploadSessionRequestBodyArg,
    headers: CreateFileUploadSessionHeadersArg = new CreateFileUploadSessionHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<UploadSession> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://upload.box.com/api/2.0/files/upload_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileUploadSessionRequestBodyArg(requestBody),
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
    requestBody: CreateFileUploadSessionForExistingFileRequestBodyArg,
    headers: CreateFileUploadSessionForExistingFileHeadersArg = new CreateFileUploadSessionForExistingFileHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<UploadSession> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://upload.box.com/api/2.0/files/',
        toString(fileId) as string,
        '/upload_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileUploadSessionForExistingFileRequestBodyArg(
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
    headers: GetFileUploadSessionByIdHeadersArg = new GetFileUploadSessionByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<UploadSession> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://upload.box.com/api/2.0/files/upload_sessions/',
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
    headers: UploadFilePartHeadersArg,
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
        'https://upload.box.com/api/2.0/files/upload_sessions/',
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
    headers: DeleteFileUploadSessionByIdHeadersArg = new DeleteFileUploadSessionByIdHeadersArg(
      {}
    ),
    cancellationToken?: CancellationToken
  ): Promise<undefined> {
    const headersMap: {
      readonly [key: string]: string;
    } = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: FetchResponse = (await fetch(
      ''.concat(
        'https://upload.box.com/api/2.0/files/upload_sessions/',
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
    queryParams: GetFileUploadSessionPartsQueryParamsArg = {} satisfies GetFileUploadSessionPartsQueryParamsArg,
    headers: GetFileUploadSessionPartsHeadersArg = new GetFileUploadSessionPartsHeadersArg(
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
        'https://upload.box.com/api/2.0/files/upload_sessions/',
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
    requestBody: CreateFileUploadSessionCommitRequestBodyArg,
    headers: CreateFileUploadSessionCommitHeadersArg,
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
        'https://upload.box.com/api/2.0/files/upload_sessions/',
        toString(uploadSessionId) as string,
        '/commit'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        data: serializeCreateFileUploadSessionCommitRequestBodyArg(requestBody),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
        cancellationToken: cancellationToken,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFiles(response.data);
  }
  async reducer(acc: PartAccumulator, chunk: ByteStream): Promise<any> {
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
      new UploadFilePartHeadersArg({
        digest: digest,
        contentRange: contentRange,
      })
    );
    const part: UploadPart = uploadedPart.part!;
    const partSha1: string = hexToBase64(part.sha1!);
    if (!(partSha1 == sha1)) {
      throw 'Assertion failed';
    }
    if (!(part.size == chunkSize)) {
      throw 'Assertion failed';
    }
    if (!(part.offset == bytesStart)) {
      throw 'Assertion failed';
    }
    acc.fileHash.updateHash(chunkBuffer);
    return {
      lastIndex: bytesEnd,
      parts: listConcat(parts, [part]),
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
  ): Promise<any> {
    const uploadSession: UploadSession = await this.createFileUploadSession(
      {
        fileName: fileName,
        fileSize: fileSize,
        folderId: parentFolderId,
      } satisfies CreateFileUploadSessionRequestBodyArg,
      new CreateFileUploadSessionHeadersArg({}),
      cancellationToken
    );
    const uploadSessionId: string = uploadSession.id!;
    const partSize: number = uploadSession.partSize!;
    const totalParts: number = uploadSession.totalParts!;
    if (!(partSize * totalParts >= fileSize)) {
      throw 'Assertion failed';
    }
    if (!(uploadSession.numPartsProcessed == 0)) {
      throw 'Assertion failed';
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
        {} satisfies GetFileUploadSessionPartsQueryParamsArg,
        new GetFileUploadSessionPartsHeadersArg({}),
        cancellationToken
      );
    if (!(processedSessionParts.totalCount! == totalParts)) {
      throw 'Assertion failed';
    }
    const processedSession: UploadSession = await this.getFileUploadSessionById(
      uploadSessionId,
      new GetFileUploadSessionByIdHeadersArg({}),
      cancellationToken
    );
    if (!(processedSession.numPartsProcessed == totalParts)) {
      throw 'Assertion failed';
    }
    const sha1: string = await fileHash.digestHash('base64');
    const digest: string = ''.concat('sha=', sha1) as string;
    const committedSession: Files = await this.createFileUploadSessionCommit(
      uploadSessionId,
      { parts: parts } satisfies CreateFileUploadSessionCommitRequestBodyArg,
      new CreateFileUploadSessionCommitHeadersArg({ digest: digest }),
      cancellationToken
    );
    return committedSession.entries![0];
  }
}
export function serializeCreateFileUploadSessionRequestBodyArg(
  val: CreateFileUploadSessionRequestBodyArg
): SerializedData {
  return {
    ['folder_id']: val.folderId,
    ['file_size']: val.fileSize,
    ['file_name']: val.fileName,
  };
}
export function deserializeCreateFileUploadSessionRequestBodyArg(
  val: any
): CreateFileUploadSessionRequestBodyArg {
  const folderId: string = val.folder_id;
  const fileSize: number = val.file_size;
  const fileName: string = val.file_name;
  return {
    folderId: folderId,
    fileSize: fileSize,
    fileName: fileName,
  } satisfies CreateFileUploadSessionRequestBodyArg;
}
export function serializeCreateFileUploadSessionForExistingFileRequestBodyArg(
  val: CreateFileUploadSessionForExistingFileRequestBodyArg
): SerializedData {
  return {
    ['file_size']: val.fileSize,
    ['file_name']: val.fileName == void 0 ? void 0 : val.fileName,
  };
}
export function deserializeCreateFileUploadSessionForExistingFileRequestBodyArg(
  val: any
): CreateFileUploadSessionForExistingFileRequestBodyArg {
  const fileSize: number = val.file_size;
  const fileName: undefined | string =
    val.file_name == void 0 ? void 0 : val.file_name;
  return {
    fileSize: fileSize,
    fileName: fileName,
  } satisfies CreateFileUploadSessionForExistingFileRequestBodyArg;
}
export function serializeCreateFileUploadSessionCommitRequestBodyArg(
  val: CreateFileUploadSessionCommitRequestBodyArg
): SerializedData {
  return {
    ['parts']: val.parts.map(function (item: UploadPart): any {
      return serializeUploadPart(item);
    }) as readonly any[],
  };
}
export function deserializeCreateFileUploadSessionCommitRequestBodyArg(
  val: any
): CreateFileUploadSessionCommitRequestBodyArg {
  const parts: readonly UploadPart[] = sdIsList(val.parts)
    ? (val.parts.map(function (itm: SerializedData): any {
        return deserializeUploadPart(itm);
      }) as readonly any[])
    : [];
  return { parts: parts } satisfies CreateFileUploadSessionCommitRequestBodyArg;
}
