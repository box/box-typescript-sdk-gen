"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.upload = void 0;
const chunkedUploads_generated_js_1 = require("../managers/chunkedUploads.generated.js");
const chunkedUploads_generated_js_2 = require("../managers/chunkedUploads.generated.js");
const utils_js_1 = require("../utils.js");
const utils_js_2 = require("../utils.js");
const utils_js_3 = require("../utils.js");
const utils_js_4 = require("../utils.js");
const utils_js_5 = require("../utils.js");
const utils_js_6 = require("../utils.js");
const utils_js_7 = require("../utils.js");
const utils_js_8 = require("../utils.js");
const utils_js_9 = require("../utils.js");
const utils_js_10 = require("../utils.js");
const utils_js_11 = require("../utils.js");
const client_generated_js_1 = require("../client.generated.js");
const jwtAuth_js_1 = require("../jwtAuth.js");
const jwtAuth_js_2 = require("../jwtAuth.js");
function upload(client) {
    return __awaiter(this, void 0, void 0, function* () {
        const fileSize = 20 * 1024 * 1024;
        const fileName = (0, utils_js_6.getUuid)();
        const fileByteStream = (0, utils_js_7.generateByteStream)(fileSize);
        const folderId = "0";
        const uploadSession = yield client.chunkedUploads.createFileUploadSession({ fileName: fileName, fileSize: fileSize, folderId: folderId });
        const uploadSessionId = uploadSession.id;
        const partSize = uploadSession.partSize;
        const totalParts = uploadSession.totalParts;
        if (!(partSize * totalParts >= fileSize)) {
            throw "Assertion failed";
        }
        if (!(uploadSession.numPartsProcessed == 0)) {
            throw "Assertion failed";
        }
        const fileHash = (0, utils_js_2.createHash)("sha1");
        const chunksIterator = (0, utils_js_8.iterateChunks)(fileByteStream, partSize);
        function reducer(acc, chunk) {
            return __awaiter(this, void 0, void 0, function* () {
                const lastIndex = acc.lastIndex;
                const parts = acc.parts;
                const byteStreamClones = yield (0, utils_js_1.cloneByteStream)(chunk);
                const uploadedChunk = byteStreamClones[0];
                const hashChunk = byteStreamClones[1];
                const chunkBuffer = yield (0, utils_js_9.readByteStream)(hashChunk);
                const hash = (0, utils_js_2.createHash)("sha1");
                hash.updateHash(chunkBuffer);
                const sha1 = hash.digestHash("base64");
                const digest = "".concat("sha=", sha1);
                const chunkSize = chunkBuffer.length;
                const bytesStart = lastIndex + 1;
                const bytesEnd = lastIndex + chunkSize;
                const contentRange = "".concat("bytes ", bytesStart, "-", bytesEnd, "/", fileSize);
                const uploadedPart = yield client.chunkedUploads.uploadFilePart(uploadSessionId, uploadedChunk, new chunkedUploads_generated_js_1.UploadFilePartHeadersArg({ digest: digest, contentRange: contentRange }));
                const part = uploadedPart.part;
                const partSha1 = (0, utils_js_4.hexToBase64)(part.sha1);
                if (!(partSha1 == sha1)) {
                    throw "Assertion failed";
                }
                if (!(part.size == chunkSize)) {
                    throw "Assertion failed";
                }
                if (!(part.offset == bytesStart)) {
                    throw "Assertion failed";
                }
                fileHash.updateHash(chunkBuffer);
                return { lastIndex: bytesEnd, parts: (0, utils_js_11.listConcat)(parts, [part]) };
            });
        }
        const results = yield (0, utils_js_10.reduceIterator)(chunksIterator, reducer, { lastIndex: -1, parts: [] });
        const parts = results.parts;
        const processedSessionParts = yield client.chunkedUploads.getFileUploadSessionParts(uploadSessionId);
        if (!(processedSessionParts.totalCount == totalParts)) {
            throw "Assertion failed";
        }
        const processedSession = yield client.chunkedUploads.getFileUploadSessionById(uploadSessionId);
        if (!(processedSession.numPartsProcessed == totalParts)) {
            throw "Assertion failed";
        }
        const sha1 = fileHash.digestHash("base64");
        const digest = "".concat("sha=", sha1);
        const commmitedSession = yield client.chunkedUploads.createFileUploadSessionCommit(uploadSessionId, { parts: parts }, new chunkedUploads_generated_js_2.CreateFileUploadSessionCommitHeadersArg({ digest: digest }));
        if (!(commmitedSession.totalCount == 1)) {
            throw "Assertion failed";
        }
        const uploadedFile = commmitedSession.entries[0];
        if (!(uploadedFile.name == fileName)) {
            throw "Assertion failed";
        }
        if (!(uploadedFile.size == fileSize)) {
            throw "Assertion failed";
        }
        if (!(uploadedFile.parent.id == folderId)) {
            throw "Assertion failed";
        }
    });
}
exports.upload = upload;
test("chunkedUploads", function chunkedUploads() {
    return __awaiter(this, void 0, void 0, function* () {
        const jwtConfig = jwtAuth_js_2.JwtConfig.fromConfigJsonString((0, utils_js_3.decodeBase64)((0, utils_js_5.getEnvVar)("JWT_CONFIG_BASE_64")));
        const auth = new jwtAuth_js_1.JwtAuth({ config: jwtConfig });
        const client = new client_generated_js_1.Client({ auth: auth });
        return yield upload(client);
    });
});
//# sourceMappingURL=chunkedUploads.generated.test.js.map