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
import { fetch } from '../fetch.js';
import { FetchOptions } from '../fetch.js';
import { FetchResponse } from '../fetch.js';
import { generateByteStreamFromBuffer } from '../utils.js';
import { hexToBase64 } from '../utils.js';
import { iterateChunks } from '../utils.js';
import { readByteStream } from '../utils.js';
import { reduceIterator } from '../utils.js';
import { Hash } from '../utils.js';
import { listConcat } from '../utils.js';
import { bufferLength } from '../utils.js';
import { serializeJson } from '../json.js';
import { deserializeJson } from '../json.js';
import { Json } from '../json.js';
import { isJson } from '../json.js';
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
  constructor(fields: CreateFileUploadSessionHeadersArg) {
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
  constructor(fields: CreateFileUploadSessionForExistingFileHeadersArg) {
    Object.assign(this, fields);
  }
}
export class GetFileUploadSessionByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: GetFileUploadSessionByIdHeadersArg) {
    Object.assign(this, fields);
  }
}
export class UploadFilePartHeadersArg {
  readonly digest!: string;
  readonly contentRange!: string;
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: UploadFilePartHeadersArg) {
    Object.assign(this, fields);
  }
}
export class DeleteFileUploadSessionByIdHeadersArg {
  readonly extraHeaders?: {
    readonly [key: string]: undefined | string;
  } = {};
  constructor(fields: DeleteFileUploadSessionByIdHeadersArg) {
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
  constructor(fields: GetFileUploadSessionPartsHeadersArg) {
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
  constructor(fields: CreateFileUploadSessionCommitHeadersArg) {
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
    )
  ): Promise<UploadSession> {
    const headersMap: any = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: any = (await fetch(
      ''.concat(
        'https://upload.box.com/api/2.0/files/upload_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateFileUploadSessionRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadSession(deserializeJson(response.text));
  }
  async createFileUploadSessionForExistingFile(
    fileId: string,
    requestBody: CreateFileUploadSessionForExistingFileRequestBodyArg,
    headers: CreateFileUploadSessionForExistingFileHeadersArg = new CreateFileUploadSessionForExistingFileHeadersArg(
      {}
    )
  ): Promise<UploadSession> {
    const headersMap: any = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: any = (await fetch(
      ''.concat(
        'https://upload.box.com/api/2.0/files/',
        toString(fileId) as string,
        '/upload_sessions'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateFileUploadSessionForExistingFileRequestBodyArg(
            requestBody
          )
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadSession(deserializeJson(response.text));
  }
  async getFileUploadSessionById(
    uploadSessionId: string,
    headers: GetFileUploadSessionByIdHeadersArg = new GetFileUploadSessionByIdHeadersArg(
      {}
    )
  ): Promise<UploadSession> {
    const headersMap: any = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: any = (await fetch(
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadSession(deserializeJson(response.text));
  }
  async uploadFilePart(
    uploadSessionId: string,
    requestBody: ByteStream,
    headers: UploadFilePartHeadersArg
  ): Promise<UploadedPart> {
    const headersMap: any = prepareParams({
      ...{
        ['digest']: toString(headers.digest) as string,
        ['content-range']: toString(headers.contentRange) as string,
      },
      ...headers.extraHeaders,
    });
    const response: any = (await fetch(
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadedPart(deserializeJson(response.text));
  }
  async deleteFileUploadSessionById(
    uploadSessionId: string,
    headers: DeleteFileUploadSessionByIdHeadersArg = new DeleteFileUploadSessionByIdHeadersArg(
      {}
    )
  ): Promise<undefined> {
    const headersMap: any = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: any = (await fetch(
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return void 0;
  }
  async getFileUploadSessionParts(
    uploadSessionId: string,
    queryParams: GetFileUploadSessionPartsQueryParamsArg = {} satisfies GetFileUploadSessionPartsQueryParamsArg,
    headers: GetFileUploadSessionPartsHeadersArg = new GetFileUploadSessionPartsHeadersArg(
      {}
    )
  ): Promise<UploadParts> {
    const queryParamsMap: any = prepareParams({
      ['offset']: toString(queryParams.offset) as string,
      ['limit']: toString(queryParams.limit) as string,
    });
    const headersMap: any = prepareParams({ ...{}, ...headers.extraHeaders });
    const response: any = (await fetch(
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
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeUploadParts(deserializeJson(response.text));
  }
  async createFileUploadSessionCommit(
    uploadSessionId: string,
    requestBody: CreateFileUploadSessionCommitRequestBodyArg,
    headers: CreateFileUploadSessionCommitHeadersArg
  ): Promise<Files> {
    const headersMap: any = prepareParams({
      ...{
        ['digest']: toString(headers.digest) as string,
        ['if-match']: toString(headers.ifMatch) as string,
        ['if-none-match']: toString(headers.ifNoneMatch) as string,
      },
      ...headers.extraHeaders,
    });
    const response: any = (await fetch(
      ''.concat(
        'https://upload.box.com/api/2.0/files/upload_sessions/',
        toString(uploadSessionId) as string,
        '/commit'
      ) as string,
      {
        method: 'POST',
        headers: headersMap,
        body: serializeJson(
          serializeCreateFileUploadSessionCommitRequestBodyArg(requestBody)
        ),
        contentType: 'application/json',
        responseFormat: 'json',
        auth: this.auth,
        networkSession: this.networkSession,
      } satisfies FetchOptions
    )) as FetchResponse;
    return deserializeFiles(deserializeJson(response.text));
  }
  async reducer(acc: PartAccumulator, chunk: ByteStream): Promise<any> {
    const lastIndex: any = acc.lastIndex;
    const parts: any = acc.parts;
    const chunkBuffer: any = await readByteStream(chunk);
    const hash: any = new Hash({ algorithm: 'sha1' as HashName });
    hash.updateHash(chunkBuffer);
    const sha1: any = await hash.digestHash('base64');
    const digest: any = ''.concat('sha=', sha1) as string;
    const chunkSize: any = bufferLength(chunkBuffer);
    const bytesStart: any = lastIndex + 1;
    const bytesEnd: any = lastIndex + chunkSize;
    const contentRange: any = ''.concat(
      'bytes ',
      toString(bytesStart) as string,
      '-',
      toString(bytesEnd) as string,
      '/',
      toString(acc.fileSize) as string
    ) as string;
    const uploadedPart: any = await this.uploadFilePart(
      acc.uploadSessionId,
      generateByteStreamFromBuffer(chunkBuffer),
      new UploadFilePartHeadersArg({
        digest: digest,
        contentRange: contentRange,
      })
    );
    const part: any = uploadedPart.part;
    const partSha1: any = hexToBase64(part.sha1);
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
    parentFolderId: string
  ): Promise<any> {
    const uploadSession: any = await this.createFileUploadSession({
      fileName: fileName,
      fileSize: fileSize,
      folderId: parentFolderId,
    } satisfies CreateFileUploadSessionRequestBodyArg);
    const uploadSessionId: any = uploadSession.id;
    const partSize: any = uploadSession.partSize;
    const totalParts: any = uploadSession.totalParts;
    if (!(partSize * totalParts >= fileSize)) {
      throw 'Assertion failed';
    }
    if (!(uploadSession.numPartsProcessed == 0)) {
      throw 'Assertion failed';
    }
    const fileHash: any = new Hash({ algorithm: 'sha1' as HashName });
    const chunksIterator: any = iterateChunks(file, partSize);
    const results: any = await reduceIterator(
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
    const parts: any = results.parts;
    const processedSessionParts: any = await this.getFileUploadSessionParts(
      uploadSessionId
    );
    if (!(processedSessionParts.totalCount == totalParts)) {
      throw 'Assertion failed';
    }
    const processedSession: any = await this.getFileUploadSessionById(
      uploadSessionId
    );
    if (!(processedSession.numPartsProcessed == totalParts)) {
      throw 'Assertion failed';
    }
    const sha1: any = await fileHash.digestHash('base64');
    const digest: any = ''.concat('sha=', sha1) as string;
    const committedSession: any = await this.createFileUploadSessionCommit(
      uploadSessionId,
      { parts: parts } satisfies CreateFileUploadSessionCommitRequestBodyArg,
      new CreateFileUploadSessionCommitHeadersArg({ digest: digest })
    );
    return committedSession.entries[0];
  }
}
export function serializeCreateFileUploadSessionRequestBodyArg(
  val: CreateFileUploadSessionRequestBodyArg
): Json {
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
): Json {
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
): Json {
  return {
    ['parts']: val.parts?.map(function (item: UploadPart): any {
      return serializeUploadPart(item);
    }) as readonly any[],
  };
}
export function deserializeCreateFileUploadSessionCommitRequestBodyArg(
  val: any
): CreateFileUploadSessionCommitRequestBodyArg {
  const parts: readonly UploadPart[] = isJson(val.parts, 'array')
    ? (val.parts?.map(function (itm: Json): any {
        return deserializeUploadPart(itm);
      }) as readonly any[])
    : [];
  return { parts: parts } satisfies CreateFileUploadSessionCommitRequestBodyArg;
}
