import { generateByteStreamFromBuffer } from '../internal/utils.js';
import { hexToBase64 } from '../internal/utils.js';
import { iterateChunks } from '../internal/utils.js';
import { readByteStream } from '../internal/utils.js';
import { reduceIterator } from '../internal/utils.js';
import { Hash } from '../internal/utils.js';
import { bufferLength } from '../internal/utils.js';
import { getUuid } from '../internal/utils.js';
import { generateByteStream } from '../internal/utils.js';
import { getDefaultClient } from './commons.generated.js';
import { toString } from '../internal/utils.js';
export const client = getDefaultClient();
export class TestPartAccumulator {
    constructor(fields) {
        this.uploadPartUrl = '';
        this.uploadSessionId = '';
        if (fields.lastIndex !== undefined) {
            this.lastIndex = fields.lastIndex;
        }
        if (fields.parts !== undefined) {
            this.parts = fields.parts;
        }
        if (fields.fileSize !== undefined) {
            this.fileSize = fields.fileSize;
        }
        if (fields.uploadPartUrl !== undefined) {
            this.uploadPartUrl = fields.uploadPartUrl;
        }
        if (fields.uploadSessionId !== undefined) {
            this.uploadSessionId = fields.uploadSessionId;
        }
        if (fields.fileHash !== undefined) {
            this.fileHash = fields.fileHash;
        }
    }
}
async function reducerById(accInput, chunk) {
    const acc = new TestPartAccumulator({
        lastIndex: accInput.lastIndex,
        parts: accInput.parts,
        fileSize: accInput.fileSize,
        uploadPartUrl: accInput.uploadPartUrl,
        uploadSessionId: accInput.uploadSessionId,
        fileHash: accInput.fileHash,
    });
    const lastIndex = acc.lastIndex;
    const parts = acc.parts;
    const chunkBuffer = await readByteStream(chunk);
    const hash = new Hash({ algorithm: 'sha1' });
    await hash.updateHash(chunkBuffer);
    const sha1 = await hash.digestHash('base64');
    const digest = ''.concat('sha=', sha1);
    const chunkSize = bufferLength(chunkBuffer);
    const bytesStart = lastIndex + 1;
    const bytesEnd = lastIndex + chunkSize;
    const contentRange = ''.concat('bytes ', toString(bytesStart), '-', toString(bytesEnd), '/', toString(acc.fileSize));
    const uploadedPart = await client.chunkedUploads.uploadFilePart(acc.uploadSessionId, generateByteStreamFromBuffer(chunkBuffer), {
        digest: digest,
        contentRange: contentRange,
    });
    const part = uploadedPart.part;
    const partSha1 = hexToBase64(part.sha1);
    if (!(partSha1 == sha1)) {
        throw new Error('Assertion failed');
    }
    if (!(part.size == chunkSize)) {
        throw new Error('Assertion failed');
    }
    if (!(part.offset == bytesStart)) {
        throw new Error('Assertion failed');
    }
    await acc.fileHash.updateHash(chunkBuffer);
    return new TestPartAccumulator({
        lastIndex: bytesEnd,
        parts: parts.concat([part]),
        fileSize: acc.fileSize,
        uploadSessionId: acc.uploadSessionId,
        fileHash: acc.fileHash,
    });
}
async function reducerByUrl(accInput, chunk) {
    const acc = new TestPartAccumulator({
        lastIndex: accInput.lastIndex,
        parts: accInput.parts,
        fileSize: accInput.fileSize,
        uploadPartUrl: accInput.uploadPartUrl,
        uploadSessionId: accInput.uploadSessionId,
        fileHash: accInput.fileHash,
    });
    const lastIndex = acc.lastIndex;
    const parts = acc.parts;
    const chunkBuffer = await readByteStream(chunk);
    const hash = new Hash({ algorithm: 'sha1' });
    await hash.updateHash(chunkBuffer);
    const sha1 = await hash.digestHash('base64');
    const digest = ''.concat('sha=', sha1);
    const chunkSize = bufferLength(chunkBuffer);
    const bytesStart = lastIndex + 1;
    const bytesEnd = lastIndex + chunkSize;
    const contentRange = ''.concat('bytes ', toString(bytesStart), '-', toString(bytesEnd), '/', toString(acc.fileSize));
    const uploadedPart = await client.chunkedUploads.uploadFilePartByUrl(acc.uploadPartUrl, generateByteStreamFromBuffer(chunkBuffer), {
        digest: digest,
        contentRange: contentRange,
    });
    const part = uploadedPart.part;
    const partSha1 = hexToBase64(part.sha1);
    if (!(partSha1 == sha1)) {
        throw new Error('Assertion failed');
    }
    if (!(part.size == chunkSize)) {
        throw new Error('Assertion failed');
    }
    if (!(part.offset == bytesStart)) {
        throw new Error('Assertion failed');
    }
    await acc.fileHash.updateHash(chunkBuffer);
    return new TestPartAccumulator({
        lastIndex: bytesEnd,
        parts: parts.concat([part]),
        fileSize: acc.fileSize,
        uploadPartUrl: acc.uploadPartUrl,
        fileHash: acc.fileHash,
    });
}
test('testChunkedManualProcessById', async function testChunkedManualProcessById() {
    const fileSize = 20 * 1024 * 1024;
    const fileByteStream = generateByteStream(fileSize);
    const fileName = getUuid();
    const parentFolderId = '0';
    const uploadSession = await client.chunkedUploads.createFileUploadSession({
        fileName: fileName,
        fileSize: fileSize,
        folderId: parentFolderId,
    });
    const uploadSessionId = uploadSession.id;
    const partSize = uploadSession.partSize;
    const totalParts = uploadSession.totalParts;
    if (!(partSize * totalParts >= fileSize)) {
        throw new Error('Assertion failed');
    }
    if (!(uploadSession.numPartsProcessed == 0)) {
        throw new Error('Assertion failed');
    }
    const fileHash = new Hash({ algorithm: 'sha1' });
    const chunksIterator = iterateChunks(fileByteStream, partSize, fileSize);
    const results = await reduceIterator(chunksIterator, reducerById, new TestPartAccumulator({
        lastIndex: -1,
        parts: [],
        fileSize: fileSize,
        uploadSessionId: uploadSessionId,
        fileHash: fileHash,
    }));
    const parts = results.parts;
    const processedSessionParts = await client.chunkedUploads.getFileUploadSessionParts(uploadSessionId);
    if (!(processedSessionParts.totalCount == totalParts)) {
        throw new Error('Assertion failed');
    }
    const processedSession = await client.chunkedUploads.getFileUploadSessionById(uploadSessionId);
    if (!(processedSession.id == uploadSessionId)) {
        throw new Error('Assertion failed');
    }
    const sha1 = await fileHash.digestHash('base64');
    const digest = ''.concat('sha=', sha1);
    const committedSession = await client.chunkedUploads.createFileUploadSessionCommit(uploadSessionId, { parts: parts }, { digest: digest });
    if (!(committedSession.entries[0].name == fileName)) {
        throw new Error('Assertion failed');
    }
    await client.chunkedUploads.deleteFileUploadSessionById(uploadSessionId);
});
test('testChunkedManualProcessByUrl', async function testChunkedManualProcessByUrl() {
    const fileSize = 20 * 1024 * 1024;
    const fileByteStream = generateByteStream(fileSize);
    const fileName = getUuid();
    const parentFolderId = '0';
    const uploadSession = await client.chunkedUploads.createFileUploadSession({
        fileName: fileName,
        fileSize: fileSize,
        folderId: parentFolderId,
    });
    const uploadPartUrl = uploadSession.sessionEndpoints.uploadPart;
    const commitUrl = uploadSession.sessionEndpoints.commit;
    const listPartsUrl = uploadSession.sessionEndpoints.listParts;
    const statusUrl = uploadSession.sessionEndpoints.status;
    const abortUrl = uploadSession.sessionEndpoints.abort;
    const uploadSessionId = uploadSession.id;
    const partSize = uploadSession.partSize;
    const totalParts = uploadSession.totalParts;
    if (!(partSize * totalParts >= fileSize)) {
        throw new Error('Assertion failed');
    }
    if (!(uploadSession.numPartsProcessed == 0)) {
        throw new Error('Assertion failed');
    }
    const fileHash = new Hash({ algorithm: 'sha1' });
    const chunksIterator = iterateChunks(fileByteStream, partSize, fileSize);
    const results = await reduceIterator(chunksIterator, reducerByUrl, new TestPartAccumulator({
        lastIndex: -1,
        parts: [],
        fileSize: fileSize,
        uploadPartUrl: uploadPartUrl,
        fileHash: fileHash,
    }));
    const parts = results.parts;
    const processedSessionParts = await client.chunkedUploads.getFileUploadSessionPartsByUrl(listPartsUrl);
    if (!(processedSessionParts.totalCount == totalParts)) {
        throw new Error('Assertion failed');
    }
    const processedSession = await client.chunkedUploads.getFileUploadSessionByUrl(statusUrl);
    if (!(processedSession.id == uploadSessionId)) {
        throw new Error('Assertion failed');
    }
    const sha1 = await fileHash.digestHash('base64');
    const digest = ''.concat('sha=', sha1);
    const committedSession = await client.chunkedUploads.createFileUploadSessionCommitByUrl(commitUrl, { parts: parts }, {
        digest: digest,
    });
    if (!(committedSession.entries[0].name == fileName)) {
        throw new Error('Assertion failed');
    }
    await client.chunkedUploads.deleteFileUploadSessionByUrl(abortUrl);
});
test('testChunkedUploadConvenienceMethod', async function testChunkedUploadConvenienceMethod() {
    const fileSize = 20 * 1024 * 1024;
    const fileByteStream = generateByteStream(fileSize);
    const fileName = getUuid();
    const parentFolderId = '0';
    const uploadedFile = await client.chunkedUploads.uploadBigFile(fileByteStream, fileName, fileSize, parentFolderId);
    if (!(uploadedFile.name == fileName)) {
        throw new Error('Assertion failed');
    }
    if (!(uploadedFile.size == fileSize)) {
        throw new Error('Assertion failed');
    }
    if (!(uploadedFile.parent.id == parentFolderId)) {
        throw new Error('Assertion failed');
    }
    await client.files.deleteFileById(uploadedFile.id);
});
//# sourceMappingURL=chunkedUploads.generated.test.js.map