import { serializeUploadSession } from '../schemas.generated.js';
import { deserializeUploadSession } from '../schemas.generated.js';
import { serializeCreateFileUploadSessionRequestBodyArg } from '../managers/chunkedUploads.generated.js';
import { deserializeCreateFileUploadSessionRequestBodyArg } from '../managers/chunkedUploads.generated.js';
import { serializeUploadedPart } from '../schemas.generated.js';
import { deserializeUploadedPart } from '../schemas.generated.js';
import { serializeUploadParts } from '../schemas.generated.js';
import { deserializeUploadParts } from '../schemas.generated.js';
import { serializeFiles } from '../schemas.generated.js';
import { deserializeFiles } from '../schemas.generated.js';
import { serializeCreateFileUploadSessionCommitRequestBodyArg } from '../managers/chunkedUploads.generated.js';
import { deserializeCreateFileUploadSessionCommitRequestBodyArg } from '../managers/chunkedUploads.generated.js';
import { serializeFile } from '../schemas.generated.js';
import { deserializeFile } from '../schemas.generated.js';
import { serializeUploadPart } from '../schemas.generated.js';
import { deserializeUploadPart } from '../schemas.generated.js';
import { UploadSession } from '../schemas.generated.js';
import { CreateFileUploadSessionRequestBodyArg } from '../managers/chunkedUploads.generated.js';
import { AsyncIterator } from '../utils.js';
import { Buffer } from '../utils.js';
import { UploadedPart } from '../schemas.generated.js';
import { UploadFilePartHeadersArg } from '../managers/chunkedUploads.generated.js';
import { UploadParts } from '../schemas.generated.js';
import { Files } from '../schemas.generated.js';
import { CreateFileUploadSessionCommitRequestBodyArg } from '../managers/chunkedUploads.generated.js';
import { CreateFileUploadSessionCommitHeadersArg } from '../managers/chunkedUploads.generated.js';
import { File } from '../schemas.generated.js';
import { ByteStream } from '../utils.js';
import { cloneByteStream } from '../utils.js';
import { createHash } from '../utils.js';
import { decodeBase64 } from '../utils.js';
import { hexToBase64 } from '../utils.js';
import { getEnvVar } from '../utils.js';
import { getUuid } from '../utils.js';
import { generateByteStream } from '../utils.js';
import { iterateChunks } from '../utils.js';
import { readByteStream } from '../utils.js';
import { reduceIterator } from '../utils.js';
import { Hash } from '../utils.js';
import { listConcat } from '../utils.js';
import { bufferLength } from '../utils.js';
import { Client } from '../client.generated.js';
import { JwtAuth } from '../jwtAuth.js';
import { JwtConfig } from '../jwtAuth.js';
import { UploadPart } from '../schemas.generated.js';
export async function upload(client: Client): Promise<any> {
  const fileSize: any = 20 * 1024 * 1024;
  const fileName: any = getUuid();
  const fileByteStream: any = generateByteStream(fileSize);
  const folderId: any = '0';
  const uploadSession: any =
    await client.chunkedUploads.createFileUploadSession({
      fileName: fileName,
      fileSize: fileSize,
      folderId: folderId,
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
  const fileHash: any = createHash('sha1');
  const chunksIterator: any = iterateChunks(fileByteStream, partSize);
  interface PartAccumulator {
    readonly lastIndex: number;
    readonly parts: readonly UploadPart[];
  }
  async function reducer(
    acc: PartAccumulator,
    chunk: ByteStream
  ): Promise<any> {
    const lastIndex: any = acc.lastIndex;
    const parts: any = acc.parts;
    const byteStreamClones: any = await cloneByteStream(chunk);
    const uploadedChunk: any = byteStreamClones[0];
    const hashChunk: any = byteStreamClones[1];
    const chunkBuffer: any = await readByteStream(hashChunk);
    const hash: any = createHash('sha1');
    hash.updateHash(chunkBuffer);
    const sha1: any = hash.digestHash('base64');
    const digest: any = ''.concat('sha=', sha1) as string;
    const chunkSize: any = bufferLength(chunkBuffer);
    const bytesStart: any = lastIndex + 1;
    const bytesEnd: any = lastIndex + chunkSize;
    const contentRange: any = ''.concat(
      'bytes ',
      bytesStart,
      '-',
      bytesEnd,
      '/',
      fileSize
    ) as string;
    const uploadedPart: any = await client.chunkedUploads.uploadFilePart(
      uploadSessionId,
      uploadedChunk,
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
    fileHash.updateHash(chunkBuffer);
    return { lastIndex: bytesEnd, parts: listConcat(parts, [part]) };
  }
  const results: any = await reduceIterator(chunksIterator, reducer, {
    lastIndex: -1,
    parts: [],
  } satisfies PartAccumulator);
  const parts: any = results.parts;
  const processedSessionParts: any =
    await client.chunkedUploads.getFileUploadSessionParts(uploadSessionId);
  if (!(processedSessionParts.totalCount == totalParts)) {
    throw 'Assertion failed';
  }
  const processedSession: any =
    await client.chunkedUploads.getFileUploadSessionById(uploadSessionId);
  if (!(processedSession.numPartsProcessed == totalParts)) {
    throw 'Assertion failed';
  }
  const sha1: any = fileHash.digestHash('base64');
  const digest: any = ''.concat('sha=', sha1) as string;
  const commmitedSession: any =
    await client.chunkedUploads.createFileUploadSessionCommit(
      uploadSessionId,
      { parts: parts } satisfies CreateFileUploadSessionCommitRequestBodyArg,
      new CreateFileUploadSessionCommitHeadersArg({ digest: digest })
    );
  if (!(commmitedSession.totalCount == 1)) {
    throw 'Assertion failed';
  }
  const uploadedFile: any = commmitedSession.entries[0];
  if (!(uploadedFile.name == fileName)) {
    throw 'Assertion failed';
  }
  if (!(uploadedFile.size == fileSize)) {
    throw 'Assertion failed';
  }
  if (!(uploadedFile.parent.id == folderId)) {
    throw 'Assertion failed';
  }
}
test('chunkedUploads', async function chunkedUploads(): Promise<any> {
  const jwtConfig: any = JwtConfig.fromConfigJsonString(
    decodeBase64(getEnvVar('JWT_CONFIG_BASE_64'))
  );
  const auth: any = new JwtAuth({ config: jwtConfig });
  const client: any = new Client({ auth: auth });
  return await upload(client);
});
export {};
